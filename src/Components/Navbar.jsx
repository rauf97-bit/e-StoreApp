import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../Assets/icons/search 1.svg'
import img2 from '../Assets/icons/account 1.svg'
import img3 from '../Assets/icons/cart-empty 1.svg'
const navlinks = [{title : 'home', url : ''},
 {title : 'products', url :'products'},
  {title:'about', url:'about'}]
const icons = [img1, img2, img3]
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=' p-4 flex justify-between items-center'>
        <ul className={`flex justify-around absolute md:top-0 top-16 ${isOpen ? '-translate-y-96' : 'translate-x-0'} left-0 md:h-auto md:w-auto h-[25vh] w-[100vw] flex-col bg-white  transition-all md:flex-row md:relative`}>
          {navlinks.map(item =><li key={item} className='p-2 font-semibold cursor-pointer hover:font-bold capitalize'><Link to={`/${item.url}`}>{item.title}</Link></li>)}
        </ul>
        <svg width="22" onClick={() => setIsOpen((e) => !e)} className='block md:hidden bg-blue-700' height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_22_262)">
          <path d="M15.9286 0H6.07104C2.72347 0 0 2.7236 0 6.07117V15.9287C0 19.2764 2.72347 21.9999 6.07104 21.9999H15.9286C19.2764 21.9999 21.9999 19.2763 21.9999 15.9287V6.07117C22 2.7236 19.2764 0 15.9286 0ZM20.0481 15.9287C20.0481 18.2001 18.2001 20.0479 15.9287 20.0479H6.07104C3.79977 20.0481 1.95194 18.2001 1.95194 15.9287V6.07117C1.95194 3.7999 3.79977 1.95194 6.07104 1.95194H15.9286C18.2 1.95194 20.0479 3.7999 20.0479 6.07117V15.9287H20.0481Z" fill="white"/>
          <path d="M11 5.33138C7.87416 5.33138 5.33118 7.87436 5.33118 11.0002C5.33118 14.1259 7.87416 16.6687 11 16.6687C14.1258 16.6687 16.6688 14.1259 16.6688 11.0002C16.6688 7.87436 14.1258 5.33138 11 5.33138ZM11 14.7167C8.95058 14.7167 7.28311 13.0495 7.28311 11.0001C7.28311 8.95053 8.95045 7.28319 11 7.28319C13.0495 7.28319 14.7169 8.95053 14.7169 11.0001C14.7169 13.0495 13.0494 14.7167 11 14.7167ZM16.9065 3.67627C16.5305 3.67627 16.161 3.82852 15.8954 4.09529C15.6272 4.36404 15.4761 4.72797 15.4751 5.10769C15.4751 5.48389 15.6287 5.85333 15.8954 6.12009C16.1609 6.38556 16.5305 6.53911 16.9065 6.53911C17.2839 6.53911 17.6522 6.38556 17.9189 6.12009C18.1857 5.85333 18.338 5.48376 18.338 5.10769C18.338 4.73031 18.1857 4.36075 17.9189 4.09529C17.6535 3.82852 17.2839 3.67627 16.9065 3.67627Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_22_262">
          <rect width="22" height="22" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <p className="text-4xl font-bold"> My Shop</p>
        <div className="flex justify-between align-center">
            {icons.map(icon => <img key={icon} src={icon} alt="icon" className='w-8 h-8 mx-2 px-1 hover:bg-gray-500 rounded-full ' /> )}
        </div>
    </div>
  )
}

export default Navbar