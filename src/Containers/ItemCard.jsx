import React, { useEffect, useState } from "react";

const ItemCard = ({ product }) => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState("");
  const removeItem = (e) => {
    console.log("hello");
  };
  useEffect(() => {
    const total = () => {
      const num = count * product.price;
      return num.toFixed(2);
    };
    setTotalPrice(total);
  }, [count]);

  return (
    <div className="my-3 flex justify-between items-center">
      <img src={product.image} alt="item" className="h-[120px]" />
      <p className="flex text-xl font-semibold justify-around items-center">
        <span
          className="cursor-pointer p-2"
          onClick={() => setCount(count - 1)}
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
      <p className="text-xl font-bold">$ {product.price}</p>
      <p className="text-xl font-bold">$ {totalPrice}</p>
      <button onClick={removeItem} className="underline font-bold text-red-700">
        Remove
      </button>
    </div>
  );
};

export default ItemCard;
