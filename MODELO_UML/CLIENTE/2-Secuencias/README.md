# Diagramas de Secuencia - Módulo Cliente

Este directorio contiene los diagramas de secuencia (`DS`) que detallan la interacción dinámica entre el **Cliente** y los diferentes componentes del sistema (UI, Controladores y Microservicios).

## Descripción de los Diagramas
Cada diagrama ilustra el flujo lógico de los eventos, incluyendo las llamadas a los microservicios y los retornos de datos esperados.

- `DS01_Gestionar_Sesión.puml`: Muestra la secuencia de autenticación, validación de credenciales y generación del token de sesión.
- `DS02_Administrar_Expedientes.puml`: Detalla la solicitud de información de expedientes al `MS Casos Legales`.
- `DS03_Gestionar_Repositorio.puml`: Describe la secuencia para la subida, descarga y listado de documentos en el `MS Documentos`.
- `DS04_Canal_de_Interacción.puml`: Representa el intercambio asíncrono de mensajes y notificaciones entre el Cliente y el Abogado.

## Consideraciones de Diseño
- **Actores y Objetos:** Se identifica claramente la participación del Cliente (Actor), la interfaz (Frontend) y los servicios (Backend).
- **Control de Flujo:** Se muestran las llamadas síncronas para operaciones críticas y los retornos de error en caso de fallo en la autenticación o acceso a datos.
- **Trazabilidad:** Estos diagramas sirven como base para la implementación de las pruebas unitarias y de integración de cada módulo.

---
*Documentación técnica del sistema IURIS - LexTech Solutions S.A.C.*