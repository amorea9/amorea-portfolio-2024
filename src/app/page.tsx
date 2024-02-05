import Image from "next/image";
import NavMenu from "./ui/navMenu";
import Hero from "./ui/hero";
import About from "./ui/about";
import Projects from "./ui/projects";
import Footer from "./ui/footer";
import Skills from "./ui/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between divide-y-[1px]  divide-opacity-80 ">
      <NavMenu />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
