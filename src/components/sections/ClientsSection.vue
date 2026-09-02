<template>
  <section class="info-section clientes-section" id="clientes">
    <div class="info-content" v-reveal>
      <div class="eyebrow">Confianza que se construye con resultados</div>
      <h2>Algunos de nuestros clientes</h2>

      <ul class="chip-list">
        <li v-for="(cliente, i) in clientes" :key="cliente" v-reveal="{ variant: 'scale', delay: (i % 6) * 0.06 }">{{ cliente }}</li>
      </ul>

      <div class="clientes-img">
        <div
          v-for="(logo, i) in logos"
          :key="logo.src"
          class="logo-card"
          v-reveal="{ variant: 'scale', delay: (i % 6) * 0.08 }"
          :style="{ '--shine-delay': `${i * 0.4}s` }"
        >
          <img
            :src="logo.src"
            :alt="`Logo del cliente ${logo.alt}`"
            loading="lazy"
            decoding="async"
            width="110"
            height="70"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clientes = [
  'CONSORCIO INMOBILIARIO GIG',
  'BIENES RAICES JARDIN REAL S.A. DE C.V.',
  'GRUPO INMOBILIARIO MXCASA S.A. DE C.V.',
  'JAVER S.A. DE C.V.',
  'GRUPO INMOBILIARIO ARA S.A. DE C.V.',
  'CONSORCIO DE INGENIERÍA INTEGRAL S.A. DE C.V',
  'GRUPO CONSTRUCTOR ADOBES S.A. DE C.V.',
  'GRUPO SAN CARLOS',
  'GRUPO CONSTRUCTOR SUDOCC S.A. DE C.V',
]

const logos = [
  { src: '/img/ARA.png', alt: 'ARA' },
  { src: '/img/GIG.png', alt: 'GIG' },
  { src: '/img/JAVER.png', alt: 'JAVER' },
  { src: '/img/MX.CASA.png', alt: 'MX.CASA' },
  { src: '/img/SAN_CARLOS.png', alt: 'SAN CARLOS' },
  { src: '/img/SUDOCC.png', alt: 'SUDOCC' },
]
</script>
