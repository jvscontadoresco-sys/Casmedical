# Publicar el inicio en GitHub Pages

Repositorio: `jvscontadoresco-sys/Casmedical` → https://jvscontadoresco-sys.github.io/Casmedical/

## Qué subir

Reemplace el `index.html` actual del repositorio por el de esta carpeta y agregue:

```
index.html
manifest.webmanifest
sw.js
iconos/logo-horizontal.png
iconos/icono-192.png
iconos/icono-512.png
iconos/icono-maskable-512.png
iconos/apple-touch-icon.png
iconos/favicon-32.png
```

En GitHub: **Add file → Upload files**, arrastre todo (incluida la carpeta `iconos`) y
**Commit changes**. En uno o dos minutos queda publicado.

## Qué cambia para el usuario

- El enlace de siempre abre un **inicio** con tres botones: Nómina, Recordatorios de
  pago y Tablero financiero. Arriba queda una franja para saltar entre las tres sin
  volver al inicio. Cada app se carga una sola vez y volver a ella es instantáneo.
- Enlaces directos: `…/Casmedical/#nomina`, `…/#recordatorios`, `…/#tablero`.
- **Android (Chrome):** aparece "Instalar CasMedical". Al dejar presionado el ícono
  salen accesos directos a Nómina, Pagos y Tablero.
- **iPhone (Safari):** Compartir → **Agregar a inicio**. Queda con el logo de CasMedical
  y abre a pantalla completa.
- En computador funciona igual en cualquier navegador.

## Si cambia el enlace de una app

Edite al final de `index.html`:

```js
var URL_NOMINA = 'https://script.google.com/macros/s/<ID>/exec';
```

y suba `VERSION` en `sw.js` (por ejemplo `casmedical-v2`) para que los teléfonos que ya
instalaron la app reciban el cambio.
