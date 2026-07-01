# ⚖️ MINI BUFETE DE ABOGADOS

Sistema de gestión jurídica diseñado para optimizar la administración de clientes, abogados, casos legales, audiencias, documentos jurídicos y procesos internos de un bufete de abogados.

---

## 📋 Descripción

El sistema permite gestionar de manera eficiente la información jurídica y administrativa del bufete, facilitando el seguimiento de casos, la organización de documentos legales, el control de audiencias y la comunicación entre abogados, clientes y administradores.

---

## 🛠️ Tecnologías Utilizadas

* Java
* Maven
* PlantUML
* Arquitectura C4
* UML
* Git & GitHub

---

## 🏗️ Arquitectura y Modelado

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

## 📂 Estructura del Proyecto

```text
mn-bufete-abogados/
│
├── CONTEXTO/
│   ├── ContextoGeneral.md
│   └── Actores.md
│
├── DOCUMENTACION/
│   ├── RequisitosFuncionales.md
│   ├── RequisitosNoFuncionales.md
│   └── Glosario.md
│
├── MODELO_C4/
│   ├── Contexto/
│   ├── Contenedores/
│   └── Componentes/
│
├── MODELO_UML/
│   ├── ADMINISTRADOR/
│   ├── ABOGADO/
│   ├── CLIENTE/
│   └── GENERAL/
│
├── src/
│
├── pom.xml
│
└── README.md
```

---

# 👥 Actores del Sistema

## Administrador

* Gestionar usuarios.
* Gestionar abogados.
* Gestionar clientes.
* Gestionar roles y permisos.
* Supervisar el funcionamiento general del sistema.

## Abogado

* Gestionar casos legales.
* Registrar audiencias.
* Administrar documentos jurídicos.
* Realizar seguimiento de expedientes.

## Cliente

* Consultar información de sus casos.
* Revisar documentos autorizados.
* Consultar audiencias programadas.

---

# 📌 Casos de Uso

## Gestionar Usuarios

