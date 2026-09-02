<template>
  <section class="stats-band">
    <div class="stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-item">
        <div class="stat-number">{{ stat.number }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { number: '40+', label: 'Años de experiencia' },
  { number: '4', label: 'Equipos de perforación' },
  { number: '700 m', label: 'Profundidad máxima' },
  { number: '16+', label: 'Clientes y organismos atendidos' },
]
</script>
