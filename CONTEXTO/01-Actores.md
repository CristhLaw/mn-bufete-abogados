# Actores del Sistema IURIS

El sistema IURIS define seis roles de usuario, además de dos interesados externos (stakeholders) que no interactúan directamente con la plataforma como usuarios operativos, pero que influyen en su diseño y operación.

## Roles de Usuario (Actores del Sistema)

### Administrador del Sistema

Superusuario responsable de la configuración global del sistema, gestión de usuarios, roles, permisos y sedes.

**Canal de interacción:** Aplicación web (PC)

**Funciones principales:**

* Gestionar usuarios, abogados y clientes.
* Gestionar roles y permisos del sistema.
* Configurar sedes (arquitectura multisede).
* Configurar tipos de caso / especialidades legales.
* Supervisar auditoría de accesos a documentos.
* Generar reportes y estadísticas administrativas.

### Gerente / Socio del Bufete

Directivo que supervisa el desempeño del bufete, revisa KPIs y toma decisiones estratégicas.

**Canal de interacción:** Aplicación web (PC) y Aplicación móvil

**Funciones principales:**

* Consultar dashboard ejecutivo con KPIs en tiempo real (casos activos, tasa de cumplimiento, carga de abogados).
* Solicitar reportes administrativos, financieros, de productividad y multisede.
* Supervisar la operación del bufete en movilidad mediante la app móvil.

### Abogado Principal

Profesional legal que gestiona los casos asignados, registra actuaciones procesales y se comunica con los clientes.

**Canal de interacción:** Aplicación web (PC)

**Funciones principales:**

* Iniciar sesión.
* Gestionar perfil profesional y especialidad.
* Ver y gestionar los casos asignados (máximo 20 casos activos).
* Registrar actuaciones procesales (fecha, tipo, usuario responsable).
* Actualizar el estado del caso (Activo, En Audiencia, En Espera, Cerrado, Archivado).
* Registrar resoluciones y cerrar casos.
* Gestionar audiencias y citas relacionadas a sus casos.
* Revisar, subir y descargar documentos legales.
* Comunicarse con clientes mediante chat y videollamada.
* Generar reportes de sus casos.

### Abogado Asistente

Apoya al abogado principal en la elaboración de documentos y el registro de actuaciones procesales.

**Canal de interacción:** Aplicación web (PC)

**Funciones principales:**

* Iniciar sesión.
* Consultar los casos en los que apoya.
* Registrar y consultar actuaciones procesales (con los permisos otorgados por el rol).
* Apoyar en la elaboración y carga de documentos legales.
* Consultar la agenda de audiencias del abogado principal.

### Secretaria / Asistente Administrativo

Registra clientes, coordina la agenda del bufete y gestiona la atención inicial al cliente.

**Canal de interacción:** Aplicación web (PC)

**Funciones principales:**

* Iniciar sesión.
* Registrar nuevos clientes (alta de usuario con rol Cliente).
* Crear, consultar, modificar y cancelar audiencias y reuniones.
* Validar disponibilidad de los abogados antes de programar una cita.
* Coordinar el envío de recordatorios de audiencias y citas.
* Brindar atención inicial e información general al cliente.

### Cliente del Bufete

Usuario externo que consulta el estado de su caso, sube documentos y se comunica con el bufete.

**Canal de interacción:** Aplicación web y Aplicación móvil

**Funciones principales:**

* Registrarse, iniciar sesión y recuperar contraseña.
* Gestionar su perfil.
* Solicitar consultas legales.
* Agendar, reprogramar y cancelar citas (con un mínimo de 24 horas de anticipación).
* Subir y descargar documentos y evidencias.
* Consultar el estado y el historial de sus casos en tiempo real.
* Comunicarse con su abogado asignado mediante chat.
* Solicitar videollamadas con el bufete.
* Recibir notificaciones (push, correo, in-app).
* Calificar la atención recibida.

## Interesados Externos (Stakeholders sin acceso directo al sistema)

### Equipo de Desarrollo TI

Responsable del desarrollo, mantenimiento y despliegue del sistema IURIS.

**Canal de interacción:** Acceso técnico al código fuente e infraestructura (repositorios, pipelines CI/CD, Kubernetes).

### Reguladores / Colegio de Abogados

Ente externo que establece normativas sobre ejercicio legal y protección de datos de clientes.

**Canal de interacción:** Interacción indirecta / normativa (no usa el sistema directamente, pero condiciona los requisitos de seguridad, confidencialidad y trazabilidad).
