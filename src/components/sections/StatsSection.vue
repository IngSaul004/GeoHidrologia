<template>
  <section class="stats-band" ref="sectionEl">
    <div class="stats-grid">
      <div v-for="(stat, i) in stats" :key="stat.label" class="stat-item" v-reveal="{ variant: 'scale', delay: i * 0.1 }">
        <div class="stat-number">{{ displayed[i] }}{{ stat.suffix }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { target: 40, suffix: '+', label: 'Años de experiencia' },
  { target: 4, suffix: '', label: 'Equipos de perforación' },
  { target: 700, suffix: ' m', label: 'Profundidad máxima' },
  { target: 16, suffix: '+', label: 'Clientes y organismos atendidos' },
]

const displayed = reactive(stats.map(() => 0))
const sectionEl = ref(null)
let animated = false
let observer = null

function animateCounts() {
  if (animated) return
  animated = true
  const duration = 1200
  const start = performance.now()

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    stats.forEach((stat, i) => {
      displayed[i] = Math.round(stat.target * eased)
    })
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') {
    animateCounts()
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounts()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.35 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})

onUnmounted(() => observer?.disconnect())
</script>
