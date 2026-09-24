import imgNuvem from "@assets/mago/oficinas/mago-nuvem.png";
import img3D from "@assets/mago/oficinas/monitoria-blender.png";
import imgJava from "@assets/mago/oficinas/mago-redes.png";
import imgWeb from "@assets/mago/oficinas/mago-web.png";
import imgLinux from "@assets/mago/oficinas/mago-linux.png";
import imgDados from "@assets/mago/oficinas/mago-dados.png";
import imgFundamentos from "@assets/mago/oficinas/mago-fundamentos.png";
import imgSql from "@assets/mago/oficinas/mago-sql.png";
import imgRedes from "@assets/mago/oficinas/mago-redes.png";
import { equipeData } from "./equipe.js";

/*
 * DETALHES GLOBAIS DE CADA OFICINA:
 * Aqui ficam todos os dados "pesados" da página interna de cada oficina.
 * 1. O 'slug' PRECISA ser exatamente igual ao 'linkInscricao' apontado nos outros arquivos (ex: "oficina-sql").
 * 2. Em 'monitores', coloque exatamente o 'id' dos monitores correspondentes salvos lá em equipe.js.
 */

// Busca o monitor pelo ID e puxa seus dados para exibir no card, e opcionalmente marca como líder ou adiciona info extra (ex: Turma).
const getMonitor = (id, isLider = false, infoExtra = "") => {
  const monitor = equipeData.find((m) => m.id === id);

  if (!monitor) {
    console.warn(`Monitor com ID '${id}' não encontrado em equipe.js`);
    return null;
  }

  // Se houver info extra (tipo "Turma: Manhã"), formata para aparecer no topo da descrição
  const descricaoFormatada = infoExtra
    ? `<strong>${infoExtra}</strong><br/>${monitor.descricao}`
    : monitor.descricao;

  // Retorna cópia do objeto do monitor, modificando o nome se for líder da oficina
  return {
    ...monitor,
    nome: isLider ? `${monitor.nome} 👑` : monitor.nome,
    descricao: descricaoFormatada,
  };
};

