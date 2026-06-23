/* ============================================================
   NOUVEAU SALON & SPA — interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---- Loader ---- */
  window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    if (!loader) return;
    setTimeout(function () { loader.classList.add("is-done"); }, 600);
  });

  /* ---- Year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Sticky nav state ---- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (window.scrollY > 40) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  var setMenu = function (open) {
    toggle.classList.toggle("is-open", open);
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  };
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(!menu.classList.contains("is-open"));
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
  }

  /* ---- Booking form -> WhatsApp ---- */
  var WHATSAPP = "50760000000"; // número del salón (6000-0000)
  var form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var hint = document.getElementById("bookingHint");
      var name = (document.getElementById("bf-name").value || "").trim();
      var phone = (document.getElementById("bf-phone").value || "").trim();
      var service = document.getElementById("bf-service").value || "";
      var date = document.getElementById("bf-date").value || "";
      var msg = (document.getElementById("bf-msg").value || "").trim();

      if (!name || !phone || !service) {
        if (hint) hint.textContent = "Por favor completa nombre, teléfono y servicio.";
        return;
      }

      var lines = [
        "Hola Nouveau ✨ Me gustaría reservar una cita:",
        "• Nombre: " + name,
        "• Teléfono: " + phone,
        "• Servicio: " + service
      ];
      if (date) lines.push("• Fecha preferida: " + date);
      if (msg) lines.push("• Mensaje: " + msg);

      var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n"));
      if (hint) hint.textContent = "Abriendo WhatsApp con tu reserva...";
      window.open(url, "_blank", "noopener");
    });
  }

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    reveals.forEach(function (el, i) {
      // gentle stagger for grouped siblings
      var delay = Math.min(i % 4, 3) * 90;
      el.style.transitionDelay = delay + "ms";
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
