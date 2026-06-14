# Actor: Administrador del Sistema

## Descripción

Superusuario responsable de la configuración global y supervisión general del sistema IURIS. Accede mediante la aplicación web.

## Objetivo

Garantizar el correcto funcionamiento del sistema, controlar los accesos y soportar la operación multisede del bufete.

## Responsabilidades

* Gestionar usuarios (creación, edición, suspensión, eliminación).
* Gestionar abogados (perfil profesional y especialidad).
* Gestionar clientes.
* Gestionar roles y permisos (Administrador, Gerente/Socio, Abogado Principal, Abogado Asistente, Secretaria, Cliente).
* Configurar sedes del bufete (arquitectura multisede).
* Gestionar tipos de caso / especialidades legales (configuración dinámica, p. ej. agregar Derecho Tributario).
* Supervisar la auditoría de acceso a documentos legales.
* Generar estadísticas y reportes administrativos.
* Configurar parámetros generales del sistema.

## Microservicios con los que interactúa

* **MS Usuarios** — gestión de usuarios, roles, permisos y sedes (RolManager, SedeValidator).
* **MS Casos Legales** — configuración de tipos de caso.
* **MS Documentos** — auditoría de accesos (AuditoriaAccesoService).
* **MS Reportes** — generación de reportes y estadísticas administrativas.

## Casos de Uso

CU-AD-01 Gestionar Usuarios

CU-AD-02 Crear Usuario

CU-AD-03 Editar Usuario

CU-AD-04 Eliminar Usuario

CU-AD-05 Gestionar Abogados

CU-AD-06 Gestionar Clientes

CU-AD-07 Gestionar Roles

CU-AD-08 Gestionar Permisos

CU-AD-09 Configurar Sistema

CU-AD-10 Gestionar Categorías / Especialidades Legales

CU-AD-11 Ver Auditoría de Documentos

CU-AD-12 Generar Estadísticas

CU-AD-13 Generar Reportes Administrativos

CU-AD-14 Gestionar Sedes
