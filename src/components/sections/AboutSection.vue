<template>
  <section class="info-section" id="nosotros">
    <div class="about-grid">
      <div class="about-text" v-reveal="{ variant: 'left' }">
        <div class="eyebrow">Quiénes somos</div>
        <h2>Más de 40 años perforando el futuro del agua en México</h2>
        <p>
          Somos una empresa consolidada, líder en estudios geofísicos para localizar agua subterránea,
          perforación de pozos profundos, rehabilitaciones y aforos.
        </p>
        <p>
          Nos enfocamos en la calidad de nuestro trabajo, la eficiencia y la sustentabilidad, con el
          compromiso de otorgar los resultados esperados por el cliente. Contamos con maquinaria de
          tecnología avanzada que garantiza resultados confiables y duraderos, y ofrecemos asesoría de
          principio a fin, detallando en cada informe todo lo relacionado con el proyecto.
        </p>
      </div>
      <div class="about-media" v-reveal="{ variant: 'right', delay: 0.15 }">
        <img
          src="/img/perforaciones.jpg"
          alt="Equipo de perforación de pozos de agua de GeoHidrología en campo"
          loading="lazy"
          decoding="async"
          width="800"
          height="1000"
        />
      </div>
    </div>
  </section>
</template>
