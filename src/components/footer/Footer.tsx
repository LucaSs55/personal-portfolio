import Link from "next/link";

export function Footer() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="border-t border-steel pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
          <div className="max-w-md">
            <h2 className="font-display text-4xl md:text-5xl mb-6 md:mb-8 tracking-tight text-platinum">
              Vamos integrar.
            </h2>
            <p className="text-mercury leading-relaxed mb-8">
              Aberto a oportunidades, colaborações e conversas técnicas.
              Construindo sistemas duradouros.
            </p>
            <a
              href="mailto:seu@email.com"
              className="text-xl md:text-2xl font-display border-b border-platinum pb-1 hover:text-kinetic hover:border-kinetic transition-colors text-platinum"
            >
              seu@email.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-16 md:gap-x-24 gap-y-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-mercury mb-4">
                Redes
              </p>
              <ul className="space-y-2 text-sm font-medium text-platinum">
                <li>
                  <Link
                    href="https://linkedin.com/in/seu-perfil"
                    target="_blank"
                    className="hover:text-kinetic transition-colors"
                  >
                    LINKEDIN
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/seu-usuario"
                    target="_blank"
                    className="hover:text-kinetic transition-colors"
                  >
                    GITHUB
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/seu-usuario"
                    target="_blank"
                    className="hover:text-kinetic transition-colors"
                  >
                    TWITTER
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-mercury mb-4">
                Localização
              </p>
              <p className="text-sm font-medium text-platinum">
                UTC-3 — BRASIL / REMOTO
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-10 border-t border-steel text-center text-[10px] tracking-[0.4em] text-mercury uppercase">
        © 2026 — Construído com Next.js & Tailwind
      </footer>
    </section>
  );
}
