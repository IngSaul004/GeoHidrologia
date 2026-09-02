<script setup>
import Menu from "./components/menu.vue"
import FloatingWhatsapp from "./components/FloatingWhatsapp.vue"
</script>

<template>
  <Menu />
  <router-view></router-view>
  <FloatingWhatsapp />
</template>

<style scoped></style>
