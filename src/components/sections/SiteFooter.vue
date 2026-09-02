<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand" v-reveal>
        <div class="footer-logos">
          <img src="/img/logo_geohidrologia_2.png" alt="Logo GeoHidrología" loading="lazy" width="80" height="42" />
          <img src="/img/Logo_perforacion_agua.png" alt="Logo perforación de agua" loading="lazy" width="80" height="42" />
        </div>
        <p>Estudios geofísicos, perforación y rehabilitación de pozos profundos de agua en Jalisco y México, con más de 40 años de experiencia.</p>
      </div>

      <div v-reveal="{ delay: 0.08 }">
        <h4>Navegación</h4>
        <ul class="footer-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#Galeria">Galería</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      <div v-reveal="{ delay: 0.16 }">
        <h4>Contacto</h4>
        <ul class="footer-links">
          <li><a href="https://wa.me/523334882221" target="_blank" rel="noopener">33 3488 2221</a></li>
          <li><a href="https://wa.me/523312284549" target="_blank" rel="noopener">33 1228 4549</a></li>
          <li><a href="https://wa.me/523310826595" target="_blank" rel="noopener">33 1082 6595</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ year }} GeoHidrología</p>
      <div class="social-icons">
        <a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
