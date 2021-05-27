import React from "react"
import {Link} from "react-router-dom"

const ResetRequestSuccess = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="p-8 rounded shadow-xl sm:p-16">
        <div class="flex flex-col lg:flex-row">
          <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 class="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Check <br class="hidden md:block" />
              <span class="inline-block text-deep-purple-accent-400">
                <span> </span>your email<span> </span>
              </span>
              <span>to complete your password reset</span>
            </h2>
          </div>
          <div class="lg:w-1/2">
            <p class="mb-4 text-base text-gray-700">
              We have sent instructions on how to reset your password to your
              account. Check your email and follow the instructions to complete
              your password reset.
            </p>
            <Link
              to="/signin"
              aria-label="Sign in"
              class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetRequestSuccess;