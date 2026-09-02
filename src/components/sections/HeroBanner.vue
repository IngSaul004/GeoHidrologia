<template>
  <section class="hero hero-middle" :style="{ backgroundImage: `url('${image}')` }">
    <div class="hero-overlay" :style="{ backgroundColor: overlayColor }">
      <div class="hero-content">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
  overlayColor: { type: String, default: 'rgba(0, 0, 0, 0.6)' },
})
</script>
