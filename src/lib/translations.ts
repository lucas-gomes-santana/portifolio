import { link } from "fs";

export const translations = {
  "pt-BR": {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Lucas Gomes",
      role: "Desenvolvedor Full Stack",
      description: "Transformando ideias em experiências digitais incríveis",
    },
    about: {
      title: "Sobre Mim",
      text: "Sou Desenvolvedor de Software autodidata e estou buscando minha primeira oportunidade na área de tecnologia. Trabalho com sites, landing pages, APIs REST e outros tipos de aplicações. Tenho experiência com projetos freelancer, projetos acadêmicos e projetos open source no GitHub, contribuindo atualmente nos repositórios do VsCode e Vite.",
      services: "Serviços",
      servicesList: [
        "Prototipação de novas aplicações",
        "Desenvolvimento de aplicações web completas",
        "Criação e testes de APIs RESTful",
        "Desenvolvimento de interfaces responsivas",
        "Auxílio na modelagem de bancos de dados",
        "Manuntenção em projetos já existentes ou legados",
      ],
      downloadCV: "Baixar Currículo",
    },
    projects: {
      title: "Projetos",
      viewMore: "Ver Mais",
      viewLess: "Ver Menos",
      viewProject: "Ver Projeto",
      tools: "Ferramentas",
      private: "Projeto privado",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Ferramentas que uso",
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos trabalhar juntos?",
      name: "Nome Completo",
      email: "Email",
      phone: "Telefone",
      message: "Mensagem",
      send: "Enviar Mensagem",
      namePlaceholder: "Seu nome completo",
      emailPlaceholder: "seu@email.com",
      phonePlaceholder: "(00) 00000-0000",
      messagePlaceholder: "Escreva sua mensagem aqui...",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I am",
      name: "Lucas Gomes",
      role: "Full Stack Developer",
      description: "Transforming ideas into amazing digital experiences",
    },
    about: {
      title: "About Me",
      text: "I am a self-taught Software Developer seeking my first opportunity in the technology field. I work with websites, landing pages, REST APIs, and other types of applications. I have experience with freelance projects, academic projects, and open source projects on GitHub, currently contributing to the VsCode and Vite repositories.",
      services: "Services",
      servicesList: [
        "Prototyping new applications",
        "Complete web application development",
        "RESTful API creation and testing",
        "Responsive interface development",
        "Database modeling assistance",
        "Maintenance of existing or legacy projects",
      ],
      downloadCV: "Download Resume",
    },
    projects: {
      title: "Projects",
      viewMore: "View More",
      viewLess: "View Less",
      viewProject: "View Project",
      tools: "Tools",
      private: "Private project",
    },
    skills: {
      title: "Skills",
      subtitle: "Tools that I use",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's work together?",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send Message",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "+1 (000) 000-0000",
      messagePlaceholder: "Write your message here...",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export const projectsData = {
  "pt-BR": [
    {
      title: "Site da PeuCar Automotivos",
      description:
        "Projeto freelance que desenvolvi para um pequeno negócio de oficina de automóveis.",
      tools: ["HTML5", "Sass", "Javascript", "NodeJs"],
      image: "/PeuCar-Website.png",
      link: "https://peucar-automotivos-ipira.vercel.app/",
    },
    {
      title: "Curriculum Generator",
      description:
        "Aplicativo web que foi feito para simular um MVP Micro-Saas. Permite ao usuário criar um currículo personalizado com base em suas informações profissionais.",
      tools: ["React", "JavaScript", "CSS3"],
      image: "Curriculum-Generator.png",
      link: "https://curriculum-generator-rho.vercel.app/redirect-page",
    },
    {
      title: "C.E.R.F (Cadastro Escolar com Reconhecimento Facial)",
      description:
        "Sistema de cadastro e autenticação biométrica facial para escolas. Possui o objetivo de reforçar a segurança bloqueando acesso não autorizado.",
      tools: ["React", "Javascript", "Typescript", "Express", "TailwindCSS"],
      image: "CERF.png",
      link: "https://github.com/lucas-gomes-santana/Reconhecimento-Facial-Para-Escolas",
      isPrivate: false, // Matendo lógica de projeto privado caso haja mudança futura
    },
    {
      title: "Curriculum Generator Saas Version",
      description:
        "Versão aprimorada do projeto Curriculum Generator, com edição de currículos salvos no app, suporte aos clientes, assinatura de planos e muito mais.",
      tools: ["NextJs", "Typescript", "TailwindCSS", "MongoDB"],
      image: "CG-Saas-Version.png",
      link: "https://www.curriculumgenerator.com.br/",
    },
    {
      title: "Jogo de Progressão Aritmética",
      description:
        "Jogo matemático simples que aborda o assunto progressão aritmética. Foi desenvolvido para apresentação em um trabalho escolar.",
      tools: ["HTML5", "CSS3", "Javascript"],
      image: "Progressao-Aritmetica.png",
      link: "https://jogo-matematico-de-progressao-aritm.vercel.app/",
    },
    {
      title: "Landing Page da FURIA",
      description:
        "Desafio técnico que realizei ao participar de um processo seletivo da organização de E-sports brasileira FURIA.",
      tools: ["React", "Javascript"],
      image: "ChatBot-da-FURIA.png",
      link: "https://landing-page-para-a-furia.vercel.app/",
    },
    {
      title: "Mulheres em Movimento",
      description:
        "Site para ONG sem fins lucrativos que presta assistência psicológica, jurídica e outros serviços para mulheres em situação de vulnerabilidade",
      tools: ["NextJs", "TailwindCSS", "Typescript"],
      link: "https://www.mulheresemmovimento.org.br/",
      image: "mulheres_em_movimento.jpg",
    },
    {
      title: "Face-api.js Cosine Similarity version",
      description:
        "Versão modificada por mim do projeto face-api.js desenvolvido originalmente por Vincent Mühler. A modificação é usada no projeto C.E.R.F",
      link: "https://github.com/lucas-gomes-santana/face-api.js-cosine-similarity",
      tools: ["Typescript", "TensorFlow.Js"],
      image: "face-api-js.jpg",
    },
  ],
  en: [
    {
      title: "PeuCar Automotive Website",
      description:
        "Freelance project I developed for a small automotive workshop business.",
      tools: ["HTML5", "Sass", "Javascript", "NodeJs"],
      image: "/PeuCar-Website.png",
      link: "https://peucar-automotivos-ipira.vercel.app/",
    },
    {
      title: "Curriculum Generator",
      description:
        "Web application made to simulate a Micro-Saas MVP. Allows users to create a personalized resume based on their professional information.",
      tools: ["React", "JavaScript", "CSS3"],
      image: "Curriculum-Generator.png",
      link: "https://curriculum-generator-rho.vercel.app/redirect-page",
    },
    {
      title: "C.E.R.F (School Registration with Facial Recognition)",
      description:
        "Facial biometric registration and authentication system for schools. Aims to enhance security by blocking unauthorized access.",
      tools: ["React", "Javascript", "Typescript", "Express", "TailwindCSS"],
      image: "CERF.png",
      link: "https://github.com/lucas-gomes-santana/Reconhecimento-Facial-Para-Escolas",
      isPrivate: false, // Matendo lógica de projeto privado caso haja mudança futura
    },
    {
      title: "Curriculum Generator Saas Version",
      description:
        "Enhanced version of the Curriculum Generator project, with editing of saved resumes in the app, customer support, plan subscriptions and much more.",
      tools: ["NextJs", "Typescript", "TailwindCSS", "MongoDB"],
      image: "CG-Saas-Version.png",
      link: "https://www.curriculumgenerator.com.br/",
    },
    {
      title: "Arithmetic Progression Game",
      description:
        "Simple math game that addresses the topic of arithmetic progression. It was developed for presentation in a school project.",
      tools: ["HTML5", "CSS3", "Javascript"],
      image: "Progressao-Aritmetica.png",
      link: "https://jogo-matematico-de-progressao-aritm.vercel.app/",
    },
    {
      title: "FURIA Landing Page",
      description:
        "Technical challenge I completed while participating in a selection process for the Brazilian E-sports organization FURIA.",
      tools: ["React", "Javascript"],
      image: "ChatBot-da-FURIA.png",
      link: "https://landing-page-para-a-furia.vercel.app/",
    },
    {
      title: "Women in Motion",
      description:
        "Website for a non-profit NGO that provides psychological, legal, and other services to women in vulnerable situations",
      tools: ["NextJs", "TailwindCSS", "Typescript"],
      link: "https://www.mulheresemmovimento.org.br/",
      image: "mulheres_em_movimento.jpg",
    },
    {
      title: "Face-api.js Cosine Similarity version",
      description:
        "A version of the face-api.js project—originally developed by Vincent Mühler that I have modified. This modification is used in my C.E.R.F. project.",
      link: "https://github.com/lucas-gomes-santana/face-api.js-cosine-similarity",
      tools: ["Typescript", "TensorFlow.Js"],
      image: "face-api-js.jpg",
    },
  ],
};
