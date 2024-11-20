<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de muestreo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.img-a.img-t(src='@/assets/template/images/t4/1.svg', alt='') 
      .col-lg-8
        p El muestreo es una técnica utilizada en estadística para seleccionar una parte representativa de una población con el fin de realizar un estudio. Dado que en muchas situaciones es impracticable estudiar a toda la población, se selecciona una muestra que, si se elige adecuadamente, reflejará las características de la población. Las técnicas de muestreo garantizan que esta selección sea lo más representativa posible, minimizando sesgos y errores.
    Separador 
    #t_4_1.titulo-segundo.color-acento-botones
      h2 4.1	Muestreo aleatorio simple: definición y aplicación
    p El muestreo aleatorio simple es uno de los métodos de selección más básicos y efectivos. En este tipo de muestreo, cada individuo u objeto de la población tiene la misma probabilidad de ser seleccionado, lo que garantiza que no haya preferencias o sesgos en la elección de la muestra.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img.img-a.img-t(src='@/assets/template/images/t4/2.png', alt='') 
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-12
            .titulo.mb-4(data-aos="flip-up")
              h5.mb-0.p-1 Definición
            p El muestreo aleatorio simple se basa en la premisa de que todos los elementos de la población son equiprobables para ser seleccionados. Esto puede lograrse utilizando una lista numerada de la población y seleccionando los elementos mediante métodos aleatorios, como un sorteo o el uso de generadores de números aleatorios.
            .titulo.mb-4(data-aos="flip-up")
              h5.mb-0.p-1 Aplicación
            p Este método es ampliamente utilizado cuando se tiene acceso a una lista completa de la población y se desea obtener una muestra representativa. Sin embargo, es menos práctico en poblaciones grandes o dispersas, ya que puede ser difícil asegurar la equiprobabilidad para cada miembro de la población.
            .bg28.p-3.brad.mb-4
              p 
                b Ejemplo: 
                | si una universidad quiere estudiar el rendimiento académico de sus estudiantes, puede utilizar un muestreo aleatorio simple seleccionando al azar un conjunto de estudiantes de la lista completa de matriculados.

           
    Separador 
    #t_4_2.titulo-segundo.color-acento-botones
      h2 4.2	Muestreo estratificado: ventajas y procedimientos
    p.mb-4 El muestreo estratificado es una técnica en la que la población se divide en subgrupos homogéneos llamados estratos, y luego se selecciona una muestra aleatoria de cada estrato. Este método garantiza que todos los subgrupos de la población estén representados en la muestra, lo cual es particularmente útil cuando la población es heterogénea.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-lg-12
            .titulo.mb-4(data-aos="flip-up")
              h5.mb-0.p-1 Definición
            p En el muestreo estratificado, los estratos se forman en función de alguna característica relevante (por ejemplo, edad, género, nivel educativo). Posteriormente, se selecciona una muestra aleatoria de cada estrato, asegurando que la representación de cada subgrupo en la muestra sea proporcional al tamaño del estrato en la población.
            .bg28.px-4.p-3.brad.mb-4
              p 
                b Ventajas
                
              ul.lista-ul--color.fa-ul.px-4
                  li
                    i.fas.fa-check.v1
                    span
                      | Aumenta la precisión de las estimaciones, ya que cada estrato está representado adecuadamente.
                  li
                    i.fas.fa-check.v1
                    span
                      | Reduce la variabilidad dentro de los estratos, ya que los miembros de un estrato comparten características comunes.
                  li
                    i.fas.fa-check.v1
                    span
                      | Mejora la representación de subgrupos pequeños en la población, que de otro modo podrían estar subrepresentados en un muestreo aleatorio simple.
      .col-lg-4
        img.img-a.img-t(src='@/assets/template/images/t4/3.png', alt='') 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/template/images/t4/4.svg', alt='') 
      .col-lg-9.my-lg-0.my-3
        p 
          b Procedimientos:
        
        ol.lista-ol--cuadro.fa-ul
            li
              .lista-ol--cuadro__vineta
                span 1
              span
                |   Dividir la población en estratos según una o varias características clave.
            hr
            li
              .lista-ol--cuadro__vineta
                span 2
              span
                | Calcular el tamaño de la muestra que se tomará de cada estrato (puede ser proporcional o igual para todos los estratos).
            hr
            li
              .lista-ol--cuadro__vineta
                span 3
              span
                | Seleccionar una muestra aleatoria simple dentro de cada estrato.
                p
                  b Ejemplo: 
                  |  si un investigador desea estudiar los hábitos de lectura de estudiantes de diferentes niveles de educación (primaria, secundaria, y universitaria), podría estratificar a los estudiantes por nivel educativo y seleccionar una muestra aleatoria de cada nivel.


    Separador 
    #t_4_3.titulo-segundo.color-acento-botones
      h2 4.3	Muestreo por conglomerados: características y ejemplos de uso
    p El 
      b muestreo por conglomerados 
      | es una técnica en la que la población se divide en grupos heterogéneos, o conglomerados, y luego se selecciona al azar uno o varios de estos conglomerados para ser estudiados en su totalidad. A diferencia del muestreo estratificado, los conglomerados no son homogéneos, sino que cada uno representa una "miniatura" de la población completa.
    
    .row.justify-content-center.mb-4 
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Definición")
            .col-lg-12.my-3
              p Los conglomerados son subgrupos naturales de la población que pueden representar una mezcla diversa de características. En lugar de seleccionar individuos directamente, se seleccionan conglomerados completos, y todos los miembros de los conglomerados seleccionados son incluidos en la muestra.
          .row.justify-content-center(titulo="Características")
            .col-lg-12.my-3
              ul.lista-ul--color.fa-ul.px-4
                li
                  i.fas.fa-check.v1
                  span
                    | Es útil cuando es difícil acceder a toda la población, pero los conglomerados son más accesibles.
                li
                  i.fas.fa-check.v1
                  span
                    | Se utiliza cuando los conglomerados representan adecuadamente a la población en su conjunto.
                li
                  i.fas.fa-check.v1
                  span
                    | Puede ser más barato y eficiente que otras técnicas de muestreo, ya que reduce costos de desplazamiento o logística.
          .row.justify-content-center(titulo="Ejemplos de uso")
            .col-lg-12.my-3
              ul.lista-ul--color.fa-ul.px-4
                li
                  i.fas.fa-check.v1
                  span
                    | Estudio sobre el rendimiento académico de estudiantes en una región. En lugar de seleccionar estudiantes individualmente de toda la región, se pueden seleccionar al azar varias escuelas (conglomerados), y luego estudiar a todos los estudiantes de esas escuelas.
                li
                  i.fas.fa-check.v1
                  span
                    | Investigación sobre la satisfacción de empleados en una empresa con múltiples sucursales. Se puede seleccionar un conjunto de sucursales (conglomerados) y encuestar a todos los empleados de esas sucursales.
          
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/template/images/t4/5.png', alt='') 
    Separador 
    #t_4_4.titulo-segundo.color-acento-botones
      h2 4.4	Comparación entre diferentes técnicas de muestreo
    p Las diferentes técnicas de muestreo tienen ventajas y desventajas, y la elección del método depende del contexto del estudio y las características de la población.
    
    .row.justify-content-center.mb-4 
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/template/images/t4/6.svg', alt='') 
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Muestreo aleatorio simple")
            .col-lg-12.my-3
              p 
                b Ventajas:
                |  fácil de aplicar y entender, garantiza que todos los elementos de la población tienen la misma probabilidad de ser seleccionados.
              p 
                b Desventajas:
                |  no siempre es representativo si la población es muy heterogénea o si es difícil acceder a una lista completa de la población.
          .row.justify-content-center(titulo="Muestreo estratificado")
            .col-lg-12.my-3
              p 
                b Ventajas:
                |  mejora la precisión del estudio y garantiza la representación adecuada de todos los subgrupos.
              p 
                b Desventajas:
                |  requiere conocimientos previos sobre la estructura de la población para formar los estratos, lo cual puede ser costoso o difícil de implementar.
          .row.justify-content-center(titulo="Muestreo por conglomerados")
            .col-lg-12.my-3
              p 
                b Ventajas:
                |  menor costo y mayor eficiencia en términos de tiempo y recursos cuando los conglomerados son fáciles de identificar y acceder.
              p 
                b Desventajas:
                |  puede generar estimaciones menos precisas si los conglomerados no son representativos de la población.          
      
    Separador 
    #t_4_5.titulo-segundo.color-acento-botones
      h2 4.5	Importancia del tamaño de la muestra en cada técnica de muestreo
    p El tamaño de la muestra es un factor que afecta la precisión de los resultados obtenidos mediante el muestreo. Independientemente de la técnica de muestreo elegida, el tamaño de la muestra debe ser suficiente para minimizar el error estándar y garantizar la representatividad de la población.
    
    .row.justify-content-center.mb-4 
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Muestreo aleatorio simple")
            .col-lg-12.my-3
              p Un tamaño de muestra mayor reduce la variabilidad y el error de muestreo, mejorando la precisión de las estimaciones.
          .row.justify-content-center(titulo="Muestreo estratificado")
            .col-lg-12.my-3
              p El tamaño de la muestra en cada estrato debe ser proporcional al tamaño del estrato en la población, garantizando que todos los subgrupos estén representados adecuadamente.
          .row.justify-content-center(titulo="Muestreo por conglomerados")
            .col-lg-12.my-3
              p Aunque esta técnica puede reducir costos, a menudo requiere un mayor tamaño de muestra o más conglomerados para compensar la menor precisión que puede derivarse de la heterogeneidad dentro de los conglomerados.
              p
                b Ejemplo:
                |  muestreo aleatorio simple y sistemático.
              p 
                b Muestreo aleatorio simple:
                |  seleccionamos una muestra de 5 empleados de una población de 20 empleados utilizando un generador de números aleatorios. Supungamos que los números seleccionados son: 3, 7, 9, 14, 18.
              p
                b Muestreo sistemático:
                | de la misma población de 20 empleados, seleccionamos un empleado cada 4 (comenzando con el empleado 3). Los empleados seleccionados serían: 3, 7, 11, 15, 19.
              p Esto asegura una distribución uniforme en la selección de empleados.
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/template/images/t4/7.svg', alt='') 

</template>

<script>
import AcordionA from '../bootstrap/AcordionA.vue'
export default {
  name: 'Tema4',
  components: {
    AcordionA,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
