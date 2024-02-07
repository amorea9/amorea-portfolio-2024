import Image from "next/image";
import NavMenu from "./ui/navMenu";
import Hero from "./ui/hero";
import About from "./ui/about";
import Projects from "./ui/projects";
import Footer from "./ui/footer";
import Skills from "./ui/skills";

export default function Home() {
  return (
    <main className="">
      <NavMenu />
      <div id="pageContent" className=" flex flex-col items-center justify-between divide-y-[1px]  divide-opacity-80 max-w-screen-2xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
