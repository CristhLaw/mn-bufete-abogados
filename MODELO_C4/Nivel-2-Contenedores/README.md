# Nivel 2 - Contenedores del Sistema

Este diagrama representa los contenedores principales que componen IURIS y cómo se conectan entre sí.

Contenedores principales:
- Portal Web (Angular)
- Aplicación Móvil (Flutter)
- API Gateway (Spring Cloud Gateway)
- Servicios de backend Spring Boot por dominio
- Bases de datos PostgreSQL independientes por servicio
- Servicios externos: Cloudinary y Videollamadas
- Bus de eventos para comunicación asíncrona

El objetivo es mostrar el runtime de la arquitectura de microservicios y la separación de datos por servicio.