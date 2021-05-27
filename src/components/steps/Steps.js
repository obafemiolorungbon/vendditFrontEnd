import "./Steps.style.css"
const Steps = ()=>{
    return (
      <div>
        <section class="steps">
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
          >
            <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div>
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span class="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7"></circle>
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                      width="52"
                      height="24"
                    ></rect>
                  </svg>
                </span>
                <span class="relative text-white mt-8">
                  Get Started in three easy steps
                </span>
                <p class="text-base text-white pt-8 md:text-lg">
                  Get your product picture ready to be shared in three easy
                  steps. Snappy!
                </p>
              </h2>
            </div>
            <div class="grid gap-8 row-gap-0 lg:grid-cols-3">
              <div class="relative text-center">
                <div class="flex items-center justify-center w-32 h-32 mx-auto mb-4 sm:w-20 sm:h-20">
                  <img src="./assets/cards/iphone-mockup.png" alt="" />
                  <img
                    src="./assets/cards/mockup-image-01.jpg"
                    alt=""
                    class="w-16 h-8/11 mx-auto imageSteps"
                    
                  />
                </div>
                <div class="pt-8">
                  <h6 class="mb-2 text-white text-2xl font-extrabold">
                    Step 1
                  </h6>
                  <p class="max-w-md mb-3 text-sm text-white sm:mx-auto">
                    Open your camera. Make sure only your product is in focus
                  </p>
                  <a
                    href="/"
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Learn more
                  </a>
                </div>
                <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                  <svg
                    class="w-8 text-gray-600 transform rotate-90 lg:rotate-0"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      stroke-miterlimit="10"
                      x1="2"
                      y1="12"
                      x2="22"
                      y2="12"
                    ></line>
                    <polyline
                      fill="none"
                      stroke-miterlimit="10"
                      points="15,5 22,12 15,19 "
                    ></polyline>
                  </svg>
                </div>
              </div>
              <div class="relative text-center">
                <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4  sm:w-20 sm:h-20">
                  <img src="./assets/cards/iphone-mockup.png" alt="" />
                  <img
                    src="./assets/cards/details.png"
                    alt=""
                    class="w-16 h-8/11 mx-auto imageSteps"
                  
                  />
                </div>
                <div class="pt-8">
                  <h6 class="mb-2 text-2xl text-white font-extrabold">
                    Step 2
                  </h6>
                  <p class="max-w-md mb-3 text-sm text-white sm:mx-auto">
                    Enter the details about your products.
                  </p>
                  <a
                    href="/"
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Learn more
                  </a>
                </div>
                <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                  <svg
                    class="w-8 text-gray-600 transform rotate-90 lg:rotate-0"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      stroke-miterlimit="10"
                      x1="2"
                      y1="12"
                      x2="22"
                      y2="12"
                    ></line>
                    <polyline
                      fill="none"
                      stroke-miterlimit="10"
                      points="15,5 22,12 15,19 "
                    ></polyline>
                  </svg>
                </div>
              </div>
              <div class="relative flex flex-col justify-between text-center">
                <div class="flex items-center justify-center w-24 h-24 mx-auto mb-4 sm:w-20 sm:h-20">
                  <img src="./assets/cards/iphone-mockup.png" alt="" />
                  <img
                    src="./assets/cards/let.png"
                    alt=""
                    class="w-16 h-8/11 mx-auto imageSteps"
                 
                  />
                </div>

                <div class="pt-8">
                  <h6 class="mb-2 text-2xl text-white font-extrabold">
                    Step 3
                  </h6>
                  <p class="max-w-md mb-3 text-sm text-white sm:mx-auto">
                    Save the picture and start sharing to your customers.
                  </p>
                  <a
                    href="/"
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
export default Steps