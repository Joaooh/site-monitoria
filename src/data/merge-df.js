import imgAcmwUnb from "@assets/mergedf/acmw-unb.webp";
import imgAwsSbclCeub from "@assets/mergedf/aws-sbcl-ceub.webp";
import imgAwsUcb from "@assets/mergedf/aws-ucb.webp";
import imgAwsUnb from "@assets/mergedf/aws-unb.webp";
import imgCalangohc from "@assets/mergedf/calangohc.webp";
import imgCatech from "@assets/mergedf/catech.webp";
import imgCjrUnb from "@assets/mergedf/cjr-unb.webp";
import imgDce from "@assets/mergedf/dce.webp";
import imgGoogleUcb from "@assets/mergedf/google-ucb.webp";
import imgIbmzCeub from "@assets/mergedf/ibmz-ceub.webp";
import imgIeeUnb from "@assets/mergedf/iee-unb.webp";
import imgMeninasComp from "@assets/mergedf/meninas-comp.webp";
import imgMncIfb from "@assets/mergedf/mnc-ifb.webp";
import imgPci from "@assets/mergedf/pci.webp";
import imgPmi from "@assets/mergedf/pmi.webp";
import imgSinteseLabs from "@assets/mergedf/sintese-labs.webp";
import imgUnbreakable from "@assets/mergedf/unbreakable.webp";

/**
 * MERGE-DF — Dados da página temporária do evento.
 *
 * Tudo que aparece em /merge-df e /merge-df/[slug] vem deste arquivo.
 * Para adicionar uma organização, basta copiar um objeto de
 * `organizacoesMergeData` e preencher com as respostas do formulário.
 */

/**
 * @typedef {Object} LinkOrganizacao
 * @property {"site" | "instagram" | "linkedin" | "whatsapp" | "outro"} tipo
 * @property {string} label - Texto exibido no botão (ex: "@monitoriatech").
 * @property {string} url
 */

/**
 * @typedef {Object} PerguntaLivre
 * @property {string} pergunta
 * @property {string} [resposta]
 */

/**
 * @typedef {Object} OrganizacaoMerge
 * @property {string} slug - Usado na URL: /merge-df/{slug}
 * @property {string} nome - Nome completo da organização.
 * @property {string} sigla - Nome curto exibido no card.
 * @property {string} ies - Instituição de Ensino Superior (CEUB, UnB, IESB, Católica...).
 * @property {string | import("astro").ImageMetadata} [logo] - Caminho público (/public) ou asset importado (@assets). Se vazio, usa as iniciais.
 * @property {"contain" | "cover"} [logoFit] - Ajuste da imagem no brasão ("contain" para logos recortadas, "cover" para logos quadradas).
 * @property {string} [corDestaque] - Cor usada no estandarte e detalhes da página.
 * @property {string} [corFundoLogo] - Cor de fundo específica do brasão (útil para logomarcas sem fundo).
 * @property {boolean} [demonstrativo] - Marca páginas de exemplo (exibe aviso). Remover quando os dados forem reais.
 * @property {string} resumoCurto - Frase curta exibida no card da vitrine.
 * @property {LinkOrganizacao[]} ondeEncontrar
 * @property {string[]} puxePapo - Assuntos para puxar conversa.
 * @property {string} oQueFazem
 * @property {string} doQueSeOrgulham
 * @property {string} oQueBuscam
 * @property {string} oQueOferecem
 * @property {string} comoParticipar
 * @property {string} [observacaoParticipacao] - Aviso extra exibido em destaque.
 * @property {PerguntaLivre[]} perguntasLivres - Até 3 perguntas livres.
 */

export const eventoMergeData = {
  nome: "MERGE-DF",
  subtitulo: "Conectando o Ecossistema Universitário",
  premissa:
    "Um encontro redesenhado para abandonar palestras longas e exposições engessadas. O foco é networking ativo e conexão estratégica: parcerias reais entre lideranças, comunidades, monitorias e organizações de tecnologia das Instituições de Ensino Superior (IES) do Distrito Federal.",
  instituicoes: ["UnB", "CEUB", "IESB", "Católica", "IFB", "demais IES do DF"],
  convite:
    "O ecossistema de tecnologia do DF cresce muito quando nos unimos, mas muitas vezes cada grupo acaba isolado em sua própria faculdade. Por isso, este é um encontro exclusivo e 100% voltado para networking e parcerias práticas entre líderes de tecnologia: lideranças conversando face a face sobre projetos conjuntos para o próximo ano, desafios de gestão, troca de ideias e muito mais.",
  dataISO: "2026-11-13T10:00:00-03:00",
  dataFimISO: "2026-11-13T13:00:00-03:00",
  infos: [
    { icone: "calendar", label: "Data", valor: "13 de novembro de 2026" },
    {
      icone: "clock",
      label: "Horário",
      valor: "10h às 13h (encerramento final)",
    },
    { icone: "pin", label: "Local", valor: "Auditório do CEUB (Bloco 1)" },
    {
      icone: "users",
      label: "Público estimado",
      valor: "70 lideranças e representantes",
    },
  ],
  programacao: [
    {
      inicio: "10h00",
      fim: "10h15",
      duracao: "15 min",
      titulo: "Speed Briefing e Abertura Dinâmica",
      descricao:
        "Boas-vindas rápidas, apresentação do propósito da manhã e mapeamento visual dos grupos presentes no auditório.",
    },
    {
      inicio: "10h15",
      fim: "11h25",
      duracao: "70 min",
      titulo: "Apresentação das Organizações",
      descricao:
        "Algumas organizações apresentam quem são e o que buscam no evento. Assim, todos conhecem valores e objetivos de cada grupo e as conversas sobre parcerias ficam mais fáceis e rápidas.",
    },
    {
      inicio: "11h25",
      fim: "11h55",
      duracao: "30 min",
      titulo: "Conexão Direta e Troca de Contatos",
      descricao:
        "Momento livre para trocar QR Codes, cartões e redes sociais e consolidar canais de comunicação.",
    },
    {
      inicio: "11h55",
      fim: "12h00",
      duracao: "5 min",
      titulo: "Encerramento Oficial",
      descricao:
        "Fechamento da programação oficial com orientações de como manter contato e agradecimentos.",
    },
    {
      inicio: "12h00",
      fim: "13h00",
      duracao: "60 min",
      titulo: "Tempo Extra para Conversas e Encerramento Final",
      descricao:
        "Após o encerramento oficial, o auditório segue aberto com tempo extra para continuar o bate-papo, aprofundar conexões e alinhar parcerias até o encerramento total do evento às 13h00.",
    },
  ],
  beneficios: [
    {
      icone: "chat",
      titulo: "Menos exposições monótonas",
      texto: "Menos slides, mais conversas olho no olho.",
    },
    {
      icone: "target",
      titulo: "Mapeamento de dores comuns",
      texto:
        "Troca real sobre retenção de membros, captação de parcerias e organização de eventos.",
    },
    {
      icone: "handshake",
      titulo: "Parcerias práticas para 2027",
      texto:
        "Projetos e hackathons cruzados entre diferentes IES, de forma simples e direta.",
    },
    {
      icone: "network",
      titulo: "Canais de comunicação",
      texto:
        "Canais diretos com organizações da sua e de outras IES para captar participantes engajados.",
    },
    {
      icone: "award",
      titulo: "Certificação oficial",
      texto: "Emissão de certificados de extensão para os participantes.",
    },
  ],
};

/**
 * Organizações agrupadas por afinidade/tema (não em ordem alfabética),
 * mantendo organizações similares lado a lado e o CATECH na última posição:
 * 1–3: Comunidades técnicas, grupos de estudo e projetos práticos (Monitoria de TI, UnBreakable, CJR)
 * 4–7: Capítulos internacionais e incentivo a mulheres em STEM/STEAM (PMI-DF, IEEE UnB, ACM-W UnB, Meninas na Ciência)
 * 8–10: Comunidades AWS lado a lado (AWS SBCL CEUB, AWS SBG UnB, AWS SBG UCB)
 * 11–12: Embaixadores estudantis Big Tech lado a lado (Embaixadores Google, IBM Z Ambassador)
 * 13–14: Representação estudantil do CEUB lado a lado (DCE Mova-se e CATECH por último)
 *
 * @type {OrganizacaoMerge[]}
 */
