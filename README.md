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

1. **WhatsApp** — en `index.html`, busca `507XXXXXXXX` y pon el número real.
2. **Horario** — confirma los horarios reales (ahora: Lun–Sáb 9:00 a.m.–8:00 p.m.).
3. **Dirección** — verifica la dirección exacta y, si quieres, el enlace del mapa.
4. **Reseñas** — los testimonios son representativos; puedes sustituirlos por reseñas reales de Google.

## 📸 Fotos para elevar el sitio (opcional)

El sitio luce completo con las fotos reales + arte CSS. Para llevarlo al
siguiente nivel, puedes generar/tomar estas fotos profesionales y colocarlas en
`assets/img/gen/` (te indico dónde usarlas en el HTML):

| Archivo sugerido        | Uso                         | Formato | Idea de toma |
|-------------------------|-----------------------------|---------|--------------|
| `hero.jpg`              | Fondo del hero              | 16:9    | Mujer con cabello glossy / ambiente del salón, tonos blush y oro |
| `service-hair.jpg`      | Servicio Hair Care          | 3:4     | Peinado/balayage en acción |
| `service-nails.jpg`     | Servicio Uñas               | 3:4     | Manicure nude-rosa sobre mármol |
| `service-spa.jpg`       | Servicio Spa                | 3:4     | Facial relajante, pétalos |
| `service-barber.jpg`    | Servicio Barbershop         | 3:4     | Corte/barba de caballero |
| `gallery-1..3.jpg`      | Galería                     | varios  | Detalles del local, clientas felices |

Paleta para mantener coherencia: **rosa malva, oro champagne, negro cálido, crema.**

---

Hecho con cuidado para Nouveau Salon &amp; Spa · *Belleza que se siente.*
