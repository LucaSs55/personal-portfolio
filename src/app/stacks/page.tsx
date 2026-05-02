"use client";

import { useLanguage } from "@/context/LanguageContext";

const itemNames = [
  ["Docker", "Docker Compose", "GitHub Actions", "Linux (VPS)"],
  ["Node.js", "NestJS", "PostgreSQL", "Redis"],
  ["Next.js", "React", "TypeScript", "Tailwind CSS"],
];

export function Stack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="border-y border-steel bg-steel/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="mb-12 md:mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-mercury uppercase">
            {t.stack.tag}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight italic text-platinum mt-3">
            {t.stack.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {t.stack.groups.map((g, gi) => (
            <div key={g.title} className="space-y-6">
              <h3 className="text-xs font-display font-semibold tracking-[0.3em] text-mercury uppercase">
                {g.title}
              </h3>
              <div className="space-y-4">
                {g.tags.map((tag, i) => (
                  <div
                    key={itemNames[gi][i]}
                    className="flex justify-between items-end border-b border-steel pb-2 group"
                  >
                    <span className="text-lg text-platinum group-hover:text-kinetic transition-colors">
                      {itemNames[gi][i]}
                    </span>
                    <span className="text-[10px] tabular-nums text-mercury pb-1">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
