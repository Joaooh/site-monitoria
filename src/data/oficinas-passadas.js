import imgFundamentos from "@assets/mago/oficinas/mago-fundamentos.png";
import imgDados from "@assets/mago/oficinas/mago-dados.png";
import imgSql from "@assets/mago/oficinas/mago-sql.png";
import imgRedes from "@assets/mago/oficinas/mago-redes.png";
import img3D from "@assets/mago/oficinas/monitoria-blender.png";
import imgWeb from "@assets/mago/oficinas/mago-web.png";
import imgLinux from "@assets/mago/oficinas/mago-linux.png";
import imgNuvem from "@assets/mago/oficinas/mago-nuvem.png";

/*
 * COMO CADASTRAR UMA OFICINA PASSADA:
 * Quando uma oficina ativa termina seu ciclo, ela deve vir pra cá.
 * Preferencialmente, adicione as oficinas passadas em ordem decrescente de data.
 * Basta preencher o array abaixo com os dados básicos, sendo que 'linkInscricao' na verdade será
 * o finalzinho do link que redireciona pra página de detalhes (ex: "/oficinas/oficina-sql").
 */
export const oficinasPassadasData = [
  {
    id: "fundamentos-dados",
    titulo: "Fundamentos de Ciência de Dados",
    descricao:
      "Inicie sua jornada na área de dados utilizando a linguagem Python para manipular informações.",
    turmas: [],
    formato: "Presencial",
    imagem: imgDados,
    alt: "Mago jogando dados para cima",
    linkInscricao: "/oficinas/fundamentos-ciencia-de-dados",
  },
  {
    id: "web-hacking",
    titulo: "Estudo Dirigido: Web Hacking (Cibersegurança)",
    descricao:
      "Introdução prática ao pentesting web, abordando fundamentos de segurança e exploração de vulnerabilidades.",
    turmas: ["Segunda, Terça e Quinta: 17h às 19h"],
    formato: "Online",
    linkInscricao: "/oficinas/web-hacking",
    imagem: imgRedes,
    alt: "Mago flutuando na matrix",
  },
  {
    id: "oficina-golang",
    titulo: "Oficina de Go (Golang)",
    descricao:
      "Aprenda os fundamentos de Go, uma das linguagens de programação mais performáticas e demandadas no mercado.",
    turmas: ["Segunda a Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-golang",
    imagem: imgFundamentos,
    alt: "Mago estudando fundamentos",
  },
  {
    id: "oficina-linux",
    titulo: "Oficina de Linux: Monte sua própria distro!",
    descricao:
      "Compilação e personalização de sistemas Linux, incluindo kernel, boot, rede, segurança e gerenciamento de pacotes.",
    turmas: ["Segunda, Terça e Quinta: 17h às 19h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-de-linux",
    imagem: imgLinux,
    alt: "Mago ao lado do pinguim Tux",
  },
  {
    id: "oficina-computação-nuvem",
    titulo: "Oficina de Computação em Nuvem (AWS)",
    descricao:
      "Criação de servidores virtuais, publicação de aplicações e gerenciamento básico de recursos em nuvem AWS.",
    turmas: ["Segunda, Quarta e Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/computacao-em-nuvem",
    imagem: imgNuvem,
    alt: "Mago ao lado ",
  },
  {
    id: "machine-learning",
    titulo: "Ciência de Dados - Machine Learning",
    descricao:
      "Oferece uma introdução prática e acessível ao mundo do Machine Learning e Ciência de Dados.",
    turmas: ["Terça e Quarta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/machine-learning",
    imagem: imgDados,
    alt: "Mago jogando dados",
  },
  {
    id: "fundamentos-comp",
    titulo: "Fundamentos da Computação",
    descricao:
      "Entenda como computadores funcionam por debaixo dos panos, do hardware ao sistema operacional.",
    turmas: [],
    formato: "Presencial",
    imagem: imgFundamentos,
    alt: "Mago conversando com robô",
    linkInscricao: "/oficinas/fundamentos-comp",
  },
  {
    id: "oficina-de-hardware",
    titulo: "Fundamentos de Hardware",
    descricao:
      "Aprenda na prática sobre montagem, funcionamento e manutenção dos principais componentes de um computador.",
    turmas: [],
    formato: "Presencial",
    imagem: imgDados,
    alt: "Mago manipulando componentes",
    linkInscricao: "/oficinas/oficina-de-hardware",
  },
  {
    id: "oficina-blender",
    titulo: "Oficina de Criação de Personagens 3D",
    descricao:
      "Aprenda a modelar, texturizar e renderizar seus próprios personagens e cenários 3D no Blender.",
    turmas: ["Segunda, Quarta e Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/criacao-de-personagens-3d",
    imagem: img3D,
    alt: "Mago ao lado ",
  },

  {
    id: "oficina-dados",
    titulo: "Ciência de Dados - Ferramentas e Frameworks",
    descricao:
      "Aprofunde-se no uso de bibliotecas como Pandas, NumPy e Scikit-Learn para análise de dados.",
    turmas: ["Segunda, Terça e Quinta: 17h às 19h"],
    imagem: imgDados,
    alt: "Mago jogando dados para cima",
    linkInscricao: "/oficinas/ciencia-de-dados-ferramentas-e-frameworks",
  },


  {
    id: "oficina-sql",
    titulo: "Oficina de SQL",
    descricao:
      "Aprenda a linguagem estruturada para bancos de dados relacionais, desde consultas básicas a modelagens.",
    turmas: ["Segunda, Quarta e Sexta: 17h30 às 19h"],
    imagem: imgSql,
    alt: "Mago gerenciando banco de dados SQL",
    linkInscricao: "/oficinas/oficina-sql",
  },
];
