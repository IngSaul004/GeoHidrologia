<template>
  <section class="hero" id="inicio" style="background-image: url('/img/galeria/6.jpg')">
    <div class="hero-overlay">
      <div class="hero-content" v-reveal>
        <span class="hero-badge">💧 Más de 40 años de experiencia en Jalisco</span>
        <h1>Estudios geofísicos y perforación de pozos de agua</h1>
        <p class="lead">
          Localizamos agua subterránea, perforamos y rehabilitamos pozos profundos con tecnología
          avanzada. Resultados confiables para constructoras, desarrolladoras y gobierno en todo México.
        </p>
        <div class="hero-actions">
          <a
            class="btn btn-primary"
            href="https://wa.me/523334882221?text=Hola,%20quiero%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener"
          >
            Cotiza por WhatsApp
          </a>
          <button class="btn btn-ghost" @click="scrollToServicios">Ver servicios</button>
        </div>
      </div>
      <div class="scroll-cue" aria-hidden="true"><span></span></div>
    </div>
  </section>
</template>

<script setup>
const scrollToServicios = () => {
  document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
