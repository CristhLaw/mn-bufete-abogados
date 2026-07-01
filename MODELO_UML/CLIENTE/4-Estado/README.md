# Carpeta: 7-Diagrama_estados

## Descripción
Esta carpeta contiene el **Diagrama de Clases** consolidado del sistema IURIS, el cual define la estructura estática de los datos y las relaciones fundamentales entre los objetos del dominio legal.

## Contenido
- `diagrama-clases-bufete_abogados.puml`: Modelo de clases que representa la relación entre Usuarios, Expedientes, Documentos y Auditoría.

## Justificación Técnica
1. [cite_start]**Composición**: Se utiliza una relación de composición (`*--`) entre `Expediente` y `Documento`, indicando que un documento legal no tiene existencia autónoma fuera del expediente.
2. [cite_start]**Auditoría**: Se integra la clase `Auditoria` conectada a `Expediente` para cumplir con los estándares de cumplimiento legal y trazabilidad de acceso a información sensible[cite: 1661, 2358].
3. [cite_start]**Mapeo a Microservicios**: Este diagrama sirve como base para las entidades persistidas en las bases de datos (`PostgreSQL`) de los microservicios de Casos Legales y Documentos[cite: 2352].

---
**Estado del Módulo:**
- [x] Documentado
- [x] Diagramado
- [x] Validado en repositorio