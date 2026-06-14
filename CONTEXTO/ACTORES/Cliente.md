# Actor: Cliente del Bufete

## Descripción

Usuario externo que contrata servicios legales mediante la plataforma IURIS. Accede a través de la aplicación web y la aplicación móvil (Flutter).

## Objetivo

Solicitar asesoría legal, dar seguimiento a sus casos en tiempo real y comunicarse de forma directa con su abogado asignado y con el bufete.

## Responsabilidades

* Registrarse en el sistema.
* Iniciar sesión.
* Recuperar contraseña.
* Gestionar perfil (datos personales y jurídicos).
* Solicitar consultas legales.
* Agendar citas (con un mínimo de 24 horas de anticipación).
* Reprogramar citas.
* Cancelar citas.
* Subir documentos y evidencias legales (formatos PDF, DOCX, JPG, PNG, MP4).
* Descargar documentos.
* Realizar pagos relacionados a sus casos.
* Ver historial de pagos.
* Ver el estado de sus casos en tiempo real.
* Ver historial de casos.
* Comunicarse con su abogado asignado mediante chat (MS Comunicación).
* Solicitar videollamadas con el bufete.
* Recibir notificaciones (push, correo electrónico, in-app).
* Calificar la atención recibida.

## Microservicios con los que interactúa

* **MS Autenticación** — login, refresh y recuperación de acceso.
* **MS Usuarios** — gestión de perfil.
* **MS Casos Legales** — consulta de estado y caso (acceso de solo lectura sobre su propio expediente).
* **MS Agenda y Audiencias** — agendar, reprogramar y cancelar citas.
* **MS Documentos** — subir y descargar documentos y evidencias.
* **MS Comunicación** — chat, videollamadas y notificaciones.
* **MS Reportes** — no tiene acceso (módulo exclusivo de Administrador/Gerente).

## Casos de Uso

CU-01 Registrarse

CU-02 Iniciar Sesión

CU-03 Recuperar Contraseña

CU-04 Gestionar Perfil

CU-05 Solicitar Consulta Legal

CU-06 Agendar Cita

CU-07 Reprogramar Cita

CU-08 Cancelar Cita

CU-09 Subir Documentos

CU-10 Descargar Documentos

CU-11 Realizar Pago

CU-12 Ver Estado del Caso

CU-13 Ver Historial de Casos

CU-14 Ver Historial de Pagos

CU-15 Recibir Notificaciones

CU-16 Calificar Servicio

CU-17 Comunicarse por Chat con Abogado

CU-18 Solicitar Videollamada
