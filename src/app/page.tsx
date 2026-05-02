import Image from "next/image";
import { Hero } from "../components/hero/Hero";
import About from "./about/page";
import { Footer } from "@/components/footer/Footer";
import { Stack } from "./stacks/page";
import { Projects } from "./projects/page";

export default function Home() {
  return (
    <>
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="sobre">
          <About />
        </section>
        <section id="stack">
          <Stack />
        </section>
        <section id="projetos">
          <Projects />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
