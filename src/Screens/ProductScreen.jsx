import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../Assets/images/Image1.png'
import downImg from '../Assets/icons/Path.svg'

function ProductScreen() {
  return (
    <div>
        <Navbar />
        <section className='p-4 flex sm:flex-row flex-col justify-between items-start'>
            <img src={img} alt="produtImg" className='sm:mr-3 m-auto mb-2 sm:mb-0 sm:w-1/2 w-5/6 h-[75vh]' srcset="" />
            <div className="ml-3 sm:w-1/2 w-full flex flex-col justify-between">
                    <p className="text-2xl font-bold">Yeezy's</p>
                     <div className="my-2">
                    <p className="price text-red-600 text-3xl font-bold">$44.50</p>
                    </div>

            <div className="colours flex my-3 items-center">
                <button className="py-2 p-3 mr-2 bg-neutral-0 border-[1px] hover:text-white hover:bg-gray-700 border-gray-300">BLACK</button>
                <button className="py-2 p-3 mx-2 bg-neutral-0 border-[1px] hover:text-white hover:bg-gray-700 border-gray-300">BLACK</button>
                <button className="py-2 p-3 mx-2 bg-neutral-0 border-[1px] hover:text-white hover:bg-gray-700 border-gray-300">BLACK</button>
            </div>
            <div className="my-3">
                <button className="w-2/3 p-3 bg-blue-500 text-white hover:text-blue-500 hover:bg-white hover:border-blue-500 border">ADD TO CART</button>
            </div>
            <p className="sm:w-2/3 w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis non sequi dolorum obcaecati provident eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur hic sequi, quia nulla explicabo doloribus voluptates.</p>
            <div className="my-2">
                <div className="cursor-pointer p-3 text-base sm:text-xl w-5/6 sm:w-2/3 flex justify-between items-center mb-2 bg-neutral-0 border border-gray-600 rounded-md" id='return'>RETURN POLICY <img src={downImg} alt="downImg" srcset="" />  </div>    
                <div className="cursor-pointer p-3 text-base sm:text-xl w-5/6 sm:w-2/3 flex justify-between items-center mb-2 bg-neutral-0 border border-gray-600 rounded-md" id='citizen'>CITIZEN POLICY <img src={downImg} alt="downImg" srcset="" /></div>    
            </div>
            </div>
        </section>
    </div>
  )
}

export default ProductScreen