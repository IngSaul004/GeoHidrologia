<template>
  <header class="header">
    <div class="nav-container">
      <!-- Contenedor del logo y título -->
      <div class="brand">
        <img class="logo-img" src="/img/logo_geohidrologia_2.png" alt="Logo">
        <img class="logo-img" src="/img/Logo_perforacion_agua.png" alt="Logo">
      </div>

      <!-- Botón hamburguesa -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Menú">
        <span :class="{ 'open': isOpen }"></span>
        <span :class="{ 'open': isOpen }"></span>
        <span :class="{ 'open': isOpen }"></span>
      </button>

      <!-- Menú -->
      <ul :class="['nav-links', { 'active': isOpen }]">
        <li><a href="#inicio" @click.prevent="scrollToSection('inicio')">Inicio</a></li>
        <li><a href="#nosotros" @click.prevent="scrollToSection('nosotros')">Nosotros</a></li>
        <li><a href="#servicios" @click.prevent="scrollToSection('servicios')">Servicios</a></li>
        <li><a href="#clientes" @click.prevent="scrollToSection('clientes')">Clientes</a></li>
        <li><a href="#Galeria" @click.prevent="scrollToSection('Galeria')">Galeria</a></li>
        <li><a href="#contacto" @click.prevent="scrollToSection('contacto')">Contacto</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

// Scroll suave a sección
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    closeMenu() // cierra menú en mobile
  }
}
</script>

<style scoped>
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

/* Header */
.header {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  z-index: 1000;
}

/* Contenedor de navegación */
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 👈 distribuye brand a la izq y nav/menu a la der */
}

/* Contenedor logo */
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  height: 55px;
  width: auto;
}

/* Menú */
.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin-left: auto;  
}

.nav-links li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #0d6efd;
}

/* Botón hamburguesa */
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
  background-color: #0d6efd;
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

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    justify-content: space-between; /* Logo a la izq, hamburguesa a la der */
  }

  .brand {
    flex: 1; /* ocupa espacio a la izq */
  }

  .logo-img {
    height: 40px; /* más pequeño en móvil */
  }

  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    padding: 1rem 0;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 1100;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li a {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    text-align: center;
  }
}
</style>

