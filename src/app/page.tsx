import Image from "next/image";
import { Hero } from "../components/hero/Hero";
import About from "./about/page";

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
        <section id="stack">{/* Stack component */}</section>
        <section id="projetos">{/* Projects component */}</section>
      </main>
    </>
  );
}
