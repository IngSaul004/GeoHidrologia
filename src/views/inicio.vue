<template>
  <div class="inicio-view">
    <!-- Hero con imagen de fondo -->
    <section class="hero" id="inicio">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>GeoHidrologia</h1>
          <p><strong>E</strong>studios <strong>G</strong>eologicos <strong>G</strong>eofisicos y <strong>P</strong>erforacion</p>
          <button @click="scrollToInfo">Más Información</button>
        </div>
      </div>
    </section>

    <!-- Sobre Nosotros -->
    <section class="info-section" id="nosotros">
      <div class="info-content">
        <h2>Sobre Nosotros</h2>
        <p>Somos una empresa consolidada con mas de 40 años de experiencia, lideres en los servicios de estudios geofísicos para localizar agua subterránea, perforación de pozos profundos, rehabilitaciones, aforos, entre otros relacionados con el agua.
Nos enfocamos en la calidad de nuestro trabajo, eficiencia y sustentabilidad y el compromiso de otorgar los resultados esperados por el cliente.
Además, contamos con maquinaria de tecnología avanzada garantizando resultados confiables y duraderos.
La satisfacción de nuestros clientes es nuestra prioridad, ofreciendo siempre el mejor servicio, asesoría de principio a fin, detallando en cada informe todo lo relacionado con cada proyecto.
</p>
      </div>
    </section>

      <!-- Hero intermedio entre servicios y nosotros -->
<section class="hero hero-middle1">
  <div class="hero-overlay">
    <div class="hero-content">
      <h2>Proyectos de Perforación</h2>
      <p>Calidad y precisión en cada perforación. Garantizamos resultados confiables para el suministro de agua.</p>
    </div>
  </div>
</section>


     <!-- Sección de información general -->
    <section class="info-section" ref="infoSection" id="servicios">
      <div class="info-content">
        <h2>Nuestros Servicios</h2>
      
        <ul>
          <li>✔ Estudios geofisicos para localizar agua subterranea, caracterizacion de rocas para la construccion, localizacion de anomalias subterraneas en la construccion</li>
          <li>✔ Perforacion de pozos profundos para extraer agua subterranea, Contamos con 4 equipos con diferentes capacidadades desde 50 hasta 700 Mts de profundidad</li>
          <li>✔ Rehabilitacion (limpieza) de pozos profundos para agua con equipo de percusion Bucryus-Erie 22w</li>
          <li>✔ Equipo chico hidraulico para pozos de hasta 80 Mts en material tipo 1 y 2</li>
          <li>✔ Extraccion y colocacion de columnas y bombas en pozos profundos</li>
          <li>✔ Equipamiento de pozo completo en media y alta tension</li>
          <li>✔ Bombeo y aforos en pozos de agua potable</li>
          <li>✔ Video filmacion de pozos profundos, con camara sumergible con doble lente angular a color, horizontal y vertical 360°</li>
        </ul>
      </div>
    </section>

    <!-- Hero intermedio entre servicios y nosotros -->
<section class="hero hero-middle2">
  <div class="hero-overlay">
    <div class="hero-content">
      <h2>Estudios Hidrogeológicos</h2>
      <p>Identificamos recursos subterráneos y caracterizamos el terreno con tecnología avanzada.</p>
    </div>
  </div>
</section>

 <section class="info-section" id="clientes">
  <div class="info-content">
    <h2>Algunos de nuestros clientes</h2>
    <ul>
      <li>CONSORCIO INMOBILIARIO GIG</li>
      <li>BIENES RAICES JARDIN REAL S.A. DE C.V.</li>
      <li>GRUPO INMOBILIARIO MXCASA S.A. DE C.V.</li>
      <li>JAVER S.A. DE C.V.</li>
      <li>GRUPO INMOBILIARIO ARA S.A. DE C.V.</li>
      <li>CONSORCIO DE INGENIERÍA INTEGRAL S.A. DE C.V</li>
      <li>GRUPO CONSTRUCTOR ADOBES S.A. DE C.V.</li>
      <li>GRUPO SAN CARLOS</li>
      <li>GRUPO CONSTRUCTOR SUDOCC S.A. DE C.V</li>
    </ul>
  </div>

  <!-- Galería horizontal de logos -->
  <div class="clientes-img">
    <img src="/img/ARA.png" alt="ARA" />
    <img src="/img/GIG.png" alt="GIG" />
    <img src="/img/JAVER.png" alt="JAVER" />
    <img src="/img/MX.CASA.png" alt="MX.CASA" />
    <img src="/img/SAN_CARLOS.png" alt="SAN CARLOS" />
    <img src="/img/SUDOCC.png" alt="SUDDOC" />
  </div>
