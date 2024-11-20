<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procesos estadísticos
    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/template/images/t3/1.svg')
      .col-lg-5.my-lg-0.my-3
        .bg28.p-3.brad.j1.h-100
          p.mb-0
            |  El proceso estadístico es un conjunto sistemático de pasos que se siguen para recolectar, analizar y presentar datos con el fin de obtener información útil para la toma de decisiones. Este proceso involucra varias fases que garantizan la validez y precisión de los resultados obtenidos. 
      .col-lg-3.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/template/images/t3/2.png')
    Separador 
    #t_3_1.titulo-segundo.color-acento-botones
      h2 3.1	Fases del proceso estadístico: recolección, análisis e interpretación
    p El proceso estadístico generalmente se divide en tres grandes fases:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-lg-12
            .titulo.mb-4(data-aos="flip-up")
              h5.mb-0.p-1 Recolección de datos
            p Es el primer paso en cualquier proceso estadístico y consiste en obtener la información necesaria para el análisis. Los datos pueden recolectarse de diversas fuentes, como encuestas, experimentos o registros históricos. Esta fase es crítica, ya que la calidad y precisión de los datos recolectados impactan directamente en los resultados finales.
            p Durante esta fase, es importante definir las variables que se van a estudiar, el tipo de datos que se necesitan (cuantitativos o cualitativos), y el método de recolección (observación, encuestas, entrevistas, etc.). La recolección puede realizarse mediante:
            .bg28.p-4.brad
              ul.lista-ul--color.fa-ul
                  li.mb-0
                    i.fas.fa-check.v1
                    span
                      b Muestreo:
                      |  selección de una muestra representativa de la población.
                  li.mb-0
                    i.fas.fa-check.v1
                    span
                      b Censos:
                      |  recolección de datos de toda la población.
                  li.mb-0
                    i.fas.fa-check.v1
                    span
                      b Registros administrativos:
                      |  uso de datos ya existentes como los registros médicos, registros financieros, etc.
      .col-lg-4
        img.img-t.img-a(src='@/assets/template/images/t3/3.png')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.img-t.img-a(src='@/assets/template/images/t3/4.png')
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-lg-12
            .bgi.p-4.brad
              .titulo.mb-4(data-aos="flip-up")
                h5.mb-0.p-1 Análisis de datos
              p Una vez que se han recolectado los datos, el siguiente paso es organizarlos y analizarlos. Esto implica ordenar los datos, clasificarlos y aplicar técnicas estadísticas adecuadas. Se pueden utilizar métodos de análisis descriptivo, como el cálculo de medidas de tendencia central (media, mediana, moda) y de dispersión (varianza, desviación estándar), o métodos inferenciales que permiten hacer generalizaciones sobre la población.
              p En esta fase, se busca identificar patrones, tendencias o relaciones entre las variables. Las técnicas estadísticas empleadas dependen del tipo de datos y de los objetivos del estudio. Por ejemplo, los gráficos como los histogramas o los diagramas de dispersión ayudan a visualizar los datos, mientras que los modelos estadísticos permiten hacer predicciones.

    .row.justify-content-center.align-items-center
      .col-lg-12
        .titulo.mb-4(data-aos="flip-up")
          h5.mb-0.p-1 Interpretación de resultados
        p Finalmente, una vez que se han analizado los datos, es necesario interpretar los resultados obtenidos. Esta fase consiste en darle sentido a los resultados y responder las preguntas de investigación o los objetivos planteados al inicio del estudio. Se utilizan conclusiones basadas en los resultados estadísticos para tomar decisiones informadas o formular nuevas hipótesis. La interpretación debe realizarse con cuidado, teniendo en cuenta posibles sesgos en los datos y limitaciones del estudio. Además, es importante que los resultados se comuniquen de manera clara, generalmente a través de informes o presentaciones que incluyan gráficos y tablas para facilitar la comprensión.
    
    .titulo-sexto.color-acento-contenido.offset-2(data-aos="zoom-in")
      h5 Figura 1.
      span  Fases del proceso estadístico
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/template/images/t3/5.svg', alt='La Figura 1 se denomina «Fases del proceso estadístico» y sintetiza las fases del proceso estadístico: recolección de datos, análisis de datos e interpretación de resultados, y los principales elementos de cada una de ellas.')
    
    p La recolección de datos es esencial en el proceso estadístico, ya que los datos constituyen la base de cualquier análisis. Existen varios métodos para recolectar datos, y la elección de un método dependerá del tipo de información que se necesita y de los recursos disponibles.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.img-t.img-a(src='@/assets/template/images/t3/6.png')
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-lg-12
            .titulo.mb-4(data-aos="flip-up")
              h5.mb-0.p-1 Encuestas
            p Las encuestas son uno de los métodos más comunes para recolectar datos. Consisten en formular una serie de preguntas estandarizadas a un grupo de personas (la muestra) con el fin de obtener información cuantitativa o cualitativa. Las encuestas pueden ser presenciales, telefónicas o en línea. Una de sus ventajas es que permiten obtener datos de una gran cantidad de personas en un periodo corto de tiempo.
            p Tipos de encuestas:
            .bgi.p-1.brad.mb-4
              ul.lista-ul--color.fa-ul
                  li.mb-0
                    i.fas.fa-check.v1
                    span
                      b Encuestas estructuradas:
                      |  tienen preguntas cerradas con respuestas predefinidas.
                  li.mb-0
                    i.fas.fa-check.v1
                    span
                      b Encuestas semiestructuradas:
                      |  combinan preguntas cerradas y abiertas, ofreciendo mayor flexibilidad.
        .row.justify-content-center.align-items-center
          .col-lg-12
            .titulo.mb-4(data-aos="flip-up")
              h5.mb-0.p-1 Observación
            p Este método implica la recolección de datos a través de la observación directa de comportamientos, eventos o fenómenos. La observación puede ser participante (el investigador forma parte del entorno que está observando) o no participante (el investigador observa desde fuera sin interactuar con el entorno). Es un método útil cuando se necesita estudiar fenómenos en su contexto natural.
            p Ejemplo: En estudios de comportamiento animal, los investigadores pueden observar el comportamiento de una población de animales en su hábitat natural.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg28.p-4.brad
          .row.justify-content-center.align-items-center
            .col-lg-2
              img.img-t.img-a(src='@/assets/template/images/t3/7.svg')
            .col-lg-10
              .titulo.mb-4(data-aos="flip-up")
                h5.mb-0.p-1 Experimentación
              p En un experimento, el investigador manipula una o más variables independientes para observar el efecto sobre una variable dependiente. Este método permite establecer relaciones de causa y efecto. Los experimentos suelen realizarse en entornos controlados, como laboratorios, para minimizar la influencia de variables externas.
              P Ejemplo: En un estudio de un nuevo medicamento, los investigadores podrían dar el medicamento a un grupo de pacientes y un placebo a otro grupo, observando las diferencias en los resultados de salud entre ambos grupos.
    Separador 
    #t_3_2.titulo-segundo.color-acento-botones
      h2 3.2	Definición y objetivos de cada fase del proceso estadístico
    
    p Cada fase del proceso estadístico tiene objetivos claros que contribuyen a la integridad del análisis y a la validez de los resultados:
    
    .row.justify-content-center.mb-4 
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Recolección de datos")
            .col-lg-12.my-3
              p El objetivo de esta fase es obtener datos precisos y confiables que respondan a las preguntas de investigación. La recolección adecuada de datos minimiza errores y sesgos, lo que asegura la calidad del análisis posterior.
          .row.justify-content-center(titulo="Análisis de datos")
            .col-lg-12.my-3
              p El objetivo de esta fase es identificar patrones, tendencias y relaciones entre las variables. A través del análisis estadístico, se extrae información significativa que ayudará a interpretar el fenómeno en estudio. Además, el análisis permite realizar comparaciones y predicciones.
          .row.justify-content-center(titulo="Interpretación de resultados")
            .col-lg-12.my-3
              p El objetivo aquí es proporcionar una explicación clara y precisa de los hallazgos del análisis de datos. La interpretación correcta de los resultados es fundamental para que las conclusiones del estudio sean útiles y relevantes para la toma de decisiones.
          
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/template/images/t3/8.png', alt='') 
    Separador 
    #t_3_3.titulo-segundo.color-acento-botones
      h2 3.3  Importancia de la correcta recolección de datos para evitar sesgos
    p La correcta recolección de datos es esencial para evitar errores y sesgos que podrían comprometer la validez de los resultados. Algunos tipos de sesgos que pueden ocurrir durante la recolección de datos son:
    .row.justify-content-center.mb-4 
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/template/images/t3/9.svg', alt='')       
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Sesgo de selección")
            .col-lg-12.my-3
              p Ocurre cuando la muestra no es representativa de la población. Por ejemplo, si se estudia una muestra de estudiantes universitarios para hacer inferencias sobre toda la población adulta, se incurriría en un sesgo de selección.
          .row.justify-content-center(titulo="Sesgo de respuesta")
            .col-lg-12.my-3
              p Sucede cuando las respuestas de los participantes son influenciadas por la forma en que se formulan las preguntas o por el entorno en el que se realiza la encuesta. Esto puede ocurrir, por ejemplo, si las preguntas están redactadas de manera que sugieren una respuesta particular.
          .row.justify-content-center(titulo="Sesgo de no respuesta")
            .col-lg-12.my-3
              p Ocurre cuando una parte de la muestra seleccionada no participa en el estudio, lo que puede afectar la representatividad de los datos recolectados.
          
    Separador 
    #t_3_4.titulo-segundo.color-acento-botones
      h2 3.4	Control de calidad en la recolección de datos estadísticos
    p El control de calidad en la recolección de datos es una etapa crítica para garantizar que los datos obtenidos sean precisos, completos y confiables. Algunas prácticas comunes para asegurar la calidad de los datos incluyen:
    .row.justify-content-center.mb-4 
      .col-lg-12.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Capacitación del personal")
            .col-lg-12.my-3
              p Es importante que las personas encargadas de recolectar los datos estén capacitadas en los métodos y herramientas que van a utilizar. Esto asegura que la recolección sea consistente y libre de errores.
          .row.justify-content-center(titulo="Supervisión y monitoreo")
            .col-lg-12.my-3
              p Durante la recolección de datos, es esencial supervisar el proceso para identificar y corregir errores en tiempo real. El monitoreo constante garantiza que se sigan los procedimientos establecidos.
          .row.justify-content-center(titulo="Pruebas piloto")
            .col-lg-12.my-3
              p Antes de realizar un estudio completo, se puede hacer una prueba piloto con un pequeño grupo para detectar posibles problemas en los cuestionarios, herramientas o procedimientos.
          .row.justify-content-center(titulo="Revisión de datos")
            .col-lg-12.my-3
              p Después de la recolección, es importante revisar los datos para identificar valores atípicos o inconsistencias que podrían indicar errores en la recolección.
              p 
                b Ejemplo:
                | proceso estadístico para una encuesta de satisfacción.
              p Una empresa realiza una encuesta de satisfacción a sus clientes y obtiene los siguientes resultados sobre una escala de 1 a 10 (donde 1 es muy insatisfecho y 10 es muy satisfecho):
              p Respuesta = { 7, 8, 6, 9, 7, 8, 5, 7, 6, 9 }
              p
                b Fase de recolección de datos:
                | se recolecta las respuestas de los clientes mediante un formulario en línea.
              p Fase de análisis
              .tarjeta.text-center
                <div class="eq-c">
                  <span> Media: x = </span>
                <div class="fraction">
                  
                  <span class="fup">7 + 8 +6 + 9 + 7 + 8 + 5 + 7 + 6 + 9</span>
                  <span class="bar">/</span>
                  <span class="fdn">10</span>
                </div>
                <span> = 7.2</span>
              </div>
              
              p Desviación estándar: o = 1.35
              p
                b Fase de interpretación:
                | La medida de satisfacción es de 7.2, lo que indica que, en general, los clientes están satisfechos. Sin embargo, la desviación estándar muestra cierta variabilidad en las respuestas, por lo que algunos clientes están menos satisfechos.

</template>

<script>
import AcordionA from '../bootstrap/AcordionA.vue'
export default {
  name: 'Tema3',
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
