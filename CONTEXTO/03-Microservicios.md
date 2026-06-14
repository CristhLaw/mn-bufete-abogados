# Microservicios del Sistema IURIS

El sistema IURIS está compuesto por **7 microservicios** desarrollados en Spring Boot, cada uno con su propia base de datos PostgreSQL (patrón Database per Service), aplicando un patrón en capas interno: **Controller → Service → Repository**. Todos los microservicios son consumidos a través de un **API Gateway** (Spring Cloud Gateway), que valida tokens JWT, aplica CORS y rate limiting.

---

## 1. MS Autenticación

**Responsabilidad:** Puerta de entrada al sistema. Verifica la identidad del usuario y emite tokens de acceso (JWT) usados por todos los demás servicios.

**Datos propios (límite):** Credenciales, tokens JWT, sesiones activas.

**No es su responsabilidad:** Gestionar datos de perfil de usuario ni permisos (eso corresponde a MS Usuarios).

**Endpoints:**

* POST /auth/login
* POST /auth/refresh
* POST /auth/logout

**Componentes:**

| Componente | Patrón | Responsabilidad |
|---|---|---|
| AuthController | REST Controller | Expone /login y /refresh-token; recibe credenciales y retorna el token JWT. |
| AuthService | Service | Orquesta la validación de credenciales y delega la generación del token al JWTProvider. |
| JWTProvider | Componente utilitario | Genera y valida tokens JWT firmados con RS256, y extrae los claims. |
| PasswordEncoder | Componente de seguridad | Aplica BCrypt para comparar la contraseña ingresada con el hash almacenado. |
| AuthRepository | Repository (JPA) | Consulta la base de datos de credenciales (existencia del usuario, hash de contraseña). |
| DB Auth (PostgreSQL) | Base de datos | Almacena credenciales (correo, hash de contraseña, estado, fecha de último acceso). |

---

## 2. MS Usuarios

**Responsabilidad:** Administra el ciclo de vida de los usuarios (creación, modificación, suspensión) y gestiona roles, permisos y asignación de sede.

**Datos propios (límite):** Datos de perfil, roles, permisos y asignación de sede.

**No es su responsabilidad:** Autenticar usuarios ni gestionar sus casos.

**Endpoints:**

* GET /users
* POST /users
* PUT /users/{id}
* DELETE /users/{id}

**Componentes:**

| Componente | Patrón | Responsabilidad |
|---|---|---|
| UsuarioController | REST Controller | Expone endpoints CRUD: creación, consulta, actualización y suspensión de usuarios. |
| UsuarioService | Service | Validación de datos y reglas de negocio sobre usuarios; coordina con RolManager. |
| RolManager | Componente | Gestiona asignación/revocación de roles (Administrador, Gerente, Abogado Principal, Asistente, Secretaria, Cliente) y sus permisos. |
| SedeValidator | Componente | Valida que el usuario sea asignado a una sede existente y activa (soporte multisede). |
| UsuarioRepository | Repository (JPA) | Persistencia de los datos de usuario. |
| DB Usuarios (PostgreSQL) | Base de datos | Usuarios, roles, permisos y asignaciones de sede. |

---

## 3. MS Casos Legales

**Responsabilidad:** Componente de mayor complejidad funcional. Encapsula todo el expediente jurídico: apertura, asignación de abogados, actuaciones procesales, transiciones de estado y cierre del caso.

**Datos propios (límite):** Expedientes, actuaciones procesales, estados y asignaciones de abogados.

**No es su responsabilidad:** Gestionar documentos ni la agenda de audiencias.

**Endpoints:**

* GET /cases
* POST /cases
* PUT /cases/{id}

**Componentes:**

