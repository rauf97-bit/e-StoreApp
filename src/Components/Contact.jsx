import React from 'react'
import img1 from '../Assets/icons/Frame.svg'
import img2 from '../Assets/icons/Frame1.svg'
import img3 from '../Assets/icons/Frame2.svg'
function Contact() {
    const socials = [img1, img2, img3]
  return (
    <div className=' flex bg-center mb-10 h-max'>
        <div className="">
            <p className=" sm:text-start text-xl">Be the first to hear about our biggest and best sales........</p>
            <p className="border border-b relative"></p>
            <div className="flex md:justify-center md:items-center my-6">.
                {socials.map(icon => <img src={icon} className='bg-black h-8 mx-6' alt ='icon' key={icon} />)}
            </div>
        </div>
    </div>
  )
}

export default Contact