export const oficinasDetalhes = [
  {
    slug: "computacao-em-nuvem",
    titulo: "Computação em Nuvem (AWS)",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Quarta e Sexta, das 11h às 13h",
    imagem: imgNuvem,
    alt: "Mago manipulando nuvens",
    botoes: [],
    sobre: [
      {
        titulo: "",
        texto:
          "Durante esta oficina, serão apresentados os fundamentos da computação em nuvem com foco na plataforma Amazon Web Services, abordando os principais serviços utilizados no mercado para hospedagem, armazenamento, gerenciamento e monitoramento de aplicações. Os participantes irão aprender, de forma prática, como criar e administrar ambientes em nuvem utilizando serviços como Amazon EC2, Amazon S3, AWS IAM e Amazon CloudWatch.<br/><br/>Esta oficina faz parte de uma <strong>trilha</strong> ofertada pela monitoria de TI da Asa Norte que tem como objetivo Amazon EC2, Amazon S3, AWS IAM e Amazon CloudWatch com a finalidade de  desenvolver a capacidade técnica para criação de servidores virtuais, publicação de aplicações simples na internet, gerenciamento de permissões de acesso, armazenamento de arquivos em nuvem e monitoramento básico de recursos.<br/><br/>A oficina será realizada entre os dias <strong>25/05 e 12/06</strong>, com encontros às <strong>segundas, quartas e sextas-feiras</strong>. As aulas serão ministradas <strong>presencialmente</strong>.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Fundamentos de Computação em Nuvem:</strong> Como utilizar os principais serviços da AWS e compreender conceitos essenciais de infraestrutura cloud, virtualização e escalabilidade.<br/><strong>Instâncias Virtuais com EC2:</strong> Aprenderemos a criar, configurar e gerenciar servidores virtuais na AWS para hospedar aplicações e serviços.<br/><strong>Acesso Remoto e Administração:</strong> Como acessar servidores utilizando SSH e VS Code Remote, permitindo administração prática e desenvolvimento remoto.<br/><strong>Segurança na AWS:</strong> Configuração de grupos de segurança, IP Elástico, permissões de acesso e boas práticas para proteger recursos na nuvem.<br/><strong>Armazenamento com Amazon S3:</strong> Aprenderemos a armazenar, organizar e gerenciar arquivos utilizando buckets e recursos do S3.<br/><strong>Gerenciamento de Usuários com IAM:</strong> Como controlar permissões, criar usuários e aplicar políticas de acesso seguras dentro da AWS.<br/><strong>Hospedagem de Aplicações:</strong> Aprenderemos a publicar aplicações e sites simples utilizando serviços da AWS.<br/><strong>Redes e Infraestrutura Cloud:</strong> Introdução a conceitos de VPC, sub-redes e comunicação entre recursos na nuvem.<br/><strong>Monitoramento e Observabilidade:</strong> Como acompanhar métricas, logs e desempenho dos serviços utilizando o CloudWatch.<br/><strong>Controle de Custos e Boas Práticas:</strong> Aprenderemos a monitorar gastos, configurar billing alerts e aplicar práticas recomendadas de segurança e otimização na AWS.",
      },
      {
        titulo: "Projetos e Liberdade Criativa:",
        texto:
          "Durante toda a oficina, vocês terão liberdade para explorar os serviços da AWS e criar seus próprios ambientes em nuvem, aplicando os conceitos aprendidos em projetos práticos de infraestrutura, hospedagem e administração de servidores.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes interessados em infraestrutura cloud e práticas de DevOps;</li>" +
          "<li>Pessoas que desejam aprender AWS de forma prática e aplicada;</li>" +
          "<li>Interessados em entender como funciona a hospedagem, gerenciamento e monitoramento de aplicações na nuvem;</li>" +
          "<li>Alunos que desejam dar os primeiros passos em administração de servidores e serviços cloud.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("felipe-rios", true),
      getMonitor("luiz-nicolau"),
    ].filter(Boolean),
  },
  {
    slug: "criacao-de-personagens-3d",
    titulo: "Criação de Personagens 3D",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Quarta e Sexta, das 11h às 13h",
    imagem: img3D,
    alt: "Oficina de Criação de Personagens 3D no Blender",
    botoes: [],
    sobre: [
      {
        titulo: "",
        texto:
          "Durante esta oficina, serão explorados fundamentos essenciais para modelagem de personagem, texturização, rigging e controle do personagem utilizando a ferramenta Blender.<br/><br/>Esta oficina faz parte de uma trilha ofertada pela monitoria de TI da Asa Norte que tem como objetivo apresentar a ferramenta Blender e ensinar como modelar personagens do início ao fim para utilização em jogos e animações.<br/><br/>A oficina será realizada entre os dias <strong>13/04 e 08/05</strong>, com encontros às <strong>segundas, quartas e sextas-feiras</strong>. As aulas serão ministradas <strong>presencialmente</strong>.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Fundamentos do Blender:</strong> Como utilizar a interface e aplicar os princípios de modelagem e texturização para desenvolver personagens low poly.<br/><strong>Modelagem 3D:</strong> Desde objetos primitivos até a construção de modelos complexos com topologia correta e malha limpa.<br/><strong>Texturização:</strong> Aprenderemos a aplicar texturas a um modelo 3D e pintar as texturas dos próprios personagens.<br/><strong>Rigging:</strong> Aprenderemos a criar o esqueleto base do personagem.<br/><strong>Controle e Animação:</strong> Como dar vida ao personagem com animações básicas.",
      },
      {
        titulo: "Projetos e Liberdade Criativa:",
        texto:
          "Em toda a oficina, vocês terão toda a liberdade criativa para criar qualquer personagem de sua escolha, desde que siga a ideia do projeto e os conceitos apresentados nas aulas.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Quaisquer alunos que desejam transformar seus personagens em realidade no Blender;</li>" +
          "<li>Alunos que buscam criar personagens 3D do zero;</li>" +
          "<li>Interessados em entender na prática como funciona a criação de personagens para jogos e animações.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("gabriel-soares", true),
      getMonitor("sciel-buitrago"),
      getMonitor("leonardo-cespedes"),
    ].filter(Boolean),
  },

  // --- OFICINA DE JAVA ---
  {
    slug: "oficina-de-java",
    titulo: "Oficina de Java",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Quarta e Sexta, das 11h às 13h ou 17h às 19h",
    imagem: imgJava,
    alt: "Mago em ambiente digital matrix",
    botoes: [
      {
        texto: "Inscreva-se agora!",
        link: "https://forms.gle/d44FBBiHprFUsy4h9",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "A <strong>oficina de Java</strong> foi desenvolvida para ensinar os fundamentos da lógica de programação e introduzir a sintaxe dessa linguagem tão popular no mercado. O foco principal é desenvolver sua capacidade analítica para interpretar problemas, construir algoritmos eficientes e preparar uma base sólida para, no futuro, compreender a Programação Orientada a Objetos (POO).<br/><br/>Além disso, a oficina também atua como um espaço de nivelamento para alunos de semestres mais avançados tirarem dúvidas pontuais.<br/><br/>A oficina será realizada às <strong>segundas, quartas e sextas-feiras</strong>.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Lógica e Algoritmos:</strong> Compreenda a diferença entre algoritmo, código-fonte e programa em execução, e identifique perfeitamente a entrada, processamento e saída de dados de um problema.<br/><strong>Sintaxe Java Básica:</strong> Entenda o papel da classe, do método main e do compilador. Aprenda a declarar variáveis usando tipos fundamentais (int, double, boolean, char e String).<br/><strong>Fluxo de Execução:</strong> Uso da entrada de dados com a classe Scanner, leitura de informações e como controlar o fluxo com condicionais (if, else, else if).<br/><strong>Estruturas de Repetição:</strong> Por que e como utilizar estruturas de laço (while, for), controlando inicializações, condições, contadores e atualizações.<br/><strong>Resolução e Autonomia:</strong> Dicas e práticas sobre leitura de mensagens de erro, diferença entre erros de lógica e compilação, e como debugar o seu próprio código com autonomia.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que precisam aprender ou reforçar os fundamentos de lógica de programação;</li>" +
          "<li>Alunos que desejam construir uma base preparatória forte antes de mergulhar em Orientação a Objetos;</li>" +
          "<li>Estudantes de semestres mais avançados precisando tirar dúvidas pontuais ou revisitar conceitos;</li>" +
          "<li>Interessados em criar autonomia para desenvolver, testar e debugar soluções computacionais.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("kauan-vinicius", true, "Turma Manhã"),
      getMonitor("jess-forster", false, "Turma Manhã"),
      getMonitor("daniel-godoi", false, "Turma Manhã"),
      getMonitor("matheus-morais", false, "Turma Noite"),
      getMonitor("gabriel-cotts", false, "Turma Noite"),
      getMonitor("polverari", false, "Turma Noite"),
      getMonitor("pedro-quartin", false, "Turma Noite"),
    ].filter(Boolean),
  },

  // --- OFICINA DE WEB ---
  {
    slug: "oficina-web",
    titulo: "Oficina de Web",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Quarta e Sexta, das 11h às 13h ou 17h às 19h",
    imagem: imgWeb,
    alt: "Mago pensando em desenvolvimento web",
    botoes: [
      {
        texto: "Inscreva-se agora!",
        link: "https://forms.gle/LRxSQgVtfJXCgHFj9",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Esta oficina foi desenvolvida para oferecer uma introdução prática ao <strong>desenvolvimento web com HTML e CSS</strong>. O programa é oferecido em duas turmas, ideal para estudantes que desejam aprender a construir páginas para a internet e compreender os fundamentos do desenvolvimento Front-end.<br/><br/>Ao longo do programa, os participantes aprenderão desde a estrutura básica de uma página até a criação de layouts, organização de conteúdo e estilização de elementos.<br/><br/>A oficina será realizada entre os dias <strong>28/09 e 09/10</strong>, com encontros às <strong>segundas, quartas e sextas-feiras</strong>, nos horários da Manhã e Noite.<br/><br/>Ao final da oficina, os participantes que cumprirem os requisitos receberão <strong>certificado de conclusão</strong>. A avaliação será baseada na frequência e no desempenho das atividades práticas propostas durante o período.",
      },
      {
        titulo: "Conteúdo da Turma Manhã (11h às 13h):",
        texto:
          "<strong>Fundamentos da Web:</strong> Como a Internet funciona, tipos de redes, protocolos e configuração do ambiente no VS Code.<br/><strong>Introdução ao HTML:</strong> Estrutura da página (header, body e footer), formulários, listas, formatação de textos, classes e IDs.<br/><strong>Estilização com CSS:</strong> Implementação do CSS, cores, backgrounds, controle de dimensões, Borders, Margins, Padding, Float e Overflow.<br/><strong>Layout e Interatividade:</strong> Posições, pseudo-classes, pseudo-elementos e o conceito e aplicação de Flexbox (justify-content, align-items, etc).<br/><strong>Publicação de Projetos:</strong> Criação de conta no Github, configuração de repositórios e publicação da aplicação usando o Github Pages.",
      },
      {
        titulo: "Conteúdo da Turma Noite (17h às 19h):",
        texto:
          "<strong>Introdução ao desenvolvimento web:</strong> Entenda a relação entre HTML, CSS e outras tecnologias na internet.<br/><strong>HTML Semântico:</strong> Aprenda a estruturar o conteúdo de forma correta e acessível utilizando elementos fundamentais.<br/><strong>Classes e Seletores:</strong> Como selecionar e modificar diferentes elementos da página utilizando CSS de maneira inteligente.<br/><strong>Box Model e Flexbox:</strong> Compreenda como funcionam as dimensões, espaçamentos e a organizar elementos para criar layouts de maneira simples e eficiente.<br/><strong>Responsividade:</strong> Aprenda os conceitos básicos para criar páginas que se adaptem a diferentes tamanhos de tela (computadores, tablets e celulares).",
      },
      {
        titulo: "Projeto Final e Metodologia:",
        texto:
          "Ambas as turmas adotam aprendizagem baseada em projetos. Ao longo dos encontros, vocês desenvolverão e evoluirão uma <strong>página web completa</strong>, aplicando diretamente os conceitos apresentados em aulas expositivas e resolução de problemas práticos.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam começar no desenvolvimento Front-end;</li>" +
          "<li>Iniciantes que nunca tiveram contato com HTML e CSS;</li>" +
          "<li>Pessoas interessadas em aprender a publicar páginas na internet;</li>" +
          "</ul>" +
          "<strong>Não é necessário conhecimento prévio em programação.</strong><br/><br/>" +
          "Preencha o formulário de inscrição para participar da oficina e garantir sua vaga. <strong>Vagas limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("lucas-paiva", true, "Turma Manhã"),
      getMonitor("emily-mendes", false, "Turma Manhã"),
      getMonitor("felipe-rios", false, "Turma Manhã"),
      getMonitor("thalis-alexandre", true, "Turma Noite"),
      getMonitor("pedro-quartin", false, "Turma Noite"),
    ].filter(Boolean),
  },

  // --- OFICINA DE LINUX ---
  {
    slug: "oficina-de-linux",
    titulo: "Oficina de Linux: Monte sua própria distro!",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Terça e Quinta, das 17h às 19h",
    imagem: imgLinux,
    alt: "Mago ao lado do pinguim Tux em cenário de neve",
    botoes: [],
    sobre: [
      {
        titulo: "",
        texto:
          "Durante esta oficina, serão apresentados os fundamentos da construção e personalização de sistemas Linux, abordando desde a compilação do kernel até a configuração de serviços essenciais, segurança e otimização do sistema. Os participantes irão aprender, de forma prática, como estruturar ambientes Linux funcionais, configurar bootloaders, gerenciar pacotes e preparar distribuições customizadas para diferentes aplicações.<br/><br/>Esta oficina faz parte de uma <strong>trilha</strong> ofertada pela monitoria de TI da Asa Norte que tem como objetivo desenvolver conhecimentos em compilação e configuração do Kernel Linux, gerenciamento de sistemas de arquivos, inicialização customizada, integração de ferramentas essenciais, configuração de rede, segurança, otimização e distribuição de sistemas Linux.<br/><br/>A oficina será realizada entre os dias <strong>25/05 e 11/06</strong>, com encontros às <strong>segundas, terças e quintas</strong>. As aulas serão ministradas <strong>presencialmente</strong>.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Compilação do Kernel Linux:</strong> Como compilar, configurar e otimizar o Kernel Linux, selecionando módulos, drivers e realizando a instalação correta do sistema para personalizar e melhorar o desempenho do sistema operacional.<br/><strong>Criação de um Sistema de Arquivos raiz:</strong> Como criar e estruturar um sistema de arquivos raiz no Linux, organizando diretórios essenciais, bibliotecas, dependências e arquivos de configuração necessários para inicializar e operar um ambiente Linux funcional.<br/><strong>Bootloader e Inicialização Customizada:</strong> Como configurar e personalizar o processo de inicialização do Linux utilizando GRUB e U-Boot, ajustando parâmetros do kernel, initramfs e scripts de boot para controlar, otimizar e solucionar problemas na inicialização do sistema.<br/><strong>Integração de Ferramentas Essenciais:</strong> Como integrar, compilar e otimizar ferramentas essenciais no Linux, incluindo shells, utilitários de sistema, ferramentas de rede e desenvolvimento, garantindo compatibilidade, gerenciamento correto de dependências e funcionamento eficiente do ambiente.<br/><strong>Configuração de Rede e Serviços Básicos:</strong> Como configurar redes e serviços básicos no Linux, ajustando interfaces, IP, DNS, gateway e ferramentas de rede, além de implementar serviços essenciais, SSH, firewall e sincronização de tempo para garantir conectividade e segurança do sistema.<br/><strong>Gerenciamento de Pacotes Customizado:</strong> Como criar e administrar um sistema de gerenciamento de pacotes customizado no Linux, organizando repositórios, dependências, builds e atualizações para manter a distribuição segura, modular e fácil de manter.<br/><strong>Otimização, Segurança e Finalização:</strong> Como otimizar, proteger e finalizar uma distribuição Linux, aplicando técnicas de hardening, redução de tamanho, testes e documentação para criar imagens estáveis, seguras e prontas para distribuição.<br/><strong>Distribuição e Deployment:</strong> Como distribuir e manter uma distribuição Linux, organizando hospedagem, assinaturas, documentação e colaboração da comunidade para garantir atualizações, sustentabilidade e evolução contínua do projeto.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam aprender a utilizar Linux de forma prática e autônoma;</li>" +
          "<li>Pessoas interessadas em desenvolvimento, servidores ou infraestrutura;</li>" +
          "<li>Alunos que querem entender de verdade como o sistema operacional funciona por dentro;</li>" +
          "<li>Iniciantes que querem construir uma base sólida para trabalhar com Linux no dia a dia.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("jess-forster", true),
      getMonitor("gabriel-caramez"),
      getMonitor("ricardo-bonna"),
      getMonitor("gabriel-garcia"),
      getMonitor("caio-godoy"),
    ].filter(Boolean),
  },

  // --- CIÊNCIA DE DADOS - FERRAMENTAS E FRAMEWORKS ---
  {
    slug: "ciencia-de-dados-ferramentas-e-frameworks",
    titulo: "Ciência de Dados - Ferramentas e Frameworks",
    campus: "Campus Asa Norte",
    horarios: "Segundas, Terças e Quintas, das 17h às 19h",
    imagem: imgDados,
    alt: "Mago jogando dados e manipulando poções em um cenário de análise",
    botoes: [
      {
        texto: "Playlist Ciência de Dados",
        link: "/playlist/ciencia-de-dados-ferramentas-e-frameworks",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Esta oficina apresenta as principais bibliotecas utilizadas no trabalho prático com dados em Python, incluindo <strong>NumPy, Pandas, Matplotlib e Seaborn</strong>. Durante as aulas, os participantes aprenderão a carregar, explorar, limpar e visualizar dados, aplicando conceitos de Exploratory Data Analysis (EDA) e pré-processamento de dados.<br/><br/>A mesma dará continuidade à introdução em Python e prepara os participantes para as próximas etapas da trilha, voltadas para Machine Learning e Deep Learning, onde os dados preparados serão utilizados na construção de modelos de inteligência artificial.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Bibliotecas de Dados:</strong> Introdução às principais bibliotecas utilizadas na análise de dados em Python, como NumPy, Pandas, Matplotlib e Seaborn.<br/><strong>Manipulação de Dados:</strong> Como carregar, organizar e explorar conjuntos de dados utilizando ferramentas práticas do ecossistema Python.<br/><strong>Limpeza de Dados:</strong> Técnicas de pré-processamento para tratar dados inconsistentes, ausentes ou desorganizados.<br/><strong>Análise Exploratória (EDA):</strong> Como investigar dados, identificar padrões e gerar insights utilizando estatísticas e visualizações.<br/><strong>Visualização de Dados:</strong> Criação de gráficos e representações visuais para compreender melhor os dados.<br/><strong>Preparação para IA:</strong> Organização e preparação de dados que serão utilizados futuramente em projetos de Machine Learning e Deep Learning.",
      },
      {
        titulo: "Para quem é este curso:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Alunos sem experiência prévia em Frameworks de Ciência de Dados;</li>" +
          "<li>Quem tem conhecimento básico de programação (ou nenhum);</li>" +
          "<li>Interessados em entender na prática como a ciência de dados funciona.</li>" +
          "</ul>",
      },
    ],
    monitores: [
      getMonitor("guilherme-fernandes", true),
      getMonitor("enzo-rodrigues"),
      getMonitor("otavio-oliveira"),
    ].filter(Boolean),
  },

  // --- FUNDAMENTOS DA COMPUTAÇÃO ---
  {
    slug: "fundamentos-comp",
    titulo: "Fundamentos da Computação",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Quarta e Quinta, das 11h às 13h",
    imagem: imgFundamentos,
    alt: "Mago conversando com robô de blocos",
    botoes: [],
    sobre: [
      {
        titulo: "",
        texto:
          "Esta oficina foi desenvolvida para oferecer a base essencial em computação para estudantes que desejam fortalecer seus conhecimentos e construir fundamentos sólidos na área de tecnologia. Ao longo do programa, serão abordados conceitos fundamentais indispensáveis para a formação em TI, com foco em compreensão prática e desenvolvimento consistente.<br/><br/>A oficina será realizada entre os dias <strong>17/08 e 27/08</strong>, com encontros às <strong>segundas, quartas e quintas-feiras</strong>, das <strong>11h às 13h</strong>.<br/><br/>Ao final da oficina, os participantes que cumprirem os requisitos receberão certificado de conclusão. A avaliação será baseada em frequência nas aulas e desempenho nas atividades propostas ao longo do período.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Desmistificando o computador:</strong> Como o computador realmente funciona por dentro - hardware, memória e sistemas operacionais.<br/><strong>Linguagens de programação e componentes:</strong> Diferença entre linguagens compiladas e interpretadas, primeiros programas e funcionamento dos sistemas.<br/><strong>Como computadores se comunicam:</strong> Noções básicas de redes, comunicação entre sistemas e funcionamento da internet.<br/><strong>Internet e interfaces:</strong> Como aplicações e interfaces são construídas e utilizadas no desenvolvimento moderno.<br/><strong>Bancos de dados:</strong> Conceitos iniciais de armazenamento, organização e uso de dados em sistemas computacionais.<br/><strong>O dia a dia do programador:</strong> Uso de IDEs, terminal, Git/GitHub e práticas reais do ambiente de desenvolvimento.<br/><strong>Prática orientada:</strong> Exercícios guiados e desafios para consolidar os conceitos aprendidos ao longo da oficina.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam construir uma base sólida em computação e tecnologia;</li>" +
          "<li>Alunos que sentem falta de fundamentos essenciais para acompanhar disciplinas de TI;</li>" +
          "<li>Iniciantes que querem entender como computadores e programas funcionam no dia a dia;</li>" +
          "<li>Interessados em se preparar para áreas como programação, sistemas, dados, redes e engenharia de software.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para se inscrever e garantir sua participação. <strong>Vagas limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("pedro-calderon", true),
      getMonitor("ryan-augusto"),
      getMonitor("lucas-borges"),
    ].filter(Boolean),
  },

  // --- FUNDAMENTOS DE CIÊNCIA DE DADOS ---
  {
    slug: "fundamentos-ciencia-de-dados",
    titulo: "Fundamentos de Ciência de Dados",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Quarta e Quinta, das 17h às 19h",
    imagem: imgDados,
    alt: "Mago jogando dados",
    botoes: [
      {
        texto: "Playlist Fundamentos de Ciência de Dados",
        link: "/playlist/fundamentos-ciencia-de-dados",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "A <strong>oficina de Introdução à Ciência de Dados</strong> foi desenvolvida para apresentar os principais fundamentos, ferramentas e práticas da área, utilizando <strong>Python</strong> como linguagem base. Durante os encontros, os participantes irão compreender o fluxo essencial de um projeto de dados — da coleta à análise — aplicando conceitos de forma prática e estruturada.<br/><br/>Esta oficina faz parte da trilha formativa da monitoria de TI da Asa Norte, com o objetivo de oferecer uma visão clara sobre como dados são organizados, analisados e utilizados para gerar insights e apoiar a tomada de decisões.<br/><br/>A oficina será realizada entre os dias <strong>17/08 e 28/08</strong>, com encontros às <strong>segundas, quartas e quintas-feiras</strong>. As aulas serão ministradas <strong>presencialmente</strong>.<br/><br/>A participação garante <strong>certificado de conclusão</strong>, mediante frequência e desempenho nas atividades propostas ao longo do curso.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Fundamentos de Ciência de Dados:</strong> O que é a área, como funciona o ciclo de um projeto de dados e quais são seus principais componentes.<br/><strong>Python para análise de dados:</strong> Manipulação básica de dados, organização de informações e os primeiros passos na análise exploratória.<br/><strong>Tratamento e modelagem de dados:</strong> Limpeza, estruturação e preparação de dados para extração de insights.<br/><strong>Visualização e Interpretação:</strong> Como transformar números em gráficos e conclusões compreensíveis.<br/><strong>Bancos de dados:</strong> Noções iniciais de armazenamento e consulta de dados.<br/><strong>Aplicação prática:</strong> Exercícios guiados simulando situações reais de análise e tomada de decisão.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam iniciar seus estudos em Ciência de Dados;</li>" +
          "<li>Interessados em aprender a utilizar Python para análise de dados;</li>" +
          "<li>Alunos que querem entender como dados geram insights e apoiam decisões;</li>" +
          "<li>Pessoas que desejam explorar possibilidades de atuação na área de dados.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua vaga. <strong>Vagas limitadas.</strong><br/><strong>Link do servidor do Discord:</strong>",
      },
    ],
    monitores: [
      getMonitor("guilherme-fernandes", true),
      getMonitor("otavio-oliveira"),
      getMonitor("enzo-rodrigues"),
    ].filter(Boolean),
  },

  // --- OFICINA DE SQL ---
  {
    slug: "oficina-sql",
    titulo: "SQL",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Quarta e Sexta: 17h30 às 19h",
    imagem: imgSql,
    alt: "Mago gerenciando banco de dados",
    botoes: [
      { texto: "Playlist SQL", link: "/playlist/oficina-sql", tipo: "primary" },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Esta oficina apresenta uma introdução prática e direta ao universo do SQL e dos bancos de dados relacionais. A proposta é levar o aluno do zero ao domínio das operações essenciais para criar, consultar e manipular dados, sempre com exemplos reais e exercícios guiados. É um percurso desenhado para quem quer entender como o MySQL funciona na prática — desde a criação de tabelas até consultas mais avançadas.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Fundamentos do MySQL:</strong> Instalação, primeiro contato com um banco real e criação do banco de dados.<br/><strong>Modelagem e Estrutura:</strong> Definição de tabelas, principais tipos de dados e uso de constraints como PK, FK, UNIQUE e AUTO_INCREMENT.<br/><strong>DML na Prática:</strong> Inserir, atualizar e deletar registros; realizar dumps rápidos; Trabalhar com SELECT, WHERE, AND/OR, ORDER BY e LIMIT.<br/><strong>Funções Importantes:</strong> Uso de funções agregadoras como COUNT, SUM e AVG dentro de consultas.<br/><strong>Joins:</strong> Entendimento dos relacionamentos entre tabelas e como combinar dados de forma eficiente.<br/><strong>Consultas Avançadas:</strong> Subqueries, views, stored procedures e triggers para automação da lógica dentro do banco.<br/><strong>Transações:</strong> Uso de ROLLBACK, SAVEPOINT e dos princípios A.C.I.D. que garantem integridade das operações.",
      },
      {
        titulo: "Estrutura da Oficina:",
        texto:
          "As aulas evoluem de forma progressiva:<br/>• <strong>Aula 01</strong> — Primeiro contato com banco real, criação de tabelas e manipulação básica de dados. (Inclui toda a parte DDL e Introdução ao DML).<br/>• <strong>Aula 02</strong> — Refinamento das consultas: operadores lógicos, ordenação e funções agregadas, seguido da introdução aos principais tipos de JOIN.<br/>• <strong>Aula 03</strong> — Avanço para recursos profissionais: subqueries, views, procedures, triggers e transações.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Alunos que nunca tiveram contato com bancos de dados.</li>" +
          "<li>Quem deseja aprender SQL de forma aplicada, entendendo não só comandos, mas seus usos reais.</li>" +
          "<li>Estudantes de tecnologia que querem adquirir uma base sólida para disciplinas futuras ou projetos práticos.</li>" +
          "</ul>",
      },
    ],
    monitores: [
      getMonitor("sciel-buitrago", true),
      getMonitor("luiz-nicolau"),
    ].filter(Boolean),
  },

  // --- WEB HACKING ---
  {
    slug: "web-hacking",
    titulo: "Estudo Dirigido: Web Hacking (Cibersegurança)",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Terça e Quinta, das 17h às 19h",
    imagem: imgRedes,
    alt: "Mago flutuando na matrix",
    botoes: [],
    sobre: [
      {
        titulo: "",
        texto:
          "Este estudo dirigido é uma introdução prática à área de teste de intrusão (pentesting) em aplicações web, voltada para iniciantes interessados em segurança ofensiva. Os participantes aprenderão os fundamentos de funcionamento da web, montagem de laboratórios de testes e exploração de vulnerabilidades em ambientes controlados e legais.<br/><br/>Esta oficina faz parte de uma <strong>trilha</strong> ofertada pela monitoria de TI da Asa Norte, com foco no desenvolvimento de autonomia, pensamento crítico e aprendizado contínuo na área de cybersecurity.<br/><br/>A oficina será realizada entre os dias <strong>25/05 e 11/06</strong>, com encontros às <strong>segundas, terças e quintas</strong>. As aulas serão ministradas <strong>online</strong>, com duração aproximada de <strong>1h30min</strong>.",
      },
      {
        titulo: "Programação por semana:",
        texto:
          "<strong>Evolução Contínua e Comunidade na Segurança:</strong> Como continuar evoluindo na área de segurança ofensiva através de laboratórios online, plataformas de treinamento, CTFs, bug bounty, comunidades técnicas e estudo contínuo para acompanhar novas vulnerabilidades, técnicas e ferramentas do ecossistema de cibersegurança.<br/><strong>Fundamentos da Web e Superfície de Ataque:</strong> Como funciona a comunicação na web, incluindo protocolos, requisições HTTP, DNS, cookies, sessões e APIs, compreendendo como aplicações são estruturadas e por que falhas de implementação podem gerar vulnerabilidades exploráveis.<br/><strong>Mentalidade, Ética e Legislação no Hacking:</strong> – Como desenvolver a mentalidade analítica do hacking ético, entendendo metodologias de teste, responsabilidade profissional, limites legais no Brasil e boas práticas para atuação segura e autorizada na área de segurança ofensiva.<br/><strong>Montagem de Laboratório Seguro para Testes:</strong> Como criar e configurar um ambiente próprio de estudos para pentest, utilizando máquinas virtuais, redes isoladas, aplicações vulneráveis e ferramentas de monitoramento para realizar testes de forma segura e controlada.<br/><strong>Análise de Autenticação e Controle de Acesso:</strong> Como avaliar mecanismos de login, gerenciamento de sessão, permissões e autenticação multifator, identificando falhas que permitem escalonamento de privilégios, acesso indevido e comprometimento de contas.<br/><strong>Documentação Técnica e Relatórios Profissionais:</strong> Como registrar vulnerabilidades encontradas de forma clara e organizada, criando relatórios técnicos profissionais com evidências, análise de impacto, reprodução do problema e recomendações de correção para equipes técnicas e clientes.<br/><strong>Ferramentas Essenciais do Pentester Web:</strong> Como utilizar ferramentas fundamentais de testes de segurança, incluindo interceptação de tráfego, análise de requisições, fuzzing, enumeração e automação de testes com ferramentas como o Burp Suite e outros utilitários amplamente utilizados no mercado.<br/><br/>Ao final, espera-se que o aluno tenha um perfil analítico e técnico, capaz de compreender o funcionamento básico de uma rede, identificar as camadas e suas principais vulnerabilidades e conceitos fundamentais como VLAN, gateway, ataques de camada, entre outros.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Alunos que queiram saber sobre como funciona a internet e curiosidade sobre redes e protocolos;</li>" +
          "<li>Alunos que buscam aprender a identificar e entender tráfego de rede, assim como identificar atividades maliciosas;</li>" +
          "<li>Interessados em entender na prática como as vulnerabilidades de rede são exploradas e como se defender delas;</li>" +
          "<li>Estudantes que querem criar uma base sólida para futuras carreiras em Cibersegurança e Infraestrutura.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("felipe-barcelos", true),
      getMonitor("lucas-borges"),
      getMonitor("lucas-moura"),
      getMonitor("marco-marques"),
    ].filter(Boolean),
  },

  // --- MACHINE LEARNING ---
  {
    slug: "machine-learning",
    titulo: "Machine Learning",
    campus: "Campus Asa Norte",
    horarios: "Terça e Quarta, das 11h às 13h",
    imagem: imgDados,
    alt: "Mago jogando dados",
    botoes: [
      {
        texto: "Playlist Machine Learning",
        link: "/playlist/machine-learning",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Durante esta oficina, serão abordados modelos clássicos de regressão, classificação e clusterização, incluindo métodos lineares, modelos baseados em árvores e técnicas de ensemble. A oficina irá desenvolver a capacidade teórica e prática para avaliar modelos e interpretar seus resultados, preparando os participantes para construir soluções mais robustas e servindo como base para o avanço em Deep Learning.<br/><br/>Esta oficina faz parte da trilha de Ciência de Dados ofertada pela monitoria de TI da Asa Norte que tem como objetivo apresentar o que é necessário para seguir uma carreira de dados com conteúdos voltados para Machine Learning, Deep Learning, análise de dados e integração DevOps, onde os dados preparados serão utilizados na construção de modelos de inteligência artificial em ambientes reais.<br/><br/>A oficina será realizada entre os dias <strong>14/04 e 06/05</strong>, com encontros às <strong>terças e quartas</strong>. As aulas serão ministradas <strong>presencialmente na sala 1110 e serão gravadas!</strong>",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Regressão:</strong> Métodos lineares e polinomiais para prever valores contínuos e avaliar seu desempenho.<br/><strong>Classificação:</strong> Algoritmos como Árvores de Decisão, Random Forest, SVM e KNN para categorizar dados.<br/><strong>Clusterização:</strong> Técnicas não supervisionadas como K-Means para descobrir grupos em dados sem rótulos.<br/><strong>Ensemble:</strong> Como combinar modelos (Bagging, Boosting) para obter melhores resultados do que modelos individuais.<br/><strong>Avaliação de modelos:</strong> Métricas como acurácia, precisão, recall, F1-score, RMSE e como interpretá-las.<br/><strong>Base para Deep Learning:</strong> Consolidação dos conceitos clássicos que servem de alicerce para o estudo de redes neurais.",
      },
      {
        titulo: "Para quem é este curso:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Alunos que já têm base em Python e bibliotecas de dados (Pandas, NumPy);</li>" +
          "<li>Quem deseja aprender ML com foco prático e aplicado;</li>" +
          "<li>Interessados em seguir carreira de dados e inteligência artificial.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("guilherme-fernandes", true),
      getMonitor("enzo-rodrigues"),
      getMonitor("otavio-oliveira"),
    ].filter(Boolean),
  },

  // --- OFICINA DE GOLANG ---
  {
    slug: "oficina-golang",
    titulo: "Oficina de Go (Golang)",
    campus: "Campus Asa Norte",
    horarios: "Segunda a Sexta, das 11h às 13h",
    imagem: imgFundamentos,
    alt: "Mago estudando fundamentos",
    botoes: [],
    sobre: [
      {
        titulo: "",
        texto:
          "A oficina de <strong>Go</strong> foi estruturada para introduzir os participantes a uma das linguagens mais eficientes, concorrentes e escaláveis da atualidade. Se você deseja dominar uma tecnologia criada pelo Google e amplamente utilizada em back-end, microsserviços e computação em nuvem, este é o momento ideal. Ao longo das aulas, passaremos desde os fundamentos de sintaxe até o uso de estruturas de dados avançadas como Structs e Mapas.<br/><br/>Esta oficina faz parte de uma <strong>trilha</strong> ofertada pela monitoria de TI da Asa Norte que tem como objetivo introduzir a linguagem Go (Golang), abordando fundamentos de sintaxe, estruturas de controle, funções, manipulação de dados e estruturas avançadas, com foco no desenvolvimento de aplicações eficientes, escaláveis e modernas.<br/><br/>A oficina ocorrerá de forma intensiva entre os dias <strong>25/05 e 12/06</strong>, com encontros diários.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Introdução a Golang:</strong> Apresentação da linguagem, configuração do ambiente e primeiros passos (Hello World e variáveis).<br/><strong>Estruturas de Controle:</strong> Domínio do fluxo do programa utilizando condicionais (if/else, switch) e estruturas de repetição (for).<br/><strong>Funções:</strong> Como criar códigos modulares, reutilizáveis e compreender múltiplos retornos em Go.<br/><strong>Arrays e Slices:</strong> Manipulação de coleções de dados, entendendo a diferença entre arrays fixos e slices dinâmicos.<br/><strong>Strings:</strong> Trabalhando com manipulação e formatação de textos.<br/><strong>Structs e Mapas:</strong> Criação de tipos de dados personalizados (Structs) e associação de chaves e valores com Mapas, essenciais para estruturar dados do mundo real.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes de tecnologia que desejam aprender uma linguagem fortemente tipada e performática;</li>" +
          "<li>Pessoas interessadas em focar em Back-end ou DevOps;</li>" +
          "<li>Alunos que já conhecem a lógica de programação e buscam uma nova stack moderna e poderosa.</li>" +
          "</ul>" +
          "Fique de olho para atualizações do formulário de inscrição. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [getMonitor("kaynan", true)].filter(Boolean),
  },

  // --- OFICINA DE LINUX TAGUATINGA ---
  {
    slug: "oficina-linux-taguatinga",
    titulo: "Oficina de Linux: Introdução ao Sistema Operacional",
    campus: "Campus Taguatinga",
    horarios: "Terças e Quintas, das 11h às 12h (Sala 194)",
    imagem: imgLinux,
    alt: "Mago ao lado do pinguim Tux",
    botoes: [],
    sobre: [
      {
        titulo: "",
        texto:
          "A oficina de <strong>Linux: Introdução ao Sistema Operacional</strong> foi elaborada para quem deseja desmistificar e dominar um dos sistemas mais utilizados no mundo da tecnologia corporativa e infraestrutura.<br/><br/>A oficina ocorrerá presencialmente no Campus Taguatinga entre os dias <strong>16/06 e 25/06</strong>, com encontros pontuais às <strong>terças e quintas-feiras</strong>. As aulas ocorrerão na <strong>Sala 194</strong>, das <strong>11h às 12h</strong>.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>História e Filosofia:</strong> Compreensão das origens do Linux, a diferença entre Kernel e Distribuição, e o papel do open-source no ecossistema de TI moderno.<br/><strong>Instalação Prática:</strong> Passo a passo prático de como instalar uma distribuição Linux na máquina.<br/><strong>Estrutura de Diretórios:</strong> Navegação fluida pelo File System (FHS) – entendendo o papel de cada pasta do sistema.<br/><strong>Domínio do Terminal (Comandos Básicos):</strong> Gestão de arquivos e pastas, manipulação de permissões, usuários e configurações base via linha de comando.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam aprender a utilizar Linux de forma prática e autônoma;</li>" +
          "<li>Iniciantes que querem construir uma base sólida para trabalhar com o terminal no dia a dia.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [getMonitor("matheus-couto", true)].filter(Boolean),
  },

  // --- OFICINA DE HARDWARE ---
  {
    slug: "oficina-de-hardware",
    titulo: "Fundamentos de Hardware",
    campus: "Campus Asa Norte",
    horarios: "Terça e Sexta, das 11h às 13h",
    imagem: imgDados,
    alt: "Mago analisando hardware",
    botoes: [],
    sobre: [
      {
        titulo: "",
        texto:
          "Esta oficina foi desenvolvida para oferecer uma base sólida em hardware, apresentando os principais componentes de um computador e suas funções. Ao longo do programa, serão abordados conceitos essenciais sobre montagem, funcionamento, manutenção e identificação de componentes, com foco na compreensão prática da arquitetura e do funcionamento dos equipamentos.<br/><br/>A oficina será realizada entre os dias <strong>18/08 e 28/08</strong>, com encontros às <strong>terças e sextas-feiras</strong>, das <strong>11h às 13h</strong>.<br/><br/>Ao final da oficina, os participantes que cumprirem os requisitos receberão certificado de conclusão. A avaliação será baseada em frequência nas aulas e desempenho nas atividades propostas ao longo do período.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Componentes Essenciais:</strong> Identificação e função de cada peça que compõe o computador.<br/><strong>Montagem e Manutenção:</strong> Práticas seguras para manusear e montar equipamentos, além de manutenção preventiva e corretiva.<br/><strong>Arquitetura de Computadores:</strong> Como o hardware processa dados e como os componentes se comunicam.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Iniciantes em TI que precisam de uma compreensão sólida de como computadores funcionam fisicamente;</li>" +
          "<li>Entusiastas e alunos que querem entender sobre montagem de computadores;</li>" +
          "<li>Qualquer pessoa interessada em consertos e manutenção básica de equipamentos de informática.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para se inscrever e garantir sua participação. <strong>Vagas limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("jess-forster", true),
      getMonitor("ryan-augusto"),
      getMonitor("sciel-buitrago"),
    ].filter(Boolean),
  },

  // --- OFICINA DE INTELIGÊNCIA ARTIFICIAL ---
  {
    slug: "oficina-de-ia",
    titulo: "Oficina de Inteligência Artificial",
    campus: "Campus Asa Norte",
    horarios: "Terças e quintas-feiras, das 17h às 19h",
    imagem: imgDados,
    alt: "Mago jogando dados",
    botoes: [
      {
        texto: "Inscreva-se agora!",
        link: "https://forms.gle/wQpBpbkL3e74zEuYA",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "<div style='background: rgba(122, 26, 143, 0.08); border-left: 4px solid #7a1a8f; padding: 12px 16px; border-radius: 4px; margin-bottom: 24px; font-size: 0.95rem;'>💡 <strong>Dica:</strong> Por envolver conceitos intermediários, esta oficina é <strong>recomendada para estudantes a partir do 3º semestre</strong>. No entanto, se você é calouro e adora desafios, também será super bem-vindo!</div>Esta monitoria foi desenvolvida para apresentar os principais conceitos e práticas envolvidos na construção de aplicações modernas baseadas em Inteligência Artificial. Ao longo do programa, os participantes irão sair do uso de modelos de linguagem por interfaces prontas e aprender como integrá-los, fornecer contexto, conectar ferramentas externas e construir sistemas capazes de executar tarefas de forma estruturada.<br/><br/>A monitoria será realizada ao longo de <strong>três semanas, com encontros às terças e quintas-feiras, das 17h às 19h</strong>. O conteúdo será desenvolvido de forma prática e progressiva, com um único projeto evoluindo ao longo dos seis encontros.<br/><br/>Ao final da monitoria, os participantes deverão ser capazes de consumir modelos de linguagem por API, estruturar contextos, utilizar ferramentas externas, compreender a arquitetura de agentes, reconhecer o papel do MCP e dos SDKs e compreender os fundamentos de RAG.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>LLM APIs:</strong> Como aplicações se comunicam com modelos de linguagem por meio de APIs, explorando requisições, mensagens, parâmetros, tokens, janela de contexto e structured outputs.<br/><strong>Context Engineering:</strong> Como selecionar, organizar e fornecer as informações certas para que um modelo consiga executar uma tarefa de forma mais eficiente, trabalhando com instruções, histórico, documentos e memória.<br/><strong>Tool Calling:</strong> Como conectar modelos de linguagem a funções e serviços externos, permitindo que uma aplicação execute cálculos, consulte APIs, bancos de dados e outras ferramentas.<br/><strong>MCP e SDKs:</strong> Como o Model Context Protocol (MCP) padroniza a comunicação entre aplicações de IA, ferramentas e fontes de contexto, além de compreender o papel dos SDKs no desenvolvimento de aplicações com modelos de linguagem.<br/><strong>Agents:</strong> Como combinar modelos, contexto e ferramentas em ciclos de execução, permitindo que o sistema escolha ferramentas, execute etapas e determine quando uma tarefa foi concluída.<br/><strong>RAG:</strong> Uma introdução ao Retrieval-Augmented Generation, explorando embeddings, indexação, recuperação de informações e como documentos externos podem ser utilizados para enriquecer o contexto de um modelo.<br/><strong>Prática orientada:</strong> Um único projeto será desenvolvido progressivamente durante a monitoria, começando com uma chamada simples de LLM e evoluindo até um sistema capaz de utilizar contexto, ferramentas, MCP, agentes e recuperação de documentos.",
      },
      {
        titulo: "Para quem é esta monitoria:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam entender como aplicações de IA são construídas na prática;</li>" +
          "<li>Desenvolvedores e estudantes de tecnologia interessados em trabalhar com LLMs e aplicações inteligentes;</li>" +
          "<li>Pessoas que já tiveram contato com ferramentas de IA e querem entender o que existe por trás delas;</li>" +
          "<li>Interessados em aprender sobre APIs de LLM, agentes, ferramentas, MCP, RAG e outras arquiteturas modernas de IA;</li>" +
          "<li>Participantes que desejam transformar o uso de modelos de linguagem em aplicações de software reais.</li>" +
          "</ul>" +
          "A proposta é aprender construindo: ao longo dos seis encontros, o projeto evolui de uma simples chamada de LLM para uma aplicação completa.<br/><br/>Preencha o formulário de inscrição para participar da monitoria. <strong>Vagas limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("erick-cardoso", true),
      getMonitor("ivin-vaz", false),
    ].filter(Boolean),
  },

  // --- OFICINA DE GIT ---
  {
    slug: "oficina-de-git",
    titulo: "Oficina de Git",
    campus: "Campus Asa Norte",
    horarios: "Terça e Quinta, das 11h às 13h",
    imagem: imgFundamentos,
    alt: "Mago analisando código e repositórios",
    botoes: [
      {
        texto: "Inscreva-se agora!",
        link: "https://forms.gle/HwZinx3jXmNdN3Kb9",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Esta oficina aborda tudo o que você precisa saber sobre <strong>controle de versão com Git</strong>, uma ferramenta essencial para qualquer desenvolvedor de software moderno. Começando pelos problemas históricos e pela criação do Git, passaremos pelo uso local de repositórios, manipulação de branches e gerenciamento de conflitos, até o trabalho remoto e colaborativo no Github.<br/><br/>A oficina será realizada com encontros às <strong>terças e quintas-feiras</strong> de manhã, das <strong>11h às 13h</strong>.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Fundamentos do Git:</strong> Entenda o que é controle de versão, por que ele foi criado e como gerenciar seu primeiro repositório local.<br/><strong>Áreas e Commits:</strong> Aprenda a manipular arquivos nas diferentes áreas (working directory, staging e repository), gerar commits, entender hashes e gerenciar a referência HEAD.<br/><strong>Branches e Histórico:</strong> Como criar e alternar entre branches, fundir (merge) trabalhos e resolver conflitos de código com segurança.<br/><strong>Trabalho Remoto e Github:</strong> Conecte seu repositório local a servidores remotos, configure autenticação, envie suas alterações e contribua com projetos alheios através de forks e pull requests.<br/><strong>Tópicos Avançados:</strong> Revisão de código, como desfazer mudanças, recuperar arquivos perdidos, reescrever o histórico e entender o funcionamento interno (objetos, packfiles e hooks).",
      },
    ],
    monitores: [
      getMonitor("kauan-vinicius", true),
      getMonitor("jess-forster", false),
      getMonitor("felipe-rios", false),
      getMonitor("eduardo-alves", false),
    ].filter(Boolean),
  },
];
