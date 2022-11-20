import React from 'react'
import img1 from '../Assets/icons/Frame.svg'
import img2 from '../Assets/icons/Frame1.svg'
import img3 from '../Assets/icons/Frame2.svg'
function Contact() {
    const socials = [img1, img2, img3]
  return (
    <div className='h-[40vh] flex justify-center items-center bg-social-img bg-center'>
        <div className="p-5">
            <p className="text-white text-2xl text-center">
                Social Media
            </p>
            <p className="text-white text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, magni!</p>
            <div className="flex justify-center items-center my-2">.
                {socials.map(icon => <img src={icon} className='h-8 mx-2' alt ='icon' key={icon} />)}
            </div>
        </div>
    </div>
  )
}

export default Contact