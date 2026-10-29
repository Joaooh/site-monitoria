/*
 * COMO PUBLICAR VÍDEOS NA PLAYLIST:
 * 1. Crie um objeto raiz garantindo que a prop 'slug' seja a MESMA descrita lá em oficinas-detalhes.js.
 * 2. Dentro de 'videos', para vídeos no YouTube jogue a tag do link em 'id_youtube'. Essa tag pode ser encontrada na URL do vídeo embed (Compartilhar/Share -> Incorporar/Embed -> src="https://www.youtube.com/embed/TAG" - remova o que vier depois de "?si=".
 * 3. Para vídeos fora do Youtube (ex: Drive/Streamyard): omita o id_youtube, mas injete manualmente 'url', 'date', 'duration' e 'available: true'.
 * 4. Para uma aula "Em breve": Passe apenas 'id_youtube: ""'.
 */
export const playlistsData = [
  // --- FUNDAMENTOS DE CIÊNCIA DE DADOS - INTRODUÇÃO A PYTHON ---
  {
    slug: "fundamentos-ciencia-de-dados",
    titulo: "Fundamentos de Ciência de Dados - Introdução a Python",
    classroomUrl: "https://classroom.github.com/a/0v1wQ_7Z",
    videos: [
      {
        id_youtube: "XVUugYbc_Lo",
        title: "Introdução ao Python",
        description:
          "Aprendemos o básico da linguagem Python como variáveis, operadores aritméticos, tipos de variáveis e como utilizar o git/github",
        tags: ["PYTHON", "CD", "DATA TYPES", "GIT", "GITHUB"],
      },
      {
        id_youtube: "YLDpqX3imJo",
        title: "Condicionais, Operadores Booleanos e Relacionais",
        description:
          "Aprendemos sobre operadores booleanos (AND, OR, NOT), relacionais (==, <, >, <=, >=, !=) e estruturas condicionais (If, Elif, Else). Além disso, realizamos a preparação do ambiente de desenvolvimento com VsCode e Git/Github",
        tags: [
          "PYTHON",
          "CD",
          "IDE",
          "VSCODE",
          "GITHUB",
          "IF/ELSE",
          "BOOLEANOS",
        ],
      },
      {
        id_youtube: "K4YNXVVB26k",
        title: "Listas e Laços de Repetição",
        description:
          "Aprendemos sobre listas e laços de repetição (FOR e WHILE). Além disso, realizamos toda a execução no ambiente VsCode e Git/Github",
        tags: [
          "PYTHON",
          "CD",
          "IDE",
          "VSCODE",
          "GITHUB",
          "FOR",
          "WHILE",
          "LISTAS",
        ],
      },
      {
        id_youtube: "K4A_H8y29EY",
        title: "Funções e Escopo de Variáveis",
        description:
          "Aprendemos sobre funções, escopo de variáveis, endereços de memória e como o nosso computador enxerga tudo isso.",
        tags: [
          "PYTHON",
          "CD",
          "IDE",
          "VSCODE",
          "GITHUB",
          "FUNÇÕES",
          "ESCOPO",
          "VARIÁVEIS",
          "MEMÓRIA",
        ],
      },
      {
        id_youtube: "fEM1FhNGMsc",
        title: "Funções Anônimas, List Comprehension e dicionários",
        description:
          "Aprendemos sobre as funções de listas e dicionários, além de estruturas de dados do python como list comprehension e lambda",
        tags: [
          "PYTHON",
          "CD",
          "IDE",
          "VSCODE",
          "GITHUB",
          "FUNÇÕES",
          "LAMBDA",
          "LISTCOMPREHENSION",
          "DICIONÁRIO",
        ],
      },
      {
        id_youtube: "1wE-8LkAOTg",
        title: "Manipulação de Arquivos e Bibliotecas",
        description:
          "Aprendemos sobre como realizar a manipulação de arquivos no Python, além de introduzir bibliotecas como Pandas e Numpy",
        tags: [
          "PYTHON",
          "CD",
          "IDE",
          "VSCODE",
          "GITHUB",
          "ARQUIVOS",
          "MODULOS",
          "BIBLIOTECAS",
          "PANDAS",
          "NUMPY",
        ],
      },
    ],
  },
  // --- CIÊNCIA DE DADOS - FERRAMENTAS E FRAMEWORKS ---
  {
    slug: "ciencia-de-dados-ferramentas-e-frameworks",
    titulo: "Ciência de Dados - Ferramentas e Frameworks",
    classroomUrl: "https://classroom.github.com/a/0v1wQ_7Z",
    videos: [
      {
        id_youtube: "WYHysPv3PJU",
        title: "Manipulação de dados com Pandas e Numpy",
        description:
          "Aprendemos sobre como realizar a manipulação inicial dos dados no Python com Pandas e Numpy",
        tags: [
          "PYTHON",
          "CD",
          "IDE",
          "VSCODE",
          "GITHUB",
          "MODULOS",
          "BIBLIOTECAS",
          "PANDAS",
          "NUMPY",
        ],
      },
      {
        id_youtube: "EhLd8FBOA_M",
        title: "EDA e Estatística",
        description:
          "Aprendemos sobre EDA, algumas de suas técnicas e sua importância para etapas futuras de pré-processamento e modelagem de dados",
        tags: [
          "PYTHON",
          "CD",
          "GAUSS",
          "ESTATISTICA",
          "EDA",
          "MATPLOTLIB",
          "BIBLIOTECAS",
          "PANDAS",
          "NUMPY",
        ],
      },
      {
        id_youtube: "snoztVdecKo",
        title: "Pré-processamento com dados do Titanic",
        description:
          "Visualizamos na prática como realizar um EDA e o pré-processamento em um dataset de estudos (Titanic), aprofundando técnicas de análise de dados, estatística e modelagem",
        tags: [
          "PYTHON",
          "CD",
          "PRE-PROCESSAMENTO",
          "ESTATISTICA",
          "EDA",
          "SCIKIT-LEARN",
          "MATPLOTLIB",
          "SEABORN",
          "PANDAS",
          "NUMPY",
        ],
      },
      {
        id_youtube: "NKfJXRy354c",
        title: "Regressão e Introdução ao Scickit-learn",
        description:
          "EDA e pré-processamento em um dataset de regressão (aluguel de casas), aprofundando em técnicas de modelagem de dados utilizando a biblioteca scickit-learn",
        tags: [
          "PYTHON",
          "CD",
          "REGRESSÃO",
          "ESTATISTICA",
          "SCIKIT-LEARN",
          "MATPLOTLIB",
          "SEABORN",
        ],
      },
      {
        id_youtube: "",
        title: "Aula 05 - Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
      },
      {
        id_youtube: "",
        title: "Aula 06 - Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
      },
    ],
  },
  // --- MACHINE LEARNING ---
  {
    slug: "machine-learning",
    titulo: "Machine Learning",
    classroomUrl:
      "https://classroom.google.com/c/ODUxNTY3MTY1OTIx?cjc=uxeqcwg6",
    videos: [
      {
        title: "Introdução ao Pandas e Manipulação de Dados",
        date: "22 de outubro de 2025",
        duration: "1h33min52s",
        description:
          "Nesta aula, exploramos os conceitos fundamentais de Pandas, incluindo manipulação de DataFrames, limpeza de dados e visualização.",
        url: "https://streamyard.com/e/7zibd8w6r5xc",
        tags: ["Pandas", "DataFrames", "Analise de Dados"],
        available: true,
      },
      {
        title: "Análise exploratória de dados e Modelos de Regressão",
        date: "27 de outubro de 2025",
        duration: "1h06min20s",
        description:
          "Abordamos técnicas de análise exploratória de dados (EDA) e implementamos modelos de regressão linear e logística usando Scikit-Learn.",
        url: "https://streamyard.com/e/t2zn5qxj9see",
        tags: ["Regressão", "Modelos", "Python"],
        available: true,
      },
      {
        title:
          "Regressões e Classificações lineares com Scikit-Learn Notebook Prático",
        date: "29 de outubro de 2025",
        duration: "1h22min01s",
        description:
          "Nesta aula, vimos do zero como implementar regressões e classificações lineares utilizando a biblioteca Scikit-Learn em Python. Também abordamos multicolinearidade e como corrigir esses problemas.",
        url: "https://streamyard.com/e/y2d57gucgkrg",
        tags: ["Regressão Linear", "Regressão Logística", "Scikit-Learn"],
        available: true,
      },
      {
        title: "Pré-processamento de dados e Feature Engineering",
        date: "03 de novembro de 2025",
        duration: "36min27s",
        description:
          "Nesta aula, discutimos técnicas de pré-processamento de dados, incluindo normalização, padronização e engenharia de características para melhorar o desempenho dos modelos de machine learning.",
        url: "https://drive.google.com/file/d/18bIsw0ygXtxkBlwf4uQKKGHE5U1ESh0y/preview",
        tags: ["Pré-processamento", "Feature Engineering", "Machine Learning"],
        available: true,
      },
      {
        title: "Árvores de Decisão e Modelos de Ensemble (Boosting e Bagging)",
        date: "05 de novembro de 2025",
        duration: "30min17s",
        description:
          "Nesta aula, abordamos o conceito de árvores de decisão e como elas podem ser utilizadas em problemas de classificação e regressão. Também discutimos técnicas de ensemble, como boosting e bagging, para melhorar o desempenho dos modelos.",
        url: "https://streamyard.com/e/y2f59cpuq9y2",
        tags: ["Árvores de Decisão", "Ensemble", "Machine Learning"],
        available: true,
      },
      {
        title: "Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
        available: false,
      },
      {
        title: "Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
        available: false,
      },
      {
        title: "Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
        available: false,
      },
    ],
  },
  // --- OFICINA DE SQL ---
  {
    slug: "oficina-sql",
    titulo: "Oficina de SQL",
    classroomUrl: "",
    videos: [
      {
        id_youtube: "bOoEI9Xc0To",
        title: "Introdução ao MYSQL e Comandos DML E DDL",
        description:
          "Aprendemos a criar tabelas no MySQL, definir tipos de dados e aplicar constraints como PK, FK, UNIQUE e AUTO_INCREMENT. Também praticamos comandos básicos de SQL e entendemos como organizar e exportar a estrutura do banco",
        tags: ["DML", "DDL", "DATA TYPES"],
      },
      {
        id_youtube: "",
        title: "Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
      },
      {
        id_youtube: "",
        title: "Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
      },
    ],
  },
  // --- OFICINA DE MODELAGEM 3D (BLENDER) ---
  {
    slug: "modelagem-3d",
    titulo: "Oficina de Modelagem 3D",
    classroomUrl: "",
    videos: [
      {
        id_youtube: "",
        title: "Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
      },
      {
        id_youtube: "",
        title: "Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
      },
      {
        id_youtube: "",
        title: "Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
      },
      {
        id_youtube: "",
        title: "Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
      },
      {
        id_youtube: "",
        title: "Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
      },
      {
        id_youtube: "",
        title: "Em Breve",
        description: "Esta aula será disponibilizada em breve",
        tags: [],
      },
    ],
  },
];
