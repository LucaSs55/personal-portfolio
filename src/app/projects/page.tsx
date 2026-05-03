"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Code } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AnimateIn } from "../../components/ui/AnimateIn";

const projectMeta = [
  {
    stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    image: "/imagem-matricula.jpg",
  },
  {
    stack: ["Springboot", "Hibernate", "Redis", "RabbitMQ"],
    image: "/img-agendamento.jpg",
  },
];

export function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.items.map((p, i) => ({
    ...p,
    ...projectMeta[i],
  }));

  return (
    <section
      id="projetos"
      className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-40"
    >
      <div className="flex justify-between items-end mb-12 md:mb-16">
        <AnimateIn direction="up" delay={0}>
          <div>
            <span className="font-display text-xs tracking-[0.3em] text-mercury uppercase">
              {t.projects.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight italic text-platinum mt-3">
              {t.projects.title}
            </h2>
          </div>
        </AnimateIn>
        <AnimateIn direction="up" delay={0.1}>
          <span className="text-sm text-mercury tracking-widest tabular-nums hidden md:block">
            001 — 00{projects.length}
          </span>
        </AnimateIn>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {projects.map((p, i) => (
          <AnimateIn key={p.title} direction="up" delay={i * 0.15}>
            <article key={p.title} className={`group cursor-pointer `}>
              <div className="bg-steel aspect-[16/10] overflow-hidden mb-6 md:mb-8 outline outline-1 outline-steel outline-offset-[-1px] relative">
                <Image
                  src={p.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={p.title}
                  className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-xl md:text-2xl text-platinum group-hover:text-kinetic transition-colors">
                  {p.title}
                </h3>
                <span className="text-[10px] border border-mercury/30 px-2 py-1 rounded text-mercury whitespace-nowrap">
                  {p.status}
                </span>
              </div>
              <p className="text-mercury mb-5 max-w-[55ch] leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-3">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-medium tracking-wider text-platinum uppercase"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-mercury">
                  <Link
                    href="#"
                    aria-label="Repositório"
                    className="hover:text-platinum transition-colors"
                  >
                    <Code className="size-4" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Demo"
                    className="hover:text-platinum transition-colors"
                  >
                    <ExternalLink className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
