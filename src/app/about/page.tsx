"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AnimateIn } from "../../components/ui/AnimateIn";

const profilePhoto: string | undefined = "/profile.jpeg";

export function About() {
  const { t } = useLanguage();
  const experiences = t.about.experiences;

  return (
    <section
      id="sobre"
      className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 md:mb-24">
        <div className="lg:col-span-1 space-y-8">
          <span className="font-display text-xs tracking-[0.3em] text-mercury uppercase">
            {t.about.tag}
          </span>

          <div className="relative w-full max-w-[280px] aspect-[4/5] border border-steel bg-secondary/30 overflow-hidden group">
            <span className="absolute top-2 left-2 size-2 border-t border-l border-kinetic z-10" />
            <span className="absolute top-2 right-2 size-2 border-t border-r border-kinetic z-10" />
            <span className="absolute bottom-2 left-2 size-2 border-b border-l border-kinetic z-10" />
            <span className="absolute bottom-2 right-2 size-2 border-b border-r border-kinetic z-10" />

            {profilePhoto ? (
              <Image
                src={profilePhoto}
                alt="Foto de perfil"
                fill
                sizes="280px"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-mercury">
                <User className="size-10 opacity-50" strokeWidth={1} />
                <span className="font-display text-[10px] tracking-[0.3em] uppercase">
                  public/profile.jpeg
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <AnimateIn direction="right" delay={0.25}>
            <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight text-platinum leading-tight">
              {t.about.titlePart1}{" "}
              <span className="text-mercury">{t.about.titleHighlight}</span>
            </h2>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.35}>
            <p className="text-mercury text-lg leading-relaxed max-w-[60ch]">
              {t.about.paragraph1}
            </p>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.45}>
            <p className="text-mercury leading-relaxed max-w-[60ch]">
              {t.about.paragraph2}
            </p>
          </AnimateIn>
        </div>
      </div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <AnimateIn key={exp.period} direction="up" delay={i * 0.15}>
            <div
              key={exp.period}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 border-l border-steel pl-8 relative"
            >
              <div
                className={`absolute -left-[7px] top-0 size-3.5 rounded-full ${
                  i === 0 ? "bg-platinum" : "bg-steel"
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
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
