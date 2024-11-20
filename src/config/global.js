export default {
  global: {
    componenteFormativo:
      'Fuentes y técnicas de recolección de datos para análisis',
    descripcionCurso:
      'Este componente aborda la recolección de datos, desde conceptos básicos hasta métodos avanzados de muestreo. Explora la diferencia entre población y muestra, tipos de muestreo, y la importancia de elegir fuentes confiables. Introduce herramientas de inferencia estadística para obtener datos representativos. Orientado a nivel técnico, ofrece una visión completa y práctica del proceso de recolección de datos para análisis estadístico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos generales de estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición de estadística y su propósito',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Clasificación de la estadística: descriptiva e inferencial',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Aplicaciones prácticas de la estadística en la recolección de datos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Población y muestra en estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diferencias entre población y muestra',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Criterios para definir una muestra representativa',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Criterios para seleccionar una muestra representativa',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Relación entre tamaño de la muestra y precisión de los resultados',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesos estadísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Fases del proceso estadístico: recolección, análisis e interpretación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Definición y objetivos de cada fase del proceso estadístico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Importancia de la correcta recolección de datos para evitar sesgos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Control de calidad en la recolección de datos estadísticos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas de muestreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Muestreo aleatorio simple: definición y aplicación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Muestreo estratificado: ventajas y procedimientos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Muestreo por conglomerados: características y ejemplos de uso',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Comparación entre diferentes técnicas de muestreo',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Importancia del tamaño de la muestra en cada técnica de muestreo',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Inferencia estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de inferencia estadística y su relevancia',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Diferencia entre parámetros y estadísticos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Inferencia en la toma de decisiones basada en datos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Tipos de estimación en inferencia: puntual y por intervalos',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Aplicación de pruebas de hipótesis en la inferencia estadística',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Definición de requerimientos para la recolección de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos de requerimientos en proyectos estadísticos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Requerimientos cuantitativos y cualitativos en la estadística',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Identificación de las variables clave a recolectar',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'Proceso de validación y ajuste de los requerimientos iniciales',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo:
              'Impacto de los requerimientos en la precisión y relevancia de los datos',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Fuentes de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Clasificación de fuentes de datos: primarias y secundarias',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Métodos para evaluar la confiabilidad y validez de las fuentes',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Uso de fuentes de datos primarias en encuestas y estudios',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo:
              'Fuentes de datos secundarias: bases de datos públicas, informes y publicaciones',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo:
              'Estrategias para combinar fuentes de datos múltiples en un análisis estadístico',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Determinación de la muestra',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Criterios para seleccionar una muestra representativa',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo:
              'Consideraciones al seleccionar una muestra para minimizar el error',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo:
              'Impacto del tamaño de la muestra en los resultados estadísticos',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo:
              'Técnicas para validar la representatividad de la muestra seleccionada',
            hash: 't_8_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Conceptos generales de estadística',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, septiembre 20). Introducción a la estadística.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wMCDkknpUVw',
    },
    {
      tema: 'Población y muestra en estadística.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022b, octubre 26). Principales elementos de la estadística.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ad5gxB9PhKQ',
    },
    {
      tema: 'Procesos estadísticos.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022a, julio 27). Herramientas de información estadística básica.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AW1LM-d0YWE',
    },
    {
      tema: 'Procesos estadísticos.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 24). Estadística descriptiva, gráficas e informes estadísticos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=v5UMlXHe2nM',
    },
    {
      tema: 'Técnicas de muestreo.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, marzo 26). Etapas del procesamiento de datos y métodos estadísticos - Introducción.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ndzj15PQEVw',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de Datos',
      significado:
        'Paso del proceso estadístico donde los datos recolectados se organizan y estudian para identificar patrones y relaciones.',
    },
    {
      termino: 'Control de Calidad',
      significado:
        'Prácticas implementadas durante la recolección de datos para asegurar precisión y confiabilidad.',
    },
    {
      termino: 'Dato',
      significado:
        'Unidad básica de información sin procesar, obtenida a través de observaciones, encuestas u otras fuentes.',
    },
    {
      termino: 'Estadística',
      significado:
        'Ciencia que se dedica a la recolección, organización, análisis e interpretación de datos para la toma de decisiones.',
    },
    {
      termino: 'Estadística Descriptiva',
      significado:
        'Rama de la estadística que se enfoca en resumir y describir las características principales de un conjunto de datos.',
    },
    {
      termino: 'Estadística Inferencial',
      significado:
        'Rama de la estadística que permite hacer generalizaciones y predicciones sobre una población a partir de una muestra.',
    },
    {
      termino: 'Fuente Primaria',
      significado:
        'Datos recolectados directamente por el investigador específicamente para el estudio en cuestión.',
    },
    {
      termino: 'Fuente Secundaria',
      significado:
        'Datos previamente recopilados por otros y utilizados en el análisis actual.',
    },
    {
      termino: 'Interpretación',
      significado:
        'Fase en la que se analizan los resultados para sacar conclusiones y responder preguntas de investigación.',
    },
    {
      termino: 'Intervalo de Confianza',
      significado:
        'Rango de valores dentro del cual se espera que se encuentre un parámetro poblacional con un nivel de confianza especificado.',
    },
    {
      termino: 'Muestra',
      significado:
        'Subconjunto representativo de la población, utilizado para hacer inferencias sobre el total.',
    },
    {
      termino: 'Muestreo Aleatorio Simple',
      significado:
        'Técnica de muestreo en la que todos los elementos de la población tienen la misma probabilidad de ser seleccionados.',
    },
    {
      termino: 'Muestreo Estratificado',
      significado:
        'Método de muestreo en el que la población se divide en subgrupos homogéneos, seleccionando una muestra de cada uno.',
    },
    {
      termino: 'Muestreo por Conglomerados',
      significado:
        'Técnica en la que la población se agrupa en conglomerados y se seleccionan algunos para ser estudiados en su totalidad.',
    },
    {
      termino: 'Parámetro',
      significado:
        'Valor numérico que representa una característica de la población, como la media o la desviación estándar.',
    },
    {
      termino: 'Población',
      significado:
        'Conjunto total de individuos, objetos o eventos de interés en un estudio estadístico.',
    },
    {
      termino: 'Prueba de Hipótesis',
      significado:
        'Procedimiento estadístico utilizado para evaluar si una afirmación sobre un parámetro poblacional es consistente con los datos de la muestra.',
    },
    {
      termino: 'Sesgo',
      significado:
        'Error sistemático en la recolección de datos que distorsiona los resultados y afecta la validez de las conclusiones.',
    },
    {
      termino: 'Variable',
      significado:
        'Característica o atributo que puede ser medido en los individuos de un estudio; puede ser cualitativa o cuantitativa.',
    },
  ],
  referencias: [
    {
      referencia: 'Batanero, C. (2001). Didáctica de la estadística.',
      link: '',
    },
    {
      referencia: 'Cochran, W. G. (1980). Técnicas de muestreo (3.ª ed.).',
      link: '',
    },
    {
      referencia:
        'Hernández Sampieri, R., Fernández Collado, C., & Baptista Lucio, P. (2014). Metodología de la investigación (6.ª ed.).',
      link: '',
    },
    {
      referencia: 'Martínez, J. (2004). Muestreo estadístico.',
      link: '',
    },
    {
      referencia:
        'Montgomery, D. C., & Runger, G. C. (2015). Probabilidad y estadística aplicada a la ingeniería (5.ª ed.).',
      link: '',
    },
    {
      referencia:
        'Scheaffer, R. L., Mendenhall, W., & Ott, R. L. (2007). Elementos de muestreo (6.ª ed.).',
      link: '',
    },
    {
      referencia: 'Triola, M. F. (2018). Estadística (12.ª ed.).',
      link: '',
    },
    {
      referencia:
        'Walpole, R. E., Myers, R. H., Myers, S. L., & Ye, K. (2012). Probabilidad y estadística para ingenieros (9.ª ed.).',
      link: '',
    },
  ],
}
