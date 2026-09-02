<template>
  <section class="info-section clientes-section" id="clientes-gobierno">
    <div class="info-content">
      <h2>Clientes gobierno</h2>
      <ul>
        <li v-for="cliente in clientesGobierno" :key="cliente">{{ cliente }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const clientesGobierno = [
  'H. Ayto. De Tlajomulco De Zúñiga, Jal.',
  'H. Ayto. De Chapala, Jal.',
  'SIAPA, sistema de agua potable y alcantarillado.',
  'H. Ayto. De Jocotepec, Jal.',
  'H. Ayto. de Mascota, jal.',
  'H. Ayto. de Tanhuato, Mich. Localización de agua subterránea con geofísica aplicada, así como el diseño constructivo de las obras de perforación de pozos profundos.',
  'SECRETARÍA DE INFRAESTRUCTURA Y OBRA PÚBLICA. SIOP Jalisco.',
]
</script>