</section>

<section class="hero hero-middle3">
  <div class="hero-overlay">
    <div class="hero-content">
     <h2>Maquinaria y Equipo</h2>
<p>Contamos con equipos de última generación y herramientas especializadas, que nos permiten realizar cada trabajo con precisión, rapidez y máxima seguridad.</p>

    </div>
  </div>
</section>


 <section class="info-section" id="clientes">
  <div class="info-content">
    <h2>Clientes gobierno</h2>
    <ul>
      <li>H. Ayto. De Tlajomulco De Zúñiga, Jal. </li>
      <li>H. Ayto. De Chapala, Jal. </li>
      <li>SIAPA, sistema de agua potable y alcantarillado. </li>
      <li>H. Ayto. De Jocotepec, Jal. </li>
      <li>H. Ayto. de Mascota, jal. </li>
      <li>H. Ayto. de Tanhuato, Mich. Localización de agua subterránea con geofísica aplicada, así como el diseño constructivo de las obras de perforación de pozos profundos.</li>
      <li>SECRETARÍA DE INFRAESTRUCTURA Y OBRA PÚBLICA. SIOP Jalisco. </li>
    </ul>
  </div>
</section>



<section class="hero hero-middle4">
  <div class="hero-overlay">
    <div class="hero-content">
      <h2>Tecnología y Experiencia</h2>
      <p>Combinamos más de 40 años de experiencia con maquinaria avanzada, asegurando resultados de alta calidad y total satisfacción en todos nuestros proyectos.</p>
    </div>
  </div>
</section>

<section class="info-section" id="Galeria">
  <div class="info-content">
    <h2>Galeria</h2>
  </div>

  <!-- 📌 Bloque de Galería -->
<div class="galeria-img">

  <!-- Imágenes -->
  <img 
    src="/img/galeria/1.jpg" 
    alt="1" 
    @click="openLightbox('/img/galeria/1.jpg', 'image')" 
  />

  <img 
    src="/img/galeria/2.jpg" 
    alt="2" 
    @click="openLightbox('/img/galeria/2.jpg', 'image')" 
  />

  <img 
    src="/img/galeria/3.jpg" 
    alt="3" 
    @click="openLightbox('/img/galeria/3.jpg', 'image')" 
  />

  <img 
    src="/img/galeria/4.jpg" 
    alt="4" 
    @click="openLightbox('/img/galeria/4.jpg', 'image')" 
  />

  <img 
    src="/img/galeria/5.jpg" 
    alt="5" 
    @click="openLightbox('/img/galeria/5.jpg', 'image')" 
  />
  <img 
    src="/img/galeria/6.jpg" 
    alt="6" 
    @click="openLightbox('/img/galeria/6.jpg', 'image')" 
  />

  <img 
    src="/img/galeria/7.jpg" 
    alt="7" 
    @click="openLightbox('/img/galeria/7.jpg', 'image')" 
  />
  <img 
    src="/img/galeria/8.jpg" 
    alt="8" 
    @click="openLightbox('/img/galeria/8.jpg', 'image')" 
  />

  <img 
    src="/img/galeria/9.jpg" 
    alt="9" 
    @click="openLightbox('/img/galeria/9.jpg', 'image')" 
  />
  <img 
    src="/img/galeria/10.jpg" 
    alt="10" 
    @click="openLightbox('/img/galeria/10.jpg', 'image')" 
  />
   <img 
    src="/img/galeria/12.jpg" 
    alt="12" 
    @click="openLightbox('/img/galeria/12.jpg', 'image')" 
  />

   <img 
    src="/img/galeria/13.jpg" 
    alt="14" 
    @click="openLightbox('/img/galeria/13.jpg', 'image')" 
  />
  <img 
    src="/img/galeria/14.jpg" 
    alt="14" 
    @click="openLightbox('/img/galeria/14.jpg', 'image')" 
  />
  <img 
    src="/img/galeria/15.jpg" 
    alt="15" 
    @click="openLightbox('/img/galeria/15.jpg', 'image')" 
  />
  <img 
    src="/img/galeria/16.jpg" 
    alt="16" 
    @click="openLightbox('/img/galeria/16.jpg', 'image')" 
  />

  <!-- Videos -->
  <video 
    src="/img/galeria/3.mp4" 
    type="video/mp4" 
    muted
    @click="openLightbox('/img/galeria/3.mp4', 'video')">
  </video>

  <video 
    src="/img/galeria/2.mp4" 
    type="video/mp4" 
    muted
    @click="openLightbox('/img/galeria/2.mp4', 'video')">
  </video>

