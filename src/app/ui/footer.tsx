import React from "react";

export default function Footer() {
  return (
    <div id="footer" className="p-5 h-full w-full lg:pt-10">
      <nav id="contact" className="flex flex-col items-center gap-16">
        <ul id="footer_list" className="flex flex-col items-center gap-5 flex-wrap sm:flex-row md:justify-center md:gap-10 lg:py-2 text-center">
          <li>
            <a className="p-1 px-2" href="https://www.linkedin.com/in/amorea/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="p-1 px-2" href="https://github.com/amorea9" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a className="p-1 px-2" href="mailto:a.amore9393@gmail.com">
              E-mail
            </a>
          </li>
        </ul>
        <p className="text-sm text-center">
          Copyright © 2022 Alessia Amore
          <br />
          All Rights Reserved
        </p>
      </nav>
    </div>
  );
}
