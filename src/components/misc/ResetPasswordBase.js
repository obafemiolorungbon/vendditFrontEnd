import React from "react"
import {ResetSVG} from "./ResetPasswordSVG"


export const ResetRequestBase = ({children})=>{

    return(
        <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <ResetSVG />
                <span className="relative">Enter</span>
              </span>
              Your Email here to reset your password
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Let us to help you get your password back, provide us with your
              email, and we will send you instructions to set up your new
              password.
            </p>
          </div>
          {children}
        </div>
    )
        

}