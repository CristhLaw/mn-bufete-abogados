# Actor: Abogado Principal

## Descripción

Profesional legal que gestiona los casos asignados, registra actuaciones procesales y se comunica con los clientes. Accede mediante la aplicación web.

## Objetivo

Resolver los casos legales asignados, mantener actualizado el expediente procesal y mantener comunicación constante con los clientes.

## Responsabilidades

* Iniciar sesión.
* Gestionar perfil profesional (datos y especialidad legal registrada).
* Ver y gestionar los casos asignados. No puede tener más de **20 casos activos** simultáneamente (RN-11, AsignacionAbogadoService).
* Crear y dar seguimiento al expediente legal.
* Registrar actuaciones procesales (fecha, tipo, usuario responsable).
* Actualizar el estado del caso siguiendo el ciclo: Activo → En Audiencia → En Espera → Cerrado → Archivado.
* Registrar resoluciones y cerrar casos.
* Revisar, subir y descargar documentos legales del caso.
* Gestionar citas y audiencias relacionadas con sus casos (validación de disponibilidad a 24h).
* Comunicarse con clientes mediante chat y videollamada.
* Generar reportes de sus propios casos.
* Recibir notificaciones automáticas de eventos relacionados a sus casos (nuevas audiencias, mensajes).

## Microservicios con los que interactúa

* **MS Autenticación** — login y gestión de sesión.
* **MS Usuarios** — gestión de perfil y especialidad.
* **MS Casos Legales** — CasoController, AsignacionAbogadoService, EstadoCasoMachine, ActuacionProcesalService.
* **MS Agenda y Audiencias** — AgendaController, DisponibilidadValidator.
* **MS Documentos** — DocumentoController, CloudinaryAdapter.
* **MS Comunicación** — ChatController, VideollamadaService.
* **MS Reportes** — ReporteController (reportes de sus casos).

## Casos de Uso

CU-AB-01 Iniciar Sesión

CU-AB-02 Gestionar Perfil Profesional

CU-AB-03 Ver Casos Asignados

CU-AB-04 Crear Expediente

CU-AB-05 Actualizar Estado de Caso

CU-AB-06 Registrar Actuación Procesal

CU-AB-07 Revisar Documentos

CU-AB-08 Subir Documentos Legales

CU-AB-09 Gestionar Citas y Audiencias

CU-AB-10 Generar Reportes de Casos

CU-AB-11 Registrar Resolución

CU-AB-12 Cerrar Caso

CU-AB-13 Comunicarse con el Cliente (Chat / Videollamada)
