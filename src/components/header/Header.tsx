"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#inicio", label: "INÍCIO" },
  { href: "#sobre", label: "SOBRE" },
  { href: "#stack", label: "STACK" },
  { href: "#projetos", label: "PROJETOS" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    links.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-steel bg-obsidian/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("#inicio")}
          className="font-display font-semibold tracking-tighter text-xl text-platinum"
        >
          LUCAS<span className="text-blue-500">.DEV</span>
        </button>

        <div className="flex gap-6 md:gap-12 text-xs md:text-sm font-medium text-mercury tracking-wide">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`transition-colors ${
                  isActive
                    ? "text-platinum drop-shadow-[0_0_8px_rgba(228,228,231,0.6)]"
                    : "hover:text-platinum"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
