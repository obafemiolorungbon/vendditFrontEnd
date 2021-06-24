import React from "react"
import "twin.macro"


export const CTAOne = () => {
  return (
      <>
    <div tw="bg-white dark:bg-gray-800 mb-5"/>
      <div tw="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 tw="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span tw="block">Want to be Increase your Sales ?</span>
          <span tw="block text-indigo-500">It&#x27;s today or never.</span>
        </h2>
        <p tw="text-xl mt-4 max-w-md mx-auto text-gray-400">
          Statiscally, Customers are more likely to buy from you if your
          products look really really good and detailed. Source? Trust me, Or I
          don lie give you before?
        </p>
        <div tw="lg:mt-0 lg:flex-shrink-0">
          <div tw="mt-12 inline-flex rounded-md shadow-default">
            <button
              type="button"
              tw="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-default focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      </>
  );
};
