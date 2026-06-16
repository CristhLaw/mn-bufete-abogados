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

![Gestionar Usuarios](COLOCA_AQUI_TU_URL_DE_PLANTUML)

---

## Gestionar Clientes

![Gestionar Clientes](COLOCA_AQUI_TU_URL_DE_PLANTUML)

---

## Gestionar Abogados

![Gestionar Abogados](COLOCA_AQUI_TU_URL_DE_PLANTUML)

---

## Gestionar Casos

![Gestionar Casos](COLOCA_AQUI_TU_URL_DE_PLANTUML)

---

## Gestionar Audiencias

![Gestionar Audiencias](COLOCA_AQUI_TU_URL_DE_PLANTUML)

---
## Diagrama General

![Diagrama General](https://www.plantuml.com/plantuml/png/ZPRDRkCs4CVlUWeYFUmf2qloXrriWxLbxTP0rWciUEyJQgmGIv46INMRBlf8FHHzXBnO9ONo1oKv6-GoV_uu7Fw76lYZDg1CaNEFuyuG8ubYsPCXALD83PF2y_Gt9lQW82UFGBzbIXOYZIINYdn_OWPFrlVbEcIOc6UEfDeF8kEdW7w2L7vd8YCxu1fFSnSQAMWaFxo5SyelyVJJA9vv2wbIL5OBuiao3Bo_JrC0DUNIZtFGNupYO521hyiHPoWCskXg_YWpI2MvLqnGjWT-HK0JgrfedkPCC6rKAIdFEroCN2Mhv27-CYUhxMQLa6loPRLUaSNsK_mGasLCvekxp_FbNN9L5kLvrftopCAWC8m2PI__2V9Cxb7j6AyfGiZ1YgiDPlMnIcDTrZRopu6LO9I18WdgAfM50ZSBBVQeIYoImgXIU_aNB1gUevzHLpq7PKkorD0h_RFrMwgkF4KIWPQwNNaYEQFCl9wf2sw0t686JSBHEHqfBCduppscTNCiDJwdvjGKmDbV5QfDrRGKULs0vIVd_5Vi0wTjy7UcZLGC-E5Ibftrj8HKvTWEtYj9KHzkvm_wzcnGIrxKcnhMTwn0LOAdnVf1l_jBIOiSXUbiGV78r95eiZaTNwAce3Be88UE_KNAJ7rlYbfg0gUdsosZ2m-5cP9v9bKQ59H1Hydp34KAgcQRb6FNoxsIcOBSmIQEZI0eSeUPzZtsOqqDEkk_o3raNNPlqBxDQhtv40UN7vhDPM7__Cn8veLeXaJxlEW9J3FChksyQZ85VH_ZLvQYv1noIA61mzQqODN3MKl3TlNnKk2XHcSI72SZjVPmafGnvc0hxlHxgmjGx7ZpKHzextS0ntsWDU00Jlh0ZUJ7TDCBqozd-fXkrWV6Ue-K0MSffAZh6NVC7mxwjYMO7Ybt0aYnOrcXG3LMDc3WfXEecc7uya-PkzGRDkncDxYNog0cnyuPzeSyRAlwM_-_-wttptj7ejjLl7w8BrAURHwvlhwfFYad3fmuTEAXcs3an5CddhLE35rXs4B6hZ1nXQcx9nYuWjz20bS8NM7ubiNsjyDbY-spRv8wyT05nauySM9_u0g-AmIUguIkC6mXirQbWIiuMNx6e6NrQojvs9GkRIxRTFO3hYbgrAq7esvvt2rFkkLfjpphbCD1j-ntoq6t77RBR_guYM_dqUfk7ITajOvkjyitFklg4P3txr-V1_cLVFZ01EL5YZStzMBOB8wSnL8QzgrzH94MEVyV)
---

# 📊 Diagrama de Clases

![Diagrama de Clases](https://www.plantuml.com/plantuml/png/d5J1ZjCm4BttAopjWHDIjs85NGa9rt6xbfAuikCLd5PkuhPcqxYA7HM1zYlu97uCnqdP9d0fxMNcpSnxCsCxdwoJjMiE9I224VuKQRchvK6YKbfb9_PPLqVf0P1xm4BdQhrfd2AvgRZ-hi1qdB8qbGkHszb5oEvbOKwwse6jBAswY6na_hohJLCLo9Ic1gUzTcfC2dvC05YCCc-M7vRp9MmZfYvKtQFlvdVJk_SUVL3IetzLpLNx_nDl-xrK1k0LkPdTpkvcSu-TTE7su7OwdHw_JLucapVWupK_duzJaM064Q4fvbVNJrJL702spgyHIMl2Gk22O9PHR-7qQSqemhnte8W8JX61tcMO2no7D8GPWr5hGOOUo6DhlmourtBNSQznsb9akBNXggjwR3cx-bJ4C1f8ZwcGThAZOdJ5O08ZsBP0qoLXmGcrI31E0vwiOvprIJ15EEviXb_hHmgmARIgSZsI6J5pmSCmPtaK2p9I6T969cyEgdBT8XOqx8or2c8H4zID7OOOhTBBnYGXwULQCtqS4KOuWUcvcOp1Z7Q7H6FHNeumYS2BC0L7Z8GupTYG4-QkaRasLJyxvZZDO4zmUVmfpSYIe7E8uVDU8XAJLSWQw0zKKkFqLkUlGWXsfqKos5sCm4IHIBmy7KbpmZC_x80nKPMLNrKWo_3dR5nF4kYR-aSnCwMmZQorwHg9pxSJBcX_FM7ab-_BmddztojDVlsCH4plWU02Ca8v-08uNWb68XXT_shbnhfQvgx_YbqEy1ReuXx4fje5fsbQbxjQzq1b3fjQsG4cZweiTM66g3f8NGwGenSxcRfua7O_23XLggsfp03S_cxTM7RZHevtVmMX4tSZ6_O2kGZ18h8qjWL8yaAIVGc2e8OiZTjfiedgvc1jv1ToodVaa6kk_h5biScfgM6Bq6ZaYyVTrLtlHnNRBhXFf6-08fXr1_RMEOjG2vxFIBr5b3kRvBeBH4VnOYo-m1bXRpxCQm7s70BUcGe5eBTaQxu_2DNQOAhEu0lqRhh_fmpQW7Km1L2kH76yaSEuyfFGp0SBg9O6wBS1AeUU4ZbUjxY6hRDhPyg8SI2vEujqRsnUGc2bN46p3UQTDOK9G3TOj0rIps6-3R4Uf4aB9ZmFxfzOJubbKuu6T6ODrW470ofhevHM6iA2SSZgAEHhA4p5PxSbs6-xZZIO7CAg8VGRvZKxPwxshGsGb-WBCesSxgdc_3HoTsKy_zCprvV6XoY-5TOb42U8lATkHwl76IpT2aft4Js4BsNW_Z3X87bOkRnoFKTlpUeSEmR17cS5-Erp33OIyy7uuCY0xHQ5997kQSGwIBTkAoHtvYok38IMG0l8DrWOiAQ44dsyANhEZ_yvl_YzGOgvwIIxg0EkaFhTfN4xAlEDgytIedQd09rXm0T7iCrTj5f284PGzhQGxp0iEpkcAiM3EdASORznaWd0jeaIhWm7CTfad1mtAEGIvG4RqD_85UZ1wfjkq3lRFkugWOtC8n5GWWctz4Zh7YdwbC-kq8Tk4sXJDUGm_ehN2BnOH5cPkYUwT3JQXLcZZT58wxR41YW0PtfHia8TWwEOdjwzSHPzhcckiPTNuoXW7apZ93hrddDHcy9i-_Im_ixKMulTdSjl0V_sTxbri0VZEN0oLfPt5B6hxysg9Q3RRXSho0iBQnJ4Qx2EKY9cUGQWA1i_LZqFiNkB9IQSi9E2oeyg7MhVaUWpdxkOD6zMTH-kA-DTtl3VOZxQtjUkU1Ja2iC0bM1Zs3cGbSgLhNKxt2aeIGsZsdXxq5mAkr8choXzpfEpRO1x970O0BY_44m75cZl5xTt5p_-SvrTBjwVNkvzqoWrcEf8WZ_lxWWWY3vcPPM8gbiIQv1YHf5SB0MJGI9CRdLtcGhA1q0QCeuu7-cmf2EZjguwk1iiB7INgZJwREKRkzwI3Acm5eDuFX-o4xahdyzK7UAYjLoU-E3kN03BM8MfqMdF3VWxWjeNBP4fsNj5OYhiUWvWlBlhR99a7pOUWL52_zf-vo93hPdQ1-14fDK30Sd09Qx0gerqv9zNzhmsOrL6kDfEyp3-IYHqfIO-gB8wRNvk9_2TsFd9iZ4BkdJT8EfWGgsfSHfh9yUKKbJiKgtphF-ASUy8J7PlOa7ZKhv1o2MoLlISUYZUfKEaBfkK3s6VQgUDXqX51F-mZGhCV9oV5TAYCluX4Sa0OGfGk3fWRNP4r5ZuxauRjF6C2cN0ooNer5v755e-4LIMn7EtwdRsh6SfDeIYmvAQJ49kdvhGPDPq65_YBfiR4sbDxxLaJsq51TOGUyt4GEEKYYzchNS2L50Rz_PRGBz5RMKglFlMQ7g_WF_IcqJCTAgEGVBQP4Ohl6sN7NJAJJtlQ9TZ6soNrXIwXEn1AOUH_YiUIt31_yvOtBOybYZG2YYNibkc3PBAad9CLF-Vo9uFLqegqjC34KYUcXh4WdpMCbZT4ImL17az9JtJd9ObeTUXhFL8fntnGQtYxoOulpCrgXoNwXhnWIx4eybkQYU3o2UxKXnWArc9KBWrJuca72hmArEtmNbjZ9KhO-IPgHGPwtnXMLieyBCfqN6hXeHIESoc6H7u6TJ5463tgn4OeQ5g9zOIDkHM1BpUpypU9OOwgbAB-2cFvAHgFyFbpGwUUrF7SZ3L92z4BAcAJNyhI2R33SXyBdoK-iTANUj_tBr1i7f7sO1G4cCKMDZDERAmVx6H5gvlVODrYJDAOVKNjZMKJn1E5SA59AGqmNt_OvDJSg1Pc5Qxa9vhpyp52sYWK1tIy-Tm_YZozFJDayc7BPHt5KEJ-UUuYYNCn1Y-Pop12cp2pgKON8IPslrdh1E3PDddKoc_A5nfLgxlkY2XKLSrv9QWUwM3kfacjW9iuteGLBSpWKUizqn8aZokioxpgg-N7lJA4UZkyz2qzl7gqpL_nkEPnvCpcgkvI8A7cWBmRHtSN7sxns2Wx-_6xtqf5M6zDa03G3xf1ewb1XrlwGGQVyKBOYqsIGTXWF7NxXBx_hwDSrSPuka6Shmq8P9qapAbh5-rZ2qXgaiiGflE5mCBkyUukzEBZx7v2gW0wdbEzOgScjtPBZyAq9hArAcsgS-hjXyKJJAe-FSjM9YTL6ZkPLIzRo65VfBjLWHBtHl6ZkGzhqU9wIupmBsZ2jA9KQqcwuw8K2-PUisIJjYRbgPqnMa_J8mPgy6FqbQuVU76564_K-JkRHgQuu11LlOoGr3IYVwkbgHkl9yf6G-BdDm8t7sy-V7lqtrlsQuTWwDqxOXra8fUhrsesFg0R4_hW6GSeP_kNRF7wdLbMdfjeUkT_Vgp-R8stRnfavmPLYrRp_dIqI8A9jyHsd5cT6ZMfuRFPZDXV7_p-B2uwRl3lOyEn6H_-TVBb-FtUBquV4RMY-fBubC8lbbS3e_7ilE5l4bvClr7rqTPHnV_nP_SJh9WiCRirnVyBzaSFsHr08QB_syCSX3vyOFD4zx03SBEZjumSRzcHwzVlVhvA7x2ETcyJkZ86nIG1Xm_G38Wh_HGFtVCCbJtSskqVyBPVnIBhCk9UEzq_7ooyOFPWp9zrQWYMH56e2UJIpu40LUEp7Tcjt4ap3_kVECyCiQ3xV60mMNaLgjAPbL2OpJSML3VBXbIbhJ09uCmqLFw_lIPs24yXzGEdLNDE0LxmabyQQDT8Wd6bbUow7X10NK_PNIonJjtyVes3GZMVHKNIsFrhZ1SJoRWz7qIdGwNkRJdXuivjkidmviapOO6UawpER0NL4tW94eCNi1-1nHCOHecMP_HJXKx81qjaywaOB5U__ZlZDkfXkCa5kOF2LXHTvBDqw2BRzPTOPRFOLc759fIOMufv8reGmBLamZbHy1FY2sr2vW5rsJkFfDtdVt_3CZ6bwsGBS7Zg_uvFKLdBRj3iBIG_VX_RGh8yjkBw_UNYt_SdRwzNFpKGPR65zHtcgKZJc9Lqsc9d3rwWNMPCTeN4JcPrPV0w8Vt4qFzc1LO1mBReRAPZszTEXBKgmreWuikLxeivrTvFEJ4eks9P3BmwqdyJmylVtdzovzVlkx-lDabOEb2S1LJi54HlvOUbN7tyRmBu1PyviRtdUXPHZUVphU9OsU2B11yXwNfCt07z2qhsggnmpYDDTnQO1JkrHOPV-r-jfNz0m00)

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

Proyecto académico de Ingeniería de Software.
