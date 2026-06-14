# Sistema IURIS — Intelligent Unified Resolution and Integration System

## Datos del Proyecto

* **Startup:** LexTech Solutions S.A.C.
* **Producto:** IURIS — Intelligent Unified Resolution and Integration System
* **Título del proyecto:** Sistema Web de Gestión y Seguimiento de Casos Legales
* **Grupo:** 7
* **Curso:** Análisis y Diseño de Sistemas — Universidad Peruana Unión (UPeU), Juliaca

## Descripción General

IURIS es el sistema integral de gestión para un bufete de abogados que presta asesoría, representación y defensa jurídica a personas naturales y jurídicas en las ramas de Derecho Civil, Penal, Familiar y Laboral, con capacidad de incorporar nuevas especialidades legales de forma dinámica.

El bufete opera actualmente con una sede principal y contempla la apertura de sedes adicionales en el mediano plazo. Las deficiencias actuales que el sistema busca resolver son:

* Expedientes gestionados de forma manual y dispersa, sin repositorio centralizado.
* Asignación informal de abogados a casos, sin considerar especialidad ni carga de trabajo.
* Coordinación de audiencias y reuniones mediante agendas físicas u ofimática no integrada.
* Comunicación lenta e informal con los clientes (llamadas y correos no centralizados).
* Ausencia de reportes administrativos para la toma de decisiones gerenciales.

## Objetivo

Digitalizar y centralizar los procesos operativos, administrativos y de atención al cliente del bufete, garantizando trazabilidad, seguridad de la información y escalabilidad organizacional (incluyendo el crecimiento hacia múltiples sedes).

## Funcionalidades Principales

* Registrar, organizar y gestionar clientes y sus datos personales y jurídicos.
* Abrir, dar seguimiento y cerrar casos legales con trazabilidad completa de actuaciones procesales.
* Asignar abogados a casos según especialidad registrada y carga de trabajo actual.
* Gestionar audiencias, citas y reuniones con notificaciones automáticas.
* Centralizar la carga y consulta de documentos y evidencias legales en un repositorio digital seguro.
* Proveer un canal de comunicación directa (chat y videollamadas) entre cliente y bufete.
* Generar reportes administrativos y financieros para la toma de decisiones gerenciales.
* Controlar el acceso al sistema mediante roles y permisos diferenciados por usuario.
* Soportar la expansión del bufete hacia múltiples sedes sin rediseño arquitectónico.

## Canales de Acceso

* **Aplicación Web (Angular 17+):** canal principal para el personal interno del bufete (abogados, secretarias, administradores y gerentes), usado para gestión completa de casos, agenda, documentos y chat.
* **Aplicación Móvil (Flutter):** canal simplificado para clientes y gerentes/directivos. Permite consultar casos, leer mensajes, solicitar citas y recibir notificaciones push.

Ambos canales consumen exactamente los mismos servicios a través del API Gateway, garantizando coherencia de datos en toda la plataforma.

## Actores Principales

* Administrador del Sistema
* Gerente / Socio del Bufete
* Abogado Principal
* Abogado Asistente
* Secretaria / Asistente Administrativo
* Cliente del Bufete

## Sistemas Externos

* **Cloudinary** — almacenamiento y gestión de documentos, evidencias e imágenes en la nube.
* **Servicio de Videollamadas (WebRTC / Jitsi)** — comunicación audiovisual entre clientes y abogados.

## Tecnologías Propuestas

* **Frontend Web:** Angular 17+ (SPA)
* **Frontend Móvil:** Flutter (Dart)
* **API Gateway:** Spring Cloud Gateway (enrutamiento, validación JWT, CORS, rate limiting)
* **Backend:** Microservicios Spring Boot
* **Base de Datos:** PostgreSQL 16 (una instancia por microservicio — patrón Database per Service)
* **Almacenamiento de archivos:** Cloudinary
* **Comunicación en tiempo real:** WebSockets (protocolo STOMP)
* **Comunicación entre microservicios:** REST síncrono (Feign Client) y eventos asíncronos (Event Publisher/Consumer)
* **Seguridad:** JWT firmado con RS256, BCrypt para contraseñas
* **Contratos de API:** OpenAPI 3.0
* **Resiliencia:** Resilience4j (circuit breaker)
* **Tareas programadas:** Quartz Scheduler
* **Infraestructura:** Docker + Kubernetes (AWS / GCP)
* **CI/CD:** GitHub Actions
* **Observabilidad:** ELK Stack, Prometheus, Grafana
* **Diagramación:** PlantUML y C4 Model
* **Control de versiones:** GitHub

## Estilo Arquitectónico

**Arquitectura de Microservicios.** Cada dominio funcional del bufete (autenticación, usuarios, casos, agenda, documentos, comunicación, reportes) está encapsulado en un servicio independiente, con su propia base de datos, su propia lógica de negocio y su propia API REST. Todos los contenedores se comunican a través de un API Gateway que actúa como punto de entrada único al sistema.
