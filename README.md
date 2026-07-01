# âš–ï¸ MINI BUFETE DE ABOGADOS

Sistema de gestiÃ³n jurÃ­dica diseÃ±ado para optimizar la administraciÃ³n de clientes, abogados, casos legales, audiencias, documentos jurÃ­dicos y procesos internos de un bufete de abogados.

---

## ðŸ“‹ DescripciÃ³n

El sistema permite gestionar de manera eficiente la informaciÃ³n jurÃ­dica y administrativa del bufete, facilitando el seguimiento de casos, la organizaciÃ³n de documentos legales, el control de audiencias y la comunicaciÃ³n entre abogados, clientes y administradores.

---

## ðŸ› ï¸ TecnologÃ­as Utilizadas

* Java
* Maven
* PlantUML
* Arquitectura C4
* UML
* Git & GitHub

---

## ðŸ—ï¸ Arquitectura y Modelado

### Modelo C4

* Diagrama de Contexto
* Diagrama de Contenedores
* Diagrama de Componentes

### UML

* Casos de Uso
* Diagramas de Clases
* Diagramas de Secuencia
* Diagramas de Actividad

---

## ðŸ“‚ Estructura del Proyecto

```text
mn-bufete-abogados/
â”‚
â”œâ”€â”€ CONTEXTO/
â”‚   â”œâ”€â”€ ContextoGeneral.md
â”‚   â””â”€â”€ Actores.md
â”‚
â”œâ”€â”€ DOCUMENTACION/
â”‚   â”œâ”€â”€ RequisitosFuncionales.md
â”‚   â”œâ”€â”€ RequisitosNoFuncionales.md
â”‚   â””â”€â”€ Glosario.md
â”‚
â”œâ”€â”€ MODELO_C4/
â”‚   â”œâ”€â”€ Contexto/
â”‚   â”œâ”€â”€ Contenedores/
â”‚   â””â”€â”€ Componentes/
â”‚
â”œâ”€â”€ MODELO_UML/
â”‚   â”œâ”€â”€ ADMINISTRADOR/
â”‚   â”œâ”€â”€ ABOGADO/
â”‚   â”œâ”€â”€ CLIENTE/
â”‚   â””â”€â”€ GENERAL/
â”‚
â”œâ”€â”€ src/
â”‚
â”œâ”€â”€ pom.xml
â”‚
â””â”€â”€ README.md
```

---

# ðŸ‘¥ Actores del Sistema

## Administrador

* Gestionar usuarios.
* Gestionar abogados.
* Gestionar clientes.
* Gestionar roles y permisos.
* Supervisar el funcionamiento general del sistema.

## Abogado

* Gestionar casos legales.
* Registrar audiencias.
* Administrar documentos jurÃ­dicos.
* Realizar seguimiento de expedientes.

## Cliente

* Consultar informaciÃ³n de sus casos.
* Revisar documentos autorizados.
* Consultar audiencias programadas.

---

# ðŸ“Œ Casos de Uso

## Diagrama General

