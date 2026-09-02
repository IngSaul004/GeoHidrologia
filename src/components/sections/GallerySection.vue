<template>
  <section class="info-section galeria-section" id="Galeria">
    <div class="info-content">
      <h2>Galeria</h2>
    </div>

    <div class="galeria-img">
      <img
        v-for="img in imagenes"
        :key="img.src"
        :src="img.src"
        :alt="img.alt"
        loading="lazy"
        decoding="async"
        width="220"
        height="150"
        @click="openLightbox(img.src, 'image')"
      />

      <video
        v-for="video in videos"
        :key="video.src"
        :src="video.src"
        preload="none"
        muted
        width="220"
        height="150"
        :aria-label="video.alt"
        @click="openLightbox(video.src, 'video')"
      ></video>
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
import { ref } from 'vue'

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
