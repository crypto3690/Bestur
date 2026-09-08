# Bitácora operativa BESTUR

Esta bitácora concentra los cambios digitales y los resultados comerciales de bestur.mx.

## 1. Cambios en páginas

| Fecha | Página / PAGE_CODE | Cambio | Motivo | Estado | Verificación |
|---|---|---|---|---|---|
| 2026-09-08 | HOME-ES | Integración de chatbot y atribución | Reunir solicitudes completas y medir origen | En prueba | Pendiente validar publicación |

| 2026-09-08 | /prueba/ — HOME-ES | Conectar eventos existentes del formulario y minibot con receptor Sheets; medir enlaces de correo | Corregir ausencia de transporte en la copia publicada | Publicado en prueba; integración pendiente | Commit 3d35402d023166531e13753fc86800c9f9e3851d; sintaxis JS validada y marcador comprobado en URL pública. POST técnico devolvió página de error de Google Drive, no confirmación JSON. No se acredita registro en Sheets. Home principal sin cambios. |

| 2026-09-08 | /prueba/ — HOME-ES | Identificar botones de WhatsApp por ubicación y envíos del formulario por canal; añadir whatsapp_click al formulario | Separar clics de solicitudes completas | Código actualizado; despliegue pendiente de comprobar | Commit 13ff4386946c46dbef3ac627fe8b7b2f73cb228a; sintaxis JS válida. Conexión del minibot verificada mediante lectura de LEADS y EVENTS; pendiente prueba de cada botón y fecha del minibot. Sin cambios visuales. |

## 2. Redes sociales

| Fecha | Canal | Publicación / campaña | Objetivo | Inversión | Resultado | Próximo paso |
|---|---|---|---|---:|---|---|

## 3. Solicitudes web y servicios

La hoja maestra de Google Sheets es la fuente operativa de solicitudes y eventos:

- LEADS: oportunidades comerciales recibidas desde la web.
- EVENTS: comportamiento y acciones realizadas en las páginas.

Estados comerciales:

Lead → Cotizado → Pagado → Confirmado → Realizado

Una solicitud web no confirma por sí sola el servicio. La confirmación se registra únicamente cuando BESTUR envía la confirmación formal con folio y datos operativos definitivos.

## 4. Revisión semanal

Cada viernes revisar:

- solicitudes nuevas;
- folios duplicados;
- páginas que generan más contactos;
- origen de cada contacto;
- solicitudes cotizadas y pagadas;
- servicios confirmados y realizados;
- campañas y publicaciones realizadas;
- cambios pendientes en páginas.

## Regla de actualización

Cada cambio digital debe registrarse con fecha, página o canal, objetivo, estado y resultado. Cada servicio procedente de la web debe conservar su request_id para relacionarlo con WhatsApp, Google Sheets y el seguimiento operativo.
