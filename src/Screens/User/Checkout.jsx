import React from "react";
import Navbar from "../../Components/Navbar";
import img from "../../Assets/images/Feature_img2.png";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <Navbar />
      <div className="pt-5 px-4 my-5">
        <div className="flex flex-col sm:flex-row justify-between gap-x-10">
          <div className="flex-1">
            <h1 className="mb-3 text-5xl font-semibold">PAYMENT</h1>
            <div className="flex flex-col justify-between h-[88%]">
              <div className="mb-10 sm:mb-0">
                <div className="p-2 my-1 border border-gray-700 rounded-md w-[100%] sm:w-[90%]">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="p-2 border border-gray-700 rounded-md"
                    id="checkbox"
                    value="Paystack"
                  />
                  <label htmlFor="checkbox" className="ml-3 text-2xl">
                    Paystack
                  </label>
                </div>

                <div className="p-2 my-1 border border-gray-700 rounded-md w-[100%] sm:w-[90%]">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="p-2 border border-gray-700 rounded-md"
                    id="checkbox"
                    value="Paystack"
                  />
                  <label htmlFor="checkbox" className="ml-3 text-2xl">
                    Cash
                  </label>
                </div>
              </div>

              <div className="py-3 flex justify-between items-center">
                <Link to={"/cart"} className="text-blue-500 underline">
                  Go back
                </Link>
                <button
                  className="p-3 text-white bg-red-600 text-3xl font-bold"
                  id="checkoutPrice"
                >
                  Pay $44.50
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <img
              src={img}
              alt="Payment"
              className="h-96 hidden sm:block w-[90%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
