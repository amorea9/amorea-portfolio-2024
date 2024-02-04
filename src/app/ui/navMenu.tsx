import React from "react";
import { libreBaskerville, notoSans } from "./fonts";

export default function NavMenu() {
  return (
    <div id="menu" className="sticky top-0 backdrop-blur-sm w-full border-b border-opacity-80 z-50">
      <nav className="flex flex-row justify-between items-center my-2 mx-6 p-2 md:mx-44">
        <p className={`${libreBaskerville.className}`}>AMOREA</p>
        {/* <Link id="logo" href="index.html">
          <div className="logo"></div>
        </Link> */}
        <ul className="flex flex-row justify-between items-center sm:mx-4 gap-3">
          <li>
            <a className="p-2" href="#about">
              about
            </a>
          </li>
          <li>
            <a className="p-2" href="#projects">
              projects
            </a>
          </li>

          <li>
            <a className="p-2" href="#contact">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