</div>


 <!-- Lightbox -->
<div v-if="selectedMedia" class="lightbox" @click="closeLightbox">
  <div class="lightbox-content" @click.stop>
    <!-- Mostrar imagen -->
    <img v-if="selectedType === 'image'" :src="selectedMedia" alt="media" />

    <!-- Mostrar video -->
    <video v-else-if="selectedType === 'video'" :src="selectedMedia" controls autoplay></video>

    <!-- Botón de cerrar -->
    <button class="lightbox-close" @click="closeLightbox">✕</button>
  </div>
</div>

</section>


  <!-- Hero intermedio entre servicios y nosotros -->
<section class="hero hero-low">
  <div class="hero-overlay">
    <div class="hero-content">
      <h2>Compromiso con la Calidad</h2>
<p>Soluciones seguras y eficientes para cada cliente</p>
    </div>
  </div>
</section>


    <!-- Contacto -->
    <section class="info-section contact-section" id="contacto">
      <div class="whatsapp-buttons">
        <h2>Contacto</h2>
        <p>¿Tienes dudas o quieres un presupuesto? Comunícate con nosotros directamente por WhatsApp:</p>
        <a :href="whatsappLink1" target="_blank" class="whatsapp-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.487 2.246 2.247 3.481 5.232 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.502-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.885-4.434 9.889-9.885.002-2.635-1.032-5.108-2.906-6.982-1.873-1.873-4.345-2.906-6.982-2.906-5.45 0-9.885 4.434-9.889 9.885-.001 2.18.632 3.945 1.746 5.681l-.999 3.648 3.556-.92zm11.387-5.464c-.297-.149-1.758-.868-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.253-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.569-.347z"/></svg>
          Enviar mensaje a: 33 3488 2221
        </a>
        <a :href="whatsappLink2" target="_blank" class="whatsapp-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.487 2.246 2.247 3.481 5.232 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.502-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.885-4.434 9.889-9.885.002-2.635-1.032-5.108-2.906-6.982-1.873-1.873-4.345-2.906-6.982-2.906-5.45 0-9.885 4.434-9.889 9.885-.001 2.18.632 3.945 1.746 5.681l-.999 3.648 3.556-.92zm11.387-5.464c-.297-.149-1.758-.868-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.253-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.569-.347z"/></svg>
          Enviar mensaje a: 33 1228 4549
        </a>
        <a :href="whatsappLink3" target="_blank" class="whatsapp-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.487 2.246 2.247 3.481 5.232 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.502-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.885-4.434 9.889-9.885.002-2.635-1.032-5.108-2.906-6.982-1.873-1.873-4.345-2.906-6.982-2.906-5.45 0-9.885 4.434-9.889 9.885-.001 2.18.632 3.945 1.746 5.681l-.999 3.648 3.556-.92zm11.387-5.464c-.297-.149-1.758-.868-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.253-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.569-.347z"/></svg>
           Enviar mensaje a: 33 1082 6595
        </a>
      </div>
    </section>

  

   

    <!-- Footer con redes sociales -->
    <footer class="footer">
      <p>Síguenos en nuestras redes sociales</p>
      <div class="social-icons">
        <!-- Facebook -->
        <a href="https://www.facebook.com/tuempresa" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
        </a>
        <!-- Instagram 
        <a href="https://www.instagram.com/tuempresa" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.304.975.975 1.243 2.242 1.304 3.608.058 1.266.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.304 3.608-.975.975-2.242 1.243-3.608 1.304-1.266.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.243-2.242-1.304-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.33-2.633 1.304-3.608C4.512 2.495 5.779 2.227 7.145 2.165 8.411 2.107 8.791 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.772.13 4.603.34 3.677 1.266 2.751 2.192 2.541 3.361 2.483 4.641 2.425 5.921 2.411 6.33 2.411 12s.014 6.079.072 7.359c.058 1.28.268 2.449 1.194 3.375.926.926 2.095 1.136 3.375 1.194 1.28.058 1.689.072 7.359.072s6.079-.014 7.359-.072c1.28-.058 2.449-.268 3.375-1.194.926-.926 1.136-2.095 1.194-3.375.058-1.28.072-1.689.072-7.359s-.014-6.079-.072-7.359c-.058-1.28-.268-2.449-1.194-3.375C21.408.34 20.239.13 18.959.072 17.679.014 17.269 0 12 0z"/><path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 16 12a3.999 3.999 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>
        -->
        <!-- LinkedIn 
        <a href="https://www.linkedin.com/company/tuempresa" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451c.978 0 1.771-.771 1.771-1.723V1.723C23.996.771 23.203 0 22.225 0zM7.088 20.452H3.556V9h3.532v11.452zM5.321 7.512c-1.132 0-2.051-.92-2.051-2.052s.919-2.052 2.051-2.052c1.133 0 2.051.92 2.051 2.052s-.918 2.052-2.051 2.052zM20.452 20.452h-3.531v-5.692c0-1.356-.026-3.1-1.888-3.1-1.888 0-2.177 1.475-2.177 3v5.792h-3.531V9h3.392v1.561h.049c.472-.895 1.623-1.838 3.338-1.838 3.569 0 4.226 2.349 4.226 5.403v6.827z"/></svg>
        </a>
        -->
        <!-- WhatsApp 
        <a href="https://wa.me/5211234567890" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.487 2.246 2.247 3.481 5.232 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.502-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.885-4.434 9.889-9.885.002-2.635-1.032-5.108-2.906-6.982-1.873-1.873-4.345-2.906-6.982-2.906-5.45 0-9.885 4.434-9.889 9.885-.001 2.18.632 3.945 1.746 5.681l-.999 3.648 3.556-.92zm11.387-5.464c-.297-.149-1.758-.868-2.031-.967-.273-.099-.471-.149-.669.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.253-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.569-.347z"/></svg>
        </a>
        -->
      </div>
      <p>&copy; 2025 GeoHidrologia</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const infoSection = ref(null)

