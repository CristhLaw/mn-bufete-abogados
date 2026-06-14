# Reglas de Negocio — Sistema IURIS

## Autenticación y Seguridad

**RN-01:** Todo usuario debe autenticarse mediante credenciales (correo y contraseña) para acceder al sistema. El MS Autenticación genera un token JWT firmado con clave privada (RS256).

**RN-02:** Las contraseñas se almacenan únicamente como hash mediante el algoritmo BCrypt; el sistema nunca almacena ni transmite contraseñas en texto plano.

**RN-03:** La vigencia del token JWT debe validarse en cada solicitud crítica. Existen endpoints de login, refresh token y logout.

**RN-04:** Toda comunicación entre los actores externos y el sistema IURIS se realiza mediante canales cifrados (HTTPS/TLS).

**RN-05:** El acceso a funcionalidades se controla mediante roles y permisos. Los roles disponibles son: Administrador, Gerente/Socio, Abogado Principal, Abogado Asistente, Secretaria/Asistente Administrativo y Cliente. Solo el Administrador puede gestionar roles y permisos.

## Usuarios y Sedes

**RN-06:** El correo electrónico debe ser único dentro del sistema para cada usuario.

**RN-07:** Todo usuario debe estar asociado a una sede registrada y activa en el sistema (arquitectura multisede).

**RN-08:** Una nueva sede se incorpora como una instancia adicional de configuración, sin requerir nuevos microservicios ni modificaciones en el código existente.

## Casos Legales

**RN-09:** Un caso legal debe tener un estado válido dentro del siguiente ciclo de vida: **Activo → En Audiencia → En Espera → Cerrado → Archivado**, gestionado mediante una máquina de estados (EstadoCasoMachine).

**RN-10:** La asignación de abogados a un caso debe considerar la especialidad registrada del abogado y su carga de trabajo actual.

**RN-11:** Un abogado no puede tener más de **20 casos activos** asignados simultáneamente. Esta validación la realiza el AsignacionAbogadoService.

**RN-12:** Toda actuación procesal registrada en un caso debe incluir fecha, tipo de actuación y el usuario responsable de registrarla.

**RN-13:** Los tipos de caso legal (especialidades: Civil, Penal, Familiar, Laboral, y futuras especialidades como Tributario) son configurables dinámicamente por el Administrador, sin requerir cambios en el código.

**RN-14:** Toda apertura de caso, asignación de abogado o cambio de estado relevante debe generar un evento (p. ej. "CasoActualizado") para que el cliente sea notificado automáticamente a través del MS Comunicación.

## Agenda y Audiencias

**RN-15:** Las citas y audiencias deben programarse con un mínimo de **24 horas de anticipación**.

**RN-16:** No se pueden programar audiencias o citas en horarios donde el abogado convocado ya tenga otra audiencia programada (validación de disponibilidad).

**RN-17:** El sistema debe enviar recordatorios automáticos de cada audiencia a los involucrados con **48 horas** y **24 horas** de anticipación.

## Documentos

**RN-18:** Los documentos cargados al sistema solo pueden tener los siguientes formatos: **PDF, DOCX, JPG, PNG y MP4**, y deben cumplir con el tamaño máximo permitido. La validación la realiza el ArchivoValidator antes de la carga.

**RN-19:** El almacenamiento físico de los archivos se delega a Cloudinary; la base de datos del MS Documentos conserva únicamente los metadatos (nombre, tipo, URL, caso vinculado, estado).

**RN-20:** Todo acceso (carga, descarga o intento de acceso) a un documento debe registrarse en un log de auditoría, indicando usuario, marca de tiempo y resultado de la operación.

## Comunicación

**RN-21:** El chat entre cliente y abogado se organiza por caso y debe conservar un historial de conversaciones consultable.

**RN-22:** Toda solicitud de videollamada debe pasar por un ciclo de vida: creación → confirmación por el abogado → generación de sala → notificación al cliente.

**RN-23:** El MS Comunicación actúa como consumidor de eventos del sistema (cambios de estado de caso desde MS Casos Legales, nuevas audiencias desde MS Agenda) para generar automáticamente notificaciones a los usuarios.

## Reportes

**RN-24:** El MS Reportes es exclusivamente de **solo lectura**: no implementa operaciones de creación, actualización o eliminación (POST/PUT/DELETE) sobre datos de negocio.

**RN-25:** El MS Reportes es el único microservicio autorizado a consultar datos de múltiples dominios, y debe hacerlo siempre a través de las APIs públicas de cada servicio (nunca accediendo directamente a sus bases de datos).

**RN-26:** Los reportes deben poder exportarse en formato PDF y Excel, y el dashboard ejecutivo debe presentar KPIs en tiempo real (casos activos, tasa de cumplimiento, carga de abogados, indicadores multisede).

## Reglas Arquitectónicas Generales

**RN-27:** Cada microservicio es el propietario único de su dominio de datos (patrón Database per Service); ningún microservicio accede directamente a la base de datos de otro.

**RN-28:** Cuando un microservicio requiere datos de otro dominio, debe consumir la API REST del servicio propietario (comunicación síncrona vía Feign Client) o suscribirse a eventos asíncronos (Event Publisher/Consumer).

**RN-29:** Las operaciones distribuidas que involucren a varios microservicios (p. ej. apertura de un caso, que afecta a MS Usuarios, MS Casos Legales y MS Comunicación) deben gestionarse mediante el patrón Saga para garantizar consistencia eventual.

**RN-30:** Todos los microservicios deben implementar manejo centralizado de excepciones (`@ControllerAdvice` de Spring) y devolver respuestas de error estandarizadas con códigos HTTP apropiados.
