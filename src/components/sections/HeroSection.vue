<template>
  <section class="hero" id="inicio" style="background-image: url('/img/galeria/6.jpg')">
    <div class="hero-overlay">
      <div class="hero-content">
        <h1>GeoHidrologia</h1>
        <p><strong>E</strong>studios <strong>G</strong>eologicos <strong>G</strong>eofisicos y <strong>P</strong>erforacion</p>
        <button @click="scrollToServicios">Más Información</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToServicios = () => {
  document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
