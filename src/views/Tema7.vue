<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Fuentes de datos
    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/template/images/t7/1.png')
      .col-lg-5.my-lg-0.my-3
        .bg28.p-3.brad.j1.h-100
          p.mb-0
            |  Las fuentes de datos son los orígenes desde los cuales se obtienen los datos necesarios para realizar análisis estadísticos. Se requiere identificar correctamente las fuentes de datos adecuadas, ya que la calidad, confiabilidad y relevancia de los datos dependen directamente de su procedencia. Existen diferentes tipos de fuentes de datos, y cada una tiene sus características particulares, ventajas y desventajas. Además, evaluar la confiabilidad de las fuentes es fundamental para garantizar la validez de los resultados obtenidos a partir de los datos.
      .col-lg-3.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/template/images/t7/2.png')
    
    Separador 
    #t_7_1.titulo-segundo.color-acento-botones
      h2 7.1 Clasificación de fuentes de datos: primarias y secundarias
    p Las fuentes de datos se clasifican en dos grandes categorías: fuentes primarias y fuentes secundarias. Esta clasificación depende de si los datos fueron recolectados directamente por el investigador o si fueron obtenidos de fuentes ya existentes.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img.img-a.img-t(src='@/assets/template/images/t7/3.png', alt='') 
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-12
            .titulo.mb-4(data-aos="flip-up")
              h5.mb-0.p-1 Fuentes de datos primarias
            p 
              b Definición:
              |  son datos recolectados de primera mano, es decir, directamente por el investigador o la entidad que lleva a cabo el estudio. Este tipo de fuente se utiliza cuando los datos necesarios no existen previamente o cuando es importante tener control total sobre el proceso de recolección de datos.
            p 
              b Ejemplos: 
              | encuestas, entrevistas, experimentos, observación directa.
            p.mb-0
              b Ventajas
            ul.lista-ul--color.fa-ul
              li.mb-0
                i.fas.fa-check.v1
                span
                  | Control total sobre el proceso de recolección de datos.
              li.mb-0
                i.fas.fa-check.v1
                span
                  | Datos personalizados y específicos para los objetivos del estudio.
              li
                i.fas.fa-check.v1
                span
                  | Mayor grado de precisión y relevancia.
            p.mb-0 
              b Desventajas
            ul.lista-ul--color.fa-ul
              li.mb-0
                i.fas.fa-check.v1
                span
                  | El proceso de recolección puede ser costoso y llevar mucho tiempo.
              li.mb-0
                i.fas.fa-check.v1
                span
                  | Puede ser difícil acceder a ciertos tipos de datos de manera directa (por ejemplo, en estudios con grandes poblaciones).
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-12
            .titulo.mb-4(data-aos="flip-up")
              h5.mb-0.p-1 Fuentes de datos secundarias
            p 
              b Definición:
              |  son datos que ya han sido recolectados por otra persona o entidad para otros fines, pero que se pueden reutilizar en el estudio actual. Los datos secundarios están disponibles en informes, bases de datos, libros, publicaciones académicas, entre otros.
            p 
              b Ejemplos: 
              | informes gubernamentales, datos de censos, estadísticas de instituciones, investigaciones anteriores, bases de datos públicas.
            p.mb-0
              b Ventajas
            ul.lista-ul--color.fa-ul
              li.mb-0
                i.fas.fa-check.v1
                span
                  | Los datos ya están recolectados y disponibles, lo que ahorra tiempo y recursos.
              li.mb-0
                i.fas.fa-check.v1
                span
                  | Se pueden obtener datos históricos o de poblaciones grandes que serían difíciles de recolectar de manera primaria.
              li
                i.fas.fa-check.v1
                span
                  | Es más accesible y económico.
            p.mb-0 
              b Desventajas
            ul.lista-ul--color.fa-ul
              li.mb-0
                i.fas.fa-check.v1
                span
                  | Menor control sobre la calidad de los datos y el proceso de recolección.
              li.mb-0
                i.fas.fa-check.v1
                span
                  | Los datos pueden no ser completamente relevantes o específicos para el estudio actual.
              li.mb-0
                i.fas.fa-check.v1
                span
                  | Pueden no estar actualizados o ser obsoletos.
      .col-lg-5
        img.img-a.img-t(src='@/assets/template/images/t7/4.png', alt='') 

    Separador 
    #t_7_2.titulo-segundo.color-acento-botones
      h2 7.2	Métodos para evaluar la confiabilidad y validez de las fuentes
    p La confiabilidad y validez de las fuentes de datos son aspectos críticos que deben evaluarse antes de usar los datos en un análisis. Los datos confiables son aquellos que pueden replicarse y que producen resultados consistentes, mientras que los datos válidos son aquellos que realmente miden lo que se supone que deben medir.
    TabsC.color-acento-botones.mb-5
      .p-4.py-99.py-md-5(titulo="Criterios para evaluar la confiabilidad de una fuente de datos")
        .row
          .col-lg-4
            img.img-a.img-t(src='@/assets/template/images/t7/5.png', alt='')
          .col-lg-8.mb-4.mb-md-0.p-4
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Procedencia:
                  |  identificar el origen de los datos. Los datos provenientes de instituciones reconocidas, agencias gubernamentales o entidades de investigación respetadas suelen ser más confiables.
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Método de recolección:
                  |  revisar cómo se obtuvieron los datos. Métodos rigurosos y estandarizados de recolección aumentan la confiabilidad.
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Actualidad:
                  |  los datos cuantitativos se utilizan para calcular tendencias centrales (media, mediana, moda), medidas de dispersión (desviación estándar, varianza), y para realizar pruebas de hipótesis o análisis de regresión.
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Consistencia:
                  |  verificar si los datos son consistentes a lo largo del tiempo y entre diferentes fuentes. Inconsistencias pueden indicar problemas en la recolección o procesamiento de los datos.
      .p-4.py-99.py-md-5(titulo="Requerimientos cualitativos")
        .row
          .col-lg-4
            img.img-a.img-t(src='@/assets/template/images/t7/6.png', alt='')
          .col-lg-8.mb-4.mb-md-0.p-4
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Pertinencia:
                  |  los datos deben ser relevantes y directamente aplicables a los objetivos del estudio. Datos irrelevantes o fuera de contexto pueden sesgar los resultados.
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Exactitud:
                  |  Se refiere a qué tan bien los datos reflejan la realidad que se pretende medir. Las definiciones utilizadas en la recolección de datos deben ser claras y adecuadas.
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Transparencia:
                  |  las fuentes confiables suelen ser transparentes sobre los métodos y procedimientos utilizados para recolectar los datos. La falta de información sobre el origen y la metodología de los datos puede ser una señal de baja calidad.
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Imparcialidad:
                  |  es importante que la fuente no tenga conflictos de interés o sesgos que puedan haber influido en la recolección o presentación de los datos. Fuentes imparciales y objetivas proporcionan datos más confiables.
    Separador 
    #t_7_3.titulo-segundo.color-acento-botones
      h2 7.3	Uso de fuentes de datos primarias en encuestas y estudios
    p Las 
      b fuentes de datos primarias
      |  son especialmente útiles en estudios que requieren datos personalizados y específicos, como encuestas o investigaciones que buscan medir una característica particular de una población. Algunos aspectos importantes al usar fuentes primarias incluyen:
    .row.justify-content-center.mb-4 
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/template/images/t6/10.png', alt='') 
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Diseño de encuestas")
            .col-lg-12.my-3
              p Una encuesta bien diseñada es clave para recolectar datos primarios de alta calidad. Las preguntas deben ser claras, precisas y estar alineadas con los objetivos del estudio.
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    b Preguntas cerradas:
                    |  ofrecen opciones de respuesta predefinidas y son fáciles de analizar.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    b Preguntas abiertas:
                    | permiten respuestas más detalladas, aunque son más difíciles de procesar y analizar.

          .row.justify-content-center(titulo="Control de calidad")
            .col-lg-12.my-3
              p Durante la recolección de datos primarios, es fundamental implementar mecanismos para garantizar la calidad de los datos, como la capacitación de los encuestadores, la supervisión de las entrevistas y la realización de pruebas piloto.
              
          .row.justify-content-center(titulo="Ventajas del uso de fuentes primarias")
            .col-lg-12.my-3
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Proporcionan datos actualizados y específicos para el estudio.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Mayor flexibilidad para ajustar el diseño de la recolección de datos según las necesidades del proyecto.

          .row.justify-content-center(titulo="Desafíos")
            .col-lg-12.my-3
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Requiere más tiempo y recursos que el uso de fuentes secundarias.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | La recolección de datos primarios puede estar sujeta a sesgos si no se diseña adecuadamente el proceso (por ejemplo, sesgo de selección o sesgo de respuesta).
    Separador 
    #t_7_4.titulo-segundo.color-acento-botones
      h2 7.4	Fuentes de datos secundarias: bases de datos públicas, informes y publicaciones
    p Las 
      b fuentes de datos secundarias
      |  incluyen una amplia gama de materiales que pueden ser reutilizados para investigaciones actuales. Algunos ejemplos de estas fuentes incluyen:
    .row.justify-content-center.mb-4 
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Bases de datos públicas")
            .col-lg-12.my-3
              p Muchos gobiernos, organizaciones no gubernamentales (ONGs) y organismos internacionales proporcionan acceso gratuito a bases de datos que contienen información estadística y registros administrativos. Estas bases de datos pueden ser especialmente útiles para estudios a gran escala.
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    b Ejemplos:
                    |  datos de censos, bases de datos de salud, datos económicos, estadísticas educativas.

          .row.justify-content-center(titulo="Informes")
            .col-lg-12.my-3
              p Los informes de instituciones académicas, agencias gubernamentales, empresas privadas y organismos internacionales son otra fuente importante de datos secundarios. Estos informes a menudo contienen análisis exhaustivos y datos ya procesados.
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    b Ejemplos:
                    |  informes de desarrollo humano, informes de salud pública, reportes de mercado.
          .row.justify-content-center(titulo="Publicaciones académicas")
            .col-lg-12.my-3
              p Los artículos de investigación publicados en revistas científicas a menudo presentan datos que se pueden reutilizar en estudios posteriores, especialmente en revisiones de literatura o estudios comparativos.
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    b Ejemplos:
                    |  estudios de caso, revisiones sistemáticas, análisis estadísticos previos.

          .row.justify-content-center(titulo="Ventajas del uso de fuentes secundarias")
            .col-lg-12.my-3
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Son de fácil acceso y generalmente menos costosas que la recolección de datos primarios.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Proporcionan datos históricos que permiten realizar estudios longitudinales o analizar tendencias a lo largo del tiempo.

          .row.justify-content-center(titulo="Limitaciones")
            .col-lg-12.my-3
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | La relevancia de los datos secundarios puede no coincidir completamente con los objetivos del estudio.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Los datos secundarios pueden estar desactualizados o no haber sido recolectados con el rigor necesario.
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/template/images/t7/8.png', alt='') 
      
    Separador 
    #t_7_5.titulo-segundo.color-acento-botones
      h2 7.5	Estrategias para combinar fuentes de datos múltiples en un análisis estadístico
    p En muchos estudios estadísticos, se pueden combinar fuentes de datos primarias y secundarias para obtener una visión más completa y enriquecida del fenómeno que se está analizando. Algunas estrategias para combinar estas fuentes incluyen:
    .row.bg15s.align-items-center.mb-5
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-7.my-2
                h5 Triangulación
                p Consiste en utilizar múltiples fuentes de datos para verificar y validar los resultados obtenidos. Por ejemplo, si un estudio de mercado utiliza encuestas primarias y datos secundarios de informes del sector, la triangulación puede ayudar a confirmar si las tendencias observadas son coherentes entre las diferentes fuentes.
              
              .col-lg-4.my-2 
                img.img-a.img-t(src='@/assets/template/images/t7/9.png', alt='')   
            .row.justify-content-center
              .col-lg-7.my-2
                h5 Integración de datos
                p En algunos estudios, es posible combinar bases de datos provenientes de distintas fuentes para realizar análisis más detallados. Esto es común en estudios de salud, donde se pueden combinar registros de pacientes con datos demográficos o socioeconómicos.
              .col-lg-4.my-2 
                img.img-a.img-t(src='@/assets/template/images/t7/10.png', alt='')  
            .row.justify-content-center
              .col-lg-7.my-2
                h5 Uso secuencial de fuentes
                p En algunos casos, los datos secundarios se utilizan como una primera aproximación para identificar tendencias o áreas de interés, y luego se recolectan datos primarios más específicos para profundizar en esas áreas.

              .col-lg-4.my-2 
                img.img-a.img-t(src='@/assets/template/images/t7/11.png', alt='')  
            .row.justify-content-center
              .col-lg-7.my-2
                h5 Análisis comparativo
                p Comparar los datos obtenidos de distintas fuentes (primarias y secundarias) para analizar discrepancias y mejorar la comprensión del fenómeno. Las diferencias entre los resultados pueden proporcionar información valiosa sobre las limitaciones de las distintas fuentes de datos o sobre variaciones en el fenómeno estudiado.

              .col-lg-4.my-2 
                img.img-a.img-t(src='@/assets/template/images/t7/12.png', alt='')
    .row.justify-content-center
      .col-lg-12.my-3
        .row.justify-content-center.align-items-center.p-4.brad.mb-5
          .col-lg-auto
            img.img-a.img-t(src='@/assets/template/images/t7/13.svg' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0
              | Las fuentes de datos, tanto primarias como secundarias, son fundamentales para la realización de estudios estadísticos. Las fuentes primarias permiten recolectar datos específicos y actualizados, mientras que las fuentes secundarias proporcionan acceso a grandes volúmenes de datos ya disponibles. Evaluar la confiabilidad y validez de las fuentes de datos es necesario para asegurar la calidad del análisis y las conclusiones obtenidas. La combinación de diversas fuentes de datos puede enriquecer los estudios y permitir un análisis más completo y preciso del fenómeno en estudio. 
    
    .row.justify-content-center
      .col-lg-10.my-3
        .row.justify-content-center.align-items-center.bg13.p-4.brad.mb-5
          .col-lg-7
            p.mb-0
              b Ejemplo: 
              |  evaluación de fuentes de datos.
            p Supungamos que estamos utilizando las siguientes fuentes de datos para un estudio:
            ol.lista-ol--cuadro.fa-ul.px-2
              li
                .lista-ol--cuadro__vineta
                  span 1
                span
                  b Datos primarios:
                  |  encuestas aplicadas a una muestra de clientes.
              li
                .lista-ol--cuadro__vineta
                  span 2
                span
                  b Datos secundarios:
                  |  reportes de satisfacción del cliente proporcionados por la empresa de los últimos cinco años.
            p Evaluamos la confiabilidad de las fuentes:
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  | Los datos primarios son confiables porque controlamos el proceso de recolección.
              li.mb-3
                i.fas.fa-check.v1
                span
                  | Los datos secundarios son útiles, pero pueden no estar actualizados o tener sesgos relacionados con el método de recolección anterior.
          .col-lg-4
            img.img-a.img-t(src='@/assets/template/images/t7/14.svg' alt='')
    
    .titulo-sexto.color-acento-contenido.offset-2(data-aos="zoom-in")
      h5 Figura 2.
      span  Tipos de Fuentes de Datos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-3
        figure
          img(src='@/assets/template/images/t7/15.svg', alt='La Figura 2 se denomina «Tipos de fuentes de datos» y presenta los diversos tipos de fuente según el origen, la naturaleza, el formato, la procedencia y la accesibilidad.')
      .col-lg-8 
        figcaption Fuente: OIT, 2024.
</template>

<script>
export default {
  name: 'Tema7',
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
