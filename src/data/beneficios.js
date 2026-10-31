// Dados da página CEUBenefícios (/beneficios)
//
// Como adicionar imagens:
//   1. Coloque o arquivo em src/assets/beneficios/
//   2. Importe-o aqui: import imgPic from "@assets/beneficios/pic.jpg";
//   3. Preencha o campo `imagem` do item (ex.: imagem: imgPic)
//   Enquanto `imagem` for null, um placeholder com ícone é exibido.
//
// Ícones disponíveis (ver BeneficioIcon.astro):
//   Acadêmicos: flask, globe, book, ticket, sparkles
//   Parceiros:  github, jetbrains, azure, google-one, figma, adobe, spotify, youtube, dell
//   Cursos:     briefcase, network, cloud, graduation

export const categoriasBeneficios = [
  { id: "todos", label: "Todos" },
  { id: "tecnologia", label: "Tecnologia" },
  { id: "design", label: "Design" },
  { id: "entretenimento", label: "Entretenimento" },
  { id: "compras", label: "Compras" },
];

// Oportunidades oferecidas pelo próprio CEUB (ou vinculadas à condição de aluno)
export const oportunidadesCeub = [
  {
    id: "pic",
    secao: "Acadêmico e Pesquisa",
    titulo: "Programa de Iniciação Científica (PIC)",
    subtitulo: "Bolsas CNPq/CEUB",
    descricao:
      "Desenvolva projetos de pesquisa orientados por professores doutores e mestres. Publique artigos, participe de congressos e concorra a bolsas de estudo do CNPq ou do CEUB.",
    destaques: ["Bolsas de estudo", "Publicação de artigos", "Congressos"],
    icone: "flask",
    imagem: null,
    link: "https://www.uniceub.br/pic",
    cta: "Conhecer o PIC",
  },
  {
    id: "mobilidade",
    secao: "Internacionalização",
    titulo: "Intercâmbio e Mobilidade Acadêmica",
    subtitulo: "Programa internacional",
    descricao:
      "Curse um ou dois semestres no exterior em universidades parceiras, como a Mount Royal University (Canadá) e instituições da Europa e América do Norte, com equivalência de disciplinas.",
    destaques: [
      "1 ou 2 semestres",
      "Equivalência de disciplinas",
      "Experiência intercultural",
    ],
    icone: "globe",
    imagem: null,
    link: "https://www.uniceub.br/mobilidade",
    cta: "Ver programa",
  },
  {
    id: "biblioteca",
    secao: "Biblioteca",
    titulo: "Bibliotecas Digitais e Bases Científicas",
    subtitulo: "Acesso remoto e ilimitado",
    descricao:
      "Milhares de e-books e bases científicas de alto impacto, como Minha Biblioteca, EBSCO, Revista dos Tribunais Online e IEEE. Além disso, salas na biblioteca para estudo em grupo.",
    destaques: [
      "Minha Biblioteca",
      "EBSCO",
      "IEEE",
      "Salas de estudo em grupo",
    ],
    icone: "book",
    imagem: null,
    link: null,
    cta: null,
  },
  {
    id: "fora-do-campus",
    secao: "Fora do Campus",
    titulo: "Passe Livre e Meia-Entrada",
    subtitulo: "Mobilidade e cultura",
    descricao:
      "Orientação e validação de documentos para solicitar o Passe Livre Estudantil junto ao BRB Mobilidade, além do direito à meia-entrada em eventos culturais, cinemas e shows.",
    destaques: ["Passe Livre Estudantil", "Meia-entrada"],
    icone: "ticket",
    imagem: null,
    link: "https://brbnovo.brb.com.br/mobilidade/cartao-estudantil",
    cta: "Cartão estudantil BRB",
  },
];

