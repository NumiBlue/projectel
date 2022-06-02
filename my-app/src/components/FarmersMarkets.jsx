import React from 'react'
import image1 from '../assets/market1.jpeg'
import image2 from '../assets/market2.jpeg'
import image3 from '../assets/market3.jpeg'




const FarmersMarkets = () => {
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
              <h1 class="text-3xl font-semibold">Local is Better</h1>
              <p class="my-2">It's that time of year again! Local farmer's markets are opening back up and bursting with fresh produce. Check out some of the seasonal events with live music, local bakeries, and ready-to-eat treats alongside local growers.
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
              <h1 class="text-3xl font-semibold">Mueller</h1>
              <p class="my-2">Sundays at Mueller Lake Park, enjoy a calm stroll through the park as well as all the fresh offerings on display. Before making your purchases, have a bite at a locally-owned food-truck or tour the Thinkery, an unusual and charming children's museum. Pick up a bottle of Elgin Meadery's famous homey wine or enjoy Engel Farm's year-round selection. Open Sunday from 10am-2pm.
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
              <h1 class="text-3xl font-semibold">Lone Star</h1>
              <p class="my-2">Lone Star Farmer's market is quite a sight with over 40 booths to peruse. Offering gifts, body products, and ready-made food, this is a fantastic way to spend a Sunday morning (10am-2pm). Hill Country Galleria is pet-friendly, so make sure to bring your best friend along for the adventure. Who else has such a discerning nose for fresh veg?
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

export default FarmersMarkets