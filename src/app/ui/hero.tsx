import React from "react";
import { libreBaskerville } from "./fonts";
import StyledSmiley from "./smiley";

export default function Hero() {
  return (
    <div id="landing" className="h-fit sm:min-h-screen flex">
      <article className="flex flex-col sm:flex-row justify-around items-center px-5 pb-20 pt-16  min-h-screen min-w-screen gap-8 xl:mx-56 lg:h-fit lg:justify-center lg:items-center lg:gap-32 sm:gap-16 lg:py-32 sm:ml-10">
        <StyledSmiley />
        <div className=" flex flex-col gap-4 text-center sm:text-left px-5">
          <h1 className={`text-4xl font-bold py-5 leading-10 text-center md:text-left  sm:text-4xl lg:leading-base ${libreBaskerville.className}`}>
            <em>Hello,</em>
            <br />I am <span className="text-hotPink">Alessia</span>!
          </h1>
          <p className="text-center md:text-left lg:text-base">
            A multimedia design graduate <br />
            with a strong interest in front-end development
          </p>
          <p className="text-center md:text-left  lg:text-base">
            Want to share ideas with <em>me?</em>
          </p>
          <a
            className="bg-hotPink border-none  text-almostWhite mt-5 py-3 px-5 flex justify-center items-center self-center md:self-start lg:text-lg rounded-md text-sm text-center font-medium transition-all duration-300  hover:bg-opacity-70 hover:shadow-md"
            href="#contact"
          >
            Send me a message
          </a>
        </div>
      </article>
    </div>
  );
}
