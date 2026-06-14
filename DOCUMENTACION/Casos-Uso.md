# Catálogo de Casos de Uso — Sistema IURIS

Este documento describe en detalle los casos de uso del sistema IURIS, organizados por actor. Cada caso de uso incluye código, actor principal, descripción, precondiciones, flujo principal, flujos alternos y postcondiciones. Los diagramas correspondientes se encuentran en `MODELO_UML/<ACTOR>/Casos-Uso/`.

---

## Actor: Cliente del Bufete

### CU-01 Registrarse

* **Actor principal:** Cliente
* **Descripción:** El cliente crea una cuenta en el sistema proporcionando sus datos personales y de contacto.
* **Precondición:** El correo electrónico no debe estar registrado previamente (RN-06).
* **Flujo principal:**
    1. El usuario accede al formulario de registro.
    2. Ingresa nombres, apellidos, correo, contraseña y datos de contacto.
    3. El sistema valida que el correo sea único.
    4. El sistema crea el usuario con rol "Cliente" en MS Usuarios.
    5. MS Autenticación registra las credenciales (contraseña con hash BCrypt — RN-02).
* **Flujo alterno:** Si el correo ya existe, el sistema muestra un mensaje de error y solicita otro correo.
* **Postcondición:** El usuario queda registrado y puede iniciar sesión.

### CU-02 Iniciar Sesión

* **Actor principal:** Cliente (aplica también a todos los demás roles)
* **Descripción:** El usuario se autentica con correo y contraseña para obtener un token JWT.
* **Precondición:** El usuario debe estar registrado y activo (no bloqueado).
* **Flujo principal:**
    1. El usuario ingresa correo y contraseña.
    2. MS Autenticación valida las credenciales mediante `AuthController` → `AuthService` → `PasswordEncoder`.
    3. `JWTProvider` genera un token JWT firmado (RS256).
    4. El sistema retorna el token al cliente.
* **Flujo alterno:** Credenciales incorrectas → el sistema retorna error 401 y no genera token.
* **Postcondición:** El usuario obtiene un token de sesión válido para consumir el resto de microservicios vía API Gateway.

### CU-03 Recuperar Contraseña

* **Actor principal:** Cliente
* **Descripción:** El usuario solicita el restablecimiento de su contraseña mediante correo electrónico.
* **Flujo principal:**
    1. El usuario solicita recuperación indicando su correo.
    2. MS Autenticación genera un enlace/token temporal de recuperación.
    3. MS Comunicación envía el correo con el enlace.
    4. El usuario define una nueva contraseña, que se almacena con hash BCrypt.
* **Postcondición:** La contraseña queda actualizada y el usuario puede iniciar sesión con la nueva clave.

### CU-04 Gestionar Perfil

* **Actor principal:** Cliente
* **Descripción:** El cliente consulta y actualiza sus datos personales y jurídicos.
* **Microservicio:** MS Usuarios (`UsuarioController`, `UsuarioService`).
* **Postcondición:** Los datos del perfil quedan actualizados en `DB Usuarios`.

### CU-05 Solicitar Consulta Legal

* **Actor principal:** Cliente
* **Descripción:** El cliente registra una solicitud inicial de asesoría legal, que podrá derivar en la apertura de un caso.
* **Microservicio:** MS Casos Legales (`CasoController`).
* **Postcondición:** Se genera una solicitud que la Secretaria o el Administrador pueden convertir en un caso (CU-CL-01).

### CU-06 Agendar Cita

* **Actor principal:** Cliente
* **Descripción:** El cliente programa una cita o audiencia con su abogado.
* **Precondición:** La cita debe programarse con un mínimo de 24 horas de anticipación (RN-15).
* **Flujo principal:**
    1. El cliente selecciona fecha/hora deseada.
    2. `AgendaService` valida el plazo mínimo de 24h.
    3. `DisponibilidadValidator` verifica que el abogado no tenga conflicto de horario (RN-16).
    4. La cita se registra en `DB Agenda`.
    5. `NotificacionAgendaPublisher` emite un evento para notificar al abogado.
