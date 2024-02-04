import React from "react";
import { libreBaskerville } from "./fonts";
import SingleProject from "./singleProject";
import projectsArray from "../data";

export default function Projects() {
  return (
    <div id="projects" className="h-fit pt-10 xl:pt-5 scroll-m-14 w-full">
      <article className="flex flex-col text-center md:text-left items-center md:items-left mx-10 gap-8 h-full lg:pb-12 pb-20 sm:gap-16   lg:mx-auto lg:pt-10 lg:gap-18 sm:flex-wrap lg:gap-18 ">
        <h2 className={`text-center text-3xl pb-5 flex-grow ${libreBaskerville.className}`}>Projects</h2>
        <div className="flex flex-col  sm:flex-row sm:flex-wrap gap-8 justify-center items-stretch h-full md:grow">
          {projectsArray.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </article>
    </div>
  );
}
