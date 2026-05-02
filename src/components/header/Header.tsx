"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("inicio");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const links = [
    { href: "#inicio", label: t.nav.home },
    { href: "#sobre", label: t.nav.about },
    { href: "#stack", label: t.nav.stack },
    { href: "#projetos", label: t.nav.projects },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    links.forEach(({ href }) => {
      const el = document.getElementById(href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [links]);

  const handleClick = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-steel bg-obsidian/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between gap-4">
        <button
          onClick={() => handleClick("#inicio")}
          className="font-display font-semibold tracking-tighter text-xl text-platinum"
        >
          LUCAS_SANTOS<span className="text-kinetic opacity-75">.DEV</span>
        </button>

        <div className="flex items-center gap-6 md:gap-10 text-xs md:text-sm font-medium text-mercury tracking-wide">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`hidden sm:inline transition-colors ${
                  isActive
                    ? "text-platinum drop-shadow-[0_0_8px_rgba(228,228,231,0.6)]"
                    : "hover:text-platinum"
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="text-[10px] md:text-xs font-display font-semibold tracking-[0.2em] border border-steel px-2 py-1 rounded text-platinum hover:border-kinetic hover:text-kinetic transition-colors"
          >
            {lang === "pt" ? "PT / EN" : "EN / PT"}
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="text-platinum hover:text-kinetic transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