* **Flujo alterno:** Si no hay disponibilidad, el sistema sugiere horarios alternativos.
* **Postcondición:** La cita queda registrada y se programan recordatorios automáticos (48h y 24h — RN-17).

### CU-07 Reprogramar Cita

* **Actor principal:** Cliente
* **Descripción:** El cliente modifica la fecha/hora de una cita existente, aplicando las mismas validaciones que CU-06.

### CU-08 Cancelar Cita

* **Actor principal:** Cliente
* **Descripción:** El cliente cancela una cita previamente agendada. El sistema notifica al abogado mediante `NotificacionAgendaPublisher`.

### CU-09 Subir Documentos

* **Actor principal:** Cliente
* **Descripción:** El cliente carga documentos o evidencias asociadas a su caso.
* **Precondición:** El archivo debe cumplir el formato (PDF, DOCX, JPG, PNG, MP4) y tamaño permitido — validado por `ArchivoValidator` (RN-18).
* **Flujo principal:**
    1. El cliente selecciona el archivo y el caso asociado.
    2. `ArchivoValidator` valida formato y tamaño.
    3. `CloudinaryAdapter` almacena el archivo en Cloudinary.
    4. `DocumentoRepository` guarda los metadatos (nombre, tipo, URL, caso, estado).
    5. `AuditoriaAccesoService` registra la operación (RN-20).
* **Flujo alterno:** Si el formato/tamaño no es válido, el sistema rechaza la carga y muestra un mensaje de error.
* **Postcondición:** El documento queda disponible en el expediente del caso.

### CU-10 Descargar Documentos

* **Actor principal:** Cliente
* **Descripción:** El cliente descarga un documento de su caso. La operación se registra en el log de auditoría (RN-20).

### CU-11 Realizar Pago

* **Actor principal:** Cliente
* **Descripción:** El cliente realiza el pago de honorarios u otros conceptos asociados a su caso y obtiene un comprobante.

### CU-12 Ver Estado del Caso

* **Actor principal:** Cliente
* **Descripción:** El cliente consulta en tiempo real el estado actual de su expediente (Activo, En Audiencia, En Espera, Cerrado, Archivado), gestionado por `EstadoCasoMachine`.

### CU-13 Ver Historial de Casos

* **Actor principal:** Cliente
* **Descripción:** El cliente consulta el historial completo de actuaciones procesales de sus casos (`ActuacionProcesalService`).

### CU-14 Ver Historial de Pagos

* **Actor principal:** Cliente
* **Descripción:** El cliente consulta los pagos realizados y sus comprobantes.

### CU-15 Recibir Notificaciones

* **Actor principal:** Cliente
* **Descripción:** El cliente recibe notificaciones push (FCM), correo electrónico o alertas in-app generadas por `NotificacionService` y `EventConsumer` ante cambios de estado de su caso, nuevas audiencias o mensajes.

### CU-16 Calificar Servicio

* **Actor principal:** Cliente
* **Descripción:** Al finalizar la atención, el cliente califica la atención recibida del bufete/abogado.

### CU-17 Comunicarse por Chat con Abogado

* **Actor principal:** Cliente
* **Descripción:** El cliente envía y recibe mensajes en tiempo real con su abogado asignado, mediante `ChatController` (WebSocket/STOMP) y `MensajeService`.

### CU-18 Solicitar Videollamada

* **Actor principal:** Cliente
* **Descripción:** El cliente solicita una videollamada con su abogado. `VideollamadaService` gestiona el ciclo: creación → confirmación por el abogado → generación de sala → notificación.

---

## Actor: Abogado Principal

### CU-AB-01 Iniciar Sesión

Igual que CU-02, aplicado al rol Abogado Principal.

### CU-AB-02 Gestionar Perfil Profesional

