---
name: bestur-seguimiento
description: Registrar cambios web, publicaciones de redes y seguimiento de solicitudes BESTUR; conciliar folios con la hoja maestra y preparar cierres diarios y reportes semanales.
---

# Seguimiento BESTUR

Usar para el proyecto BESTUR de transporte y experiencias en San Miguel de Allende. Mantener el foco en completar captación, seguimiento comercial y medición; no abrir iniciativas nuevas por defecto.

## Fuentes y registro
- Repositorio: crypto3690/Bestur. Bitácora digital: docs/BITACORA_BESTUR.md. Leer su versión actual antes de actualizar.
- Localizar en Google Drive la hoja privada «BESTUR — Leads y Conversiones Web» y verificar el archivo antes de escribir; no incluir su enlace privado en el repositorio.
- LEADS contiene oportunidades comerciales; EVENTS contiene comportamiento. Leer encabezados y filas relevantes antes de escribir mediante la skill de Google Sheets.
- No publicar nombres, teléfonos, correos, itinerarios personales, importes identificables de clientes ni claves en GitHub. La bitácora digital contiene cambios técnicos y actividades públicas de marketing.
- No tratar una intención, un archivo preparado o un clic en WhatsApp como publicación, mensaje enviado, registro guardado o venta verificados.

## Cambios web y redes
Por cada cambio realizado registrar fecha local, página/PAGE_CODE o canal, objetivo, detalle, estado, evidencia (commit, URL o comprobación), limitación y siguiente paso.
Distinguir preparado, en prueba, publicado y verificado. Una compilación correcta no acredita despliegue correcto.
Para redes distinguir borrador, programado y publicado. Registrar URL y fecha real cuando existan, inversión autorizada y resultados observados con período. No inventar métricas ni publicaciones.
Mantener diseño, CSS, imágenes, tarifas, capacidades y lógica operativa existentes salvo autorización específica. Solo usar precios, servicios y políticas autorizados.

## Solicitudes aportadas por el usuario
Aceptar texto libre o captura. Extraer folio/request_id, origen, servicio/ruta, nombre, fecha de servicio, pasajeros, estado y monto conocido. Preguntar solo los datos imprescindibles faltantes.
Buscar primero request_id en LEADS. Si existe, completar la fila sin sobrescribir datos con vacíos ni borrar atribución first-touch.
Si no hay folio, buscar coincidencias de fecha, contacto y servicio; aclarar coincidencias ambiguas antes de fusionar. No fabricar un folio HOME-ES para una entrada cuyo origen web no esté confirmado.
Conservar los datos desconocidos como pendientes, nunca como cero o hechos.
Registrar avance según evidencia: Lead, Cotizado, Pagado, Confirmado, Realizado. Un pago no implica confirmación formal ni ejecución. BESTUR confirma únicamente al enviar folio y datos operativos definitivos. Separar monto cotizado, pago parcial, venta y saldo; no sumar cotizaciones como ingresos.
Verificar por lectura posterior cualquier escritura y reportar fallos explícitamente. La integración automática web sigue pendiente de validación hasta observar una fila de prueba correspondiente al folio.
Si el usuario pide registrar sin herramientas disponibles, ordenar la información como pendiente y no afirmar que ya se guardó.

## Rutina
El recordatorio diario pregunta brevemente por solicitudes nuevas, cotizaciones, pagos, confirmaciones, servicios realizados y publicaciones/cambios del día. El usuario puede responder sin formato.
El viernes proponer cierre semanal: leads únicos, cotizados, confirmados, realizados, importes definidos, origen y pendientes. Declarar período, cobertura y faltantes; no dividir por cero ni confundir consultas con ventas.
Usar tareas programadas para avisos proactivos. La skill por sí sola no envía avisos ni observa WhatsApp; no prometer vigilancia continua ni reportes externos sin acceso.
En cada entrega explicar sencillamente qué quedó hecho, dónde, cómo se verificó y el siguiente paso. Mantener el avance ya autorizado y evitar confirmaciones repetidas.
