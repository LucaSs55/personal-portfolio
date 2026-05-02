import Link from "next/link";

export function Hero() {
  return (
    <section
      id="top"
      className="max-w-7xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-24 md:pb-40"
    >
      <div className="max-w-[85ch]">
        {/* Badge de Status: Disponível para novos projetos */}
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-steel rounded-full mb-8">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-kinetic opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-kinetic"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-mercury">
            Disponível para novos projetos
          </span>
        </div>

        {/* Título Principal com fonte display */}
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight text-balance leading-[1.05] mb-10 md:mb-12 text-platinum">
          Construindo <span className="text-mercury">backends resilientes</span>{" "}
          com a precisão de uma interface refinada.
        </h1>

        {/* Descrição Profissional */}
        <p className="text-lg md:text-xl text-mercury leading-relaxed max-w-[60ch] mb-10 md:mb-12">
          Desenvolvedor Fullstack & Especialista DevOps focado na ponte entre
          lógica distribuída complexa e experiências de usuário polidas.
        </p>

        {/* CTAs com Link do Next.js */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          <Link
            href="/projects"
            className="px-7 py-4 bg-platinum text-obsidian font-display font-semibold text-sm tracking-wide hover:bg-white transition-all"
          >
            VER PROJETOS
          </Link>
          <Link
            href="/stacks"
            className="px-7 py-4 border border-steel font-display font-semibold text-sm tracking-wide hover:bg-steel transition-all text-platinum"
          >
            VER STACK
          </Link>
        </div>
      </div>
    </section>
  );
}