* **Descripción:** El abogado actualiza sus datos profesionales y especialidad legal registrada (utilizada por `AsignacionAbogadoService` para asignar casos — RN-10).

### CU-AB-03 Ver Casos Asignados

* **Descripción:** El abogado consulta la lista de casos activos asignados. El sistema valida que no supere el límite de 20 casos activos (RN-11).

### CU-AB-04 Crear Expediente

* **Actor principal:** Abogado Principal (también puede iniciarlo la Secretaria o el Administrador a partir de CU-05).
* **Descripción:** Se abre un nuevo caso legal, asignándole un tipo de caso/especialidad (RN-13) y un estado inicial "Activo" en `EstadoCasoMachine`.
* **Postcondición:** Se crea el registro en `DB Casos` y se emite un evento `CasoCreado`/`CasoActualizado` (RN-14).

### CU-AB-05 Actualizar Estado de Caso

* **Descripción:** El abogado cambia el estado del caso siguiendo las transiciones válidas: Activo → En Audiencia → En Espera → Cerrado → Archivado (RN-09). Cada cambio emite un evento mediante `NotificacionCasoPublisher`.

### CU-AB-06 Registrar Actuación Procesal

* **Descripción:** El abogado registra una nueva actuación procesal (fecha, tipo, responsable) mediante `ActuacionProcesalService` (RN-12).

### CU-AB-07 Revisar Documentos

* **Descripción:** El abogado revisa los documentos cargados en el expediente del caso.

### CU-AB-08 Subir Documentos Legales

Igual que CU-09, ejecutado por el abogado.

### CU-AB-09 Gestionar Citas y Audiencias

* **Descripción:** El abogado consulta, crea o reprograma audiencias relacionadas con sus casos, sujeto a la validación de `DisponibilidadValidator` (RN-16).

### CU-AB-10 Generar Reportes de Casos

* **Descripción:** El abogado solicita un reporte de sus propios casos (estado, carga, tiempos) al MS Reportes.

### CU-AB-11 Registrar Resolución

* **Descripción:** El abogado registra la resolución final del caso. Es requisito obligatorio antes de poder cerrar el caso (RN-09).

### CU-AB-12 Cerrar Caso

* **Precondición:** Debe existir una resolución registrada (CU-AB-11).
* **Descripción:** El abogado cambia el estado del caso a "Cerrado" mediante `EstadoCasoMachine`, lo que dispara una notificación al cliente.

### CU-AB-13 Comunicarse con el Cliente (Chat / Videollamada)

* **Descripción:** El abogado responde mensajes de chat y atiende videollamadas solicitadas por el cliente.

---

## Actor: Abogado Asistente

### CU-AA-01 Iniciar Sesión

Igual que CU-02.

### CU-AA-02 Gestionar Perfil

Consulta y actualización de datos propios, con permisos restringidos (`RolManager`).

### CU-AA-03 Ver Casos de Apoyo

Consulta de los casos en los que el asistente colabora, según asignación del abogado principal.

### CU-AA-04 Registrar Actuación Procesal de Apoyo

Registro de actuaciones procesales con los permisos otorgados, sin capacidad de cerrar el caso.

### CU-AA-05 Subir Documentos Legales

Igual que CU-09, ejecutado por el asistente sobre los casos en los que colabora.

### CU-AA-06 Consultar Agenda de Audiencias

Consulta de la agenda del abogado principal para coordinar tareas de apoyo.

### CU-AA-07 Recibir Notificaciones

Recepción de notificaciones sobre los casos en los que colabora.

---

## Actor: Secretaria / Asistente Administrativo

### CU-SC-01 Iniciar Sesión

Igual que CU-02.

### CU-SC-02 Registrar Nuevo Cliente

* **Descripción:** La secretaria registra un nuevo cliente en `MS Usuarios` (rol "Cliente"), atendiendo la primera solicitud de contacto.

### CU-SC-03 Crear Audiencia / Cita

