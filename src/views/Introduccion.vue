<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      
      .row.justify-content-center.mb-4
        .col-lg-8.my-3.order-1
          .brad.p-3.mb-4
            p.mb-0
              | En el ámbito del análisis de datos, contar con fuentes confiables y aplicar técnicas adecuadas de recolección de información es crucial para obtener resultados precisos y valiosos. La calidad de los datos recopilados y su adecuada selección determinan en gran medida la utilidad y precisión de los análisis posteriores, ya que datos incompletos, sesgados o mal interpretados pueden llevar a conclusiones erróneas o poco útiles.
          .row.justify-content-center.align-items-center.bg8.mb-4
            .col-lg-4.h-100
              img.img-fluid(src='@/assets/template/images/cf1/2.png' alt='')
            .col-lg-8.bgi
              .p-4
                p.mb-0
                  | ¿De dónde provienen los datos y cómo se asegura su validez y pertinencia para un análisis efectivo? Este componente formativo profundiza en estas cuestiones esenciales, explorando las fuentes de datos más comunes, las técnicas de recolección, y los métodos para evaluar su confiabilidad. A través de una combinación de teoría y práctica, se cubrirán tanto fuentes tradicionales como datos obtenidos de plataformas digitales y redes sociales, bases de datos públicas, encuestas y estudios de campo.
          p
            | Durante el desarrollo de este curso, el aprendiz adquirirá habilidades para identificar, seleccionar y validar diversas fuentes de información, adaptando las técnicas de recolección a diferentes contextos y tipos de datos. Mediante estudios de caso y ejercicios prácticos, se abordarán las mejores prácticas para la recolección de datos en el entorno actual, con herramientas digitales y enfoques estructurados que garantizan datos de calidad para el análisis.
        .col-lg-4.my-3.order-lg-2
          img.img-a.img-t(src='@/assets/template/images/cf1/1.png' alt='')
      .row.justify-content-center
        .col-lg-10.my-3
          .row.justify-content-center.align-items-center.bg7.p-4.brad.mb-5
            .col-lg-auto
              img.img-a.img-t(src='@/assets/template/images/cf1/3.svg' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0
                | El proceso de recolección de datos es la base sobre la cual se construye cualquier análisis exitoso. Como señala un principio fundamental en el campo del análisis: la precisión del análisis es tan buena como la precisión de los datos que lo sustentan.
      h4.mb-4
        | ¡Te damos una maravillosa bienvenida a las fuentes y técnicas de recolección de datos!
      .row.justify-content-center.align-items-center        
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
