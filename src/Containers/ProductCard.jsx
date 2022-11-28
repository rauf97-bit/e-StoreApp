import React from 'react'

function ProductCard({item}) {
  return (
    <div className='grid-cols-1 relative py-2'>
      {item.discount ? <span className="absolute py-2 p-3 bg-red-600 text-white text-xl right-0 top-o">{item.discount}</span> : null}
        <img src={item.img} className='h- h-5/6 mb-3' alt="product" />
        <p className="font-semibold text-xl">{item.title}</p>
        <div className="flex justify-between my-2">
            <p className="text-gray-700 text-xl">{item.valid}</p>
            <p className="font-semibold text-2xl">{item.price}</p>
        </div>
    </div>
  )
}

export default ProductCard