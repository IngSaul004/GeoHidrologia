<template>
  <header class="header" :class="{ 'is-scrolled': scrolled }">
    <div class="nav-container">
      <div class="brand">
        <img class="logo-img" src="/img/logo_geohidrologia_2.png" alt="Logo GeoHidrología" width="55" height="55" />
        <img class="logo-img" src="/img/Logo_perforacion_agua.png" alt="Logo perforación de agua" width="55" height="55" />
        <h2>GEOHIDROLOGIA</h2>
      </div>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Menú">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>

      <ul :class="['nav-links', { active: isOpen }]">
        <li><a href="#inicio" @click.prevent="scrollToSection('inicio')">Inicio</a></li>
        <li><a href="#nosotros" @click.prevent="scrollToSection('nosotros')">Nosotros</a></li>
        <li><a href="#servicios" @click.prevent="scrollToSection('servicios')">Servicios</a></li>
        <li><a href="#clientes" @click.prevent="scrollToSection('clientes')">Clientes</a></li>
        <li><a href="#Galeria" @click.prevent="scrollToSection('Galeria')">Galeria</a></li>
        <li><a href="#contacto" @click.prevent="scrollToSection('contacto')">Contacto</a></li>
        <li class="nav-cta">
          <a href="https://wa.me/523334882221" target="_blank" rel="noopener" @click="closeMenu">Cotizar</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    closeMenu()
  }
}

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.7rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  height: 50px;
  width: auto;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.75rem;
  margin-left: auto;
}

.nav-links li a {
  position: relative;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.nav-links li:not(.nav-cta) a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.nav-links li a:hover {
  color: var(--accent);
}

.nav-links li a:hover::after {
  width: 100%;
}

.nav-cta a {
  background: var(--warm);
  color: #fff !important;
  padding: 0.55rem 1.2rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  transition: transform 0.25s ease, background-color 0.25s ease;
}

.nav-cta a:hover {
  background: var(--warm-dark);
  transform: translateY(-2px);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: var(--accent);
  border-radius: 2px;
  transition: 0.3s;
}

.menu-toggle span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}
.menu-toggle span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .brand {
    flex: 1;
  }

  .logo-img {
    height: 38px;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: stretch;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--bg-header);
    backdrop-filter: blur(14px);
    padding: 1rem 1.5rem 1.5rem;
    box-shadow: var(--shadow-sm);
    z-index: 1100;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li a {
    display: block;
    font-size: 1.1rem;
    padding: 0.6rem 0.5rem;
    text-align: center;
  }

  .nav-cta {
    margin-top: 0.5rem;
  }

  .nav-cta a {
    display: block;
    text-align: center;
  }
}

.brand h2 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: -0.01em;
}

@media (max-width: 480px) {
  .brand h2 {
    display: none;
  }
}
</style>
