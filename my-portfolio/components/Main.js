import React from "react";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa';


const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-grey-600">
            LET'S BUILD A PORTFOLIO
          </p>
          <h1 className="py-4 text-gray-700 text-5xl font-black">Hello I'm Lyheng!!!</h1>
          <h1 className="py-2 text-gray-700 text-5xl font-black">
            I'm a front-end developer.
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <div className="py-4 flex items-center justify-between max-w-[400px] m-auto">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl ">
                <FaLinkedinIn />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl">
                <FaGithub />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl">
                <FaFacebook />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl">
                <FaInstagram />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
