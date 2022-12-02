import React from 'react'

function SearchBox() {
  return (
    <div className="absolute top-20">

    <div className='w-[80vw] sm:w-[55vw] fixed left-6 transition-all sm:translate-x-[50%] sm:translate-y-[50%]'>
        <input type="search" name="search" className='w-[100%] p-2 rounded-sm' id="search"  />
        <svg className='absolute right-1 cursor-pointer top-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_402_30)">
          <path d="M15.757 17.17C14.0552 18.5113 11.9052 19.1517 9.74684 18.9602C7.58846 18.7688 5.58476 17.76 4.14553 16.1402C2.70631 14.5203 1.9403 12.4119 2.00419 10.2459C2.06807 8.08004 2.95701 6.02036 4.48921 4.48817C6.0214 2.95597 8.08108 2.06703 10.247 2.00315C12.4129 1.93927 14.5214 2.70527 16.1412 4.1445C17.7611 5.58372 18.7698 7.58743 18.9613 9.74581C19.1527 11.9042 18.5123 14.0542 17.171 15.756L22 20.587L20.586 22L15.756 17.17H15.757ZM10.497 16.994C12.2201 16.994 13.8727 16.3095 15.0911 15.0911C16.3095 13.8726 16.994 12.2201 16.994 10.497C16.994 8.77389 16.3095 7.12135 15.0911 5.90293C13.8727 4.6845 12.2201 4 10.497 4C8.77392 4 7.12139 4.6845 5.90296 5.90293C4.68454 7.12135 4.00004 8.77389 4.00004 10.497C4.00004 12.2201 4.68454 13.8726 5.90296 15.0911C7.12139 16.3095 8.77392 16.994 10.497 16.994Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_402_30">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>

    </div>
    </div>
  )
}

export default SearchBox