<template>
  <section class="info-section galeria-section" id="Galeria">
    <div class="info-content" v-reveal>
      <div class="eyebrow">Nuestro trabajo</div>
      <h2>Galería</h2>
      <p>Proyectos de perforación, rehabilitación y estudios geofísicos en campo.</p>
    </div>

    <div class="gallery-tabs" v-reveal>
      <button
        v-for="tab in tabs"
        :key="tab.value"
        class="gallery-tab"
        :class="{ active: activeTab === tab.value }"
        @click="activeTab = tab.value"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="galeria-img">
      <div
        v-for="(img, i) in visibleImages"
        :key="img.src"
        class="gallery-item"
        v-reveal="{ variant: 'scale', delay: (i % 8) * 0.05 }"
        @click="openLightbox(img.src, 'image')"
      >
        <img :src="img.src" :alt="img.alt" loading="lazy" decoding="async" width="230" height="160" />
        <div class="gallery-scrim">
          <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
        </div>
      </div>

      <div
        v-for="(video, i) in visibleVideos"
        :key="video.src"
        class="gallery-item"
        v-reveal="{ variant: 'scale', delay: (i % 8) * 0.05 }"
        @click="openLightbox(video.src, 'video')"
      >
        <video :src="video.src" preload="none" muted :aria-label="video.alt" width="230" height="160"></video>
        <div class="gallery-scrim">
          <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3l14 9-14 9V3z" /></svg>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="selectedMedia" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <img v-if="selectedType === 'image'" :src="selectedMedia" alt="Vista ampliada" />
        <video v-else-if="selectedType === 'video'" :src="selectedMedia" controls autoplay></video>
        <button class="lightbox-close" @click="closeLightbox" aria-label="Cerrar">✕</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const imagenes = imageNumbers.map((n) => ({
  src: `/img/galeria/${n}.jpg`,
  alt: `Trabajo de perforación y estudio geohidrológico realizado por GeoHidrología en Jalisco - imagen ${n}`,
}))

const videoNumbers = [1, 2, 3]
const videos = videoNumbers.map((n) => ({
  src: `/img/galeria/${n}.mp4`,
  alt: `Video de trabajo de perforación realizado por GeoHidrología - clip ${n}`,
}))

const tabs = [
  { value: 'todos', label: 'Todos' },
  { value: 'fotos', label: 'Fotos' },
  { value: 'videos', label: 'Videos' },
]
const activeTab = ref('todos')

const visibleImages = computed(() => (activeTab.value === 'videos' ? [] : imagenes))
const visibleVideos = computed(() => (activeTab.value === 'fotos' ? [] : videos))

const selectedMedia = ref(null)
const selectedType = ref(null)

const openLightbox = (src, type) => {
  selectedMedia.value = src
  selectedType.value = type
}

const closeLightbox = () => {
  selectedMedia.value = null
  selectedType.value = null
}
</script>
