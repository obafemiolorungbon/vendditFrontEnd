import React from "react";
import Person from "images/wallpaper3.png";
import tw from "twin.macro";
import SignUpSVG from "components/misc/SignupSVG";


const BackgroundImage = tw.img` absolute inset-0 object-cover w-full h-full `;
const MainContainer = tw.div`relative`;

const SignUpBase = ({children})=>{

    return (
    <MainContainer>
      <BackgroundImage src={Person} alt="Person taking a picure " />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <SignUpSVG />
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="flex flex-col items-center justify-between xl:flex-row ">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 ">
              <h2
                id="sign-up-text"
                className=" max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none "
              >
                Get access to the <br className="hidden md:block " /> most powerful
                software for modern vendors.
              </h2>
              <p
                id="sign-up-p"
                className="max-w-xl mb-4 text-base text-gray-200 md:text-lg "
              >
                Register now and start "wowing" your customers with eye catching
                pictures of your product.
              </p>
              <a
                href="/ "
                aria-label=" "
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-gray-500 "
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2 "
                  fill="currentColor "
                  viewBox="0 0 12 12 "
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z "></path>
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12 ">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10 ">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl ">
                  Sign up for Snappy
                </h3>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
)
}

export default SignUpBase