const scrollToInfo = () => {
  infoSection.value.scrollIntoView({ behavior: 'smooth' })
}

// Número de WhatsApp (ejemplo: 5211234567890)
const whatsappLink1 = 'https://wa.me/523334882221?text=Hola,%20quiero%20información%20sobre%20sus%20servicios';
const whatsappLink2 = 'https://wa.me/523312284549?text=Hola,%20quiero%20información%20sobre%20sus%20servicios';
const whatsappLink3 = 'https://wa.me/523310826595?text=Hola,%20quiero%20información%20sobre%20sus%20servicios';


const selectedMedia = ref(null) // guarda la ruta del archivo seleccionado
const selectedType = ref(null)  // "image" o "video"

const openLightbox = (src, type) => {
  selectedMedia.value = src
  selectedType.value = type
}

const closeLightbox = () => {
  selectedMedia.value = null
  selectedType.value = null
}

</script>

<style scoped>
/* Aplicar fuentes modernas */
* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.inicio-view {
  padding-top: 70px; /* ajusta según la altura de tu header */
}


/* Hero */
.hero {
  height: 100vh;
  background-image: url('/img/galeria/6.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 700px;
  padding: 1rem;
}

.hero-content h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 500;
}

/* Botón */
.hero-content button {
  background-color: #0d6efd;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.hero-content button:hover {
  background-color: #084298;
}

