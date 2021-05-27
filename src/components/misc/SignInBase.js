import React from "react"

export const SignInBase = ({children})=>{

    return(
        <div id="main-signin" className="bg-black">
  <div className="flex flex-col bg-black justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
    <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
      <div className="max-w-xl text-center mb-6">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className=" max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          Now you can enjoy
          <br className="hidden md:block" /> stunning
          <span id="sign-in-highlight" className="inline-block ">
            product pictures
          </span>
        </h2>
        <p className="text-base text-white md:text-lg">
          Your journey to beautiful products and incredible high sales just
          began
        </p>
      </div>
      <div className=" relative max-w-16 bg-black rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl text-white font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Welcome Back,
        </h3>
       {children}
      </div>
    </div>
    <div>
      <img
        src="https://kitwind.io/assets/kometa/two-thirds-phone.png"
        className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
        alt=""
      />
    </div>
  </div>
</div>
    )

}

