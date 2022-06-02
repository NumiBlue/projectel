import React from 'react'
import image1 from '../assets/CiderFeature.webp'
import image2 from '../assets/newbeerrelease.webp'
import image3 from '../assets/memorialdaybeer.webp'




const CraftBeer = () => {
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
              <h1 class="text-3xl font-semibold">Ciders</h1>
              <p class="my-2">
              Texas Ciders are renowned and Austin has a number of elegant options. A refreshing and light alternative to basic brews, cider summer is here! From Moontower to Austin EastCiders, you'll find these crisp and sweet drinks all over the city this season.
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
              <h1 class="text-3xl font-semibold">New Beer Drops!</h1>
              <p class="my-2">This week to kick off the summer, several beers are being released. Hedgehog Brewing is releasing a Strata dry-hopped farmhouse that is sure to satisfy. Bigger on the sours? Blue Owl Brewing is releasing four new sour flower beers to great acclaim. Enjoy them on their own or with lobster rolls at the brewery. Check back weekly for new releases!
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
              <h1 class="text-3xl font-semibold">Memorial Day</h1>
              <p class="my-2">Looking for something to do on Memorial Day? Several of the local breweries are staying open to accommodate holiday sippers. Have a rustic beer or house-infused whiskey at The BuzzMill or take in live music with other families at Slacker's Brewing Co. Have a safe and relaxing holiday weekend!
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

export default CraftBeer