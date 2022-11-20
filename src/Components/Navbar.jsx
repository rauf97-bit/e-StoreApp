import React from 'react'
import img1 from '../Assets/icons/search 1.svg'
import img2 from '../Assets/icons/account 1.svg'
import img3 from '../Assets/icons/cart-empty 1.svg'
const navlinks = ['Home', 'Products', 'About']
const icons = [img1, img2, img3]
function Navbar() {
  return (
    <div className=' p-4 flex justify-between align-center'>
        <ul className='flex justify-around'>{navlinks.map(item =><li key={item} className='p-2 font-semibold cursor-pointer hover:font-bold '>{item}</li>)}</ul>
        <p className="text-4xl font-bold"> My Shop</p>
        <div className="flex justify-between align-center">
            {icons.map(icon => <img key={icon} src={icon} alt="icon" className='w-8 h-8 mx-2 px-1 hover:bg-gray-500 rounded-full ' /> )}
        </div>
    </div>
  )
}

export default Navbar