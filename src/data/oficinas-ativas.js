import imgRedes from "@assets/mago/oficinas/mago-redes.png";
import imgLinux from "@assets/mago/oficinas/mago-linux.png";
import imgNuvem from "@assets/mago/oficinas/mago-nuvem.png";
import imgFundamentos from "@assets/mago/oficinas/mago-fundamentos.png";
import imgDados from "@assets/mago/oficinas/mago-dados.png";
import imgWeb from "@assets/mago/oficinas/mago-web.png";
/*
 * COMO CADASTRAR UMA OFICINA:
 * Preencha o bloco no array abaixo. 'linkInscricao' é o caminho da URL que abrirá
 * a página detalhada da oficina (ex: "/oficinas/oficina-de-web").
 * Importe a imagem correspondente lá no topo de assets/mago/oficinas.
 */
export const oficinasAtivasData = [
  {
    id: "oficina-de-ia",
    titulo: "Oficina de Inteligência Artificial",
    descricao:
      "Aprenda na prática a construir aplicações modernas de IA e integrar ferramentas externas aos modelos de linguagem.",
    turmas: ["Terça e Quinta: 17h às 19h"],
    formato: "Presencial",
    imagem: imgDados,
    alt: "Mago jogando dados",
    linkInscricao: "/oficinas/oficina-de-ia",
  },
  {
    id: "oficina-web",
    titulo: "Oficina de Web",
    descricao:
      "Introdução prática ao desenvolvimento web com HTML e CSS para criação de páginas responsivas.",
    turmas: [
      "Segunda, Quarta e Sexta: 11h às 13h",
      "Segunda, Quarta e Sexta: 17h às 19h"
    ],
    formato: "Presencial",
    imagem: imgWeb,
    alt: "Mago pensando em desenvolvimento web",
    linkInscricao: "/oficinas/oficina-web",
  },
  {
    id: "oficina-de-git",
    titulo: "Oficina de Git",
    descricao:
      "Domine o versionamento de código, desde os comandos básicos de terminal até a colaboração remota.",
    turmas: ["Terça e Quinta: 11h às 13h"],
    formato: "Presencial",
    imagem: imgFundamentos,
    alt: "Mago analisando código",
    linkInscricao: "/oficinas/oficina-de-git",
  },
  {
    id: "oficina-java",
    titulo: "Oficina de Java",
    descricao:
      "Aprenda fundamentos de lógica de programação com Java, desenvolva capacidade analítica e se prepare para Orientação a Objetos.",
    turmas: [
      "Segunda, Quarta e Sexta: 11h às 13h",
      "Segunda, Quarta e Sexta: 17h às 19h"
    ],
    formato: "Presencial",
    imagem: imgRedes,
    alt: "Mago flutuando na matrix",
    linkInscricao: "/oficinas/oficina-de-java",
  },
];
