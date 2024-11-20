<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Inferencia estadística
    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/template/images/t5/1.svg')
      .col-lg-5.my-lg-0.my-3
        .bg28.p-3.brad.j1.h-100
          p.mb-0
            |  La 
            b inferencia estadística 
            | es una rama de la estadística que permite sacar conclusiones sobre una población a partir de una muestra de datos. Mediante el uso de probabilidades y modelos estadísticos, la inferencia nos permite estimar características de una población, probar hipótesis y realizar predicciones basadas en los datos observados. Es fundamental para la toma de decisiones en contextos donde no es posible o práctico estudiar a toda la población.
      .col-lg-3.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/template/images/t5/2.png')
    
    Separador 
    #t_5_1.titulo-segundo.color-acento-botones
      h2 5.1	Concepto de inferencia estadística y su relevancia
    p El proceso estadístico generalmente se divide en tres grandes fases:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-lg-12
            p La inferencia estadística se refiere a los métodos utilizados para extraer conclusiones sobre una población basándose en una muestra de esa población. La inferencia es esencial en situaciones donde sería demasiado costoso o imposible obtener datos de todos los elementos de una población (por ejemplo, una encuesta nacional o un estudio médico con miles de pacientes).
            p La relevancia está dada por:
            .bg28.p-4.brad
              ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1
                    span
                      b Ahorro de recursos:
                      |  en lugar de estudiar a toda la población, la inferencia permite hacer generalizaciones basadas en una muestra, lo que ahorra tiempo, dinero y esfuerzo.
                  li.mb-3
                    i.fas.fa-check.v1
                    span
                      b Generalización:
                      |  al usar técnicas inferenciales, es posible hacer predicciones y conclusiones más amplias sobre la población con un margen de error controlado.
                  li.mb-3
                    i.fas.fa-check.v1
                    span
                      b Toma de decisiones:
                      |  la inferencia es clave para tomar decisiones basadas en datos, como en investigaciones científicas, estudios de mercado, o procesos industriales de control de calidad.
                      | Ejemplo: En una empresa que quiere conocer la satisfacción de los clientes, la inferencia estadística permite estimar la satisfacción global basándose en una encuesta a una muestra representativa de clientes.
      .col-lg-4
        img.img-t.img-a(src='@/assets/template/images/t5/3.png')
    Separador 
    #t_5_2.titulo-segundo.color-acento-botones
      h2 5.2	Diferencia entre parámetros y estadísticos
    p Para comprender la inferencia estadística, es importante distinguir entre 
      b parámetros y estadísticos:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img.img-t.img-a(src='@/assets/template/images/t5/4.svg')
      .col-lg-9
        .bgi.p-4.brad
          ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Parámetro:
                  |  un parámetro es un valor numérico que describe una característica de toda la población. Como es difícil o imposible conocer el valor exacto del parámetro (por ejemplo, la media de ingresos de todos los habitantes de un país), se utilizan muestras para estimarlo.
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Estadístico:
                  |  un estadístico es un valor numérico que describe una característica de una muestra. Los estadísticos se calculan a partir de los datos recolectados y se utilizan para hacer inferencias sobre los parámetros de la población.
          p Ejemplo: si tomamos una muestra de 100 estudiantes de una universidad y calculamos su promedio de calificaciones, ese promedio es un estadístico. Si intentamos hacer una inferencia sobre el promedio de calificaciones de todos los estudiantes de la universidad, estamos haciendo una estimación del parámetro poblacional.  
    Separador 
    #t_5_3.titulo-segundo.color-acento-botones
      h2 5.3	Inferencia en la toma de decisiones basada en datos
    p La inferencia estadística es fundamental para la toma de decisiones en situaciones de incertidumbre. Al aplicar técnicas inferenciales, podemos hacer predicciones y estimaciones sobre una población o evento futuro con un margen de error cuantificado. Las decisiones basadas en datos tienen una mayor probabilidad de éxito porque están respaldadas por evidencia numérica y análisis objetivo.
    .row.justify-content-center.mb-4 
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/template/images/t5/5.png', alt='') 
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Toma de decisiones en investigación médica")
            .col-lg-12.my-3
              p Los ensayos clínicos que prueban la efectividad de un nuevo medicamento utilizan muestras de pacientes para hacer inferencias sobre cómo ese medicamento funcionará en la población general. Las decisiones sobre la aprobación o no de un fármaco se basan en la inferencia estadística obtenida de la muestra.
          .row.justify-content-center(titulo="Toma de decisiones empresariales")
            .col-lg-12.my-3
              p Las empresas utilizan la inferencia para hacer predicciones sobre ventas futuras, satisfacción del cliente o efectividad de campañas publicitarias, lo que les permite tomar decisiones estratégicas informadas.
          .row.justify-content-center(titulo="Predicción de tendencias")
            .col-lg-12.my-3
              p La inferencia estadística se usa en estudios de mercado para predecir las tendencias de consumo, lo que ayuda a las empresas a ajustar sus estrategias de producción y #[i marketing].   
    Separador 
    #t_5_4.titulo-segundo.color-acento-botones
      h2 5.4	Tipos de estimación en inferencia: puntual y por intervalos
    p Existen dos tipos principales de estimaciones que se utilizan en la inferencia estadística: estimaciones puntuales y estimaciones por intervalos.
    TabsC.color-acento-botones.mb-5
      .p-4.py-99.py-md-5(titulo="Estimación puntual")
        .row
          .col-lg-5
            img.img-a.img-t(src='@/assets/template/images/t5/6.png', alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            p Es un solo valor numérico calculado a partir de una muestra que se utiliza para estimar un parámetro poblacional. Por ejemplo, si se toma una muestra aleatoria de salarios de empleados y se calcula la media, ese valor de la media es una estimación puntual del salario promedio en la población.
            ul.lista-ul--color.fa-ul
              li.mb-0
                i.fas.fa-check.v1
                span
                  b Ventajas:
                  |  es fácil de calcular y proporcionar.
              li.mb-0
                i.fas.fa-check.v1
                span
                  b Desventajas:
                  |  no proporciona información sobre la variabilidad o incertidumbre de la estimación.
      .p-4.py-99.py-md-5(titulo="Estimación por intervalos")
        .row
          .col-lg-5
            img.img-a.img-t(src='@/assets/template/images/t5/7.png', alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            p En lugar de un solo valor, se proporciona un rango (intervalo) dentro del cual es probable que se encuentre el parámetro poblacional con un cierto nivel de confianza. Un intervalo de confianza es un ejemplo de estimación por intervalos.
            ul.lista-ul--color.fa-ul
              li.mb-0
                i.fas.fa-check.v1
                span
                  b Ventajas:
                  |  proporciona una medida de la precisión de la estimación y refleja la incertidumbre inherente en el muestreo.
              li.mb-0
                i.fas.fa-check.v1
                span
                  b Desventajas:
                  |  Más complejo de calcular y comunicar que la estimación puntual.
      
    .row.justify-content-center
      .col-lg-10.my-3
        .row.justify-content-center.align-items-center.bg10.p-4.brad.mb-5
          .col-lg-auto
            img.img-a.img-t(src='@/assets/template/images/t5/11.svg' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0
              b Ejemplo: 
              |  un intervalo de confianza del 95 % para el salario promedio puede ser $ 30,000 a $ 35,000, lo que indica que estamos un 95 % seguros de que el salario promedio de la población está dentro de ese rango.
    Separador 
    #t_5_5.titulo-segundo.color-acento-botones
      h2 5.5	Aplicación de pruebas de hipótesis en la inferencia estadística
    p Una de las herramientas más poderosas de la inferencia estadística es la prueba de hipótesis. Este proceso permite evaluar la validez de una afirmación sobre un parámetro poblacional, basándose en los datos de una muestra.
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-3
        img.img-a.img-t(src='@/assets/template/images/t5/8.png' alt='')
      .col-lg-9
        p
          b Hipótesis nula (H₀):
          | es la afirmación que se asume verdadera al comienzo de la prueba. Normalmente, la hipótesis nula es una afirmación de "no efecto" o "no diferencia". Por ejemplo, en un estudio médico, la hipótesis nula podría ser que un nuevo tratamiento no es más efectivo que el tratamiento actual.
        p 
          b Hipótesis alternativa (H₁): 
          | Es la afirmación opuesta a la hipótesis nula. Es lo que el investigador espera demostrar. En el caso del tratamiento médico, la hipótesis alternativa sería que el nuevo tratamiento sí es más efectivo que el tratamiento actual.
        .bgi.p-4.brad.mb-3
          b Proceso de prueba de hipótesis:
          ol.lista-ol--cuadro.fa-ul.px-2.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              span
                b Formular la hipótesis nula (H₀) y la hipótesis alternativa (H₁).
            li
              .lista-ol--cuadro__vineta
                span 2
              span
                b Elegir un nivel de significancia (α): 
                | este valor (generalmente 0.05) es el umbral que se utiliza para decidir si los resultados observados son lo suficientemente inusuales como para rechazar la hipótesis nula.
            li
              .lista-ol--cuadro__vineta
                span 3
              span
                b Calcular una estadística de prueba: 
                | esta estadística se utiliza para comparar los resultados observados con lo que se esperaría si la hipótesis nula fuera cierta.
            li
              .lista-ol--cuadro__vineta
                span 4
              span
                b Decisión: 
                | si la estadística de prueba indica que los resultados son improbables bajo la hipótesis nula (es decir, el valor p es menor que α), se rechaza H₀ en favor de H₁.
        p 
          b Valor p:
          | El valor p es la probabilidad de obtener un resultado igual o más extremo que el observado, suponiendo que la hipótesis nula es cierta. Si el valor p es menor que el nivel de significancia se concluye que hay suficiente evidencia para rechazar la hipótesis nula.
    p 
      b Ejemplo: 
      |  si una empresa está probando si una nueva campaña publicitaria mejora las ventas en comparación con la campaña anterior, la hipótesis nula podría ser que no hay diferencia en las ventas. Al realizar la prueba de hipótesis, si el valor p es menor que 0.05, la empresa puede concluir que la nueva campaña es significativamente más efectiva.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg17.p-4.brad
          b Ejemplo: prueba de hipótesis
          p.mt-3 Supungamos que queremos probar si el salario promedio de los empleados en una empresa es mayor a $ 50.000. Tenemos una muestra de 30 empleados con una media de x = 52,000 y una desviación estándar de &#8709; = 8,000
          p
            b Hipótesis nula (H<sub>0</sub>):
            |  el salario promedio es &#181; = 50,000
          p
            b Hipótesis alternativa (H<sub>1</sub>):
            |  el salario promedio es mayor que a &#181; = 50,000
          p Utilizamos una 
            b prueba &#355;
            |  para una media muestral. El estadístico de prueba &#355; es:
          p.text-center 
            img.img-a.img-t(src='@/assets/template/images/t5/10.png' alt='')
          
          
         
          p Con un nivel de significancia o = 0.05, el valor crítico para t con 29 grados de libertad es 1.699. Como t = 1.37 < 1.699, no podemos rechazar H<sub>0</sub>, lo que indica que no hay suficiente evidencia para afirmar que el salario promedio es mayor a $ 50,000.
      .col-lg-3
        img.img-a.img-t(src='@/assets/template/images/t5/9.svg' alt='')

</template>

<script>
import AcordionA from '../bootstrap/AcordionA.vue'
export default {
  name: 'Tema5',
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
