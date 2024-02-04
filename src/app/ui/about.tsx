import React from "react";
import { libreBaskerville } from "./fonts";

export default function About() {
  return (
    <div id="about" className="h-fit pt-10 scroll-m-14">
      <article id="about_article" className="flex flex-col items-left mx-10  pb-20 gap-8 sm:gap-16 h-full sm:items-center lg:flex-row lg:mx-44 lg:pt-20 lg:gap-18">
        <h2 className={`text-center text-3xl pb-5 lg:pt-16 ${libreBaskerville.className}`}>About</h2>
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

        <article className="flex flex-col gap-8">
          <p className="sm:mr-3 lg:text-base sm:px-20 lg:px-0 text-center ">
            My name is Alessia, I moved to CPH in 2020 and I am currently studying <em>front-end development</em> during my elective semester of Multimedia Design at <b>KEA</b>. I am quick at learning and always eager to put my knowledge to use in
            practical scenarios. Adaptable, organised and humble.
          </p>
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
            <p>AP degree in Multimedia Design | KEA </p>
          </span>
        </article>
      </article>
    </div>
  );
}
