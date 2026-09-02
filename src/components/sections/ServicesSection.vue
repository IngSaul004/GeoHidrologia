<template>
  <section class="info-section info-section--muted" id="servicios">
    <div class="info-content" v-reveal>
      <div class="eyebrow">Lo que hacemos</div>
      <h2>Nuestros Servicios</h2>
      <p>Soluciones completas para localizar, perforar, mantener y equipar pozos de agua profundos.</p>

      <div class="services-grid">
        <article
          v-for="(servicio, i) in servicios"
          :key="servicio.title"
          class="service-card"
          v-reveal="{ delay: (i % 4) * 0.08 }"
        >
          <div class="service-icon" v-html="servicio.icon"></div>
          <h3>{{ servicio.title }}</h3>
          <p>{{ servicio.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const icon = (path) => `<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="${path}"/></svg>`

const servicios = [
  {
    title: 'Estudios geofísicos',
    text: 'Localización de agua subterránea, caracterización de rocas y detección de anomalías subterráneas para construcción.',
    icon: icon('M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z'),
  },
  {
    title: 'Perforación de pozos profundos',
    text: 'Extracción de agua subterránea con 4 equipos de diferentes capacidades, desde 50 hasta 700 metros de profundidad.',
    icon: icon('M12 2v14m0 0l-4-4m4 4l4-4M5 20h14'),
  },
  {
    title: 'Rehabilitación de pozos',
    text: 'Limpieza de pozos profundos para agua con equipo de percusión Bucyrus-Erie 22W.',
    icon: icon('M4 4v6h6M20 20v-6h-6M4.5 15a8 8 0 0014.4 3.4M19.5 9a8 8 0 00-14.4-3.4'),
  },
  {
    title: 'Equipo chico hidráulico',
    text: 'Perforación en pozos de hasta 80 metros en material tipo 1 y 2.',
    icon: icon('M14.7 6.3a3 3 0 11-4.2 4.2L4 17v3h3l6.5-6.5a3 3 0 014.2-4.2z'),
  },
  {
    title: 'Columnas y bombas',
    text: 'Extracción y colocación de columnas y bombas en pozos profundos.',
    icon: icon('M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5'),
  },
  {
    title: 'Equipamiento eléctrico',
    text: 'Equipamiento de pozo completo en media y alta tensión.',
    icon: icon('M13 2L4 14h6l-1 8 9-12h-6l1-8z'),
  },
  {
    title: 'Bombeo y aforos',
    text: 'Bombeo y aforos en pozos de agua potable.',
    icon: icon('M12 2.5s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z'),
  },
  {
    title: 'Video filmación de pozos',
    text: 'Cámara sumergible con doble lente angular a color, visión horizontal y vertical 360°.',
    icon: icon('M15 10l5-3v10l-5-3M4 6h9a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z'),
  },
]
</script>
