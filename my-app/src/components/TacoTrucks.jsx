import React from 'react'
import image1 from '../assets/taco1.jpeg'
import image2 from '../assets/taco2.jpeg'
import image3 from '../assets/taco3.jpeg'


const TacoTrucks = () => {
  return (
                
        <body>
        <div name='events' 
          class="bg-gray-900 grid-cols-3 h-screen flex justify-center items-center gap-x-16 text-white"
        >
          <div
            class="w-[300px] h-[420px] grid-item bg-transparent cursor-pointer group perspective"
          >
            <div
              class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
            >
              <div class="absolute backface-hidden border-2 w-full h-full">
                <img src={image1} class="w-full h-full" alt='eventimage'/>
              </div>
              <div
                class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#FF847C] overflow-hidden"
              >
                <div
                  class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
                >
                  <h1 class="text-3xl font-semibold">Rosita's Al Pastor</h1>
                  <p class="my-2"></p>
                  <p>
                  A Taco staple since 1985, Rosita's holds taco gold for even the most trepidatious of eaters. You can stick to the classic pastor or the "gringa". Despite the name, the gringa is a satisfying combo of moist pork pastor on floury tortilla, served with a seductive spill of queso blanco. You cannot go wrong with either!
                  </p>
                  <button
                    class="text-black rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                  >
                    Read Article
                  </button>
                </div>
              </div>
            </div>
          </div>
    
          <div
            class="w-[300px] h-[420px] grid-item bg-transparent cursor-pointer group perspective"
          >
            <div
              class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
            >
              <div class="absolute backface-hidden border-2 w-full h-full">
                <img src={image2} class="w-full h-full" alt='eventimage'/>
              </div>
              <div
                class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#FF847C] overflow-hidden"
              >
                <div
                  class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
                >
                  <h1 class="text-3xl font-semibold">Veracruz</h1>
                  <p class="my-2"></p>
                  <p>
                  Two sisters are the masterminds behind this brilliant taco truck! Looking for something to break your fast? Look no further! This devastatingly delectable taco truck serves up some of the best morning munches you'll find in the Austin area. Pssst! It doesn't hurt that this truck is run by two break-out entrepreneurs.... make sure to eat local.
                  </p>
                  <button
                    class="text-black rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                  >
                    Read Article
                  </button>
                </div>
              </div>
            </div>
          </div>
    
          <div
            class="w-[300px] h-[420px] grid-item bg-transparent cursor-pointer group perspective"
          >
            <div
              class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
            >
              <div class="absolute backface-hidden border-2 w-full h-full">
                <img src={image3} class="w-full h-full" alt='eventimage'/>
              </div>
              <div
                class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#FF847C] overflow-hidden"
              >
                <div
                  class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
                >
                  <h1 class="text-3xl font-semibold">El Primo</h1>
                  <p class="my-2"></p>
                  <p>
                  For 14 years, El Primo has been providing the ravenous citizens of south Austin with taco-y goodness. Starting out near campus, this family-owned taco eatery is deeply committed to their craft. Offering breakfast, lunch, and dinner, this place has something to offer all day long. Try a cheesy breakfast burrito, or indulge in their torta: a bolillo with mayo, onions, avocado, cilantro, and your choice of meat (chicken, al pastor, or asada).
                  </p>
                  <button
                    class="text-black rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                  >
                    Read Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
        )
    }

export default TacoTrucks


















