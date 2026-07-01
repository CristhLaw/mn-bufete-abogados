# Casos de Uso - Módulo Cliente (Arquitectura de Microservicios)

Esta carpeta contiene la documentación y los diagramas UML que definen las interacciones del actor **Cliente** con el sistema **IURIS**. Cada caso de uso está mapeado directamente a un microservicio específico, asegurando una arquitectura desacoplada y escalable.

## Mapeo de Casos de Uso a Microservicios

| ID | Caso de Uso | Microservicio Asociado | Descripción |
| :--- | :--- | :--- | :--- |
| **CU01** | Gestionar Sesión | `MS Autenticación` | Validación de credenciales y emisión de JWT. |
| **CU02** | Administrar Expedientes | `MS Casos Legales` | Consulta de estados y progreso de procesos legales. |
| **CU03** | Gestionar Documentos | `MS Documentos` | Carga, visualización y gestión de archivos legales. |
| **CU04** | Canal de Interacción | `MS Comunicación` | Intercambio de mensajes asíncronos y notificaciones. |

## Estructura de Archivos
- `CU01_MS_Autenticación.puml`: Diagrama de flujo de login y seguridad.
- `CU02_MS_Casos_Legales.puml`: Diagrama de consulta de estados procesales.
- `CU03_MS_Documentos.puml`: Diagrama de gestión de evidencia documental.
- `CU04_MS_Comunicación.puml`: Diagrama de mensajería cliente-abogado.

## Consideraciones Técnicas
- Todos los casos de uso dependen del **CU01** para la validación de identidad.
- La comunicación entre microservicios se realiza mediante APIs REST y eventos asíncronos para garantizar la alta disponibilidad del sistema.
- Los diagramas utilizan el lenguaje **PlantUML** para facilitar la integración en el ciclo de vida de desarrollo continuo (CI/CD).

---
*Documentación generada para el proyecto IURIS - LexTech Solutions S.A.C.*