"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="border-t border-steel pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
          <div className="max-w-md">
            <h2 className="font-display text-4xl md:text-5xl mb-6 md:mb-8 tracking-tight text-platinum">
              {t.contact.title}
            </h2>
            <p className="text-mercury leading-relaxed mb-8">
              {t.contact.description}
            </p>
            <a
              href="mailto:lucassantos2018d@gmail.com"
              className="text-xl md:text-2xl font-display border-b border-platinum pb-1 hover:text-kinetic hover:border-kinetic transition-colors text-platinum"
            >
              lucassantos2018d@gmail.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-16 md:gap-x-24 gap-y-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-mercury mb-4">
                {t.contact.networks}
              </p>
              <ul className="space-y-2 text-sm font-medium text-platinum">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/lucas-santos-do-nascimento-/"
                    target="_blank"
                    className="hover:text-kinetic transition-colors"
                  >
                    LINKEDIN
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/LucaSs55"
                    target="_blank"
                    className="hover:text-kinetic transition-colors"
                  >
                    GITHUB
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/lucass.s25_?igsh=ZzA4YTZkNGQya2Qz"
                    target="_blank"
                    className="hover:text-kinetic transition-colors"
                  >
                    INSTAGRAM
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-mercury mb-4">
                {t.contact.location}
              </p>
              <p className="text-sm font-medium text-platinum">
                {t.contact.locationValue}
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-10 border-t border-steel text-center text-[10px] tracking-[0.4em] text-mercury uppercase">
        {t.contact.footer}
      </footer>
    </section>
  );
}
