import React from "react";

export const FeaturesBox = ({bgColor,textHeading,textBody})=>{
    return (
      <div
        className="relative p-1 overflow-hidden transition duration-300 transform  rounded hover:scale-105 group hover:shadow-xl"
      >
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-pink-200 group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-200 group-hover:scale-y-100"></div>
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-amber-200 group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-green-200 group-hover:scale-y-100"></div>
        <div
          className="relative h-full p-5 rounded-sm"
          style={bgColor}
        >
          <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
            <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
            <h6 className="font-semibold leading-5">{textHeading}</h6>
          </div>
          <p className="mb-2 text-sm text-gray-900">
            {textBody}
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-gray-900 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    );
}