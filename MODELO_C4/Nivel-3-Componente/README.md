# Nivel 3 - Componentes del CaseService

Este diagrama descompone el microservicio de gestión de casos (CaseService) en componentes internos.

Componentes clave:
- CaseController: recibe llamadas HTTP desde el API Gateway
- CaseService: coordina lógica de negocio de casos
- CaseRepository: acceso a la base de datos de casos
- CaseAssignmentEngine: algoritmo de asignación de abogado
- CaseEventPublisher: publica eventos de dominio
- NotificationAdapter: envía notificaciones a usuarios

El objetivo es explicar la responsabilidad de cada componente dentro del servicio de casos.