export const organizacoesMergeData = [
  // --- 1. MONITORIA DE TI DO CEUB ---
  {
    slug: "monitoria-ti-ceub",
    nome: "Monitoria de TI do CEUB",
    sigla: "Monitoria de TI",
    ies: "CEUB",
    logo: "/mago-cabeca.png",
    logoFit: "contain",
    corDestaque: "#662c92",
    resumoCurto:
      "Somos uma comunidade acadêmica de tecnologia do CEUB que promove aprendizado colaborativo, desenvolvimento técnico e integração entre estudantes. Realizamos oficinas práticas, grupos de estudo, apoio acadêmico e desenvolvimento de projetos de software e hardware.",
    ondeEncontrar: [
      {
        tipo: "instagram",
        label: "@monitoriatech",
        url: "https://www.instagram.com/monitoriatech/",
      },
      {
        tipo: "site",
        label: "Site oficial",
        url: "https://site-monitoria-blue.vercel.app",
      },
    ],
    puxePapo: [
      "Como funcionam as oficinas",
      "Quais projetos temos",
      "Como chegamos até os alunos da nossa IES",
    ],
    oQueFazem:
      "Somos uma comunidade acadêmica de tecnologia do CEUB que promove aprendizado colaborativo, desenvolvimento técnico e integração entre estudantes. Realizamos oficinas práticas, grupos de estudo, apoio acadêmico e desenvolvimento de projetos de software e hardware.",
    doQueSeOrgulham:
      "Da nossa comunidade, do nosso site e das conquistas individuais dos participantes de nossa comunidade, tanto de monitores quanto alunos!",
    oQueBuscam:
      "Buscamos aproximar estudantes de diferentes instituições de ensino superior, promovendo parcerias, intercâmbio de conhecimentos e iniciativas conjuntas na área de tecnologia.",
    oQueOferecem:
      "Oferecemos oficinas gratuitas, mentorias e apoio acadêmico, além do <strong>PITACO</strong>, nosso grupo de estudos voltado ao desenvolvimento de projetos pessoais e à aprendizagem colaborativa. Também disponibilizamos materiais e aulas gravadas para os estudantes em nosso site!",
    comoParticipar:
      "As atividades são gratuitas e abertas aos estudantes de qualquer local! Sem necessidade de pré-requisitos para participar das oficinas. Já o ingresso na equipe de monitores ocorre por processo seletivo.",
    observacaoParticipacao:
      "Caso seja de fora do CEUB, é necessário esclarecer isso durante a inscrição, pois precisamos autorizar a entrada na portaria de antemão. Caso participe de um encontro online, não é preciso!",
    perguntasLivres: [
      {
        pergunta: "O que nos torna diferentes?",
        resposta:
          "Apesar de levarmos o nome da atividade de monitoria, vamos muito além disso desde sua criação (+6 anos!)",
      },
      {
        pergunta: "Como entro em contato?",
        resposta:
          "A melhor forma de entrar em contato conosco é pelo Instagram! Respondemos rápido e estamos sempre abertos a oportunidades na área de TI!",
      },
    ],
  },

  // --- 2. UNBREAKABLE ---
  {
    slug: "unbreakable-unb",
    nome: "UnBreakable",
    sigla: "UnBreakable",
    ies: "UnB",
    logo: imgUnbreakable,
    logoFit: "contain",
    corDestaque: "#5b189a",
    corFundoLogo: "#ffffff",
    resumoCurto:
      "Somos o UnBreakable, um grupo de estudos de segurança ofensiva da Universidade de Brasília. Trabalhamos em máquinas reais do Hack The Box e do TryHackMe, praticando reconhecimento, exploração de vulnerabilidades e escalonamento de privilégios.",
    ondeEncontrar: [
      {
        tipo: "instagram",
        label: "@unbreakableunb",
        url: "https://www.instagram.com/unbreakableunb/",
      },
      {
        tipo: "site",
        label: "unbreakable-project.github.io",
        url: "https://unbreakable-project.github.io/",
      },
      {
        tipo: "linkedin",
        label: "UnBreakable UnB",
        url: "https://www.linkedin.com/company/unbreakableunb/",
      },
    ],
    puxePapo: [
      "Como começar em segurança ofensiva a partir do zero, com Hack The Box e TryHackMe",
      "Como escrever um bom write-up",
      "Pivoting e movimentação lateral, por exemplo com o Ligolo-ng",
      "Cyber Threat Intelligence e o impacto da IA na área",
    ],
    oQueFazem:
      "Somos o UnBreakable, um grupo de estudos de segurança ofensiva da Universidade de Brasília. Trabalhamos em máquinas reais do Hack The Box e do TryHackMe, praticando reconhecimento, exploração de vulnerabilidades e escalonamento de privilégios. Resolver a máquina é só metade do trabalho: também discutimos as técnicas e as decisões tomadas e documentamos tudo em write-ups, para que o aprendizado seja reproduzível. Também organizamos palestras, oficinas e competições abertas.",
    doQueSeOrgulham:
      "Do nosso ciclo de palestras, que reuniu professores e profissionais da área:<ul><li><strong>Movimentação Lateral utilizando Ligolo-ng</strong>, com o Prof. Alan Tamer Vasques;</li><li><strong>Método de Detecção de Exfiltração por Tunelamento DNS</strong>, com a Profa. Lorena Borges;</li><li><strong>Como Ganhar a Vida Hackeando</strong>, com o Prof. Roberto Vito Rodrigues Filho;</li><li><strong>O que é Cyber Threat Intelligence e como a IA está mudando a área</strong>, com João Braga.</li></ul>Também temos orgulho de o grupo ter organizado duas competições: o <strong>CTF do UnBreakable no WPOS-26</strong> e o <strong>CTF Pink Hat — Pwning Like a Girl</strong>. Além disso, nascemos dentro da sala de aula e hoje criamos uma cultura de colaboração: investigar, testar, registrar e compartilhar fazem parte do mesmo processo.",
    oQueBuscam:
      "<ul><li><strong>Parceiros:</strong> outras comunidades e organizações para eventos e CTFs conjuntos;</li><li><strong>Novos membros:</strong> estudantes e entusiastas curiosos por segurança ofensiva;</li><li><strong>Divulgação:</strong> dar visibilidade às nossas palestras, aos write-ups e ao grupo;</li><li><strong>Ideias:</strong> trocar experiências sobre como manter uma comunidade técnica ativa.</li></ul>",
    oQueOferecem:
      "<ul><li><strong>Conhecimento técnico:</strong> nossa metodologia de estudo com máquinas e write-ups, além de palestras e conteúdo sobre tunelamento, movimentação lateral e threat intelligence;</li><li><strong>Equipe para eventos:</strong> organização e participação em CTFs e oficinas, como fizemos no WPOS-26;</li><li><strong>Palestrantes e rede de contatos:</strong> acesso a professores e profissionais com quem já realizamos palestras;</li><li><strong>Público:</strong> alunos interessados em segurança.</li></ul>",
    comoParticipar:
      '<ul><li><strong>Como membro:</strong> a porta de entrada é um processo seletivo organizado pela gestão.</li><li><strong>Como participante de ações:</strong> as palestras, oficinas e competições são abertas. Consulte a agenda em <a href="https://unbreakable-project.github.io/eventos" target="_blank" rel="noopener noreferrer">https://unbreakable-project.github.io/eventos</a>.</li><li>A melhor forma de entrar em contato conosco é pelo Instagram (<a href="https://www.instagram.com/unbreakableunb/" target="_blank" rel="noopener noreferrer">@unbreakableunb</a>)! Respondemos rápido e estamos sempre abertos para esclarecer as dúvidas.</li></ul>',
    perguntasLivres: [
      {
        pergunta: "Preciso saber hackear para participar?",
        resposta:
          "Não. O grupo reúne quem quer ir além da teoria e transformar curiosidade em repertório técnico. Começamos pela prática guiada em máquinas reais, e o importante é ter vontade de investigar, testar e registrar o que aprendeu.",
      },
    ],
  },

  // --- 3. COMPUTAÇÃO JÚNIOR / CJR ---
  {
    slug: "cjr-unb",
    nome: "Computação Júnior/ CJR",
    sigla: "CJR",
    ies: "UnB",
    logo: imgCjrUnb,
    logoFit: "contain",
    corDestaque: "#003b73",
    corFundoLogo: "#ffffff",
    resumoCurto:
      "Resolvemos problemas de clientes com criação de sites, apps, soluções estratégicas e consultoria especializada para impulsionar o crescimento do seu negócio, e desenvolvimento de lojas virtuais para impulsionar as vendas online do seu negócio.",
    ondeEncontrar: [
      {
        tipo: "instagram",
        label: "@cjr.unb",
        url: "https://www.instagram.com/cjr.unb/",
      },
    ],
    puxePapo: ["Inteligência Artificial", "Desenvolvimento Web"],
    oQueFazem:
      "Resolvemos problemas de clientes com criação de sites, apps, soluções estratégicas e consultoria especializada para impulsionar o crescimento do seu negócio, e desenvolvimento de lojas virtuais para impulsionar as vendas online do seu negócio.",
    doQueSeOrgulham:
      "Projeto: <strong>Selo Social</strong>; Maior Empresa Júnior de computação do Centro-Oeste com uma cultura forte e integrada.",
    oQueBuscam: "Parceiros, divulgação, ideias.",
    oQueOferecem:
      "Mentoria, espaço, público, divulgação, conhecimento open source, equipe para eventos.",
    comoParticipar:
      "Precisa ser um estudante da UnB dos cursos de: Ciência da Computação, Engenharia de Redes, Engenharia de Software, Inteligência Artificial, Engenharia da Computação, Licenciatura em Computação.",
    perguntasLivres: [
      {
        pergunta: "Qual futuro você imagina para a área de TI?",
        resposta:
          "O futuro é focar em fundamentos que a IA não cumpre para utilizá-la apenas como ferramenta e não deixar ela te substituir.",
      },
    ],
  },

  // --- 4. PROJECT MANAGEMENT INSTITUTE – DISTRITO FEDERAL (PMI-DF) | STUDENT CLUB PMI-DF ---
  {
    slug: "pmi-df",
    nome: "Project Management Institute – Distrito Federal (PMI-DF) | Student Club PMI-DF",
    sigla: "Student Club PMI-DF",
    ies: "DF",
    logo: imgPmi,
    logoFit: "cover",
    corDestaque: "#0099d8",
    resumoCurto:
      "O Student Club é uma iniciativa voltada aos estudantes, com a missão de conectar estudantes, desenvolver talentos e gerar impacto positivo por meio da Gestão de Projetos.",
    ondeEncontrar: [
      {
        tipo: "site",
        label: "Site Student Club",
        url: "https://pmidf.org/student-club/",
      },
      {
        tipo: "instagram",
        label: "@pmidf",
        url: "https://www.instagram.com/pmidf/",
      },
      {
        tipo: "instagram",
        label: "@studentclub.pmidf",
        url: "https://www.instagram.com/studentclub.pmidf/",
      },
      {
        tipo: "linkedin",
        label: "PMI Distrito Federal",
        url: "https://www.linkedin.com/company/pmi-df/",
      },
    ],
    puxePapo: [
      "Desenvolvimento profissional, liderança e voluntariado",
      "Gestão de projetos",
      "Tecnologia e inovação",
    ],
    oQueFazem:
      "O PMI-DF é o capítulo do Project Management Institute no Distrito Federal, uma das maiores associações profissionais de gerenciamento de projetos do mundo.<br/><br/>O Student Club é uma iniciativa voltada aos estudantes, com a missão de conectar estudantes, desenvolver talentos e gerar impacto positivo por meio da Gestão de Projetos. Promovemos hackathons, capacitações, workshops, rodas de conversa, encontros de networking e oportunidades de voluntariado para aproximar os universitários do mercado de trabalho e desenvolverem competências em Gestão de Projetos.",
    doQueSeOrgulham:
      "Temos orgulho de ser o primeiro Student Club do PMI no Brasil, aproximando estudantes de todas as áreas do universo da gestão de projetos, uma competência essencial para qualquer carreira. Ao longo de 3 anos de história, já capacitamos mais de 1.300 estudantes, contribuindo ativamente para a formação de novos talentos e lideranças no Distrito Federal.",
    oQueBuscam:
      "Conectar pessoas, transformar futuros! Buscamos parcerias com organizações que acreditem no poder da educação, tecnologia e desenvolvimento profissional para impulsionar a comunidade estudantil do Distrito Federal.<br/><br/>Nossa missão é apresentar o Student Club PMI-DF como um ecossistema de oportunidades, onde estudantes se conectam, desenvolvem habilidades práticas por meio do voluntariado e geram impacto social real na nossa região.",
    oQueOferecem:
      "<ul><li>Divulgação mútua de eventos e iniciativas.</li><li>Networking com estudantes e profissionais.</li><li>Participação e colaboração em eventos.</li><li>Compartilhamento de conhecimentos sobre Gestão de Projetos.</li><li>Apoio na organização e estruturação de iniciativas.</li><li>Possibilidade de desenvolver projetos e ações em conjunto.</li></ul>",
    comoParticipar:
      "Estudantes, maiores de 18 anos, matriculados em Instituições de Ensino Superior podem se conectar com o Student Club de diversas formas, abaixo explicamos cada uma delas:<ul><li><strong>Observadores:</strong> Estudantes que buscam participar pontualmente dos eventos e ações promovidos para a comunidade.</li><li><strong>Conectados:</strong> Estudantes que desejam se tornar membros para acompanhar em primeira mão todas as oportunidades, novidades e eventos do ecossistema.</li><li><strong>Visionários:</strong> Estudantes que buscam ir além do Student Club para se conectar ativamente com as iniciativas do PMI Distrito Federal e com a rede global de gerenciamento de projetos, garantindo condições exclusivas na associação.</li><li><strong>Protagonistas:</strong> Estudantes que vivenciam todo o nosso ecossistema, atuando diretamente na construção de eventos e iniciativas por meio do voluntariado, com oportunidades práticas de colaboração e liderança de projetos.</li></ul>E pessoas que já concluíram seus cursos também podem se conectar ao PMI-DF por meio da participação em nossos eventos. E, se quiserem se conectar mais profundamente com a comunidade e aproveitar os benefícios não só do Distrito Federal, mas também do PMI Global, poderão se associar ao PMI.",
    perguntasLivres: [
      {
        pergunta:
          "Como podemos construir oportunidades de colaboração entre organizações estudantis e iniciativas voltadas ao desenvolvimento profissional?",
        resposta:
          "Acreditamos que a conexão entre diferentes organizações fortalece comunidades, amplia oportunidades e possibilita a criação de projetos com impacto coletivo. Estamos abertos a parcerias, eventos colaborativos e iniciativas que promovam aprendizado, inovação e desenvolvimento.",
      },
      {
        pergunta: "Como entro em contato?",
        resposta:
          'Se você quer saber mais sobre o Student Club PMI-DF, você pode nos chamar no Instagram: <a href="https://www.instagram.com/studentclub.pmidf/" target="_blank" rel="noopener noreferrer">@studentclub.pmidf</a> ou fazer a sua inscrição por meio do <a href="https://linktr.ee/studentclubpmidf" target="_blank" rel="noopener noreferrer">https://linktr.ee/studentclubpmidf</a>.',
      },
    ],
  },

  // --- 5. RAMO ESTUDANTIL IEEE UNB ---
  {
    slug: "ieee-unb",
    nome: "Ramo Estudantil IEEE UnB – Universidade de Brasília",
    sigla: "IEEE UnB",
    ies: "UnB",
    logo: imgIeeUnb,
    logoFit: "cover",
    corDestaque: "#00629b",
    resumoCurto:
      "Conectamos estudantes à comunidade internacional do IEEE e desenvolvemos projetos técnicos, educacionais e sociais. Por meio dos nossos capítulos e grupos, promovemos aprendizado prático, eventos e oportunidades de desenvolver habilidades técnicas e de liderança.",
    ondeEncontrar: [
      {
        tipo: "instagram",
        label: "@ramoieeeunb",
        url: "https://www.instagram.com/ramoieeeunb/",
      },
      {
        tipo: "linkedin",
        label: "Ramo Estudantil IEEE UnB",
        url: "https://www.linkedin.com/company/ramo-unb/",
      },
    ],
    puxePapo: [
      "Projetos de tecnologia com impacto social",
      "Programação, robótica, energia e outras áreas dos nossos capítulos",
      "Voluntariado, liderança e conexões acadêmicas e profissionais",
    ],
    oQueFazem:
      "Conectamos estudantes à comunidade internacional do IEEE e desenvolvemos projetos técnicos, educacionais e sociais. Por meio dos nossos capítulos e grupos, promovemos aprendizado prático, eventos e oportunidades de desenvolver habilidades técnicas e de liderança em áreas como computação, energia, robótica, telecomunicações e saúde.",
    doQueSeOrgulham:
      "Do protagonismo dos nossos voluntários, que transformam conhecimento em projetos e oportunidades para outras pessoas. Um exemplo é o <strong>IEEEXtreme na UnB</strong>, organizado localmente pela Computer Society: uma competição mundial de programação com 24 horas de desafios, colaboração e aprendizado em equipe.",
    oQueBuscam:
      "Queremos conhecer outras organizações estudantis do DF e construir parcerias para projetos, oficinas e eventos conjuntos. Buscamos trocar experiências de gestão e voluntariado, aproximar estudantes de diferentes instituições e encontrar pessoas interessadas em aplicar tecnologia a problemas reais.",
    oQueOferecem:
      "Podemos colaborar com conhecimento técnico, troca de experiências na organização de projetos e eventos, divulgação de iniciativas e conexão com a comunidade IEEE. Também queremos construir atividades em conjunto, reunindo as competências de cada organização.",
    comoParticipar:
      "Para integrar a equipe, acompanhe as chamadas e os processos seletivos nos nossos canais oficiais. Você também pode conversar conosco pelo Instagram para conhecer os capítulos e encontrar uma área de interesse.<br/><br/>Para participar das ações, acompanhe a divulgação de oficinas, palestras e eventos e confira as inscrições e os requisitos de cada atividade.",
    perguntasLivres: [
      {
        pergunta: "Que parceria gostaríamos de começar depois do MERGE-DF?",
        resposta:
          "Uma atividade que reúna estudantes de diferentes instituições para aprender e desenvolver algo juntos: uma oficina, um desafio técnico ou um projeto voltado a uma necessidade da comunidade. Queremos sair do encontro com contatos e ideias que possam se transformar em colaboração.",
      },
    ],
  },

  // --- 6. ACM-W UNB ---
  {
    slug: "acmw-unb",
    nome: "ACM-W UnB (ACM Women in Computing – Capítulo Estudantil da Universidade de Brasília)",
    sigla: "ACM-W UnB",
    ies: "UnB",
    logo: imgAcmwUnb,
    logoFit: "cover",
    corDestaque: "#2f76b5",
    resumoCurto:
      "Somos o primeiro capítulo estudantil da ACM-W no Brasil! A ACM é a maior sociedade científica de computação do mundo, e a nossa missão aqui é apoiar, promover e celebrar a participação de mulheres na tecnologia.",
    ondeEncontrar: [
      {
        tipo: "instagram",
        label: "@acmw.unb",
        url: "https://www.instagram.com/acmw.unb/",
      },
      {
        tipo: "linkedin",
        label: "ACM-W UnB",
        url: "https://www.linkedin.com/company/acmwunb/",
      },
    ],
    puxePapo: [
      "Como é fazer parte de uma rede acadêmica e profissional internacional",
      "Iniciativas de Cibersegurança, Dados e Inovação tecnológica",
      "Como incluir, incentivar e reter mais mulheres nas áreas STEM",
    ],
    oQueFazem:
      "Somos o primeiro capítulo estudantil da ACM-W no Brasil! A ACM é a maior sociedade científica de computação do mundo, e a nossa missão aqui é apoiar, promover e celebrar a participação de mulheres na tecnologia. Fazemos a ponte entre a graduação, a pesquisa, o mercado de trabalho e o ecossistema internacional.",
    doQueSeOrgulham:
      'De sermos o capítulo pioneiro no país! Também temos muito orgulho da nossa fundação recente, da nossa participação no CSBC26 e das ações que lideramos — desde painéis sobre Cibersegurança e IA até treinamentos e parcerias em eventos como "Celebrar Conquistas, abrir caminhos" e CTFs.',
    oQueBuscam:
      "Buscamos conexões reais! Queremos encontrar parceiros para co-organizar eventos, trocar ideias, atrair novos participantes para as nossas ações e fortalecer a rede de inovação, diversidade e tecnologia no DF.",
    oQueOferecem:
      "Uma ponte global e muito engajamento local! Oferecemos parceria para organização de palestras e workshops, networking com nosso corpo de voluntárias e palestrantes (nas áreas de Segurança, IA, Redes, etc.), além da chancela e divulgação em conjunto com a rede ACM-W.",
    comoParticipar:
      "Fique de olho nas nossas redes! Para fazer parte da gestão (Secretaria, Eventos, Inovações, etc.), abrimos chamadas com formulários de inscrição. Já os nossos eventos, palestras e treinamentos são abertos ao público. É só acompanhar nossa agenda e chegar junto!",
    perguntasLivres: [
      {
        pergunta: "O capítulo é voltado apenas para estudantes da UnB?",
        resposta:
          "Nossa equipe de gestão é formada por alunas da UnB, mas nossa atuação visa toda a comunidade tecnológica! Nossos eventos e treinamentos buscam integrar pessoas de várias instituições, por isso estamos aqui no MERGE-DF. Queremos somar forças.",
      },
      {
        pergunta: "As ações são exclusivas para mulheres?",
        resposta:
          "Nosso objetivo central é promover a equidade, impulsionando e celebrando mulheres na computação. No entanto, nossos eventos são abertos a todos e encorajamos a participação de aliados. Acreditamos que a diversidade beneficia a tecnologia como um todo!",
      },
    ],
  },

  // --- 7. MENINAS NA CIÊNCIA (MNC) ---
  {
    slug: "meninas-na-ciencia-ifb",
    nome: "Meninas na Ciência (MNC)",
    sigla: "Meninas na Ciência",
    ies: "IFB",
    logo: imgMncIfb,
    logoFit: "cover",
    corDestaque: "#3b7a8c",
    resumoCurto:
      "Meninas na Ciência do IFB é um projeto de extensão criado em 2022 e visa desenvolver e consolidar ações político-pedagógicas que abordem e incentivem a participação feminina nas áreas STEAM.",
    ondeEncontrar: [
      {
        tipo: "instagram",
        label: "@meninasnacienciaifb",
        url: "https://www.instagram.com/meninasnacienciaifb/",
      },
    ],
    puxePapo: [
      "Há grupos semelhantes no CEUB?",
      "Qual o percentual de mulheres que frequentam cursos na área de computação?",
      "Há reserva de vagas em projetos?",
    ],
    oQueFazem:
      "Meninas na Ciência do IFB é um projeto de extensão criado em 2022 e visa desenvolver e consolidar ações político-pedagógicas que abordem e incentivem a participação feminina nas áreas STEAM (acrônimo em inglês para Ciência, Tecnologia, Engenharia, Artes e Matemática), de maneira interdisciplinar e levando em consideração os cenários da Comunidade Científica ao longo dos anos. A fim de auxiliar meninas e mulheres a encontrar representatividade nas Ciências e encorajá-las a ingressar no mundo da pesquisa, nosso projeto é construído com ações, como palestras, postagens nas redes sociais, mesas redondas, oficinas e outras formas de intervenção na realidade de nossa comunidade que exaltem a capacidade e as potencialidades do gênero feminino na Ciência ao longo dos tempos.",
    doQueSeOrgulham:
      "Ter organizado 3 edições do <strong>Hackathon Meninas na Ciência</strong> durante o ConectaIF 2022, 2023 e 2025, reunindo mais de 50 meninas e mulheres de cursos de nível médio e superior dos 10 campi do IFB.",
    oQueBuscam: "Divulgação e visibilidade do projeto.",
    oQueOferecem:
      "Mentoria, espaço físico, público, parceria para divulgação.",
    comoParticipar:
      "Para participar do grupo, compareça a um dos encontros presenciais realizados e, se quiser continuar, será adicionada pelas docentes responsáveis no grupo.",
    perguntasLivres: [
      {
        pergunta:
          "Como podemos empoderar meninas do ensino médio e superior para que elas possam continuar nos cursos, persistir na carreira e superar as dificuldades?",
      },
    ],
  },

  // --- 8. AWS STUDENT BUILDER CAMPUS LEADER AT CEUB ---
  {
    slug: "aws-sbcl-ceub",
    nome: "AWS Student Builder Campus Leader at CEUB",
    sigla: "AWS SBCL CEUB",
    ies: "CEUB",
    logo: imgAwsSbclCeub,
    logoFit: "cover",
    corDestaque: "#d946ef",
    resumoCurto:
      "Conectamos estudantes universitários ao ecossistema de computação em nuvem da Amazon Web Services (AWS). Promovemos workshops, sessões de tabling no campus, passagens em sala e orientações sobre o uso da plataforma AWS Builder Center.",
    ondeEncontrar: [
      {
        tipo: "instagram",
        label: "@itsamanda.dev (Amanda Weiler)",
        url: "https://www.instagram.com/itsamanda.dev/",
      },
    ],
    puxePapo: [
      "Computação em nuvem (AWS), DevOps, Platform Engineering e como dar os primeiros passos na área",
      "Como conseguir descontos e se preparar para a primeira certificação AWS ainda na faculdade",
      "Comunidades de tecnologia, hackathons e como usar iniciativas estudantis para conquistar o primeiro estágio",
    ],
    oQueFazem:
      "Conectamos estudantes universitários ao ecossistema de computação em nuvem da Amazon Web Services (AWS). Promovemos workshops, sessões de tabling no campus, passagens em sala e orientações sobre o uso da plataforma AWS Builder Center, ajudando alunos a conquistarem certificações, desenvolverem projetos técnicos e se aproximarem do mercado de tecnologia.",
    doQueSeOrgulham:
      "Como projeto, nos orgulhamos de fomentar o ecossistema AWS dentro do CEUB e promover o AWS Builder Center como comunidade para os estudantes. Como evento, destacamos nossos tablings e pitchs, que são essenciais para explicar aos alunos como tirar a primeira certificação e mostrar a importância da computação em nuvem no mercado atual. E como maior conquista, celebramos ter uma comunidade cada vez mais fortalecida, vendo de perto os colegas conseguindo desconto na primeira certificação AWS através do AWS Builder Center e conquistando estágios e contratações na área.",
    oQueBuscam:
      "Busco parceria com estudantes curiosos que tenham interesse em formar um grupo de estudos de AWS dentro do CEUB, além de me conectar com novas pessoas de outras lideranças estudantis. Também quero divulgar o AWS Builder Center e todas as oportunidades gratuitas que a plataforma oferece, mostrar o caminho para quem deseja se tornar um líder estudantil AWS (SBCL) e trocar muitas ideias sobre computação em nuvem e tecnologia no geral.",
    oQueOferecem:
      "Oferecemos conteúdo técnico e capacitação em cloud (workshops introdutórios e práticos de AWS), ponte com a comunidade profissional (conexão direta com o AWS Builder Center e AWS User Group Brasília e eventos do setor), direcionamento sobre certificações AWS e carreiras em tecnologia, além de divulgação cruzada e apoio colaborativo em eventos acadêmicos, além de sempre distribuirmos brindes exclusivos da AWS para que os alunos se sintam mais acolhidos e engajados nas ações.",
    comoParticipar:
      '<strong>Para se tornar líder (SBCL):</strong> O programa abre seleções periódicas geridas pela AWS para escolher novos Student Builder Campus Leaders. Quem tiver interesse pode me procurar diretamente para tirar dúvidas sobre o processo seletivo e se preparar para o próximo ciclo!<br/><br/><strong>Para participar das ações:</strong> Qualquer estudante pode participar gratuitamente dos nossos workshops, tablings e eventos divulgados no campus e no Instagram (<a href="https://www.instagram.com/itsamanda.dev/" target="_blank" rel="noopener noreferrer">@itsamanda.dev</a>). Basta criar uma conta no AWS Builder Center usando o e-mail institucional da faculdade para começar a trilhar os cursos e acumular selos para desconto na primeira certificação.',
    perguntasLivres: [
      {
        pergunta:
          "Qual é o maior benefício prático de participar do AWS Builder Center ainda na graduação?",
        resposta:
          "É poder experimentar na prática ferramentas reais de mercado sem precisar gastar dinheiro ou ter medo de errar. Enquanto na faculdade muita coisa fica apenas na teoria, na plataforma você coloca a mão na massa em ambientes de nuvem seguros, participa de hackathons, publica seus próprios artigos técnicos e troca experiências com uma comunidade global de desenvolvedores, criando o hábito de aprender continuamente e construir projetos reais desde cedo.",
      },
      {
        pergunta:
          "O que um líder estudantil AWS (SBCL) faz na prática e como isso transforma a experiência na faculdade?",
        resposta:
          "O líder estudantil funciona como uma ponte entre a AWS e os alunos do campus, organizando ações, divulgando oportunidades e ajudando outros estudantes a darem os primeiros passos na nuvem. Na prática, você desenvolve habilidades de comunicação, liderança, networking direto com profissionais do mercado e ganha uma vivência de comunidade que abre muitas portas profissionais ainda durante a graduação. Além de ganhar todo conhecimento técnico em AWS, permitindo conseguir grandes oportunidades profissionais.",
      },
      {
        pergunta:
          "Como o AWS Builder Center pode me ajudar a conquistar o meu primeiro estágio ou emprego na área de tecnologia?",
        resposta:
          "O AWS Builder Center é uma plataforma gratuita incrível que te dá acesso a ambientes de teste em nuvem, treinamentos completos e cursos de tudo o que você imaginar dentro do ecossistema AWS. Além de aprender do zero, você participa de um sistema de gamificação onde coleta selos diários para garantir descontos na sua primeira certificação. Ter domínio prático da nuvem e certificações oficiais no currículo é um diferencial gigantesco que abre portas logo no início da faculdade para conseguir estágios e oportunidades na área.",
      },
    ],
  },

  // --- 9. AWS STUDENT BUILDER GROUP – UNB ---
  {
    slug: "aws-sbg-unb",
    nome: "AWS Student Builder Group – UnB",
    sigla: "AWS SBG UnB",
    ies: "UnB",
    logo: imgAwsUnb,
    logoFit: "cover",
    corDestaque: "#00b86b",
    resumoCurto:
      "Somos uma comunidade estudantil vinculada ao ecossistema AWS, formada por estudantes da Universidade de Brasília interessados em computação em nuvem, tecnologia e inovação.",
    ondeEncontrar: [
      {
        tipo: "instagram",
        label: "@aws_sbg_unb",
        url: "https://www.instagram.com/aws_sbg_unb/",
      },
      {
        tipo: "linkedin",
        label: "AWS Student Builder Group at UnB",
        url: "https://www.linkedin.com/company/aws-sbg-unb",
      },
    ],
    puxePapo: [
      "Computação em nuvem e AWS",
      "Como começar a estudar cloud computing",
      "Projetos acadêmicos utilizando serviços AWS",
      "Workshops e atividades práticas",
      "Certificações, programas e oportunidades para estudantes",
      "Como construir e manter uma comunidade de tecnologia na universidade",
      "Mulheres na tecnologia e iniciativas de inclusão",
    ],
    oQueFazem:
      "Somos uma comunidade estudantil vinculada ao ecossistema AWS, formada por estudantes da Universidade de Brasília interessados em computação em nuvem, tecnologia e inovação. Promovemos encontros, workshops, atividades práticas e iniciativas de aprendizagem colaborativa para aproximar os estudantes das tecnologias e oportunidades da computação em nuvem. Também incentivamos o desenvolvimento de projetos, o compartilhamento de conhecimentos e a conexão entre estudantes e profissionais da área.",
    doQueSeOrgulham:
      "Temos orgulho da nossa comunidade e de tudo que construímos coletivamente. Desde o início das nossas atividades, realizamos encontros, workshops e iniciativas que aproximam os estudantes do universo da computação em nuvem. Também nos orgulhamos de transformar a curiosidade em aprendizado, o aprendizado em projetos e experiências individuais em conhecimento compartilhado.",
    oQueBuscam:
      "Buscamos conhecer outras comunidades de tecnologia do Distrito Federal, aproximar estudantes de diferentes instituições e construir conexões que possam resultar em parcerias e iniciativas conjuntas. Queremos trocar experiências sobre como organizar comunidades, compartilhar conhecimentos e desenvolver projetos, fortalecendo o ecossistema de tecnologia universitário do DF.",
    oQueOferecem:
      "Oferecemos workshops, encontros, atividades práticas e compartilhamento de materiais sobre computação em nuvem e tecnologias AWS. Podemos colaborar na organização de eventos, promover atividades introdutórias sobre cloud computing e compartilhar experiências sobre projetos e ferramentas do ecossistema AWS. Também estamos abertos a parcerias com outras comunidades para desenvolver iniciativas em conjunto.",
    comoParticipar:
      "Nossa comunidade é voltada principalmente aos estudantes interessados em tecnologia, computação em nuvem e inovação. Não é necessário ter experiência prévia com AWS para acompanhar nossas atividades: acreditamos que o aprendizado deve ser acessível também para quem está começando. As oportunidades de participação e colaboração são divulgadas pelos nossos canais de comunicação.",
    perguntasLivres: [
      {
        pergunta: "O que nos torna diferentes?",
        resposta:
          "Acreditamos que a tecnologia deve ser construída e compartilhada em comunidade. Nosso objetivo não é apenas apresentar ferramentas ou serviços da AWS, mas criar oportunidades para que estudantes explorem novas tecnologias, desenvolvam habilidades e transformem ideias em projetos. Buscamos aproximar o universo da computação em nuvem da realidade universitária, incentivando o aprendizado prático, a troca de experiências e a colaboração entre estudantes. Somos uma comunidade feita por estudantes e para estudantes, onde ninguém precisa chegar sabendo tudo para começar a construir.",
      },
      {
        pergunta: "Como entro em contato?",
        resposta:
          "Você pode entrar em contato conosco pelos nossos canais oficiais e acompanhar a divulgação dos próximos encontros e atividades. Estamos abertos a conversar com outras comunidades, conhecer projetos e construir parcerias!",
      },
    ],
  },

  // --- 10. AWS STUDENT BUILDER GROUP AT UCB ---
  {
    slug: "aws-sbg-ucb",
    nome: "AWS Student Builder Group at UCB",
    sigla: "AWS SBG UCB",
    ies: "Católica",
    logo: imgAwsUcb,
    logoFit: "cover",
    corDestaque: "#2596ff",
    resumoCurto:
      "Nós somos a comunidade oficial de estudantes da AWS (Amazon Web Services) dentro da Universidade Católica de Brasília. Nosso objetivo é desmistificar a computação em nuvem, ensinando a galera a projetar, hospedar e escalar aplicações reais usando a infraestrutura da AWS.",
    ondeEncontrar: [
      {
        tipo: "instagram",
        label: "@aws.ucb.sbg",
        url: "https://www.instagram.com/aws.ucb.sbg/",
      },
    ],
    puxePapo: [
      "Cloud Computing, DevOps e como hospedar seus projetos de graça (ou quase) com créditos de estudante",
      "Como iniciar sua jornada de certificações na AWS e se destacar no mercado",
      "Arquitetura de software e como preparar sua aplicação para receber milhares de acessos",
    ],
    oQueFazem:
      "Nós somos a comunidade oficial de estudantes da AWS (Amazon Web Services) dentro da Universidade Católica de Brasília. Nosso objetivo é desmistificar a computação em nuvem, ensinando a galera a projetar, hospedar e escalar aplicações reais usando a infraestrutura da AWS, desde o básico até arquiteturas mais avançadas.",
    doQueSeOrgulham:
      "De tirar o conhecimento teórico da sala de aula e colocar em servidores reais! Nos orgulhamos de construir uma comunidade onde estudantes perdem o medo de fazer deploy, aprendem a subir instâncias (EC2), criar bancos de dados na nuvem e preparar projetos que brilham em hackathons e chamam a atenção do mercado.",
    oQueBuscam:
      "Queremos conectar o nosso grupo com outras comunidades de tecnologia, desenvolvimento e dados do DF. Buscamos parceiros para organizar maratonas de código conjuntas, trocar ideias sobre arquitetura de software e atrair estudantes de outras instituições que queiram dar os primeiros passos no ecossistema AWS.",
    oQueOferecem:
      "Oferecemos workshops práticos sobre como iniciar na nuvem, mentorias sobre os serviços da AWS (para ajudar outras organizações a hospedarem seus próprios projetos) e uma galera super engajada, pronta para somar forças em hackathons, eventos e projetos de código aberto.",
    comoParticipar:
      'Nossos encontros, workshops e "coding dojos" acontecem principalmente no campus da UCB. Não precisa ser um expert para participar, basta ter vontade de aprender! A melhor forma de saber quando será o próximo encontro ou de levar a comunidade para um papo na sua faculdade é me chamando no LinkedIn ou colando na gente durante o evento.',
    perguntasLivres: [
      {
        pergunta: "Preciso ser um gênio da programação para participar do grupo?",
        resposta:
          "De jeito nenhum! O grupo existe justamente para aprendermos juntos. Nós recebemos desde o calouro que nunca viu uma linha de código até a galera que já programa, mas não sabe como colocar a aplicação no ar. Ensinamos o passo a passo, desde criar a conta na AWS até rodar sua primeira aplicação na nuvem.",
      },
    ],
  },

  // --- 11. EMBAIXADORES ESTUDANTIL GOOGLE ---
  {
    slug: "embaixadores-google",
    nome: "Embaixadores Estudantil Google – Universidade Católica de Brasília (UCB)",
    sigla: "Embaixadores Google (UCB)",
    ies: "Católica",
    logo: imgGoogleUcb,
    logoFit: "cover",
    corDestaque: "#4285f4",
    resumoCurto:
      "Nós levamos o projeto de Embaixadores Estudantis do Google para dentro da Universidade Católica de Brasília (UCB)! Nosso foco principal hoje é a educação impulsionada por Inteligência Artificial: ensinamos os alunos a utilizarem o Google Gemini como um aliado poderoso para otimizar os estudos, organizar pesquisas acadêmicas e aumentar a produtividade na faculdade.",
    ondeEncontrar: [
      {
        tipo: "whatsapp",
        label: "Comunidade no WhatsApp",
        url: "https://chat.whatsapp.com/FL048GA8saU14McuLUe3Nu",
      },
    ],
    puxePapo: [
      "Como usar o Google Gemini na prática para hackear sua rotina de estudos",
      "Como funciona o programa de Embaixadores Estudantis do Google",
      "Como podemos levar nosso grupo de estudos e oficinas de IA para a sua universidade",
    ],
    oQueFazem:
      "Nós levamos o projeto de Embaixadores Estudantis do Google para dentro das universidades! Nosso foco principal hoje é a educação impulsionada por Inteligência Artificial: ensinamos os alunos a utilizarem o Google Gemini como um aliado poderoso para otimizar os estudos, organizar pesquisas acadêmicas e aumentar a produtividade na faculdade.",
    doQueSeOrgulham:
      "Do nosso grupo de estudos! Temos muito orgulho de manter um espaço ativo e engajado onde a galera se reúne para colocar a mão na massa com o Gemini. Ver os estudantes trocando ideias, aprendendo a criar os melhores prompts e ajudando uns aos outros a usar a IA para aprender mais rápido (e melhor) é a nossa maior conquista.",
    oQueBuscam:
      "Buscamos construir pontes com centros acadêmicos, atléticas e outras comunidades de tecnologia do DF para expandir esse projeto. Queremos levar nossas oficinas de Gemini e nossos grupos de estudos para outras universidades e encontrar parceiros que queiram democratizar o uso da IA na educação.",
    oQueOferecem:
      "Oferecemos a facilitação de workshops práticos sobre como usar o Gemini nos estudos, mentorias sobre o programa de Embaixadores do Google, além de toda a nossa energia e metodologia para ajudar a sua instituição a montar grupos de estudo focados em inovação e produtividade acadêmica.",
    comoParticipar:
      "Nossas reuniões do grupo de estudos rolam principalmente no campus da UCB, mas estamos em expansão! Todo mundo é bem-vindo. A melhor forma de ficar sabendo das datas, colar com a gente ou convidar o projeto para a sua faculdade é me chamar no LinkedIn ou trocar uma ideia presencialmente.",
    perguntasLivres: [
      {
        pergunta:
          "O que é preciso para ser um Embaixador Google e atuar com vocês?",
        resposta:
          "Muito mais do que saber de tecnologia, é preciso ter vontade de aprender e, principalmente, de compartilhar. O papel do embaixador é conectar pessoas, democratizar o acesso à informação e facilitar o uso de ferramentas que mudam o dia a dia das pessoas. Se você tem paixão por educação e comunidade, esse é o caminho!",
      },
    ],
  },

  // --- 12. IBM Z STUDENT AMBASSADOR ---
  {
    slug: "ibm-z-ambassador",
    nome: "IBM Z Student Ambassador – IBM",
    sigla: "IBM Z Ambassador",
    ies: "CEUB",
    logo: imgIbmzCeub,
    logoFit: "cover",
    corDestaque: "#0f62fe",
    resumoCurto:
      "Somos uma iniciativa de embaixadores estudantis da IBM que busca aproximar estudantes do universo da tecnologia, especialmente do ecossistema IBM Z e dos mainframes.",
    ondeEncontrar: [
      {
        tipo: "site",
        label: "IBM",
        url: "https://www.ibm.com/",
      },
      {
        tipo: "site",
        label: "IBM Z",
        url: "https://www.ibm.com/products/z",
      },
      {
        tipo: "linkedin",
        label: "IBM Z Student Ambassador",
        url: "https://www.linkedin.com/company/ibm-z-student-ambassador/",
      },
    ],
    puxePapo: [
      "O universo dos mainframes e sua importância no mercado atual",
      "Oportunidades de carreira, capacitação e certificações na IBM",
    ],
    oQueFazem:
      "Somos uma iniciativa de embaixadores estudantis da IBM que busca aproximar estudantes do universo da tecnologia, especialmente do ecossistema IBM Z e dos mainframes. Promovemos a divulgação de oportunidades, eventos, webinars, conteúdos educativos e iniciativas que ajudam estudantes a conhecer novas tecnologias e possibilidades de carreira no setor.",
    doQueSeOrgulham:
      "Da oportunidade de conectar estudantes a uma das maiores empresas de tecnologia do mundo e tornar assuntos que muitas vezes parecem distantes ou complexos mais acessíveis. Como embaixadora, tenho orgulho de incentivar outras pessoas a explorarem o universo da tecnologia, participarem de eventos e descobrirem novas possibilidades profissionais.",
    oQueBuscam:
      "Buscamos conhecer outras comunidades e organizações de tecnologia do Distrito Federal, criar conexões com estudantes e lideranças, estabelecer parcerias para eventos e iniciativas educacionais e ampliar a divulgação das oportunidades oferecidas pela IBM.",
    oQueOferecem:
      "Oferecemos divulgação de eventos, webinars, oportunidades educacionais e iniciativas da IBM, além de conteúdos sobre tecnologia, mainframes, inovação e carreira. Também podemos colaborar na organização e divulgação de eventos, aproximando comunidades estudantis do ecossistema IBM.",
    comoParticipar:
      "Não é necessário fazer parte da IBM para participar das iniciativas divulgadas. Estudantes de diferentes cursos e instituições podem acompanhar os eventos, webinars, cursos e oportunidades educacionais. Basta ficar de olho nas divulgações e realizar as inscrições nas atividades de interesse.",
    perguntasLivres: [
      {
        pergunta: "Mainframe ainda é relevante em 2026?",
        resposta:
          "Sim! Apesar de ser uma tecnologia que existe há décadas, os mainframes continuam sendo fundamentais para operações de grandes bancos, empresas e instituições ao redor do mundo. Eles evoluíram e hoje estão conectados a temas como inteligência artificial, segurança, computação em nuvem e processamento de grandes volumes de dados. É um universo com muitas oportunidades para quem está começando na tecnologia.",
      },
    ],
  },

  // --- 13. DIRETÓRIO CENTRAL DOS ESTUDANTES DO CEUB (DCE MOVA-SE) ---
  {
    slug: "dce-mova-se",
    nome: "Diretório Central dos Estudantes do CEUB (DCE Mova-se)",
    sigla: "DCE Mova-se",
    ies: "CEUB",
    logo: imgDce,
    corDestaque: "#74c263",
    resumoCurto:
      "Somos a entidade responsável pela representação dos estudantes do CEUB. Atuamos na defesa dos interesses da comunidade acadêmica, na interlocução com a instituição e na construção de melhorias para a experiência universitária.",
    ondeEncontrar: [
      {
        tipo: "instagram",
        label: "@dcemovase",
        url: "https://www.instagram.com/dcemovase/",
      },
    ],
    puxePapo: [
      "Como aproximar os estudantes das organizações e aumentar o engajamento universitário",
      "Como transformar demandas da comunidade acadêmica em projetos e resultados concretos",
      "Como construir parcerias entre organizações estudantis e desenvolver eventos de impacto",
    ],
    oQueFazem:
      "Somos a entidade responsável pela representação dos estudantes do CEUB. Atuamos na defesa dos interesses da comunidade acadêmica, na interlocução com a instituição e na construção de melhorias para a experiência universitária. Também promovemos eventos, palestras, atividades culturais, projetos de integração e oportunidades de desenvolvimento acadêmico e profissional.",
    doQueSeOrgulham:
      "Orgulhamo-nos de transformar ideias e demandas dos estudantes em iniciativas concretas. Entre nossas conquistas, destacamos mudanças nas diretrizes do CEUB para aceitar atestados inferiores a 15 dias e para preservar a bolsa de estudantes que reprovam. Também temos orgulho da realização de eventos acadêmicos, como o Júri Simulado integrado ao Congresso Internacional de Direito do CEUB, e de ações de integração e conscientização, como o <strong>Jovens Rumo ao Futuro</strong>, iniciativa em que levamos um pouco da vida acadêmica a escolas públicas e organizações que acolhem adolescentes em situação de vulnerabilidade, incentivando-os a buscar o ensino superior.",
    oQueBuscam:
      "Buscamos estabelecer conexões com outras organizações, conhecer iniciativas inspiradoras e construir parcerias que ultrapassem os limites da nossa comunidade acadêmica. Queremos trocar experiências sobre gestão, mobilização, comunicação e organização de projetos, além de identificar oportunidades de colaboração e desenvolver iniciativas conjuntas.",
    oQueOferecem:
      "Oferecemos acesso e diálogo com a comunidade acadêmica do CEUB, apoio na divulgação de iniciativas, mobilização estudantil e articulação institucional. Também temos interesse em construir eventos, palestras, projetos e campanhas em parceria, compartilhando conhecimentos, experiências e equipes para transformar boas ideias em ações concretas.",
    comoParticipar:
      "As atividades e eventos divulgados pelo DCE são abertos à participação dos estudantes, conforme as condições de cada iniciativa. Para acompanhar a programação, participar das ações ou manifestar interesse em integrar a equipe, basta acompanhar o Instagram <strong>@dcemovase</strong> e entrar em contato pelos canais oficiais. As oportunidades de participação na equipe são divulgadas conforme a necessidade e a abertura de novos processos.",
    perguntasLivres: [
      {
        pergunta:
          "Como fazer com que uma organização continue relevante e próxima das pessoas que representa?",
        resposta:
          "Acreditamos que o primeiro passo é manter uma escuta ativa e constante. Uma organização precisa compreender as necessidades do seu público, construir iniciativas a partir delas e demonstrar, na prática, que sua atuação produz resultados. Representatividade não se constrói apenas com presença institucional, mas com participação, diálogo e entrega.",
      },
    ],
  },

  // --- 14. CENTRO ACADÊMICO DE TECNOLOGIA DO CEUB – CATECH ---
  {
    slug: "catech-ceub",
    nome: "Centro Acadêmico de Tecnologia do CEUB – CATECH",
    sigla: "CATECH",
    ies: "CEUB",
    logo: imgCatech,
    logoFit: "cover",
    corDestaque: "#5174fc",
    resumoCurto:
      "Somos o Centro Acadêmico de Tecnologia do CEUB, com mulheres ocupando a maioria dos cargos da Diretoria! Nosso objetivo é conectar estudantes, aproximar o meio acadêmico do mercado e criar oportunidades que vão além da sala de aula.",
    ondeEncontrar: [
      {
        tipo: "instagram",
        label: "@catech_ceub",
        url: "https://www.instagram.com/catech_ceub/",
      },
    ],
    puxePapo: [
      "Carreira e oportunidades para quem está começando na tecnologia",
      "Como transformar ideias em projetos e tirar iniciativas do papel",
      "Networking que realmente gera oportunidades",
    ],
    oQueFazem:
      "Somos o Centro Acadêmico de Tecnologia do CEUB, com mulheres ocupando a maioria dos cargos da Diretoria! Nosso objetivo é conectar estudantes, aproximar o meio acadêmico do mercado e criar oportunidades que vão além da sala de aula. Organizamos eventos, oficinas, capacitações, projetos e iniciativas para incentivar o desenvolvimento profissional e a troca de experiências.",
    doQueSeOrgulham:
      "Da comunidade que estamos construindo e das oportunidades que conseguimos tirar do papel. Um dos nossos maiores marcos foi a realização do nosso primeiro Ideathon, em parceria com empresas e instituições, que contou inclusive com uma equipe do CEUB conquistando o terceiro lugar!",
    oQueBuscam:
      "É nossa primeira participação como comunidade e queremos aproveitar para conhecer pessoas, trocar experiências e apresentar um pouco do que estamos construindo. Buscamos conexões que possam virar parcerias, projetos e oportunidades reais entre as comunidades de tecnologia de Brasília.",
    oQueOferecem:
      "Oferecemos apoio na organização de eventos, mentorias, colaboração em projetos e acesso à nossa comunidade acadêmica. Temos canais de divulgação no Instagram e grupos de WhatsApp que alcançam mais de 5 mil estudantes, o que também permite ajudar outras iniciativas a chegarem a novos públicos.",
    comoParticipar:
      "Para fazer parte da Diretoria é necessário participar dos nossos processos seletivos, que geralmente acontecem no início de cada semestre. É exclusiva para estudantes do CEUB.<br/><br/>Mas para trocar ideias ou construir algo com a gente não precisa ser da instituição. Estamos abertos a parcerias e iniciativas conjuntas. Para participar de atividades presenciais dentro da instituição, basta entrar em contato antecipadamente para verificarmos a autorização de acesso.",
    perguntasLivres: [
      {
        pergunta:
          "Tenho uma ideia de projeto, evento ou parceria. Posso construir isso com vocês?",
        resposta:
          "Com certeza! Acreditamos que ideias ficam melhores ainda quando são construídas em conjunto. Adoraríamos conversar com outras comunidades, organizações e pessoas que queiram tirar projetos do papel, organizar eventos, compartilhar conhecimento ou criar oportunidades para estudantes.",
      },
      {
        pergunta: "O que eu ganho ao me aproximar do CATECH?",
        resposta:
          "Além de conhecer pessoas com interesses em tecnologia, você pode encontrar oportunidades para aprender na prática, participar de projetos, desenvolver habilidades, ampliar seu networking e descobrir caminhos no mercado. O CATECH é um espaço onde as pessoas acompanham oportunidades, mas também ajudam a criá-las.",
      },
    ],
  },

  // --- 15. PROJETOS CONSULTORIA INTEGRADA – PCI (AO FIM) ---
  {
    slug: "pci-ceub",
    nome: "Projetos Consultoria Integrada – PCI",
    sigla: "PCI",
    ies: "CEUB",
    logo: imgPci,
    logoFit: "contain",
    corDestaque: "#c8201d",
    corFundoLogo: "#ffffff",
    temPagina: false,
    resumoCurto: "",
    ondeEncontrar: [
      {
        tipo: "site",
        label: "projetosintegrada.com.br",
        url: "https://projetosintegrada.com.br/",
      },
      {
        tipo: "instagram",
        label: "@projetosintegrada",
        url: "https://www.instagram.com/projetosintegrada/",
      },
    ],
    puxePapo: [],
    oQueFazem: "",
    doQueSeOrgulham: "",
    oQueBuscam: "",
    oQueOferecem: "",
    comoParticipar: "",
    perguntasLivres: [],
  },

  // --- 16. MENINAS.COMP (AO FIM) ---
  {
    slug: "meninas-comp",
    nome: "Meninas.comp",
    sigla: "Meninas.comp",
    ies: "UnB",
    logo: imgMeninasComp,
    logoFit: "contain",
    corDestaque: "#ec4899",
    corFundoLogo: "#ffffff",
    temPagina: false,
    resumoCurto: "",
    ondeEncontrar: [
      {
        tipo: "site",
        label: "meninas.cic.unb.br",
        url: "https://www.meninas.cic.unb.br/",
      },
      {
        tipo: "instagram",
        label: "@meninas.comp",
        url: "https://www.instagram.com/meninas.comp",
      },
    ],
    puxePapo: [],
    oQueFazem: "",
    doQueSeOrgulham: "",
    oQueBuscam: "",
    oQueOferecem: "",
    comoParticipar: "",
    perguntasLivres: [],
  },

  // --- 17. SÍNTESE LABS (AO FIM) ---
  {
    slug: "sintese-labs",
    nome: "Síntese Labs",
    sigla: "Síntese Labs",
    ies: "",
    logo: imgSinteseLabs,
    logoFit: "contain",
    corDestaque: "#b45309",
    corFundoLogo: "#f5f3ef",
    temPagina: false,
    resumoCurto: "",
    ondeEncontrar: [
      {
        tipo: "site",
        label: "sinteselabs.com",
        url: "https://sinteselabs.com/",
      },
      {
        tipo: "instagram",
        label: "@sintese.labs",
        url: "https://www.instagram.com/sintese.labs/",
      },
    ],
    puxePapo: [],
    oQueFazem: "",
    doQueSeOrgulham: "",
    oQueBuscam: "",
    oQueOferecem: "",
    comoParticipar: "",
    perguntasLivres: [],
  },

  // --- 18. CALANGO HACKER CLUBE (AO FIM) ---
  {
    slug: "calango-club",
    nome: "Calango Hacker Clube",
    sigla: "Calango Hacker Clube",
    ies: "",
    logo: imgCalangohc,
    logoFit: "contain",
    corDestaque: "#16a34a",
    corFundoLogo: "#ffffff",
    temPagina: false,
    resumoCurto: "",
    ondeEncontrar: [
      {
        tipo: "site",
        label: "calango.club",
        url: "https://calango.club/",
      },
      {
        tipo: "telegram",
        label: "@calangohc",
        url: "https://t.me/calangohc",
      },
    ],
    puxePapo: [],
    oQueFazem: "",
    doQueSeOrgulham: "",
    oQueBuscam: "",
    oQueOferecem: "",
    comoParticipar: "",
    perguntasLivres: [],
  },
];

/** Lista única e ordenada das IES presentes. */
export const iesMergeData = [
  ...new Set(organizacoesMergeData.map((o) => o.ies).filter(Boolean)),
];
