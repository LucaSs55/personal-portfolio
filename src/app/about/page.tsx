const experiences = [
  {
    period: "2026 — PRESENTE",
    role: "Desenvolvedor de Software & DevOps",
    company: "Seed a Bit",
    description:
      "Desenvolvimento fullstack focado em Next.js e NestJS, atuando na construção de interfaces performáticas e APIs robustas. Implementação de ambientes isolados com Docker e automação de fluxos de CI/CD via GitHub Actions para otimizar o ciclo de entrega.",
    active: true,
  },
  {
    period: "2025 — 2026",
    role: "Trainee",
    company: "Seed a Bit",
    description:
      "Básico de Front-end, Contrução e Consumo de APIs Rest, Básico de Deploy de Aplicações.",
    active: false,
  },
];

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 md:mb-24">
        <div className="lg:col-span-1">
          <span className="font-display text-xs tracking-[0.3em] text-mercury uppercase">
            [ Sobre ]
          </span>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight text-platinum leading-tight">
            Engenheiro focado em sistemas que{" "}
            <span className="text-mercury">funcionam, escalam e duram.</span>
          </h2>
          <p className="text-mercury text-lg leading-relaxed max-w-[60ch]">
            Atuo como desenvolvedor fullstack e DevOps, conectando produto e
            infraestrutura. Tenho experiência em arquitetar APIs, automatizar
            deploys e modelar interfaces que respeitam o usuário.
          </p>
          <p className="text-mercury leading-relaxed max-w-[60ch]">
            Acredito em código simples, observabilidade desde o dia um e em
            iterar rápido sem comprometer a base.
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {experiences.map((exp) => (
          <div
            key={exp.period}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 border-l border-steel pl-8 relative"
          >
            <div
              className={`absolute -left-[7px] top-0 size-3.5 rounded-full ${
                exp.active ? "bg-platinum" : "bg-steel"
              }`}
            />
            <div className="md:col-span-1">
              <span className="font-display text-base md:text-lg tracking-tight text-mercury tabular-nums">
                {exp.period}
              </span>
            </div>
            <div className="md:col-span-3 pb-16 md:pb-24">
              <h4 className="text-xl md:text-2xl font-display text-platinum mb-2">
                {exp.role}
              </h4>
              <p className="text-kinetic text-sm font-medium tracking-wide mb-4 uppercase">
                {exp.company}
              </p>
              <p className="text-mercury max-w-[65ch] leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
