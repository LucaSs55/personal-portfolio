"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="sobre"
      className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 md:mb-24">
        <div className="lg:col-span-1">
          <span className="font-display text-xs tracking-[0.3em] text-mercury uppercase">
            {t.about.tag}
          </span>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight text-platinum leading-tight">
            {t.about.titlePart1}{" "}
            <span className="text-mercury">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-mercury text-lg leading-relaxed max-w-[60ch]">
            {t.about.paragraph1}
          </p>
          <p className="text-mercury leading-relaxed max-w-[60ch]">
            {t.about.paragraph2}
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {t.about.experiences.map((exp, index) => (
          <div
            key={exp.period}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 border-l border-steel pl-8 relative"
          >
            <div
              className={`absolute -left-[7px] top-0 size-3.5 rounded-full ${
                index === 0 ? "bg-platinum" : "bg-steel"
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
