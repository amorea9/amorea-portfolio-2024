import React from "react";
import { libreBaskerville } from "./fonts";
import StyledSmiley from "./smiley";

export default function Hero() {
  return (
    <div id="landing" className="h-fit">
      <article className="flex flex-col sm:flex-row justify-around items-center px-5 pb-20 pt-16 h-full gap-8 xl:mx-56 lg:h-fit lg:justify-center lg:items-center lg:gap-32 lg:py-32">
        {/* <Image src="./smiley.svg" alt="smileyIcon" width={300} height={300} className="hover:bg-mintGreen duration-700  h-40" /> */}
        {/* <Smiley /> */}
        <StyledSmiley />
        <div className=" flex flex-col gap-4 text-center sm:text-left">
          <h1 className={`text-4xl font-bold p-5 leading-10 text-center sm:text-left   md:text-4xl lg:leading-base ${libreBaskerville.className}`}>
            <em>Hello,</em>
            <br />I am Alessia!
          </h1>
          <p className="text-center md:text-left px-5 lg:text-base">
            A multimedia design graduate <br />
            with a strong interest in front-end development
          </p>
          <p className="text-center md:text-left px-5 lg:text-base">
            Want to share ideas with <em>me?</em>
          </p>
          <a className="bg-limeGreen text-black mt-5 py-3 px-6 self-center lg:text-lg rounded-md " href="index.html#contact">
            Send me a message
          </a>
        </div>
      </article>
    </div>
  );
}
