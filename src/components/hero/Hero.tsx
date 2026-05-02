"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="max-w-7xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-24 md:pb-40"
    >
      <div className="max-w-[85ch]">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-steel rounded-full mb-8">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-kinetic opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-kinetic"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-mercury">
            {t.hero.badge}
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight text-balance leading-[1.05] mb-10 md:mb-12 text-platinum">
          {t.hero.titlePart1}{" "}
          <span className="text-mercury">{t.hero.titleHighlight}</span>{" "}
          {t.hero.titlePart2}
        </h1>

        <p className="text-lg md:text-xl text-mercury leading-relaxed max-w-[60ch] mb-10 md:mb-12">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-4 md:gap-6">
          <button
            onClick={() => handleScroll("projetos")}
            className="px-7 py-4 bg-platinum text-obsidian font-display font-semibold text-sm tracking-wide hover:bg-white transition-all"
          >
            {t.hero.ctaProjects}
          </button>
          <button
            onClick={() => handleScroll("stack")}
            className="px-7 py-4 border border-steel font-display font-semibold text-sm tracking-wide hover:bg-steel transition-all text-platinum"
          >
            {t.hero.ctaStack}
          </button>
        </div>
      </div>
    </section>
  );
}