![Diagrama General](https://www.plantuml.com/plantuml/png/ZLVTRjis6Bqtu7SWl8jUfQZaE8w7BgWYgvc1r36akFTVgCyA4PeqI6fTDlIHTZ7i4V9Y0_LhKr9T1p3WmyEFty_HeV996r0ct_FnQ3pYk3F4IA9Ozcn8oXHImwImI_g5YGCes9Cde2-Pahb8Gycb8j-UcS5ZmW7e2sIOc5UEn8O0aV4JXdw6L7vZ8YCxu1fFu-SQAMWaVuz7jyvHlqJNdsVHOZowbIf5LO5-D5zE_V7e-saSe4Qg8iensRkTHVw7YbnIGivGs1BAdvFWIMQGIh9HJ51s03uXe4c5rgmWtJF1j56GIcLZDOMIIR9A7gCl0LbjurL2BiYNrNf5RhUVeyU8B2CIt3xS1Sk7P6AJitzLmyWao0qAmoXGzlQV8AzaWsh7U4KaX3JDcSIO5QShZKLwsz1p62l1A0D54jGsMiNoEt5eVa05YeHI60KQt_w5YZjrk7UehHn0DNaLj4kRtFUJGWgcBI554eAMkg-4H796cIcFrZatGEunWphipA672a6HwCy3fiMyAjgLGmkeoO6plonN6pl757cHHBLXxcpuYaFCwnxcxqmRgHZmez8Ayc9eGAJ8g9peHacAkYdH-p2uAKOjUKwF9kUv0mvH5NDh4_Ry7uzYAMc-Hs46vf4_CTLowfYk2fQeAQWCUgYNxYpoj9XlG2bggGcSP53kcPrH3pEWoIkneL1G1hsf1ncArFQ2cLgydYkC60zAPWhs3i_LGmY28dT8hXJQH-4uiPAx-7556yZw-nzZfLlBg1zNLo4T3LRXIhRNFJgK-rpKbj9tRFWCflR0YyhbwdYkMxIFx5UMekGSzf3MJV9TfSH8cPNKMXgsArAG0fjSUsoZDLLQTOkJX6c3U-ZBl1t2LkUWMDi7rpjQPbLemtHLSZJOiXKDqzL9oumbRmCEAsM3QizQm_1TnsYPaJuWPS1P2YdgqXMR4wQk9Dfz2QOjhMCNKknObblBQ7fQCjqftw4eReJ25T_-qVP6Qi9sBuMI7ED1AeFww6Oqx8-cscaxxkBhtM-3d_7e7GdlLz7wCJh36u-gSPABYvlo2Zm5V1UOki1bDyhC1QvTOD5pT2UornFQcfA3p3l8TNUVjG47yNfOdNBzJbRbOtUc-zKRojdkrszAJRDFWSikvye5vYvWxqG7yJg8turi1-0WFUUNvkpatKdSxyJwkROjxPjUyXW7ouVuVFEEto3hz6P3AzRIUl6h0Nm-W5yFu8j-tBfDB-uDuFu0FXt0VwQnSNGVXAk7TPIGrJgytoxF6uCL2Nd_ljGF-PLy_CW4vNcADpVLyhHUdhdBLZg3Y-FH9nHfyG_J_m00)
---

# ðŸ“Š Diagrama de Clases

![Diagrama de Clases](https://www.plantuml.com/plantuml/png/NOy_JuSm443t-nJTr07PZGD4J3HHIGG6OnoEScfDMqXx3Fxnkolz_KWBuxttSfShFAFZsMWuUMUU_4MUJnhjGixbQ7AfqVjiKFZcq01WxzcXP16uA8_ZdV8StKglHgr9iXejAClaNb6I26aSamOM9Iv_icoxDoPHxjRlciEHj4lSYZTDSjev_0mEmeyHY6-e-m-I_FmYI9CXonKoWbTVT7e6lm1aPoDQPQYpQichygc1cxfxRE3-zg5hhvl_gY0xp4R_0G00)

---



# ðŸŽ¯ Objetivos del Sistema

* Centralizar la informaciÃ³n jurÃ­dica.
* Optimizar la gestiÃ³n de expedientes.
* Reducir errores administrativos.
* Mejorar el seguimiento de casos.
* Facilitar la comunicaciÃ³n entre abogados y clientes.
* Garantizar la seguridad y confidencialidad de la informaciÃ³n.

---

# ðŸš€ Estado del Proyecto

ðŸ“Œ Fase actual: AnÃ¡lisis y DiseÃ±o

* [x] Contexto del sistema
* [x] IdentificaciÃ³n de actores
* [x] Casos de uso
* [x] Modelo C4
* [ ] DiseÃ±o de base de datos
* [ ] ImplementaciÃ³n backend
* [ ] ImplementaciÃ³n frontend
* [ ] Pruebas del sistema

---

# ðŸ‘¨â€ðŸ’» Equipo de Desarrollo

**CristhLaw**

**puma13H**

**Eli Parillo**

Proyecto acadÃ©mico de IngenierÃ­a de Software.
