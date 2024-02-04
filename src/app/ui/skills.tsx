import React from "react";
import { libreBaskerville } from "./fonts";

export default function Skills() {
  return (
    <div className="h-fit pt-10 ">
      <article className="flex flex-col text-center md:text-left items-center md:items-left mx-10 gap-8 h-full  lg:pb-12 pb-20 sm:gap-16 lg:flex-row lg:mx-44 lg:pt-20 lg:gap-18">
        <h2 className={`text-center text-3xl pb-5 lg:mt-20 ${libreBaskerville.className}`}>Current skills & tools</h2>
        <p className="lg:text-base text-center md:text-left">
          Through my studies, I have learned how to use a multitude of tools which helped me in enriching my developer skillset. <br />
          <br />
          Currently, I work with:
        </p>
        <ul className="list-disc  lg:text-base text-left ml-5 mr-auto marker:text-hotPink">
          <li>The trinity: HTML, CSS, Javascript</li>
          <li>ReactJS & NextJS & Vercel</li>
          <li>Typescript</li>
          <li>Tailwind</li>
          <li>Npm packages</li>
          <li>Rest APIs</li>
          <li>Supabase</li>
          <li>Design tools like Figma</li>
          <li>Git and Github</li>
          <li>...and more!</li>
        </ul>
      </article>
    </div>
  );
}
