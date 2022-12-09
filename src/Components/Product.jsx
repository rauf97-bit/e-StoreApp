import React from "react";
import next from "../Assets/icons/Group 6.svg";
import prev from "../Assets/icons/Group 7.svg";
import ProductCard from "../Containers/ProductCard";
import ProductList from "../ProductList.js";
import popularProducts from "../SampleProducts.js";
function Product() {
  const navigation = [prev, next];

  return (
    <div className="px-4 py-4 mb-16">
      <div className="mb-10">
        <div className="flex justify-between items-center">
          <p className="font-bold text-4xl">New Arrivals</p>
          <div className="flex">
            {navigation.map((item) => (
              <img
                key={item}
                className="mx-1 cursor-pointer"
                src={item}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="grid grid-flow-col gap-x-2 my-2">
          {ProductList.map((item, i) => (
            <ProductCard item={item} index={i} key={item.title} />
          ))}
        </div>
      </div>
      <div className="my-10">
        <p className="font-bold text-4xl text-center">Top Picks</p>
        <div className="grid grid-flow-col gap-x-6 my-2">
          {popularProducts.map((item, i) => (
            <ProductCard item={item} index={i} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
