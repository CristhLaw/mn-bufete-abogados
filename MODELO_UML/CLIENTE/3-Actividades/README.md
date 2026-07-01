# Diagramas de Actividades - Módulo Cliente

Esta carpeta documenta los flujos de trabajo y procesos operativos del sistema **IURIS**. Los diagramas de actividades permiten visualizar la lógica de control, los puntos de decisión y los caminos alternativos (caminos felices y de error) que atraviesa el Cliente.

## Descripción de los Diagramas
Cada diagrama de actividad modela un proceso de negocio específico:

- `AD01_Gestionar_Sesion.puml`: Flujo del proceso de autenticación, incluyendo validaciones de seguridad y redirección tras el login.
- `AD02_Administrar_Expedientes.puml`: Proceso para la consulta de expedientes, desde la petición hasta la visualización detallada del avance procesal.
- `AD03_Gestionar_Repositorio.puml`: Flujo operativo para la gestión documental (subida, búsqueda y descarga de archivos).
- `AD04_Canal_de_Interaccion.puml`: Proceso de comunicación asíncrona, incluyendo el envío de mensajes y recepción de notificaciones.

## Propósito del Modelado
- **Definición de Lógica:** Identificar los pasos obligatorios y opcionales dentro de cada funcionalidad.
- **Manejo de Errores:** Representar mediante bifurcaciones (decisiones) cómo el sistema debe actuar ante entradas inválidas o fallas de servicio.
- **Estandarización:** Asegurar que todos los flujos de trabajo del Cliente sigan las políticas de seguridad y calidad del bufete.

---
*Documentación de procesos para el proyecto IURIS - LexTech Solutions S.A.C.*