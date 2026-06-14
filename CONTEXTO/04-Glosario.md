# Glosario — Sistema IURIS

## IURIS

Intelligent Unified Resolution and Integration System. Sistema integral de gestión para bufetes de abogados desarrollado por LexTech Solutions S.A.C.

## LexTech Solutions S.A.C.

Startup desarrolladora del sistema IURIS.

## Cliente del Bufete

Usuario externo que contrata servicios legales y consulta el estado de sus casos a través de la plataforma.

## Abogado Principal

Profesional legal responsable de gestionar los casos asignados, registrar actuaciones procesales y comunicarse con los clientes.

## Abogado Asistente

Profesional legal que apoya al abogado principal en la elaboración de documentos y el registro de actuaciones.

## Secretaria / Asistente Administrativo

Personal encargado de registrar clientes, coordinar la agenda del bufete y brindar atención inicial.

## Administrador del Sistema

Superusuario encargado de la configuración global, gestión de usuarios, roles, permisos y sedes.

## Gerente / Socio

Directivo del bufete que supervisa KPIs y toma decisiones estratégicas a partir de los reportes generados.

## Caso Legal (Expediente)

Proceso jurídico asociado a un cliente, con un ciclo de vida de estados (Activo, En Audiencia, En Espera, Cerrado, Archivado) y un conjunto de actuaciones procesales.

## Actuación Procesal

Registro de una acción realizada dentro de un caso legal, con fecha, tipo y usuario responsable.

## Tipo de Caso / Especialidad Legal

Categoría configurable del caso legal (Civil, Penal, Familiar, Laboral, y futuras especialidades como Tributario), definida dinámicamente por el Administrador.

## Audiencia

Acto procesal judicial programado para un caso, gestionado por el MS Agenda y Audiencias, con validación de disponibilidad y recordatorios automáticos.

## Cita / Reunión

Encuentro programado entre cliente y abogado (o personal del bufete), sujeto a un plazo mínimo de 24 horas de anticipación.

## Sede

Unidad organizacional/física del bufete. La arquitectura del sistema soporta múltiples sedes mediante configuración, sin requerir rediseño.

## Microservicio

Servicio independiente, desplegable de forma autónoma, propietario exclusivo de su dominio de datos (patrón Database per Service).

## API Gateway

Punto de entrada único al sistema (Spring Cloud Gateway). Enruta solicitudes, valida tokens JWT y aplica políticas de CORS y rate limiting.

## JWT (JSON Web Token)

Token firmado (RS256) utilizado para autenticar usuarios y autorizar solicitudes a los microservicios.

## Bounded Context (Dominio Acotado)

Principio de Domain-Driven Design según el cual cada microservicio es propietario único y autorizado de su dominio de datos.

## Database per Service

Patrón arquitectónico en el que cada microservicio posee su propia base de datos independiente, sin acceso compartido.

## Patrón Saga

Patrón utilizado para gestionar operaciones distribuidas que involucran a múltiples microservicios, garantizando consistencia eventual (p. ej. apertura de un nuevo caso).

## Event Publisher / Consumer

Mecanismo de comunicación asíncrona entre microservicios mediante la publicación y consumo de eventos (p. ej. "CasoActualizado").

## Feign Client

Cliente HTTP declarativo de Spring Cloud usado para la comunicación síncrona entre microservicios.

## Adapter (CloudinaryAdapter)

Componente que implementa la interfaz `IAlmacenamientoAdapter`, abstrayendo la comunicación con el servicio externo de almacenamiento (Cloudinary), permitiendo sustituirlo (p. ej. por AWS S3) sin afectar la lógica de negocio.

## Cloudinary

Servicio externo de almacenamiento en la nube utilizado para resguardar documentos y evidencias legales.

## KPI (Key Performance Indicator)

Indicador clave de desempeño calculado por el MS Reportes para el dashboard ejecutivo (casos activos, tasa de cumplimiento, carga de abogados, etc.).

## OpenAPI 3.0

Estándar utilizado para documentar los contratos de API de cada microservicio, garantizando el bajo acoplamiento.

## Resilience4j

Librería utilizada para implementar el patrón Circuit Breaker, mitigando fallos en cadena entre microservicios.

## Auditoría

Registro de acciones realizadas dentro del sistema, especialmente sobre el acceso a documentos legales (usuario, marca de tiempo, resultado).

## Rol

Conjunto de permisos asignados a un usuario (Administrador, Gerente/Socio, Abogado Principal, Abogado Asistente, Secretaria, Cliente), gestionado por el RolManager del MS Usuarios.

## Permiso

Autorización para ejecutar una acción específica dentro del sistema.