/* Secciones de información con más espacio y fondo alternado */
.info-section {
  width: 100%;
  padding: 5rem 2rem; /* más espacio arriba y abajo */
  display: flex;
  justify-content: center;
}

/* Fondo alternado */
.info-section:nth-child(even) {
  background-color: #f9f9f9; /* gris muy claro */
}

.info-section:nth-child(odd) {
  background-color: white;
}

.info-content {
  max-width: 800px;
  text-align: center;
}

/* Títulos */
.info-content h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #0d6efd;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

/* Párrafos y listas */
.info-content p, .info-content li {
  color: #333;
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 1.2rem;
  font-weight: 400;
}

.info-content ul {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.info-content ul li {
  margin-bottom: 1rem;
  font-weight: 500;
}

/* WhatsApp button */
.whatsapp-button {
  display: inline-flex;
  align-items: center;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

.whatsapp-button img {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.whatsapp-button:hover {
  background-color: #1DA851;
}

/* Footer */
.footer {
  background-color: #0d6efd;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
}

.footer p {
  margin: 0.5rem 0;
  font-weight: 500;
}

.social-icons {
  margin: 1rem 0;
}

.social-icons a {
  display: inline-block;
  margin: 0 0.5rem;
  transition: transform 0.3s;
}

.social-icons a:hover {
  transform: scale(1.2);
}

.social-icons img {
  width: 32px;
  height: 32px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 { font-size: 2rem; }
  .hero-content p { font-size: 1rem; }
  .info-content { padding: 0 1rem; }
  .info-content h2 { font-size: 1.6rem; }
}

.section-image {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0; /* espacio arriba y abajo */
}

.section-image img {
  max-width: 90%;   /* no ocupa todo el ancho */
  height: auto;     /* mantiene proporción */
  border-radius: 12px; /* esquinas redondeadas */
  box-shadow: 0 4px 10px rgba(0,0,0,0.15); /* sombra elegante */
}

/* Hero intermedio 1 */
.hero-middle1 {
  background-image: url('/img/galeria/8.jpg');
}

/* Hero intermedio 2 */
.hero-middle2 {
  background-image: url('/img/galeria/17.jpg');
}
/* Hero intermedio 3 */
.hero-middle3 {
  background-image: url('/img/galeria/1.jpg');
}

.hero-middle4 {
  background-image: url('/img/galeria/7.jpg');
}

/* Hero intermedio */
.hero-middle {
  height: 60vh; /* un poco más pequeño que el hero principal */
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-middle .hero-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.6); /* oscurece para mejor contraste */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-middle .hero-content {
  text-align: center;
  color: white;
  padding: 1rem;
}

.hero-middle .hero-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-middle .hero-content p {
  font-size: 1.2rem;
  font-weight: 400;
}


/* Hero intermedio */
.hero-low {
  height: 60vh; /* un poco más pequeño que el hero principal */
  background-image: url('/img/galeria/9.jpg'); /* tu imagen */
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-low .hero-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4); /* oscurece para mejor contraste */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-low .hero-content {
  text-align: center;
  color: white;
  padding: 1rem;
}

.hero-low .hero-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-low .hero-content p {
  font-size: 1.2rem;
  font-weight: 400;
}

/* Clientes - galería horizontal */
.clientes-img {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;       /* fila única */
  overflow-x: auto;        /* scroll horizontal en pantallas pequeñas */
  gap: 1.5rem;
  margin-top: 4rem;
  padding-bottom: 1rem;
  width: 90%;
}

.clientes-img img {
  flex: 0 0 auto;          /* no se encoge */
  max-width: 120px;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s;
  border-radius: 10px;
  padding: 10px;
}
.clientes-img img:hover {
transform: scale(1.2);
}

#clientes{
  display: flex;
  flex-direction: column;
  align-items: center;

}
#clientes li{
  transition: transform 0.3s;
}
#clientes li:hover{
  transform: scale(1.2);
}




