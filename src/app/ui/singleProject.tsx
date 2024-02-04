import React from "react";
import Image from "next/image";

import { Project } from "../data";

interface SingleProjectProps {
  project: Project;
}

export default function SingleProject({ project }: SingleProjectProps) {
  return (
    <div>
      <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md gap-4">
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <Image className="object-cover " src={project.imageSrc} width={project.imageWidth} height={project.imageHeight} alt={project.alt} />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-zinc-300/30 px-2 text-center text-sm font-medium text-white">{project.year}</span>
          <span className="absolute top-0 right-0 m-2 rounded-full bg-zinc-300/30 px-2 text-center text-sm font-medium text-white">{project.role}</span>
        </div>
        <div className="px-5 pb-5 flex flex-col items-center">
          <a href="#">
            <h5 className="text-xl text-hotPink font-medium">{project.title}</h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-base ">{project.description} </span>
            </p>
          </div>
          <a href="#" className="rounded-md text-almostWhite bg-hotPink px-5 py-3 text-center text-sm font-medium hover:bg-opacity-70 w-full transition-all duration-300 hover:shadow-md">
            {project.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
