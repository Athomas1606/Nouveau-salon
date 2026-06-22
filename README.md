# Nouveau Salon &amp; Spa — Sitio web

Sitio web de una sola página para **Nouveau Salon &amp; Spa** (Ciudad de Panamá).
Diseño artesanal, elegante y de lujo — sin plantillas genéricas.

> Estética: blush / oro / negro / crema · tipografía serif de alto contraste
> (Cormorant Garamond), script (Italianno) y sans geométrica (Jost) ·
> logo de diamante en SVG · patrón de celosía inspirado en el papel tapiz real del local.

## Estructura

```
index.html            Página principal (todas las secciones)
css/styles.css        Sistema de diseño completo (paleta, tipografía, layout, responsive)
js/main.js            Nav fijo, menú móvil, animaciones de aparición, loader
assets/favicon.svg    Logo de diamante (favicon)
assets/img/real/      Fotos reales del salón (interior, letrero)
assets/img/gen/       Carpeta para fotos profesionales adicionales
```

## Ver el sitio

Es un sitio 100% estático. Ábrelo directamente o sirve la carpeta:

```bash
python3 -m http.server 8080
# luego abre http://localhost:8080
```

## ⚙️ Por personalizar (datos de marcador de posición)

Reemplaza estos valores con la información real del negocio:

1. **WhatsApp** — configurado como `6000-0000` (`wa.me/50760000000`). Ajusta si cambia.
2. **Horario** — Lun–Sáb 9:00 a.m.–8:00 p.m., Dom cerrado (confirmado).
3. **Dirección** — verifica la dirección exacta y, si quieres, el enlace del mapa.
4. **Reseñas** — los testimonios son representativos; puedes sustituirlos por reseñas reales de Google.

## 📸 Fotos

Imágenes ya integradas en `assets/img/gen/`:

| Archivo              | Uso                  | Estado |
|----------------------|----------------------|--------|
| `hero.jpg`           | Fondo del hero       | ✅ integrada (recortada y tratada) |
| `service-hair.jpg`   | Servicio Hair Care   | ✅ integrada |
| `service-nails.jpg`  | Servicio Uñas        | ✅ integrada |
| `service-spa.jpg`    | Servicio Spa         | ✅ integrada |
| `service-barber.jpg` | Servicio Barbershop  | ⏳ pendiente — la tarjeta usa un mosaico de marca mientras tanto |

Para añadir la de Barbershop: coloca `service-barber.jpg` (formato 4:5, paleta
negro cálido + oro + rosa) en `assets/img/gen/` y avísame para conectarla.

Paleta para mantener coherencia: **rosa malva, oro champagne, negro cálido, crema.**

---

Hecho con cuidado para Nouveau Salon &amp; Spa · *Belleza que se siente.*
