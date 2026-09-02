<template>
  <section class="info-section info-section--muted contact-section" id="contacto">
    <div class="info-content">
      <div class="eyebrow">Hablemos</div>
      <h2>Contacto</h2>
      <p>¿Tienes dudas o quieres un presupuesto? Comunícate con nosotros directamente por WhatsApp:</p>

      <div class="whatsapp-buttons">
        <a
          v-for="contacto in contactos"
          :key="contacto.numero"
          :href="contacto.link"
          target="_blank"
          rel="noopener"
          class="whatsapp-button"
        >
          <span class="wa-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.487 2.246 2.247 3.481 5.232 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.502-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.885-4.434 9.889-9.885.002-2.635-1.032-5.108-2.906-6.982-1.873-1.873-4.345-2.906-6.982-2.906-5.45 0-9.885 4.434-9.889 9.885-.001 2.18.632 3.945 1.746 5.681l-.999 3.648 3.556-.92zm11.387-5.464c-.297-.149-1.758-.868-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.253-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.569-.347z"/></svg>
          </span>
          <span>Enviar mensaje a: {{ contacto.numero }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const contactos = [
  { numero: '33 3488 2221', link: 'https://wa.me/523334882221?text=Hola,%20quiero%20información%20sobre%20sus%20servicios' },
  { numero: '33 1228 4549', link: 'https://wa.me/523312284549?text=Hola,%20quiero%20información%20sobre%20sus%20servicios' },
  { numero: '33 1082 6595', link: 'https://wa.me/523310826595?text=Hola,%20quiero%20información%20sobre%20sus%20servicios' },
]
</script>
