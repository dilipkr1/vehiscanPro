import React from "react";
import "./shop.css"
import Shoppingcard from "../Shopdata/Shoppingcard";
import shoppingData from "../Shopdata/Shopdata";

export default function Shop() {
  return (
    <div className="mt-20">
      <div className="topSec bg-shopbgcolor">
        <div className="py-20 lg:mx-10 lg:px-20 headingShop text-white text-4xl font-roboto">
          <h3 className="px-4  text-2xl font-black   text-white tracking-wider">Shop</h3>
        </div>
      </div>
<div className=" lg:px-20 lg:mx-10">

      <div className="pt-20   pb-3  text-3xl  tracking-normal font-roboto text-main font-black  description">
        <h3 className="px-4 text-xl font-black   text-main">Shop for VEHICLEAN Products.</h3>
      </div>

      <div className="flex flex-wrap mobFlexCol ">
        {shoppingData.map((product) => (
          <Shoppingcard
            key={product.id}
            img={product.image}
            price={product.price}
            discountedPrice={product.discountedPrice}
            description={product.description}
          />
        ))}

</div>
      </div>
    </div>
  );
}
