import React from "react";
import { libreBaskerville } from "./fonts";

export default function Footer() {
  return (
    <div id="footer" className="pt-10 pb-16 mx-10 h-full w-full 2xl:mx-[500px]">
      <nav id="contact" className="flex flex-col items-center gap-8">
        <ul id="footer_list" className="flex w-full flex-col items-center gap-8  md:justify-center lg:py-2 lg:gap-10 text-center md:flex-row">
          <li className="w-full md:w-fit">
            <a
              className="p-2 px-5 transition-all  duration-300 no-underline hover:underline hover:decoration-4
            hover:underline-offset-2 decoration-hotPink  "
              href="https://www.linkedin.com/in/amorea/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="w-full md:w-fit">
            <a
              className="p-2 px-5 transition-all  duration-300 no-underline hover:underline hover:decoration-4
            hover:underline-offset-2 decoration-hotPink "
              href="https://github.com/amorea9"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li className="w-full md:w-fit">
            <a
              className="p-2 px-5 transition-all  duration-300 no-underline hover:underline hover:decoration-4
            hover:underline-offset-2 decoration-hotPink "
              href="mailto:a.amore9393@gmail.com"
            >
              E-mail
            </a>
          </li>
        </ul>
        <p className="text-sm text-center pt-10 ">
          Copyright © 2024 Alessia Amore
          <br /> All Rights Reserved
        </p>
      </nav>
    </div>
  );
}
