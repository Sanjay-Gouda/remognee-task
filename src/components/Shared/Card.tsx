import React, { useEffect, useState } from "react";

import { useAddCart } from "../../store/slices/cart";
import { useSelector } from "react-redux";

type TCardProps = {
  title: string;
  productId: string;
  price: number;
  image: string;
  counter: number;
  addCart: () => void;
  incremnet: () => void;
  decrement: () => void;
};

export const Card = ({
  title,
  price,
  image,
  addCart,
  counter,
  decrement,
  productId,
  incremnet,
}: TCardProps) => {
  const cart = useSelector(useAddCart);

  return (
    <>
      <div className="w-full max-w-xs shadow-xl flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow ">
        <div className="w-full h-[300px]">
          <img
            className="rounded-t-lg w-full h-full object-contain  "
            // src="https://i.ibb.co/QdJwgmp/brown-cowboy.png"
            src={image}
            alt="product image"
          />
        </div>

        <div className="px-5 pb-5">
          <h5 className="text-lg  font-semibold tracking-tight text-gray-900">
            {/* Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport */}
            {title}
          </h5>

          <div className="flex items-center mt-2.5 mb-5"></div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 ">
              Rs.{Math.round(price)}
            </span>

            {!cart?.[productId]?.count ? (
              <>
                <button
                  onClick={addCart}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Add to cart
                </button>
              </>
            ) : (
              <>
                {/*counter  */}

                <div className="flex flex-row h-10 w-1/3  rounded-lg relative bg-transparent mt-1">
                  <button
                    data-action="decrement"
                    onClick={decrement}
                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>

                  <div className=" w-full justify-center focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none">
                    {cart?.[productId].count}
                  </div>

                  <button
                    data-action="increment"
                    onClick={addCart}
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
