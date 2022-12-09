import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../Assets/images/Feature_img1.png";
import ItemCard from "../../Containers/ItemCard";
import Products from "../../SampleProducts";

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
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="ml-14 text-blue-500 my-4 text-xl"
      >
        &lt;&lt; Go back
      </button>
      <div className="p-2 container mx-auto">
        <h1 className="text-4xl text-blue-500 font-bold pb-4 mb-8 border-b border-blue-500">
          Shopping Cart
        </h1>
        <div className="flex flex-col md:flex-row gap-x-4">
          <div className="flex-1">
            {Products.map((product) => (
              <ItemCard product={product} key={product._id} />
            ))}
          </div>
          <div className="">
            <img src={img} className="h-[55vh]" alt="checkout" />
            <div className="flex my-3 text-3xl justify-between items-center">
              <p>Total</p>
              <span className="total">$546.79</span>
            </div>
            <div className="my-3">
              <button className="w-[100%] p-3 bg-blue-500 text-white hover:text-blue-500 hover:bg-white hover:border-blue-500 border">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
