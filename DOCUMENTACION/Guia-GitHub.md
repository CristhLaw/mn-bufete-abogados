# Guía de Trabajo en GitHub — Proyecto IURIS

Esta guía describe el flujo de trabajo colaborativo del Grupo 7 para el repositorio `mn-bufete-abogados`, alineado con las convenciones definidas en `Convenciones.md` y `Nomenclatura.md`.

## 1. Estructura del Repositorio

```
mn-bufete-abogados/
 ├── CONTEXTO/          # Documentación funcional (actores, reglas, microservicios, glosario)
 ├── DOCUMENTACION/      # Convenciones, casos de uso, nomenclatura, esta guía
 ├── MODELO_C4/          # Diagramas PlantUML del modelo C4 (Niveles 1-4)
 ├── MODELO_UML/         # Diagramas de casos de uso por actor
 ├── src/                # Código fuente Java (Maven)
 └── pom.xml
```

## 2. Estrategia de Ramas

* **`main`**: rama estable, contiene siempre una versión entregable del proyecto (avances académicos, releases).
* **`develop`**: rama de integración donde se fusionan las funcionalidades terminadas antes de pasar a `main`.
* **`feature/<microservicio>-<descripcion>`**: una rama por funcionalidad o microservicio en desarrollo. Ejemplos:
    * `feature/ms-auth-login-jwt`
    * `feature/ms-casos-estado-maquina`
    * `feature/ms-agenda-recordatorios`
* **`fix/<descripcion>`**: corrección de errores.
* **`docs/<descripcion>`**: cambios exclusivos de documentación (CONTEXTO, DOCUMENTACION, diagramas).

## 3. Flujo de Trabajo

1. Crear la rama desde `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/ms-casos-estado-maquina
   ```
2. Realizar los cambios y confirmar con commits siguiendo la convención de `Nomenclatura.md` (Conventional Commits).
3. Subir la rama y abrir un **Pull Request** hacia `develop`:
   ```bash
   git push origin feature/ms-casos-estado-maquina
   ```
4. Solicitar revisión de al menos un integrante del equipo antes de fusionar (peer review).
5. Una vez aprobado, fusionar con **squash merge** para mantener un historial limpio, y eliminar la rama.
6. Periódicamente, fusionar `develop` en `main` para generar los avances del proyecto.

## 4. Pull Requests

* Título siguiendo el formato de Conventional Commits: `feat(ms-casos): implementar EstadoCasoMachine`.
* Descripción que incluya:
    * Qué microservicio(s) afecta.
    * Reglas de negocio relacionadas (RN-XX).
    * Casos de uso cubiertos (CU-XX).
    * Checklist de pruebas realizadas.
* Todo PR que modifique `CONTEXTO/` o `MODELO_C4/` debe ser revisado por al menos dos integrantes, dado que son la base de la documentación del proyecto.

## 5. Manejo de Diagramas PlantUML

* Los archivos `.puml` se versionan como texto plano, lo que permite revisar los cambios en el diff del PR.
* Antes de subir un diagrama, verificar que renderiza correctamente (p. ej. con el plugin de PlantUML en IntelliJ o https://www.plantuml.com/plantuml).
* Seguir la convención de nombres de `Nomenclatura.md` para diagramas C4 y de casos de uso.

## 6. .gitignore

El repositorio ya excluye:

* Carpetas de build de Maven/Gradle (`target/`, `build/`).
* Archivos de configuración de IDE (`.idea/`, `.vscode/`, `*.iml`).
* Archivos del sistema operativo (`.DS_Store`).

No se deben subir credenciales, archivos `.env`, ni claves privadas (p. ej. la clave RS256 usada por `JWTProvider`).

## 7. Issues / Tablero de Tareas

* Cada tarea relevante (implementación de un microservicio, diagrama C4, sección de documentación) debe registrarse como un **Issue**, etiquetado con el microservicio o área correspondiente (`ms-auth`, `ms-casos`, `documentacion`, `modelo-c4`, etc.).
* Los Issues se vinculan a los PR que los resuelven (`Closes #<numero>`).

## 8. Releases / Entregas Académicas

* Cada entrega del curso (avance del proyecto) se marca con un **tag** en `main`, por ejemplo: `v0.1-avance-arquitectura`, `v0.2-contexto-completo`.
* El tag debe corresponder al estado del repositorio entregado en el documento de avance (`.docx`).
