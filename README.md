# LUCAS_SANTOS.DEV — Portfolio Pessoal

> Portfolio profissional construído com foco em performance, arquitetura moderna e experiência de desenvolvimento reproduzível.

**[🌐 Ver online](lucassantos-dev.vercel.app)** · **[📁 Repositório](https://github.com/LucaSs55/personal-portfolio)**

---

## Sobre o Projeto

Portfolio pessoal desenvolvido do zero com Next.js 16 e App Router, com atenção especial à qualidade de código, automação de fluxos de desenvolvimento e experiência do usuário. O projeto foi construído inteiramente dentro de um **Dev Container** — garantindo ambiente isolado, reproduzível e sem conflitos entre Windows e Linux.

---

## Stack Técnica

### Frontend
- **Next.js 16** com App Router e Turbopack
- **TypeScript** — tipagem estrita em todo o projeto
- **Tailwind CSS v4** — com sistema de design tokens via `@theme`
- **Framer Motion** — animações de entrada baseadas em viewport
- **next-themes** — troca de tema dark/light sem flash de hidratação

### Infraestrutura & DevOps
- **Dev Container** — ambiente de desenvolvimento containerizado com VS Code
- **Docker** com build multi-stage (deps → builder → runner)
- **Docker Compose** — ambientes separados para desenvolvimento e produção
- **GitHub Actions** — pipeline de CI com lint e type check a cada PR

### Qualidade de Código
- **ESLint 9** com flat config e suporte a TypeScript
- **Prettier** — formatação consistente
- **Husky + lint-staged** — validação automática no pre-commit
- **TypeScript strict mode** — sem `any` implícito

---

## Funcionalidades

- **Single Page Application** com scroll spy — links do navbar destacam a seção ativa conforme o usuário navega
- **Internacionalização PT/EN** — troca de idioma em tempo real via Context API com persistência em localStorage
- **Tema dark/light** — alternância com persistência e sem flash no carregamento
- **Animações de entrada** — elementos animam ao entrar na viewport com Framer Motion
- **Totalmente responsivo** — mobile-first com breakpoints em todos os componentes
- **Otimização de imagens** — Next.js Image com lazy loading e dimensionamento automático
- **Fontes otimizadas** — Inter e Space Grotesk via `next/font/google` sem layout shift

---

## Arquitetura

```
src/
├── app/
│   ├── layout.tsx          # Root layout com providers e fontes
│   ├── page.tsx            # Home SPA com todas as seções
│   └── globals.css         # Design tokens, tema e utilitários
├── components/
│   ├── header/             # Navbar com scroll spy e controles de tema/idioma
│   ├── hero/               # Seção inicial
│   ├── about/              # Sobre + linha do tempo de experiências
│   ├── stack/              # Tecnologias organizadas por categoria
│   ├── projects/           # Cards de projetos com imagens
│   ├── footer/             # Contato e links
│   ├── providers/          # ThemeProvider + LanguageProvider
│   └── ui/
│       └── AnimateIn.tsx   # Componente reutilizável de animação
├── contexts/
│   └── LanguageContext.tsx # Context de internacionalização
└── lib/
    └── translations.ts     # Textos PT/EN tipados
```

---

## Ambiente de Desenvolvimento

O projeto usa **Dev Container** para garantir que o ambiente seja idêntico em qualquer máquina. Todo o setup — Node.js, dependências, extensões do VS Code — é provisionado automaticamente pelo container.

### Pré-requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [VS Code](https://code.visualstudio.com/) com a extensão [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Rodando o projeto

```bash
# 1. Clone o repositório
git clone https://github.com/LucaSs55/personal-portfolio.git

# 2. Abra no VS Code
code personal-portfolio

# 3. Reabra no container
# Ctrl+Shift+P → "Dev Containers: Reopen in Container"

# 4. Rode o servidor de desenvolvimento (dentro do container)
npm run dev
```

Acesse em `http://localhost:3001`

### Docker (produção local)

```bash
# Build e execução da imagem de produção
docker compose -f compose.prod.yml up --build
```

---

## CI/CD

A cada Pull Request para a branch `main`, o GitHub Actions executa automaticamente:

- **Lint** — ESLint em todos os arquivos TypeScript
- **Type check** — `tsc --noEmit` para validação de tipos
- **Format check** — Prettier verifica consistência de formatação

O merge só é possível após todos os checks passarem. O deploy em produção é feito automaticamente pela **Vercel** ao realizar merge na `main`.

---

## Padrões de Commit

```
feat:     nova funcionalidade
fix:      correção de bug
chore:    configuração, dependências, tooling
refactor: refatoração sem mudança de comportamento
docs:     documentação
```

---

## Projetos em Destaque

### Sistema de Matrículas
Aplicação fullstack com autenticação JWT e Refresh Token http-only. Esteira CI/CD construída com GitHub Actions, Docker para isolamento e Redis para cache de dados.
`Next.js` `NestJS` `PostgreSQL` `Docker`

### Sistema de Agendamento de Consultas
Sistema construído com Java e Spring Boot utilizando Hibernate para persistência, RabbitMQ para processamento assíncrono e esteira CI/CD automatizada com GitHub Actions.
`Spring Boot` `Hibernate` `RabbitMQ` `Redis`

---

## Autor

**Lucas Santos**
Desenvolvedor de Software & DevOps

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucas-santos-do-nascimento-/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/LucaSs55)

---

*Construído com Next.js & Tailwind CSS · Deploy na Vercel*
