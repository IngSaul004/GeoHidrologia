<template>
  <section class="hero hero-middle" :style="{ backgroundImage: `url('${image}')` }">
    <div class="hero-overlay">
      <div class="hero-content" v-reveal>
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
})
</script>
