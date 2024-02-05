import React from "react";

export default function Smiley() {
  return (
    <div>
      <svg id="smiley" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" width="200" height="200" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
        <g id="smiley_tr" transform="translate(150,150) rotate(-0.042945)">
          <g transform="scale(1.832125,1.832125) translate(-150.133247,-150.000007)">
            <ellipse id="face" rx="74.746846" ry="74.746846" transform="translate(150.133242 150)" fill="transparent" strokeWidth="0" className="hover:fill-lime-300 duration-1000 transition-all hover:shadow-md" />
            <ellipse id="right_eye" rx="6.262213" ry="6.262213" transform="matrix(.978409 0 0 1.978718 174.116184 128.308754)" strokeWidth="0" />
            <ellipse id="left_eye" rx="6.262213" ry="6.262213" transform="matrix(.973735 0 0 1.978717 126.150293 128.308759)" strokeWidth="0" />
            <path
              id="mouth"
              d="M113.759127,159.353349q1.598841,27.180671,18.919857,33.043169t36.240895-1.06591q17.587471-6.928385,17.587471-28.779535-.000001-7.359606-.000001,1.065907"
              transform="matrix(.652368 0 0 0.778641 52.444741 44.047466)"
              fill="none"
              stroke="#000"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
