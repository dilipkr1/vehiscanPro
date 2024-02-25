import React from "react";
import Button from "@mui/material/Button";

export default function Shoppingcard(props) {
  const handleClick = (e) => {
    console.log("clicked buy button", e);
  };
  return (
    <div className="relative m-6 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="/"
      >
        <img
          className="object-cover hover:scale-125 hover:delay-150 hover:duration-500"
          src={props.img}
          alt="shop_iamge"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="/">
          <h5 className="text-main font-roboto tracking-tight font-thin">
            {props.description}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              {props.price}
            </span>
            <span className="text-sm text-slate-900 line-through">
              {props.discountedPrice}
            </span>
          </p>
          <div className="flex items-center">
            {/* <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span> */}
          </div>
          <div className="buy">
            <Button
              onClick={() => handleClick(props.productId)}
              style={{ backgroundColor: "#ff5722" }}
              variant="contained"
            >
              Buy Now 
            </Button>
            {/* <p>{props.productId}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
