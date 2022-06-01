import React from 'react'
import image1 from '../assets/pet1.jpg'
import image2 from '../assets/pet2.jpg'
import image3 from '../assets/pet3.jpg'




const PetFriendly = () => {
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
              <h1 class="text-3xl font-semibold">Red Bud Isle</h1>
              <p class="my-2"></p>
              <p>
              Red Bud Isle is a pet-friendly natural area. With water on 3 sides, your pet is sure to have a blast in the summer. Please remember to pick up after your furry friend's frolic. Human companions can also hike, kayak, and paddle-board at Red Bud Isle.
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
              <h1 class="text-3xl font-semibold">Zilker Park Botanical Gardens</h1>
              <p class="my-2"></p>
              <p>
              Zilker Park Botanical Gardens welcomes two-legged and four-legged visitors to observe it's unusual collection of plants and scenery. Pups and their people can stroll through a myriad of botanical environs within the park. The Botanical Gardens are open almost every day to visitors. They also host seasonal decor depending on time-of-year. Be sure to check out their fairy garden!
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
              <h1 class="text-xl font-semibold">4th Tap Brewing Cooperative</h1>
              <p class="my-2"></p>
              <p>
              4th Tap Brewing Cooperative is a great place to enjoy a cold brew with your pet. Dogs are welcome outside or inside on leash. This is a small, worker-owned co-op with a chill vibe and chill beer. Check the website for hours.
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

export default PetFriendly