<template>
  <div class="inicio-view">
    <HeroSection />

    <AboutSection />

    <HeroBanner
      title="Proyectos de Perforación"
      text="Calidad y precisión en cada perforación. Garantizamos resultados confiables para el suministro de agua."
      image="/img/galeria/8.jpg"
    />

    <ServicesSection />

    <HeroBanner
      title="Estudios Hidrogeológicos"
      text="Identificamos recursos subterráneos y caracterizamos el terreno con tecnología avanzada."
      image="/img/galeria/17.jpg"
    />

    <ClientsSection />

    <HeroBanner
      title="Maquinaria y Equipo"
      text="Contamos con equipos de última generación y herramientas especializadas, que nos permiten realizar cada trabajo con precisión, rapidez y máxima seguridad."
      image="/img/galeria/1.jpg"
    />

    <GovClientsSection />

    <HeroBanner
      title="Tecnología y Experiencia"
      text="Combinamos más de 40 años de experiencia con maquinaria avanzada, asegurando resultados de alta calidad y total satisfacción en todos nuestros proyectos."
      image="/img/galeria/7.jpg"
    />

    <GallerySection />

    <HeroBanner
      title="Compromiso con la Calidad"
      text="Soluciones seguras y eficientes para cada cliente"
      image="/img/galeria/9.jpg"
      overlay-color="rgba(0, 0, 0, 0.4)"
    />

    <ContactSection />

    <SiteFooter />
  </div>
</template>

<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import HeroBanner from '../components/sections/HeroBanner.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import ClientsSection from '../components/sections/ClientsSection.vue'
import GovClientsSection from '../components/sections/GovClientsSection.vue'
import GallerySection from '../components/sections/GallerySection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import SiteFooter from '../components/sections/SiteFooter.vue'
</script>
