import React from "react";
//takes props error image
import ErrorImage from "images/ErrorImage.svg";
import BackButton from "images/backButton.svg";
import { Link } from "react-router-dom";
import tw from "twin.macro"

const Wrapper = tw.div`bg-indigo-900 relative overflow-hidden h-screen`;


export const Error404Page2 = (props) => {
  return (
    <Wrapper>
      <img
        src={ErrorImage}
        className="absolute h-full w-full object-cover"
        alt="Error404 Page"
      />
      <div class="inset-0 bg-black opacity-25 absolute"></div>
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="w-full font-mono flex flex-col items-center relative z-10">
          <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You&#x27;re alone here
          </h1>
          <button class="px-2 py-2 w- font-light transition ease-in duration-200 hover:bg-black-400 text-lg text-white bg-black-300 focus:outline-none">
            <Link
            to="/"
            >
              <img
                className="animate-pulse"
                src={BackButton}
                alt="BackButton"
              ></img>
              Go back home

            </Link> 
          </button>
        </div>
      </div>
    </Wrapper>
  );
};


