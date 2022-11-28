import React from 'react'
function Hero() {
  return (
    <div className='bg-hero-img bg-cover h-[88vh] items-center flex justify-center'>
        <div className="w-4/5 md:w-1/3 ">
        <p className="px-2 text-2xl mb-8 text-center font-bold  capitalize">
            Lorem ipsum dolor sit laborum vitae illum delectus ratione qui sunt?
        </p>
        <button className="rounded-md font-semibold w-full p-2 text-center bg-white hover:bg-gray-500 hover:text-white">Shop now</button>
        </div>
    </div>
  )
}

export default Hero