| Componente | Patrón | Responsabilidad |
|---|---|---|
| CasoController | REST Controller | Apertura, consulta, actualización de estado y cierre de casos legales. |
| CasoService | Service | Orquesta validaciones, transiciones de estado y coordinación entre componentes. |
| AsignacionAbogadoService | Service especializado | Asigna abogados según especialidad y carga de trabajo; aplica el límite de 20 casos activos por abogado (RN-11). |
| EstadoCasoMachine | State Machine | Gestiona transiciones válidas de estado: Activo, En Audiencia, En Espera, Cerrado, Archivado. |
| ActuacionProcesalService | Service | Registra y consulta actuaciones procesales (fecha, tipo, usuario responsable). |
| NotificacionCasoPublisher | Event Publisher | Emite eventos de cambio de estado de caso para que MS Comunicación notifique al cliente. |
| CasoRepository | Repository (JPA) | Persistencia del expediente y sus actuaciones. |
| DB Casos (PostgreSQL) | Base de datos | Expedientes, actuaciones, asignaciones e historial de estados. |

---

## 4. MS Agenda y Audiencias

**Responsabilidad:** Gestiona el calendario operativo del bufete: audiencias judiciales, reuniones internas, validación de disponibilidad y recordatorios automáticos.

**Datos propios (límite):** Audiencias, citas, calendario y recordatorios.

**No es su responsabilidad:** Modificar estados de casos ni gestionar documentos.

**Endpoints:**

* POST /appointments
* GET /appointments

**Componentes:**

| Componente | Patrón | Responsabilidad |
|---|---|---|
| AgendaController | REST Controller | Crear, consultar, modificar y cancelar audiencias y reuniones. |
| AgendaService | Service | Validación de plazos mínimos (24h), resolución de conflictos y coordinación de notificaciones. |
| DisponibilidadValidator | Componente | Verifica que el abogado convocado no tenga otra audiencia en el mismo rango horario. |
| RecordatorioScheduler | Scheduler (Quartz) | Programa recordatorios automáticos 48h y 24h antes de cada audiencia. |
| NotificacionAgendaPublisher | Event Publisher | Emite eventos de agenda para que MS Comunicación envíe notificaciones push y correos. |
| AgendaRepository | Repository (JPA) | Persistencia de audiencias, reuniones y notificaciones enviadas. |
| DB Agenda (PostgreSQL) | Base de datos | Calendario del bufete con audiencias, citas y reuniones programadas. |

---

## 5. MS Documentos

**Responsabilidad:** Gestiona el repositorio digital de archivos del bufete. Implementa controles estrictos de acceso, auditoría de operaciones y validación de tipos y tamaños de archivo. Delega el almacenamiento físico a Cloudinary mediante URLs firmadas.

**Datos propios (límite):** Metadatos de archivos, URLs de Cloudinary, log de acceso.

**No es su responsabilidad:** Gestionar el contenido legal de los documentos ni la agenda.

**Endpoints:**

* POST /documents
* GET /documents

**Componentes:**

| Componente | Patrón | Responsabilidad |
|---|---|---|
| DocumentoController | REST Controller | Carga, descarga, listado y archivado de documentos por expediente. |
| DocumentoService | Service | Orquesta validación de tipo/tamaño, coordinación con Cloudinary y registro de auditoría. |
| CloudinaryAdapter | Adapter | Abstrae la comunicación con Cloudinary (carga, descarga, eliminación lógica). Implementa la interfaz `IAlmacenamientoAdapter`. |
| ArchivoValidator | Componente | Valida formato (PDF, DOCX, JPG, PNG, MP4) y tamaño del archivo antes de la carga (RN-18). |
| AuditoriaAccesoService | Service de auditoría | Registra quién subió, descargó o intentó acceder a cada documento, con marca de tiempo y resultado. |
| DocumentoRepository | Repository (JPA) | Persistencia de metadatos: nombre, tipo, URL Cloudinary, caso vinculado, estado. |
| DB Documentos (PostgreSQL) | Base de datos | Metadatos de documentos y log de auditoría de acceso. |

---

## 6. MS Comunicación

**Responsabilidad:** Centraliza los canales de interacción entre clientes y el bufete. Implementa chat en tiempo real mediante WebSockets (protocolo STOMP), gestiona el historial de conversaciones y coordina llamadas/videollamadas.

