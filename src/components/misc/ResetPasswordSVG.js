import React from "react"
import tw from "twin.macro"

const SVG = tw.svg`absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-20 lg:-mt-10 sm:block`;

export const ResetSVG = ()=>{
    return (
      <SVG
        viewBox="0 0 52 24"
        fill="currentColor"
      >
        <defs>
          <pattern
            id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
            x="0"
            y="0"
            width=".135"
            height=".30"
          >
            <circle cx="1" cy="1" r=".7"></circle>
          </pattern>
        </defs>
        <rect
          fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
          width="52"
          height="24"
        ></rect>
      </SVG>
    );
}