// Assinaturas e descontos de parceiros externos
export const assinaturasEstudante = [
  {
    id: "github",
    nome: "GitHub Pro",
    empresa: "GitHub",
    tipo: "Assinatura para estudantes",
    categoria: "tecnologia",
    destaque: "Grátis",
    descricao:
      "Repositórios ilimitados, armazenamento aumentado, GitHub Codespaces e GitHub Copilot Student.",
    icone: "github",
    cor: "#24292f",
    imagem: null,
    link: "https://github.com/education",
  },
  {
    id: "jetbrains",
    nome: "JetBrains Student Pack",
    empresa: "JetBrains",
    tipo: "Assinatura para estudantes",
    categoria: "tecnologia",
    destaque: "10 IDEs",
    descricao:
      "Acesso a 10 IDEs JetBrains e a agentes de IA como o Claude Code.",
    icone: "jetbrains",
    cor: "#7b2ff7",
    imagem: null,
    link: "https://www.jetbrains.com/academy/student-pack",
  },
  {
    id: "azure",
    nome: "Azure for Students",
    empresa: "Microsoft",
    tipo: "Assinatura para universitários",
    categoria: "tecnologia",
    destaque: "US$ 100 em créditos",
    descricao:
      "Crédito de US$ 100 para usar nos serviços do Azure dentro de 12 meses.",
    icone: "azure",
    cor: "#0078d4",
    imagem: null,
    link: "https://azure.microsoft.com/pt-br/free/students",
  },
  {
    id: "google-one",
    nome: "Planos Google One",
    empresa: "Google",
    tipo: "Período gratuito e/ou desconto",
    categoria: "tecnologia",
    destaque: "12 meses grátis",
    descricao:
      "Teste grátis de 12 meses (às vezes até 15) do Google AI Plus e desconto no plano Google AI Pro.",
    icone: "google-one",
    cor: "#1a73e8",
    imagem: null,
    link: "https://gemini.google/br/students/?hl=pt-BR",
  },
  {
    id: "figma",
    nome: "Figma for Education",
    empresa: "Figma",
    tipo: "Assinatura para estudantes",
    categoria: "design",
    destaque: "Plano Profissional",
    descricao:
      "Todas as ferramentas do plano Profissional, com limites de uso ampliados para ferramentas de IA.",
    icone: "figma",
    cor: "#a259ff",
    imagem: null,
    link: "https://www.figma.com/education",
  },
  {
    id: "adobe",
    nome: "Creative Cloud Pro",
    empresa: "Adobe",
    tipo: "Assinatura para estudantes",
    categoria: "design",
    destaque: "Desconto no 1º ano",
    descricao: "Desconto no primeiro ano do plano anual do Creative Cloud Pro.",
    icone: "adobe",
    cor: "#da1f26",
    imagem: null,
    link: "https://www.adobe.com/br/education/students/creativecloud.html",
  },
  {
    id: "spotify",
    nome: "Spotify Universitário",
    empresa: "Spotify",
    tipo: "Assinatura para universitários",
    categoria: "entretenimento",
    destaque: "R$ 12,90/mês",
    descricao: "Spotify Premium com preço reduzido para universitários.",
    icone: "spotify",
    cor: "#1db954",
    imagem: null,
    link: "https://www.spotify.com/br-pt/student",
  },
  {
    id: "youtube",
    nome: "YouTube Premium",
    empresa: "YouTube",
    tipo: "Assinatura para estudantes",
    categoria: "entretenimento",
    destaque: "R$ 16,90/mês",
    descricao: "YouTube Premium com preço reduzido para estudantes.",
    icone: "youtube",
    cor: "#ff0033",
    imagem: null,
    link: "https://www.youtube.com/premium/student",
  },
  {
    id: "dell",
    nome: "Desconto na Dell",
    empresa: "Dell",
    tipo: "Cupom de desconto para estudantes",
    categoria: "compras",
    destaque: "Cupons ocasionais",
    descricao:
      "Descontos ocasionais para estudantes no site de eletrônicos da Dell.",
    icone: "dell",
    cor: "#007db8",
    imagem: null,
    link: "https://www.dell.com/pt-br/lp/students",
  },
];

// Carreira: programa institucional de estágio/emprego (card em destaque)
export const ceubCarreiras = {
  id: "ceub-carreiras",
  nome: "CEUB Carreiras",
  tipo: "Programa de estágio e emprego",
  descricao:
    "Programa do CEUB que conecta estudantes a vagas de estágio e emprego em empresas parceiras, apoiando a entrada e o crescimento no mercado de trabalho.",
  destaques: ["Vagas de estágio", "Oportunidades de emprego", "Empresas parceiras"],
  link: "https://www.uniceub.br/ceub-carreiras",
  cta: "Conhecer o CEUB Carreiras",
};

// Plataformas de ensino parceiras
export const plataformasEnsino = [
  {
    id: "cisco-netacad",
    nome: "Cisco Networking Academy",
    empresa: "Cisco",
    destaque: "Cursos e certificações",
    descricao: "Cursos de redes, cibersegurança, programação e IA.",
    topicos: ["Redes", "Cibersegurança", "Programação", "IA"],
    icone: "cisco",
    cor: "#049fd9",
    link: "https://www.netacad.com/",
  },
  {
    id: "aws-educate",
    nome: "AWS Educate",
    empresa: "Amazon Web Services",
    destaque: "Cursos e laboratórios",
    descricao: "Cursos, laboratórios práticos, badges e mural de vagas.",
    topicos: ["Cloud", "Labs práticos", "Badges", "Vagas"],
    icone: "aws",
    cor: "#ff9900",
    link: "https://aws.amazon.com/education/awseducate/",
  },
  {
    id: "ibm-skillsbuild",
    nome: "IBM SkillsBuild",
    empresa: "IBM",
    destaque: "Trilhas de capacitação",
    descricao: "Trilhas de IA, dados, nuvem e segurança.",
    topicos: ["IA", "Dados", "Nuvem", "Segurança"],
    icone: "ibm",
    cor: "#0f62fe",
    link: "https://skillsbuild.org/",
  },
];
