<template>
  <header class="header">
    <div class="nav-container">
      <!-- Contenedor del logo y título -->
      <div class="brand">
        <img class="logo-img" src="/img/Logo_perforacion_agua.png" alt="Logo">
        <h1 class="logo">GeoHidrologia</h1>
      </div>

      <!-- Botón hamburguesa -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Menú">
        <span :class="{ 'open': isOpen }"></span>
        <span :class="{ 'open': isOpen }"></span>
        <span :class="{ 'open': isOpen }"></span>
      </button>

      <!-- Menú -->
      <ul :class="['nav-links', { 'active': isOpen }]">
        <li><a href="#inicio" @click="closeMenu">Inicio</a></li>
        <li><a href="#nosotros" @click="closeMenu">Nosotros</a></li>
        <li><a href="#servicios" @click="closeMenu">Servicios</a></li>
        <li><a href="#clientes" @click="closeMenu">Clientes</a></li>
        <li><a href="#Galeria" @click="closeMenu">Galeria</a></li>
        <li><a href="#contacto" @click="closeMenu">Contacto</a></li>
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

// Cierra el menú al hacer clic en un enlace
const closeMenu = () => {
  isOpen.value = false
}
</script>


<style scoped>
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif
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
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: #0d6efd;
}

/* Menú */
.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
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

/* Animación hamburguesa */
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
  }
}


/* Contenedor logo + título */
.brand {
  display: flex;
  align-items: center; /* centra verticalmente */
  gap: 10px; /* espacio entre logo y texto */
}

/* Logo imagen */
.logo-img {
  height: 40px;  /* ajusta el tamaño */
  width: auto;   /* mantiene proporción */
}



</style>
