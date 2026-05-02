export type Language = "pt" | "en";

export interface TranslationKeys {
  nav: { home: string; about: string; stack: string; projects: string };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    ctaProjects: string;
    ctaStack: string;
  };
  about: {
    tag: string;
    titlePart1: string;
    titleHighlight: string;
    paragraph1: string;
    paragraph2: string;
    experiences: {
      period: string;
      role: string;
      company: string;
      description: string;
    }[];
  };
  stack: {
    tag: string;
    title: string;
    groups: { title: string; tags: string[] }[];
  };
  projects: {
    tag: string;
    title: string;
    items: { title: string; description: string; status: string }[];
  };
  contact: {
    title: string;
    description: string;
    networks: string;
    location: string;
    locationValue: string;
    footer: string;
  };
}

export const translations: Record<Language, TranslationKeys> = {
  pt: {
    nav: {
      home: "INÍCIO",
      about: "SOBRE",
      stack: "STACK",
      projects: "PROJETOS",
    },
    hero: {
      badge: "Disponível para novos projetos",
      titlePart1: "Construindo",
      titleHighlight: "backends resilientes",
      titlePart2: "com a precisão de uma interface refinada.",
      subtitle:
        "Desenvolvedor Fullstack & Especialista DevOps focado na ponte entre lógica distribuída complexa e experiências de usuário polidas.",
      ctaProjects: "VER PROJETOS",
      ctaStack: "VER STACK",
    },
    about: {
      tag: "[ Sobre ]",
      titlePart1: "Engenheiro focado em sistemas que",
      titleHighlight: "funcionam, escalam e duram.",
      paragraph1:
        "Atuo como desenvolvedor fullstack e DevOps, conectando produto e infraestrutura. Tenho experiência em arquitetar APIs, automatizar deploys e modelar interfaces que respeitam o usuário.",
      paragraph2:
        "Acredito em código simples, observabilidade desde o dia um e em iterar rápido sem comprometer a base.",
      experiences: [
        {
          period: "2026 — PRESENTE",
          role: "Desenvolvedor Fullstack & DevOps",
          company: "Seed a Bit Tecnologia",
          description:
            "Desenvolvimento Fullstack focado em Next.js e NestJS, Atuando na construção de interfaces performáticas e APIs robustas. Implementação de ambientes isolados com Docker e automação de fluxos CI/CD via Github Actions para otimizar o ciclo de entrega.",
        },
        {
          period: "2025 — 2026",
          role: "Trainee",
          company: "Seed a Bit Tecnologia",
          description:
            "Básico de Front-end, Construção e Consumo de APIs Rest, Básico de Deploy de Aplicações",
        },
      ],
    },
    stack: {
      tag: "[ Stack Principal ]",
      title: "Tecnologias que utilizo",
      groups: [
        {
          title: "Infraestrutura",
          tags: ["CONTAINERS", "ORQUESTRAÇÃO LOCAL", "CI/CD", "DEPLOY/HOSTING"],
        },
        { title: "Backend", tags: ["RUNTIME", "FRAMEWORK", "DADOS", "CACHE"] },
        { title: "Frontend", tags: ["FRAMEWORK", "UI", "LINGUAGEM", "ESTILO"] },
      ],
    },
    projects: {
      tag: "[ Trabalhos Selecionados ]",
      title: "Projetos em destaque",
      items: [
        {
          title: "Sistema de Matrículas",
          description:
            "Aplicação fullstack com autenticação JWT e Refresh Token http-only, Esteira CI/CD construída com Github Actions, Docker para isolamento e organização do ambiente de desenvolvimento e redis para cache de dados.",
          status: "EM DESENVOLVIMENTO",
        },
        {
          title: "Sistema de Agendamento de Consultas",
          description:
            "Sistema construído utilizando Java e Springboot utilizando Hibernate para persistência de dados, RabbitMQ para processamento assíncrono e mensageria além de uma esteira CI/CD automatizada com Github Actions.",
          status: "EM DESENVOLVIMENTO",
        },
      ],
    },
    contact: {
      title: "Vamos integrar.",
      description:
        "Aberto a oportunidades, colaborações e conversas técnicas. Construindo sistemas duradouros.",
      networks: "Redes",
      location: "Localização",
      locationValue: "UTC-3 — BRASIL / REMOTO",
      footer:
        "© 2026 — Construído com Next.js & Tailwind | Deploy feito na Vercel",
    },
  },
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      stack: "STACK",
      projects: "PROJECTS",
    },
    hero: {
      badge: "Available for new projects",
      titlePart1: "Building",
      titleHighlight: "resilient backends",
      titlePart2: "with the precision of a refined interface.",
      subtitle:
        "Fullstack Developer & DevOps Specialist focused on bridging complex distributed logic and polished user experiences.",
      ctaProjects: "VIEW PROJECTS",
      ctaStack: "VIEW STACK",
    },
    about: {
      tag: "[ About ]",
      titlePart1: "Engineer focused on systems that",
      titleHighlight: "work, scale and last.",
      paragraph1:
        "I work as a fullstack and DevOps developer, connecting product and infrastructure. I have experience architecting APIs, automating deploys and crafting interfaces that respect the user.",
      paragraph2:
        "I believe in simple code, observability from day one and shipping fast without compromising the foundation.",
      experiences: [
        {
          period: "2026 — PRESENT",
          role: "Fullstack & DevOps Developer",
          company: "Seed a Bit Technology",
          description:
            "Fullstack developer focused on Next.js and NestJS, working on building high-performance interfaces and robust APIs. Implementation of isolated environments with Docker and automation of CI/CD flows via Github Actions to optimize the delivery cycle.",
        },
        {
          period: "2025 — 2026",
          role: "Trainee",
          company: "Seed a Bit Technology",
          description:
            "Basic Front-end Development, Building and Consuming REST APIs, Basic Application Deployment.",
        },
      ],
    },
    stack: {
      tag: "[ Main Stack ]",
      title: "Technologies I use",
      groups: [
        {
          title: "Infrastructure",
          tags: [
            "CONTAINERS",
            "LOCAL ORCHESTRATION",
            "CI/CD",
            "DEPLOY/HOSTING",
          ],
        },
        { title: "Backend", tags: ["RUNTIME", "FRAMEWORK", "DATA", "CACHE"] },
        { title: "Frontend", tags: ["FRAMEWORK", "UI", "LANGUAGE", "STYLING"] },
      ],
    },
    projects: {
      tag: "[ Selected Work ]",
      title: "Featured projects",
      items: [
        {
          title: "Enrollment System",
          description:
            "Full-stack application with JWT authentication and HTTP-only Refresh Token, CI/CD pipeline built with GitHub Actions, Docker for isolating and organizing the development environment, and Redis for data caching.",
          status: "DEVELOPING",
        },
        {
          title: "Appointment Scheduling System",
          description:
            "System built using Java and Spring Boot, utilizing Hibernate for data persistence, RabbitMQ for asynchronous processing and messaging, and an automated CI/CD pipeline with GitHub Actions.",
          status: "DEVELOPING",
        },
      ],
    },
    contact: {
      title: "Let's integrate.",
      description:
        "Open to opportunities, collaborations and technical conversations. Building long-lasting systems.",
      networks: "Networks",
      location: "Location",
      locationValue: "UTC-3 — BRAZIL / REMOTE",
      footer: "© 2026 — Built with Next.js & Tailwind | Deployed By Vercel",
    },
  },
};
