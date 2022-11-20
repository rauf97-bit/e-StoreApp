import React from 'react'

function ProductCard({item}) {
  return (
    <div className='grid-cols-1'>
        <img src={item.img} className='h-full mb-3' alt="product" />
        <p className="font-semibold text-xl">{item.title}</p>
        <div className="flex justify-between">
            <p className="text-gray-700 text-xl">{item.valid}</p>
            <p className="font-semibold text-xl">{item.price}</p>
        </div>
    </div>
  )
}

export default ProductCard