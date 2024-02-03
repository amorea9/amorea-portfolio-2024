import React from "react";
import { libreBaskerville } from "./fonts";

export default function Projects() {
  return (
    <div id="projects" className="h-fit py-10 w-full px-10 lg:grid-cols-3 lg:grid lg:gap-10 lg:px-16 lg:justify-items-center lg:items-center scroll-m-14">
      <h2 className={`text-center text-3xl pb-2 lg:col-span-3 ${libreBaskerville.className}`}>Projects</h2>

      <article className="assignment flex flex-col items-left py-4 gap-2 h-full lg:w-full">
        <h3 className="px-2 text-lg">Cookie bakery (react.js)</h3>
        <a href="https://co2okiebakery.netlify.app/" target="_blank">
          <img className="sm:w-full sm:h-32" src="/images/cookie-bakery.png" alt="cookie-bakery" />
        </a>
      </article>

      <article className="assignment flex flex-col items-left py-4 gap-2 h-full lg:w-full">
        <h3 className="px-2 text-lg">Mini to-do list (react.js)</h3>
        <a href="https://mini-to-do-list.netlify.app/" target="_blank">
          <img className="sm:w-full sm:h-32" src="/images/to-do-list.png" alt="react-mini-to-do-list" />
        </a>
      </article>
      <article className="portfolio_assignment flex flex-col items-left py-4 pt-12 lg:pt-4 gap-2 h-full lg:w-full">
        <h3 className="px-2 text-lg">Portfolio assignment</h3>
        <a href="https://amorea9.github.io/Portfolio/" target="_blank">
          <img className="sm:w-full sm:h-64" src="images/Screenshot 2022-10-24 at 17.19.09.png" alt="portfolio-assignment" />
        </a>
      </article>
    </div>
  );
}
