import React from "react";
import { libreBaskerville } from "./fonts";
import Image from "next/image";
// import LineArtSelfie from "./lineArt";
import Selfie from "./../../../public/selfie.png";
import LineArt from "./../../../public/lineart_selfie.svg";

export default function About() {
  return (
    <div id="about" className="h-fit py-10 scroll-m-14">
      <article>
        <h2 className={`text-center text-3xl pb-2 lg:pt-16 ${libreBaskerville.className}`}>About</h2>
        <article id="about_article" className="flex flex-col items-left p-5 pt-14 pb-0 gap-8 sm:gap-16 h-full sm:items-center lg:flex-row lg:mx-44 lg:pt-20 lg:gap-18">
          <div className="lineArt sm:rounded-full lg:p-36 lg:ml-24 xl:p-52">
            <div className="selfie sm:rounded-full lg:p-36 xl:p-52"></div>
          </div>

          {/*      here starts the svg hell */}
          {/* <div className="sm:rounded-full lg:p-36 lg:ml-24 xl:p-52 p-10 self-center" id="lineArtSelfie">
            {lineArtObject}
            <Image src={Selfie} alt="selfie" height={300} width={300} className="sm:rounded-full lg:p-36 xl:p-52 aspect-video self-center" id="selfie" />
          </div> */}
          {/* 
          <LineArtSelfie>
            <Image src={Selfie} layout="contain" alt="selfie" id="selfie" className="self-center  flex flex-col " />{" "}
          </LineArtSelfie> */}

          <article className="flex flex-col p-5 sm:p-0 gap-6">
            <span className="flex flex-row gap-3 h-fit sm:px-20 lg:px-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "black", opacity: "70%" }}>
                <path d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z"></path>
                <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></path>
              </svg>
              <p>Italian, based in Copenhagen</p>
            </span>
            <span className="flex flex-row gap-3 h-fit sm:px-20 lg:px-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "black", opacity: "70%" }}>
                <path d="M2 7v1l11 4 9-4V7L11 4z"></path>
                <path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z"></path>
              </svg>
              <p>KEA - Københavns Erhvervsakademi</p>
            </span>
            <p className="sm:mr-3 lg:text-base sm:px-20 lg:px-0 text-center ">
              My name is Alessia, I moved to CPH in 2020 and I am currently studying <em>front-end development</em> during my elective semester of Multimedia Design at <b>KEA</b>. I am quick at learning and always eager to put my knowledge to use in
              practical scenarios. Adaptable, organised and humble.
            </p>
          </article>
        </article>
        <h2 className={`text-center text-3xl pt-10 pb-2 lg:mt-20 ${libreBaskerville.className}`}>Current skills</h2>
        <article className="flex flex-col items-left p-5 pt-7 pb-0 gap-2 h-full sm:items-center lg:mx-56 lg:pb-12">
          <p className="p-5 sm:px-20 lg:text-base">
            Everyday, through my education at KEA, I am working and gaining experience with a multitude of tools ranging from graphic design programs, video editing to programming. <br />
            <br />
            Some of my favourites are:
          </p>
          <ul className="p-5 pt-0 ml-5 list-disc lg:text-base">
            <li>HTML, CSS, Javascript</li>
            <li>CSS frameworks (Bootstrap, Tailwind)</li>
            <li>Npm, Vite & the terminal</li>
            <li>Rest Api</li>
            <li>SASS</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Git and github</li>
          </ul>
        </article>
      </article>
    </div>
  );
}