![Gestionar Usuarios](https://www.plantuml.com/plantuml/png/TT112i9030NG_S3S8NJVXUrUAYxSYj03X4wiWUaC9EcgU2gFuCMaIaMXtVuyaayQDHGRX-XTfAk1PH3kRmQ1XJhZdBp3phB08GoSM4qmPF7EktcEgOy4nOdK-Fb840XQ7L4uQm6JTm2ZKeUwc9nGVWGgjCVT1hlaI8kfDioPP63zhggzky_L_hf2MUu_PzRYQZsklMieXVTZNW00)

---

## Gestionar Clientes

![Gestionar Clientes](https://www.plantuml.com/plantuml/png/RP0n2iCm34LtW-yWl6TeahcaXDAzq0EOM4q5ZWoMCfMUgaVenKfIEfXaVNfVVAaJzLddALeJyQwW2JAD3uL06GUbnDRuGLE6KvY8IJJxaB8rrYnppsD4S1SKfS-R8I3qaP0LnS7J6e1PSF22uAuuhkdyDnnuWLj_AAnp8DqeTQb4ceWtKbD8VMAPutPLQyrhALzS0rLr_3NPm_K-RlPnQqs77DQFVW40)

---

## Gestionar Abogados

![Gestionar Abogados](https://www.plantuml.com/plantuml/png/RS_12i8m30RWUw7l47hVGRUpR0pnBlW0TOqrqBNGf2VngNm4NqocU2ZRzS-NyATdiLdA7BGAU1EG19dyNS1HnaaeHQti92d3u6QAn9AjIrahhPQvZJuWc1EoqFiLmI4Cr-IjIspWeHL0OPmi8vWp-kzs_Wi3bk4oxYfrT2Ghigz9e9dY2hKL6bFa4jQdEgsUI_dg6sYQmw_9LhpVZjljkDEgn-ZA73u0)

---

## Gestionar Casos

![Gestionar Casos](https://www.plantuml.com/plantuml/png/TPBFIiGm4CRlWRp3qFiUt3yzofOYUbmMrlkOZ3KGasLc2gBuL3w2BoRDjhAjUCoNttpppIHxKMJjNwCraPuLD0E7xaN11oQd8IThq6bcg9gdtA7FSE2GN3XZh005HlKFrKWGfQHqeQQJDTOCnfYwI53TasZu_ahW2LgKB1LyM0FG2paKWgfbGeQxjpFvyEjsQczcKEEqnnZU1r9qwEuf5hyHNy_m8tL1b96X5BeIuC3PaOn3dThDFnL7aXpxKZAIstbUuW6xwhsRtJyImqCGpHmmBcFMrdmE2vfsk5hTNcQT2-kbi5aAswMmMmfrwJEzofNFGggjsLFovOFy0000)

---

## Gestionar Audiencias

![Gestionar Audiencias](https://www.plantuml.com/plantuml/png/RP4xZW8n38RxIBc3bPw2HuqOJK6BLbfwavXWAJWeyLHeJxL7s8kjPXWUW-Yipvz--R6fYaMxSx8cqL51CnIE9uN0XRno5clGQoxWcaEE63Bi2eld2oO7M66a3wjDJA8qzCRQ6clwC9IO2DoMglBVhq0WQBh099wnEhXQ0z1LybW9N1D90fQdCIH-j_E9zKMNacF1ymTpCJ5R54_fWxQSQ7jwCIhinlJG3pZeAsj--eNkrvZDrhUffc3n3fRlO6NDU9yds924uHV_)

---
## Diagrama General

![Diagrama General](https://www.plantuml.com/plantuml/png/ZLVTRjis6Bqtu7SWl8jUfQZaE8w7BgWYgvc1r36akFTVgCyA4PeqI6fTDlIHTZ7i4V9Y0_LhKr9T1p3WmyEFty_HeV996r0ct_FnQ3pYk3F4IA9Ozcn8oXHImwImI_g5YGCes9Cde2-Pahb8Gycb8j-UcS5ZmW7e2sIOc5UEn8O0aV4JXdw6L7vZ8YCxu1fFu-SQAMWaVuz7jyvHlqJNdsVHOZowbIf5LO5-D5zE_V7e-saSe4Qg8iensRkTHVw7YbnIGivGs1BAdvFWIMQGIh9HJ51s03uXe4c5rgmWtJF1j56GIcLZDOMIIR9A7gCl0LbjurL2BiYNrNf5RhUVeyU8B2CIt3xS1Sk7P6AJitzLmyWao0qAmoXGzlQV8AzaWsh7U4KaX3JDcSIO5QShZKLwsz1p62l1A0D54jGsMiNoEt5eVa05YeHI60KQt_w5YZjrk7UehHn0DNaLj4kRtFUJGWgcBI554eAMkg-4H796cIcFrZatGEunWphipA672a6HwCy3fiMyAjgLGmkeoO6plonN6pl757cHHBLXxcpuYaFCwnxcxqmRgHZmez8Ayc9eGAJ8g9peHacAkYdH-p2uAKOjUKwF9kUv0mvH5NDh4_Ry7uzYAMc-Hs46vf4_CTLowfYk2fQeAQWCUgYNxYpoj9XlG2bggGcSP53kcPrH3pEWoIkneL1G1hsf1ncArFQ2cLgydYkC60zAPWhs3i_LGmY28dT8hXJQH-4uiPAx-7556yZw-nzZfLlBg1zNLo4T3LRXIhRNFJgK-rpKbj9tRFWCflR0YyhbwdYkMxIFx5UMekGSzf3MJV9TfSH8cPNKMXgsArAG0fjSUsoZDLLQTOkJX6c3U-ZBl1t2LkUWMDi7rpjQPbLemtHLSZJOiXKDqzL9oumbRmCEAsM3QizQm_1TnsYPaJuWPS1P2YdgqXMR4wQk9Dfz2QOjhMCNKknObblBQ7fQCjqftw4eReJ25T_-qVP6Qi9sBuMI7ED1AeFww6Oqx8-cscaxxkBhtM-3d_7e7GdlLz7wCJh36u-gSPABYvlo2Zm5V1UOki1bDyhC1QvTOD5pT2UornFQcfA3p3l8TNUVjG47yNfOdNBzJbRbOtUc-zKRojdkrszAJRDFWSikvye5vYvWxqG7yJg8turi1-0WFUUNvkpatKdSxyJwkROjxPjUyXW7ouVuVFEEto3hz6P3AzRIUl6h0Nm-W5yFu8j-tBfDB-uDuFu0FXt0VwQnSNGVXAk7TPIGrJgytoxF6uCL2Nd_ljGF-PLy_CW4vNcADpVLyhHUdhdBLZg3Y-FH9nHfyG_J_m00)
---

# 📊 Diagrama de Clases

![Diagrama de Clases](https://www.plantuml.com/plantuml/png/NOy_JuSm443t-nJTr07PZGD4J3HHIGG6OnoEScfDMqXx3Fxnkolz_KWBuxttSfShFAFZsMWuUMUU_4MUJnhjGixbQ7AfqVjiKFZcq01WxzcXP16uA8_ZdV8StKglHgr9iXejAClaNb6I26aSamOM9Iv_icoxDoPHxjRlciEHj4lSYZTDSjev_0mEmeyHY6-e-m-I_FmYI9CXonKoWbTVT7e6lm1aPoDQPQYpQichygc1cxfxRE3-zg5hhvl_gY0xp4R_0G00)

---

# 🧭 Diagramas por Usuario

## Administrador

### Diagrama de Estados

![Estados Administrador](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLdKdoSa70000)

### Diagrama de Clases

![Clases Administrador](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLdKdoSa70000)

### Diagrama de Secuencias

![Secuencia Administrador](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLdKdoSa70000)

## Abogado

### Diagrama de Estados

![Estados Abogado](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLdKdoSa70000)

### Diagrama de Clases

![Clases Abogado](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLdKdoSa70000)

### Diagrama de Secuencias

![Secuencia Abogado](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLdKdoSa70000)

## Cliente

### Diagrama de Estados

![Estados Cliente](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLdKdoSa70000)

### Diagrama de Clases

![Clases Cliente](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLdKdoSa70000)

### Diagrama de Secuencias

![Secuencia Cliente](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLdKdoSa70000)

---

# 🎯 Objetivos del Sistema

* Centralizar la información jurídica.
* Optimizar la gestión de expedientes.
* Reducir errores administrativos.
* Mejorar el seguimiento de casos.
* Facilitar la comunicación entre abogados y clientes.
* Garantizar la seguridad y confidencialidad de la información.

---

# 🚀 Estado del Proyecto

📌 Fase actual: Análisis y Diseño

* [x] Contexto del sistema
* [x] Identificación de actores
* [x] Casos de uso
* [x] Modelo C4
* [ ] Diseño de base de datos
* [ ] Implementación backend
* [ ] Implementación frontend
* [ ] Pruebas del sistema

---

# 👨‍💻 Equipo de Desarrollo

**CristhLaw**

**puma13H**

Proyecto académico de Ingeniería de Software.
