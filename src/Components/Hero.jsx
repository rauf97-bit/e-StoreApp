import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className=" bg-hero-img bg-cover bg-center h-[100vh] items-center flex justify-center">
      <div className="w-4/5 md:w-1/3 ">
        <p className="text-white mt-8 px-2 text-5xl mb-8 text-center font-bold  capitalize">
          Welcome Back !
        </p>
        <button className="rounded-md font-bold text-xl w-full p-2 text-center hover:bg-white bg-red-600 hover:text-red-600 text-white">
          <Link to={"/user/login"}>Shop now</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
