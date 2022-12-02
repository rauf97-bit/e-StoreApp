import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../Assets/images/Feature_img1.png'
import img1 from '../Assets/images/Product_img4.png'

function Cart() {
// const products = [ 
//   {
//     id: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     price: '$90.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   }
// ]

  return (
    <div>
      <Navbar />
      <div className="p-2 container mx-auto">

        <h1 className="text-4xl font-bold pb-4 mb-8 border-b border-gray-700">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="grid grid-flow-row gap-y-2 sm:w-[100%]">

            <div className="mr-5 grid grid-flow-col gap-x-4 text-center h-max sm:w-[100%] mb-8 md:mb-0 items-center justify-between">
              <div className="grid-cols-1">Product</div>
              <div className="grid-cols-1">Quantity</div>
              <div className="grid-cols-1">Price</div>
              <div className="grid-cols-1">Total</div>
            </div>

            <div className="mr-5 grid grid-flow-col gap-x-4 text-center h-max sm:w-[100%] mb-8 md:mb-0 items-center justify-between">
              <div className="grid-cols-1"><img src={img1} alt="item" className='w-24 h-24' /></div>
              <div className="grid-cols-1">
                <div className="flex text-2xl pt-3 gap-2 items-center">
                  <p className='border border-gray-700 flex justify-center items-center w-6 h-6 rounded-sm cursor-pointer'>-</p>
                  <span className='quantity'>1</span>
                  <p className='border border-gray-700 flex justify-center items-center w-6 h-6 rounded-sm cursor-pointer'>+</p>
                </div>
              </div>
              <div className="grid-cols-1">Price</div>
              <div className="grid-cols-1">Total</div>
            </div>
            
            <div className="mr-5 grid grid-flow-col gap-x-4 text-center h-max sm:w-[100%] mb-8 md:mb-0 items-center justify-between">
              <div className="grid-cols-1"><img src={img1} alt="item" className='w-24 h-24' /></div>
              <div className="grid-cols-1">
                <div className="flex text-2xl pt-3 gap-2 items-center">
                  <p className='border border-gray-700 flex justify-center items-center w-6 h-6 rounded-sm cursor-pointer'>-</p>
                  <span className='quantity'>1</span>
                  <p className='border border-gray-700 flex justify-center items-center w-6 h-6 rounded-sm cursor-pointer'>+</p>
                </div>
              </div>
              <div className="grid-cols-1">Price</div>
              <div className="grid-cols-1">Total</div>
            </div>


          </div>
          <div className="ml-5">
            <img src={img} alt="checkout"  />
            <div className="flex my-3 text-3xl justify-between items-center">
              <p>Total</p>
              <span className="total">$546.79</span>
            </div>
            <div className="my-3">
                  <button className="w-[100%] p-3 bg-blue-500 text-white hover:text-blue-500 hover:bg-white hover:border-blue-500 border">CHECKOUT</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart


