import React from "react";
import "./bestselling.css";
import Card from "./Card";

export default function Bestsellingpro(props) {
  return (
    <div className="mt-11 bg-pricingcard px-10">
      <div className=" header flex flex-col justify-center items-center text-center text-main gap-2 px-10 ">
        <h3 className="lg:text-3xl my-5 sm:text-base text-3xl tracking-wider   text-left font-700 font-extrabold">
          Some of our Best Selling Product
        </h3>
        <p className="text-pgcolor text-xl tracking-wide leading-6  pb-5">
          Get your Parking Tag, Business Card or Tag for Menu today.{" "}
        </p>
      </div>
      <div className=" w-full items-center gap-7 lg:gap-0">
        <Card />
      </div>
    </div>
  );
}
