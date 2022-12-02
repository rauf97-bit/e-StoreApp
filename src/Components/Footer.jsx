import React from 'react'
import Contact from './Contact'

function Footer() {
  return (
    <div className='p-4 my-2 text-blue-700 '>
        <div className="flex flex-col md:justify-between gap-3 md:grid grid-flow-col">
            <div className="flex justify-center items-center">
              <p className="text-4xl  font-bold"> My Shop</p>
            </div>
            <div className="grid-cols-1">
              <p className="mb-3 underline font-bold text-xl">Address</p>
              <p className="my-1 ">A7, Lokoja Road by Zaria Road, Rigasa <br/> Kaduna, Nigeria</p>
              <p className="my-1 ">P.M.B 2033</p>
              <p className="my-1 ">+234 706 667 7778</p>
            </div>
            <div className="grid-cols-1">
              <Contact />
            </div>
        </div>
            <div className="my-4 text-center font-bold">All rights are reserved &copy; 2022</div>
    </div>
  )
}

export default Footer