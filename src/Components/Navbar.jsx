import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../Assets/icons/search 1.svg'
import img2 from '../Assets/icons/account 1.svg'
import img3 from '../Assets/icons/cart-empty 1.svg'
import img4 from '../Assets/icons/bars.png'
import SearchBox from './SearchBox'
const navlinks = [{title : 'home', url : ''},
 {title : 'products', url :'products'},
  {title:'about', url:'about'}]
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  return (
    <div className=' p-4 flex justify-between items-center'>
        <ul className={`flex justify-around absolute md:top-0 top-16 ${isOpen ? '-translate-y-96' : 'translate-y-0 z-10'} left-0 md:h-auto md:w-auto h-[25vh] w-[100vw] flex-col bg-white  transition-all md:flex-row md:relative`}>
          {navlinks.map(item =><li key={item.title} className='p-2 font-semibold text-blue-600 cursor-pointer hover:font-bold capitalize'><Link to={`/${item.url}`}>{item.title}</Link></li>)}
        </ul>
        <img onClick={() => setIsOpen((e) => !e)} className='block md:hidden cursor-pointer' src={img4} alt=""  /> 
        <p className="text-4xl text-blue-600 font-bold"> My Shop</p>
        <div className="flex justify-between align-center">
          <img src={img1} onClick={() => setIsSearch(e => !e)} className='w-8 h-8 mx-2 px-1 cursor-pointer hover:bg-blue-600 rounded-full ' alt="search"  />
          {isSearch ? <SearchBox /> : null}
          <Link to={'/login'}><img src={img2} className='w-8 h-8 mx-2 px-1 hover:bg-blue-600 rounded-full ' alt="search"  /></Link>
          <Link to={'/cart'}><img src={img3} className='w-8 h-8 mx-2 px-1 hover:bg-blue-600 rounded-full ' alt="search"  /></Link>
       </div>
    </div>
  )
}

export default Navbar