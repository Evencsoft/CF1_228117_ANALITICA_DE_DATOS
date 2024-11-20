<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Definición de requerimientos para la recolección de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.img-a.img-t(src='@/assets/template/images/t6/1.svg', alt='') 
      .col-lg-8
        p La definición de requerimientos para la recolección de datos es una fase crítica en cualquier estudio estadístico, ya que determina el tipo de información que se necesita, la forma en que se obtendrá, y las características que deben cumplir los datos para asegurar su utilidad en el análisis posterior. Los requerimientos bien definidos aseguran que los datos recolectados sean adecuados para cumplir con los objetivos del estudio y que la recolección de datos se realice de manera eficiente y efectiva.

    Separador 
    #t_6_1.titulo-segundo.color-acento-botones
      h2 6.1	Tipos de requerimientos en proyectos estadísticos
    p Antes de recolectar datos, es necesario definir qué tipo de datos se necesitan para cumplir con los objetivos del estudio. Los requerimientos pueden variar dependiendo del contexto y el tipo de análisis que se va a realizar. Los requerimientos pueden dividirse en las siguientes categorías:
    .row.bg15s.align-items-center.mb-5
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                h5 Requerimientos cuantitativos
                p Se refieren a datos numéricos que pueden ser medidos y expresados en números. Estos incluyen, por ejemplo, medidas de ingresos, peso, altura, cantidades vendidas, etc. Los datos cuantitativos son esenciales para realizar análisis numéricos y estadísticos que permitan obtener resultados precisos.
                p Ejemplo: En un estudio de ventas, los datos requeridos pueden incluir la cantidad de unidades vendidas, los ingresos generados, o el precio promedio por unidad.

              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/template/images/t6/2.png', alt='')   
            .row.justify-content-center
              .col-lg-6.my-2
                h5 Requerimientos cualitativos
                p Se refieren a datos no numéricos que describen características o atributos. Estos datos suelen ser categóricos y se utilizan para clasificar o agrupar elementos. Incluyen variables como género, opiniones, preferencias, tipos de productos, entre otros.
                p Ejemplo: En una encuesta de satisfacción del cliente, los datos cualitativos pueden incluir comentarios sobre la experiencia de compra o la clasificación de los productos en categorías de satisfacción (muy satisfecho, satisfecho, insatisfecho).
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/template/images/t6/3.png', alt='')  
            .row.justify-content-center
              .col-lg-6.my-2
                h5 Requerimientos temporales
                p Establecen la necesidad de recolectar datos en intervalos de tiempo específicos o durante un periodo particular. Los datos temporales son importantes cuando se quiere analizar cambios o tendencias a lo largo del tiempo.
                p Ejemplo: Un estudio sobre el comportamiento de los consumidores puede requerir datos de ventas mensuales durante los últimos cinco años para identificar patrones estacionales.

              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/template/images/t6/4.png', alt='')  
            .row.justify-content-center
              .col-lg-6.my-2
                h5 Requerimientos geográficos
                p Se refieren a la necesidad de recolectar datos en una ubicación o conjunto de ubicaciones específicas. Los estudios geográficos o regionales necesitan definir claramente las áreas de donde se tomarán los datos.
                p Ejemplo: Un análisis de mercado puede requerir datos específicos de ventas de diferentes ciudades o regiones para comparar los comportamientos de compra en diversas zonas geográficas.

              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/template/images/t6/5.png', alt='')
    Separador 
    #t_6_2.titulo-segundo.color-acento-botones
      h2 6.2	Requerimientos cuantitativos y cualitativos en la estadística
    p Los requerimientos cuantitativos y cualitativos son fundamentales para determinar el enfoque y los métodos que se utilizarán en el estudio estadístico. Ambos tipos de datos son igualmente importantes, pero tienen diferentes aplicaciones y usos dentro del análisis.
    TabsC.color-acento-botones.mb-5
      .p-4.py-99.py-md-5(titulo="Requerimientos cuantitativos")
        .row
          .col-lg-5
            img.img-a.img-t(src='@/assets/template/images/t6/6.png', alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Datos numéricos:
                  |  permiten realizar análisis estadísticos como la estimación de medias, la varianza, la correlación, entre otros.
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Escalas de medición:
                  |  pueden clasificarse en datos de razón (con un valor cero absoluto, como ingresos) o datos de intervalo (sin un valor cero absoluto, como la temperatura en grados Celsius).
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Ejemplos de análisis:
                  |  los datos cuantitativos se utilizan para calcular tendencias centrales (media, mediana, moda), medidas de dispersión (desviación estándar, varianza), y para realizar pruebas de hipótesis o análisis de regresión.
      .p-4.py-99.py-md-5(titulo="Requerimientos cualitativos")
        .row
          .col-lg-5
            img.img-a.img-t(src='@/assets/template/images/t6/7.png', alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Datos categóricos:
                  |  permiten clasificar y agrupar elementos en categorías, y se utilizan comúnmente en la estadística descriptiva para describir frecuencias o proporciones.
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Escalas de medición:
                  |  pueden clasificarse en variables nominales (sin un orden intrínseco, como género) o variables ordinales (con un orden intrínseco, como niveles de satisfacción).
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Ejemplos de análisis:
                  |  los datos cualitativos se utilizan para calcular frecuencias, porcentajes y realizar análisis de tablas cruzadas, análisis de chi-cuadrado, o análisis cualitativos más detallados.
    Separador 
    #t_6_3.titulo-segundo.color-acento-botones
      h2 6.3 Identificación de las variables clave a recolectar
    p Una vez que se han definido los requerimientos cuantitativos y cualitativos, es importante identificar cuáles serán las variables clave que se recolectarán durante el estudio. Estas variables son los datos específicos que se medirán o recolectarán y que serán relevantes en el análisis posterior.
    .row.justify-content-center.mb-5
      .col-lg-4
        .bg15.p-4.brad.h-100
          img.img-t.img-a.mb-4(src='@/assets/template/images/t6/8.svg')
          .row.justify-content-center.mb-4
            p.col-lg-auto.mb-2.bg11.px-3
              b
                | Variables dependientes e independientes
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  b La variable dependiente
                  |  es la que se quiere estudiar o predecir (por ejemplo, los ingresos o el rendimiento académico).
              li.mb-3
                i.fas.fa-check.v1
                span
                  b Las variables independientes 
                  |  son aquellas que pueden influir o tener un efecto sobre la variable dependiente (por ejemplo, el nivel educativo o la cantidad de horas trabajadas).
      .col-lg-4
        .bg15.p-4.brad.h-100
          img.img-t.img-a.mb-4(src='@/assets/template/images/t6/9.svg')
          .row.justify-content-center.mb-4
            p.col-lg-auto.mb-2.bg11.px-3
              b
                | Criterios para identificar las variables clave
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  | Relevancia para los objetivos del estudio.
              li.mb-3
                i.fas.fa-check.v1
                span
                  | Capacidad para ser medidas de manera confiable.  
              li.mb-3
                i.fas.fa-check.v1
                span
                  | Capacidad para influir en las decisiones o conclusiones que se derivarán del estudio.
      .col-lg-4
        .bgi.p-4.brad
          p 
            b Ejemplo:
            |  en un estudio sobre la efectividad de un nuevo medicamento, la variable dependiente podría ser la mejora en los síntomas del paciente, mientras que las variables independientes podrían incluir la dosis del medicamento, la edad y el estado de salud inicial del paciente.
    Separador 
    #t_6_4.titulo-segundo.color-acento-botones
      h2 6.4	Proceso de validación y ajuste de los requerimientos iniciales
    p Después de identificar las variables clave y definir los requerimientos para la recolección de datos, es necesario validar y, si es necesario, ajustar los requerimientos antes de comenzar la recolección. Este proceso es esencial para asegurarse de que los datos recolectados cumplirán con los objetivos del estudio y serán útiles para el análisis.
    .row.justify-content-center.mb-4 
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/template/images/t6/10.png', alt='') 
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Validación de requerimientos")
            .col-lg-12.my-3
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Asegurarse de que los datos a recolectar sean suficientes para responder a las preguntas de investigación o hipótesis planteadas.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Comprobar la disponibilidad de los datos. Por ejemplo, puede ser que algunos datos sean difíciles de recolectar o no existan en el formato necesario.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Evaluar la viabilidad de la recolección de datos en términos de tiempo, recursos y acceso a las fuentes de datos.

          .row.justify-content-center(titulo="Ajuste de requerimientos")
            .col-lg-12.my-3
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Si se encuentran limitaciones o problemas en la recolección de ciertos datos, los requerimientos pueden ser ajustados. Esto puede implicar la simplificación del estudio o la redefinición de algunas variables.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Los ajustes pueden incluir cambios en los métodos de recolección de datos (pasar de encuestas presenciales a encuestas en línea, por ejemplo) o la recolección de datos adicionales que no se consideraron inicialmente.
                
    Separador 
    #t_6_5.titulo-segundo.color-acento-botones
      h2 6.5	Impacto de los requerimientos en la precisión y relevancia de los datos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Los requerimientos establecidos para la recolección de datos tienen un impacto directo en la calidad, precisión y relevancia de los datos obtenidos. Si los requerimientos son demasiado amplios o ambiguos, es probable que se recojan datos innecesarios o que falte información crítica. Por el contrario, requerimientos muy estrictos pueden limitar la cantidad de datos disponibles y llevar a conclusiones insuficientes.
        p
          b Precisión de los datos:
          |  los requerimientos deben ser claros para asegurar que los datos recolectados sean lo suficientemente precisos como para permitir un análisis detallado y significativo. Los datos imprecisos o incompletos pueden llevar a resultados inexactos y análisis poco confiables.
        .bgi.p-4.brad.mb-5
          p 
            b Relevancia de los datos:
            |  solo deben recolectarse los datos que son relevantes para el estudio. Los requerimientos deben estar alineados con los objetivos del análisis para evitar recolectar datos innecesarios o irrelevantes, lo cual solo incrementaría la complejidad del análisis sin agregar valor.
        
      .col-lg-5
        img.img-a.img-t(src='@/assets/template/images/t6/11.png', alt='') 
    p
      b Coherencia y comparabilidad:
      |  al definir los requerimientos, es importante asegurarse de que los datos sean coherentes entre las diferentes fuentes y comparables a lo largo del tiempo o entre diferentes subgrupos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img.img-a.img-t(src='@/assets/template/images/t6/12.png' alt='')
      .col-lg-7
        .bg17.p-4.brad
          b Ejemplo: Recolección de datos cualitativos y cuantitativos.
          p.mt-3 En un estudio sobre hábitos alimenticios, definimos los siguientes requerimientos.
          p.mb-0
            b Datos cuantitativos:
          ul.lista-ul--color.fa-ul
              li
                i.fas.fa-check.v1
                span
                  | Ingreso mensual de los encuestados ( en dolares )
              li
                i.fas.fa-check.v1
                span
                  |  Número de comidas al día.
          p.mb-0
            b Datos cualitativos:
          ul.lista-ul--color.fa-ul
              li
                i.fas.fa-check.v1
                span
                  | Preferencias alimenticias ( vegetariano, carnívoro, etc.).
              li
                i.fas.fa-check.v1
                span
                  | Satisfacción con los hábitos alimenticios ( alta, media, baja )
            
          p Al definir estos requerimientos, garantizamos que los datos recolectados sean relevantes y suficientes para analizar los hábitos alimentarios y su relación con los ingresos y satisfacción.
      

</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema6',
  components: { AcordionA },
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
