# Nomenclatura del Proyecto IURIS

Este documento define los nombres estandarizados de los artefactos del sistema IURIS: microservicios, bases de datos, diagramas, ramas Git, reglas de negocio y casos de uso. Su objetivo es garantizar trazabilidad entre la documentación (`CONTEXTO`), los diagramas (`MODELO_C4`, `MODELO_UML`) y el código fuente.

## 1. Microservicios

| Microservicio | Nombre de módulo / repo | Paquete base | Base de datos |
|---|---|---|---|
| MS Autenticación | `ms-auth` | `com.lextech.auth` | `db_auth` |
| MS Usuarios | `ms-usuarios` | `com.lextech.usuarios` | `db_usuarios` |
| MS Casos Legales | `ms-casos` | `com.lextech.casos` | `db_casos` |
| MS Agenda y Audiencias | `ms-agenda` | `com.lextech.agenda` | `db_agenda` |
| MS Documentos | `ms-documentos` | `com.lextech.documentos` | `db_documentos` |
| MS Comunicación | `ms-comunicacion` | `com.lextech.comunicacion` | `db_comunicacion` |
| MS Reportes | `ms-reportes` | `com.lextech.reportes` | `db_reportes` |
| API Gateway | `gateway` | `com.lextech.gateway` | — |

## 2. Bases de Datos

* Prefijo `db_` + nombre del microservicio en minúsculas, sin tildes: `db_auth`, `db_usuarios`, `db_casos`, `db_agenda`, `db_documentos`, `db_comunicacion`, `db_reportes`.
* Motor: PostgreSQL 16, una instancia por microservicio (patrón Database per Service).
* Tablas en `snake_case` y singular: `usuario`, `caso_legal`, `actuacion_procesal`, `audiencia`, `documento`, `mensaje`, `reporte`.

## 3. Diagramas C4 (carpeta `MODELO_C4`)

Convención: `C4-<Nivel>-<Descripcion>.puml`

| Nivel | Archivo | Contenido |
|---|---|---|
| Nivel 1 — Contexto | `C4-Contexto-Sistema.puml` | Sistema IURIS y actores/sistemas externos (Anexo 11.1). |
| Nivel 2 — Contenedores | `C4-Contenedores-Sistema.puml` | Apps Angular/Flutter, API Gateway, 7 microservicios, bases de datos (Anexo 11.2). |
| Nivel 3 — Componentes | `C4-Componentes-<Microservicio>.puml` | Un archivo por microservicio: `C4-Componentes-Autenticacion.puml`, `C4-Componentes-Usuarios.puml`, `C4-Componentes-Casos.puml`, `C4-Componentes-Agenda.puml`, `C4-Componentes-Documentos.puml`, `C4-Componentes-Comunicacion.puml`, `C4-Componentes-Reportes.puml` (Anexos 11.3 a 11.9). |
| Nivel 4 — Código | `C4-Codigo-<Componente>.puml` | Diagramas de clases de componentes específicos (opcional, bajo demanda). |

## 4. Diagramas UML de Casos de Uso (carpeta `MODELO_UML`)

Convención: `MODELO_UML/<ACTOR>/Casos-Uso/<CodigoCU>-<NombreCasoUso>.puml`

Donde `<ACTOR>` corresponde a uno de: `CLIENTE`, `ABOGADO-PRINCIPAL`, `ABOGADO-ASISTENTE`, `SECRETARIA`, `ADMINISTRADOR`, `GERENTE-SOCIO`.

Ejemplos:

* `MODELO_UML/CLIENTE/Casos-Uso/CU-06-AgendarCita.puml`
* `MODELO_UML/ABOGADO-PRINCIPAL/Casos-Uso/CU-AB-05-ActualizarEstadoCaso.puml`
* `MODELO_UML/ADMINISTRADOR/Casos-Uso/CU-AD-14-GestionarSedes.puml`

> Nota: los archivos existentes `MODELO_UML/ABOGADO/Casos-Uso/ActualizarCaso.puml` y `MODELO_UML/CLIENTE/Casos-Uso/VerCaso.puml` son plantillas de ejemplo de PlantUML y deben renombrarse/actualizarse siguiendo esta convención (`CU-AB-05-ActualizarEstadoCaso.puml`, `CU-12-VerEstadoCaso.puml`) con el contenido real del caso de uso.

## 5. Códigos de Reglas de Negocio y Casos de Uso

* **Reglas de negocio:** `RN-XX` (numeración correlativa de dos cifras, ver `CONTEXTO/02-Reglas-Negocio.md`, actualmente RN-01 a RN-30).
* **Casos de uso por actor:**

| Actor | Prefijo |
|---|---|
| Cliente | `CU-XX` (sin sufijo de actor) |
| Abogado Principal | `CU-AB-XX` |
| Abogado Asistente | `CU-AA-XX` |
| Secretaria / Asistente Administrativo | `CU-SC-XX` |
| Administrador | `CU-AD-XX` |
| Gerente / Socio | `CU-GE-XX` |

## 6. Ramas Git

Ver `Guia-GitHub.md` para el detalle del flujo de trabajo. Convención de nombres:

* `main` — rama estable / entregable.
* `develop` — integración de funcionalidades.
* `feature/<microservicio>-<descripcion>` — ej. `feature/ms-casos-asignacion-abogado`.
* `fix/<microservicio>-<descripcion>` — ej. `fix/ms-agenda-validacion-horario`.
* `docs/<descripcion>` — ej. `docs/contexto-actores`.

## 7. Commits

Se utiliza la convención **Conventional Commits**: `<tipo>(<alcance>): <descripción>`.

Ejemplos:

* `feat(ms-casos): agregar EstadoCasoMachine con transiciones de estado`
* `docs(contexto): completar reglas de negocio RN-01 a RN-30`
* `fix(ms-agenda): corregir validación de disponibilidad de abogado`

Tipos permitidos: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `style`.
