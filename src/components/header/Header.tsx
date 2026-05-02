// import Link from 'next/link';

// const links = [
//   { href: "/", label: "INÍCIO" },
//   { href: "/projects", label: "PROJETOS" },
//   { href: "/about", label: "SOBRE" },
//   { href: "/stacks", label: "STACK" },
// ];

// export function Header() {
//   return (
//     <nav className="fixed top-0 w-full z-50 border-b border-steel bg-obsidian/80 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
//         <Link href="/" className="font-display font-semibold tracking-tighter text-xl text-platinum">
//           LUCAS<span className="text-blue-500">.DEV</span>
//         </Link>

//         <div className="flex gap-6 md:gap-12 text-xs md:text-sm font-medium text-mercury tracking-wide">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="hover:text-platinum transition-colors"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "INÍCIO" },
  { href: "/about", label: "SOBRE" },
  { href: "/stacks", label: "STACK" },
  { href: "/projects", label: "PROJETOS" },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-steel bg-obsidian/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-semibold tracking-tighter text-xl text-platinum"
        >
          LUCAS<span className="text-blue-500">.DEV</span>
        </Link>

        <div className="flex gap-6 md:gap-12 text-xs md:text-sm font-medium text-mercury tracking-wide">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive(link.href)
                  ? "text-platinum drop-shadow-[0_0_8px_rgba(228,228,231,0.6)]"
                  : "hover:text-platinum"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