/* Contenedor general de la galería */
#Galeria {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* Filas de la galería */
.galeria-img {
  display: flex;
  flex-wrap: wrap;       /* ahora se adaptan en varias filas */
  justify-content: center;
  gap: 1.2rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
}

/* Imágenes */
.galeria-img img {
  width: 220px;               /* ancho uniforme */
  height: 150px;              /* alto fijo */
  object-fit: cover;          /* recorta y centra */
  border-radius: 10px;
  transition: transform 0.3s;
  cursor: pointer;
}

.galeria-img img:hover {
  transform: scale(1.05);
}

/* Videos */
.galeria-img video {
  width: 220px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  background-color: #000;     /* relleno negro si no carga */
  transition: transform 0.3s;
}

.galeria-img video:hover {
  transform: scale(1.05);
}

/* Responsive: tablets */
@media (max-width: 1024px) {
  .galeria-img img,
  .galeria-img video {
    width: 180px;
    height: 120px;
  }
}

/* Responsive: móviles */
@media (max-width: 600px) {
  .galeria-img {
    gap: 0.8rem;
  }

  .galeria-img img,
  .galeria-img video {
    width: 140px;
    height: 100px;
  }
}

/* Lightbox overlay */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

/* Contenido */
.lightbox-content {
  max-width: 90%;
  max-height: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 📌 Lightbox imágenes */
.lightbox-content img {
  max-width: 70vw;   /* hasta 90% del ancho de la ventana */
  max-height: 55vh;  /* hasta 85% del alto */
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 0 25px rgba(0,0,0,0.8);
}

/* 📌 Lightbox videos */
.lightbox-content video {
  max-width: 80vw;   /* no más del 80% de ancho */
  max-height: 70vh;  /* no más del 70% de alto */
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 0 25px rgba(0,0,0,0.8);
  background-color: #000; /* por si tiene bordes vacíos */
}


/* Botón cerrar */
.lightbox-close {
  position: absolute;
  top: -40px;
  right: -10px;
  font-size: 2rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
}

.lightbox-close:hover {
  transform: scale(1.2);
  color: #f33;
}


/* ✨ Animaciones base */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* Animar el hero al cargar */
.hero-content {
  animation: fadeInUp 1s ease-out;
}

/* Títulos con fade in */
.info-content h2 {
  animation: fadeInUp 0.8s ease-out;
}

/* Párrafos y listas */
.info-content p,
.info-content li {
  animation: fadeIn 1s ease-in;
}

/* Botones */
button,
.whatsapp-button {
  transition: transform 0.3s ease, background-color 0.3s ease;
}
button:hover,
.whatsapp-button:hover {
  transform: translateY(-3px) scale(1.05);
}

/* Logos de clientes: entran con zoom suave */
.clientes-img img {
  animation: zoomIn 0.6s ease;
  transition: transform 0.3s ease;
}
.clientes-img img:hover {
  transform: scale(1.2) rotate(-2deg);
}

/* Galería: miniaturas con fade/zoom */
.galeria-img img,
.galeria-img video {
  animation: zoomIn 0.6s ease;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.galeria-img img:hover,
.galeria-img video:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 20px rgba(0,0,0,0.4);
}

/* Lightbox: efecto al abrir */
.lightbox-content {
  animation: zoomIn 0.4s ease;
}

/* Footer íconos */
.social-icons a {
  transition: transform 0.3s ease, color 0.3s ease;
}
.social-icons a:hover {
  transform: scale(1.2) rotate(5deg);
  color: #ffd700;
}

.whatsapp-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* espacio entre botones */
  margin-top: 1rem;
}

.whatsapp-button {
  display: flex;
  align-items: center;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  transition: transform 0.3s, background-color 0.3s;
}

.whatsapp-button svg {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.whatsapp-button:hover {
  background-color: #1DA851;
  transform: translateY(-2px) scale(1.05);
}
.hero-content{
  transition: transform 0.3s;
}

.hero-content:hover{
  transform: scale(1.2);
}




</style>


