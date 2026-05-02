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
          tags: ["CONTAINERS", "ORQUESTRAÇÃO", "IAC", "CLOUD"],
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
          title: "Plataforma SaaS Multi-tenant",
          description:
            "Aplicação fullstack com autenticação, billing e dashboard analítico em tempo real. Arquitetura modular escalável para múltiplos clientes.",
          status: "PRODUÇÃO",
        },
        {
          title: "Pipeline CI/CD Automatizado",
          description:
            "Esteira de deploy completa com testes, build, análise estática e rollout progressivo em Kubernetes usando GitOps.",
          status: "OPEN SOURCE",
        },
        {
          title: "API de Processamento de Eventos",
          description:
            "Backend de alta concorrência para ingestão de eventos com filas distribuídas e persistência otimizada para séries temporais.",
          status: "DEPLOYADO",
        },
        {
          title: "Dashboard de Observabilidade",
          description:
            "Painel unificado com métricas, logs e traces distribuídos. Alertas inteligentes e visualizações personalizáveis.",
          status: "INTERNO",
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
          tags: ["CONTAINERS", "ORCHESTRATION", "IAC", "CLOUD"],
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
          title: "Multi-tenant SaaS Platform",
          description:
            "Fullstack application with authentication, billing and real-time analytics dashboard. Scalable modular architecture for multiple clients.",
          status: "PRODUCTION",
        },
        {
          title: "Automated CI/CD Pipeline",
          description:
            "Full deploy pipeline with tests, build, static analysis and progressive rollout on Kubernetes using GitOps.",
          status: "OPEN SOURCE",
        },
        {
          title: "Event Processing API",
          description:
            "High-concurrency backend for event ingestion with distributed queues and storage optimized for time series.",
          status: "DEPLOYED",
        },
        {
          title: "Observability Dashboard",
          description:
            "Unified panel with metrics, logs and distributed traces. Smart alerts and customizable visualizations.",
          status: "INTERNAL",
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