Igual que CU-06, ejecutado por la secretaria en nombre del cliente o del abogado.

### CU-SC-04 Modificar Audiencia / Cita

Igual que CU-07.

### CU-SC-05 Cancelar Audiencia / Cita

Igual que CU-08.

### CU-SC-06 Validar Disponibilidad de Abogado

* **Descripción:** Antes de programar una cita, la secretaria consulta `DisponibilidadValidator` para verificar que el abogado no tenga conflicto de horario (RN-16).

### CU-SC-07 Consultar Estado de Caso

Consulta de solo lectura del estado de los casos, para responder a clientes.

### CU-SC-08 Brindar Atención Inicial al Cliente

Registro de la primera interacción con el cliente y derivación de la consulta hacia CU-05 (Solicitar Consulta Legal).

---

## Actor: Administrador del Sistema

### CU-AD-01 Gestionar Usuarios

CRUD general de usuarios (`UsuarioController`).

### CU-AD-02 Crear Usuario

Alta de un nuevo usuario con un rol específico.

### CU-AD-03 Editar Usuario

Actualización de datos y rol de un usuario existente.

### CU-AD-04 Eliminar Usuario

Eliminación o desactivación de un usuario (un usuario bloqueado no puede iniciar sesión — regla heredada de seguridad).

### CU-AD-05 Gestionar Abogados

Administración de perfiles de abogados (especialidad, sede asignada).

### CU-AD-06 Gestionar Clientes

Administración de cuentas de clientes.

### CU-AD-07 Gestionar Roles

* **Descripción:** El administrador crea, edita o elimina roles del sistema mediante `RolManager`. Solo el Administrador puede ejecutar este caso de uso (RN-05).

### CU-AD-08 Gestionar Permisos

Asignación de permisos a cada rol.

### CU-AD-09 Configurar Sistema

Configuración de parámetros generales (notificaciones, plazos, formatos permitidos, etc.).

### CU-AD-10 Gestionar Categorías / Especialidades Legales

* **Descripción:** El administrador crea o edita tipos de caso (especialidades legales) de forma dinámica (Civil, Penal, Familiar, Laboral, Tributario, etc.), sin requerir cambios de código (RN-13).

### CU-AD-11 Ver Auditoría de Documentos

Consulta del log de auditoría de acceso a documentos (`AuditoriaAccesoService`).

### CU-AD-12 Generar Estadísticas

Solicitud de estadísticas administrativas al MS Reportes.

### CU-AD-13 Generar Reportes Administrativos

Solicitud de reportes administrativos (PDF/Excel).

### CU-AD-14 Gestionar Sedes

* **Descripción:** El administrador registra y configura nuevas sedes del bufete (`SedeValidator`), soportando la arquitectura multisede sin rediseño (RN-07, RN-08).

---

## Actor: Gerente / Socio

### CU-GE-01 Iniciar Sesión

Igual que CU-02.

### CU-GE-02 Consultar Dashboard Ejecutivo (KPIs)

* **Descripción:** El gerente consulta `DashboardService` para visualizar KPIs en tiempo real (casos activos, tasa de cumplimiento, carga de abogados).

### CU-GE-03 Solicitar Reporte de Casos

Solicitud de reporte consolidado de casos al MS Reportes.

### CU-GE-04 Solicitar Reporte Financiero

Solicitud de reporte financiero (pagos, honorarios).

### CU-GE-05 Solicitar Reporte de Productividad de Abogados

Reporte de carga y productividad por abogado/sede.

### CU-GE-06 Solicitar Reporte Multisede

Reporte consolidado entre todas las sedes del bufete.

### CU-GE-07 Exportar Reporte (PDF/Excel)

Exportación de cualquiera de los reportes anteriores mediante `ExportadorPDF` o `ExportadorExcel`.

### CU-GE-08 Recibir Notificaciones

Recepción de notificaciones relevantes sobre la operación general del bufete.
