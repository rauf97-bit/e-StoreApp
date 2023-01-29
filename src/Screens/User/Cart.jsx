import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../Assets/images/Feature_img1.png";
import Products from "../../SampleProducts";

function Cart() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(Products);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(1);

  const [productPrice, setProductPrice] = useState();

  const removeItem = (id) => {
    const newList = product.filter((item) => item._id !== id);
    setProduct(newList);
  };

  const negativeCount = () => {
    if (count >= 0) {
      setCount(count - 1);
    }
    setCount(0);
  };

  useEffect(() => {
    const total = () => {
      const num = count * product.price;
      return num.toFixed(2);
    };
    setProductPrice(total);
  }, [count]);

  useEffect(() => {
    const getTotal = () => {
      const num = product.reduce((acc, item) => acc + item.price, 0);
      return num.toFixed(2);
    };
    setTotal(getTotal());
  }, [product]);

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="text-2xl p-2 sm:ml-[5%] ml-4 font-semibold text-blue-500 "
      >
        &lt;&lt; Go back
      </button>
      <div className="p-2 container mx-auto">
        <h1 className="text-4xl text-blue-500 font-bold pb-4 mb-8 border-b border-blue-500">
          Shopping Cart
        </h1>
        <div className="flex flex-col md:flex-row gap-x-4">
          <div className="flex-1">
            {product.map((prod) => (
              <div
                key={prod._id}
                className="my-3 flex flex-wrap justify-between items-center"
              >
                <div className="flex flex-col justify-center items-center">
                  <img src={prod.image} alt="item" className="h-[120px]" />
                  <p className="text-xl">{prod.name}</p>
                </div>
                <p className="flex text-xl font-semibold justify-around items-center">
                  <span
                    className="cursor-pointer p-2"
                    onClick={() => negativeCount()}
                  >
                    -
                  </span>
                  <span className="mx-2">{count}</span>
                  <span
                    className="cursor-pointer p-2"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </span>
                </p>
                <p className="text-xl font-bold">$ {prod.price}</p>
                <button
                  onClick={(e) => removeItem(prod._id)}
                  className="underline font-bold text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="">
            <img src={img} className="h-[55vh]" alt="checkout" />
            <div className="flex my-3 text-3xl justify-between items-center">
              <p>Total</p>
              <span className="total">${total}</span>
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
