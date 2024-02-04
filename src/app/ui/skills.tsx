import React from "react";
import { libreBaskerville } from "./fonts";

export default function Skills() {
  return (
    <div className="h-fit pt-10 ">
      <article className="flex flex-col text-center md:text-left items-center md:items-left mx-10 gap-8 h-full  lg:pb-12 pb-20 sm:gap-16 lg:flex-row lg:mx-44 lg:pt-20 lg:gap-18">
        <h2 className={`text-center text-3xl pb-5 lg:mt-20 ${libreBaskerville.className}`}>Current skills</h2>
        <p className="lg:text-base text-center md:text-left">
          Everyday, through my education at KEA, I am working and gaining experience with a multitude of tools ranging from graphic design programs, video editing to programming. <br />
          <br />
          Some of my favourites are:
        </p>
        <ul className="list-disc lg:text-base text-left ml-5 mr-auto">
          <li>HTML, CSS, Javascript</li>
          <li>CSS frameworks (Bootstrap, Tailwind)</li>
          <li>Npm, Vite & the terminal</li>
          <li>Rest Api</li>
          <li>SASS</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Git and github</li>
        </ul>
      </article>
    </div>
  );
}