**Datos propios (límite):** Mensajes de chat, solicitudes de videollamada, notificaciones enviadas.

**No es su responsabilidad:** Almacenar datos de casos ni documentos.

**Responsabilidades adicionales (Notification Service):**

* Correos electrónicos
* Notificaciones push (FCM) y alertas in-app

**Componentes:**

| Componente | Patrón | Responsabilidad |
|---|---|---|
| ChatController | WebSocket Controller | Gestiona la conexión WebSocket y el enrutamiento de mensajes de chat por caso. |
| MensajeService | Service | Persiste mensajes del chat, gestiona estados de lectura e historial de conversaciones. |
| NotificacionService | Service | Envía notificaciones push (FCM), correos y alertas in-app ante eventos del sistema. |
| VideollamadaService | Service | Gestiona el ciclo de vida de solicitudes de videollamada: creación, confirmación, generación de sala y notificación. |
| EventConsumer | Event Listener | Consume eventos de otros microservicios (cambio de estado de caso, nueva audiencia) para generar notificaciones automáticas. |
| ComunicacionRepository | Repository (JPA) | Persistencia de mensajes, solicitudes de videollamada e historial de notificaciones. |
| DB Comunicación (PostgreSQL) | Base de datos | Mensajes de chat, solicitudes de videollamada y notificaciones. |

---

## 7. MS Reportes

**Responsabilidad:** Componente de inteligencia de negocio. Consolida datos operativos de los demás microservicios para generar reportes ejecutivos, dashboards en tiempo real e indicadores de desempeño (KPIs).

**Datos propios (límite):** Reportes generados, snapshots de KPIs históricos.

**No es su responsabilidad:** Generar datos originales; solo consolida datos de otros servicios mediante sus APIs (RN-24, RN-25).

**Componentes:**

| Componente | Patrón | Responsabilidad |
|---|---|---|
| ReporteController | REST Controller | Solicita reportes por tipo: casos, financiero, productividad de abogados y multisede. |
| ReporteService | Service | Orquesta la recolección de datos de otros microservicios y aplica lógica de agregación. |
| DashboardService | Service | Calcula y actualiza KPIs en tiempo real (casos activos, tasa de cumplimiento, carga de abogados). |
| ExportadorPDF | Componente utilitario | Genera reportes en formato PDF con diseño profesional del bufete. |
| ExportadorExcel | Componente utilitario | Genera reportes en formato Excel para análisis administrativo. |
| DataAggregatorClient | Feign Client | Cliente HTTP declarativo para consultar datos de otros microservicios (casos, agenda, usuarios). |
| DB Reportes (PostgreSQL) | Base de datos | Reportes generados previamente y snapshots de KPIs históricos. |

---

## Comunicación entre Microservicios

* **Síncrona:** APIs REST mediante Feign Client (Spring Cloud), bajo contratos OpenAPI 3.0.
* **Asíncrona:** patrón Event Publisher/Consumer para operaciones que no requieren respuesta inmediata (p. ej. notificaciones).
* El **MS Reportes** es el único servicio autorizado a consultar datos de múltiples dominios, siempre mediante las APIs públicas de cada servicio.
* El **MS Comunicación** consume eventos de cambio de estado de casos (MS Casos Legales) y de nuevas audiencias (MS Agenda) para generar alertas automáticas.
* Todos los microservicios implementan manejo de excepciones centralizado mediante `@ControllerAdvice` de Spring.

## Contenedores Adicionales (No microservicios de negocio)

| # | Contenedor | Tecnología | Descripción |
|---|---|---|---|
| 1 | Aplicación Web (Frontend) | Angular 17+ | SPA de uso interno para abogados, secretarias y administradores. |
| 2 | Aplicación Móvil | Flutter (Dart) | App multiplataforma para clientes y gerentes. |
| 3 | API Gateway | Spring Cloud Gateway | Punto de entrada único; enruta solicitudes, valida JWT y aplica rate limiting. |
| 11 | Base de datos por MS | PostgreSQL 16 | Cada microservicio posee su propia base de datos independiente. |
