import React from "react";
import Image from "next/image";

import { Project } from "../data";

interface SingleProjectProps {
  project: Project;
}

export default function SingleProject({ project }: SingleProjectProps) {
  return (
    <div>
      <div className="relative flex w-full max-w-xs flex-col h-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md gap-4 items-stretch ">
        <div className="flex justify-between mt-2 items-center">
          <span className="relative mb-0 m-3 py-0.5 rounded-full bg-warmGrey  px-2 text-center text-sm font-medium text-hotPink">{project.year}</span>
          <span className="relative m-3 mb-0 py-0.5 rounded-full bg-warmGrey px-2 text-center text-sm font-medium text-hotPink">{project.role}</span>
        </div>
        <div className="relative mx-3 flex h-60 overflow-hidden rounded-xl">
          <Image className="object-cover " src={project.imageSrc} width={project.imageWidth} height={project.imageHeight} alt={project.alt} />
        </div>
        <div className="px-5 mb-5 pt-1 flex flex-col gap-5 grow">
          <h5 className="text-xl text-hotPink font-medium text-center">{project.title}</h5>

          <p className="text-base  text-left mb-5 mt-3 flex items-center justify-between ">{project.description}</p>

          <a href={project.ctaLink} target="_blank" className="rounded-md text-almostWhite bg-hotPink px-5 py-3 text-center text-sm font-medium hover:bg-opacity-70 w-full transition-all duration-300 hover:shadow-md mt-auto">
            {project.ctaText}
          </a>
        </div>
      </div>

      {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-hotPink  px-2 text-center text-sm font-medium text-white">{project.year}</span>
          <span className="absolute top-0 right-0 m-2 rounded-full bg-warmGrey px-2 text-center text-sm font-medium text-hotPink">{project.role}</span> */}
    </div>
  );
}
