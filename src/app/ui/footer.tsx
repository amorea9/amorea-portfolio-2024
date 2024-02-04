import React from "react";
import { libreBaskerville } from "./fonts";

export default function Footer() {
  return (
    <div id="footer" className="pt-10 pb-16 mx-10 h-full w-full">
      <nav id="contact" className="flex flex-col items-center gap-8">
        <ul id="footer_list" className="flex w-full flex-col items-center gap-8 flex-wrap sm:flex-row md:justify-center md:gap-10 lg:py-2 text-center">
          <li className="w-full">
            <a className="p-2 px-5 hover:shadow-md hover:rounded-md transition-all duration-300 " href="https://www.linkedin.com/in/amorea/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li className="w-full">
            <a className="p-2 px-5 hover:shadow-md hover:rounded-md transition-all duration-300" href="https://github.com/amorea9" target="_blank">
              Github
            </a>
          </li>
          <li className="w-full">
            <a className="p-2 px-5 hover:shadow-md hover:rounded-md transition-all duration-300" href="mailto:a.amore9393@gmail.com">
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
