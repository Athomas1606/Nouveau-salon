# Nouveau Salon &amp; Spa — Sitio web

Landing page de una sola página para **Nouveau Salon &amp; Spa** (Ciudad de Panamá).
Diseño rosa, femenino y editorial — inspirado en [emmar.se](https://www.emmar.se)
(editorial, aire, serif) y [ever.co.id](https://www.ever.co.id) (premium suave,
rosado, formas redondeadas), adaptado al logo real de la marca.

## Estructura

```
index.html            Página principal
css/styles.css        Sistema de diseño (paleta rosa/oro, tipografía, layout, responsive)
js/main.js            Nav, menú móvil, animaciones, loader
assets/img/brand/     Logo real de la marca (logo.png)
assets/img/gen/       Fotografía editorial (hero, bienvenida, servicios)
assets/img/real/      Fotos originales del local (no usadas en el sitio actual)
```

## Ver el sitio

Sitio 100% estático:

```bash
python3 -m http.server 8080   # abre http://localhost:8080
```

## Identidad

- **Paleta:** blush / rosa malva / oro champagne / plum oscuro / crema (derivada del logo).
- **Tipografía:** Cormorant Garamond (display serif), Italianno (script), Jost (sans).
- **Logo:** se usa el logo real de la marca como medallón + wordmark.

## Datos del negocio

- WhatsApp: **6000-0000** (`wa.me/50760000000`)
- Horario: Lun–Sáb 9:00 a.m.–8:00 p.m. · Dom cerrado
- Instagram: [@nouveausalons](https://instagram.com/nouveausalons)
- Dirección: Planta baja, PH Ilina Iatorraca, C. Matilde Obarrio de Mallet, San Francisco, Ciudad de Panamá

## Imágenes

| Archivo                  | Uso                  | Estado |
|--------------------------|----------------------|--------|
| `brand/logo.png`         | Logo de la marca     | ✅ real |
| `gen/hero.jpg`           | Hero                 | ✅ |
| `gen/welcome.jpg`        | Bienvenida + galería | ✅ |
| `gen/service-hair.jpg`   | Hair Care + galería  | ✅ |
| `gen/service-nails.jpg`  | Uñas + galería       | ✅ |
| `gen/service-spa.jpg`    | Spa + galería        | ✅ |
| `gen/service-barber.jpg` | Barbershop           | ⏳ pendiente — la tarjeta usa un mosaico de marca mientras tanto |

> Nota: es una **demo**. Las fotografías editoriales son representativas y pueden
> reemplazarse por sesión fotográfica real o imágenes generadas con ChatGPT
> (paleta: rosa malva, oro champagne, crema). El logo es de baja resolución
> (150×150); para producción conviene una versión vectorial/alta resolución.
