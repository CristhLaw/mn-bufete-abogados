# Convenciones del Proyecto IURIS

Este documento define las convenciones de código y arquitectura que deben seguir todos los microservicios del sistema IURIS, con el fin de mantener consistencia, cohesión y bajo acoplamiento (ver `CONTEXTO/00-Descripcion-General.md` y `CONTEXTO/02-Reglas-Negocio.md`).

## 1. Estructura General de Paquetes

Cada microservicio sigue la arquitectura en capas **Controller → Service → Repository**, descrita en `CONTEXTO/03-Microservicios.md`. La estructura base de paquetes es:

```
com.lextech.<microservicio>
 ├── controller     // REST Controllers (capa de presentación)
 ├── service        // Lógica de negocio (interfaces + implementaciones)
 ├── repository     // Repositorios JPA (capa de acceso a datos)
 ├── entity         // Entidades JPA (modelo de datos)
 ├── dto            // Data Transfer Objects (request / response)
 ├── mapper         // Conversión entre Entity <-> DTO
 ├── adapter        // Adaptadores hacia servicios externos (p. ej. CloudinaryAdapter)
 ├── event          // Publishers / Consumers de eventos
 ├── exception      // Excepciones personalizadas y manejo centralizado
 ├── config         // Configuración (Security, OpenAPI, WebSocket, etc.)
 └── client         // Feign Clients hacia otros microservicios
```

Ejemplo para MS Casos Legales: `com.lextech.casos.controller.CasoController`.

## 2. Convenciones de Nombres de Clases

| Tipo de componente | Sufijo | Ejemplo |
|---|---|---|
| Controlador REST | `Controller` | `CasoController`, `AgendaController` |
| Controlador WebSocket | `Controller` | `ChatController` |
| Lógica de negocio | `Service` | `CasoService`, `AsignacionAbogadoService` |
| Repositorio JPA | `Repository` | `CasoRepository`, `UsuarioRepository` |
| Entidad JPA | (nombre del dominio) | `CasoLegal`, `Audiencia`, `Documento` |
| DTO de entrada | `Request` | `CrearCasoRequest` |
| DTO de salida | `Response` | `CasoResponse` |
| Adaptador externo | `Adapter` | `CloudinaryAdapter` |
| Interfaz de adaptador | `I` + nombre | `IAlmacenamientoAdapter` |
| Validador | `Validator` | `ArchivoValidator`, `DisponibilidadValidator` |
| Publicador de eventos | `Publisher` | `NotificacionCasoPublisher` |
| Consumidor de eventos | `Consumer` o `Listener` | `EventConsumer` |
| Máquina de estados | `Machine` | `EstadoCasoMachine` |
| Tarea programada | `Scheduler` | `RecordatorioScheduler` |
| Excepción personalizada | `Exception` | `CasoNoEncontradoException` |
| Manejador global de errores | `GlobalExceptionHandler` | `@ControllerAdvice` |

## 3. Convenciones de Endpoints REST

* Recursos en **plural** y en **minúsculas**: `/cases`, `/appointments`, `/documents`, `/users`.
* Anidamiento de recursos para sub-entidades: `/cases/{id}/actuaciones`.
* Verbos HTTP estándar: `GET` (consulta), `POST` (creación), `PUT` (actualización completa), `PATCH` (actualización parcial, p. ej. cambio de estado), `DELETE` (eliminación lógica).
* Endpoints de autenticación bajo el prefijo `/auth`: `POST /auth/login`, `POST /auth/refresh`, `POST /auth/logout`.
* Todas las rutas se exponen a través del **API Gateway**; los microservicios no son accesibles directamente desde el exterior.
* Los contratos de cada endpoint se documentan con **OpenAPI 3.0** (Swagger).

## 4. Manejo de Errores

* Cada microservicio implementa un `@ControllerAdvice` único (`GlobalExceptionHandler`) que centraliza el manejo de excepciones (RN-30).
* Las respuestas de error siguen un formato estandarizado:

```json
{
  "timestamp": "2026-06-14T10:00:00Z",
  "status": 404,
  "error": "Not Found",
  "message": "Caso con id 123 no encontrado",
  "path": "/cases/123"
}
```

* Se utilizan códigos HTTP semánticamente correctos: `400` (validación), `401` (no autenticado), `403` (sin permiso), `404` (no encontrado), `409` (conflicto, p. ej. horario ocupado), `500` (error interno).

## 5. Seguridad

* Todos los endpoints (excepto `/auth/login` y `/auth/refresh`) requieren un token JWT válido (RS256), validado por el API Gateway y por cada microservicio (RN-01, RN-03).
* Las contraseñas se almacenan únicamente como hash **BCrypt** (RN-02).
* Toda comunicación se realiza sobre **HTTPS/TLS** (RN-04).
* El control de acceso por rol se implementa mediante anotaciones de Spring Security (`@PreAuthorize`).

## 6. Comunicación entre Microservicios

* **Síncrona:** mediante **Feign Client**, respetando los contratos OpenAPI de cada servicio (RN-28).
* **Asíncrona:** mediante el patrón **Event Publisher/Consumer** para notificaciones y procesos que no requieren respuesta inmediata (RN-28).
* Operaciones distribuidas que afecten a más de un microservicio (p. ej. apertura de caso) se implementan con el patrón **Saga** (RN-29).
* Ningún microservicio accede directamente a la base de datos de otro (patrón Database per Service, RN-27).

## 7. Pruebas

* Pruebas unitarias por componente (Service, Validator, Adapter) usando mocks para repositorios y clientes externos (alineado con DIP, ver `00-Descripcion-General.md`).
* Pruebas de integración para los endpoints REST de cada microservicio.
* Cobertura mínima recomendada: 70% en la capa de servicios.

## 8. Estilo de Código

* Java 17, formateo estándar (4 espacios de indentación).
* Uso de **Lombok** para reducir código repetitivo en entidades y DTOs (`@Getter`, `@Setter`, `@Builder`).
* Inyección de dependencias por **constructor** (no `@Autowired` en campos), alineado con el principio DIP.
* Comentarios y javadoc en español, consistentes con la documentación del proyecto.
