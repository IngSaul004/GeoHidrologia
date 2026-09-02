<template>
  <section class="info-section" id="servicios">
    <div class="info-content">
      <h2>Nuestros Servicios</h2>
      <ul>
        <li v-for="servicio in servicios" :key="servicio">✔ {{ servicio }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const servicios = [
  'Estudios geofisicos para localizar agua subterranea, caracterizacion de rocas para la construccion, localizacion de anomalias subterraneas en la construccion',
  'Perforacion de pozos profundos para extraer agua subterranea, Contamos con 4 equipos con diferentes capacidadades desde 50 hasta 700 Mts de profundidad',
  'Rehabilitacion (limpieza) de pozos profundos para agua con equipo de percusion Bucryus-Erie 22w',
  'Equipo chico hidraulico para pozos de hasta 80 Mts en material tipo 1 y 2',
  'Extraccion y colocacion de columnas y bombas en pozos profundos',
  'Equipamiento de pozo completo en media y alta tension',
  'Bombeo y aforos en pozos de agua potable',
  'Video filmacion de pozos profundos, con camara sumergible con doble lente angular a color, horizontal y vertical 360°',
]
</script>
