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
<div className="lg:flex-3 flex flex-wrap  justify-center lg:justify-start w-full items-center gap-7 lg:gap-0">


      <Card
        title="NGF132 Parking tags
"
        price="499"
        description="30 Days Money back, Dedicated Support and lifelong service.

"
        f1=" Lifetime service
"
        f2=" WhatsApp, SMS and Masked Call
"
        f3=" Add multiple numbers
"
        f4=" Add Emergency contact
"
      />
        <Card
        title="Business Card
"
        price="599"
        description="All Cards and features one price. Get more business with our Smart business card.



"
        f1=" Lifetime service
"
        f2=" WhatsApp, SMS and Masked Call
"
        f3=" Add multiple numbers
"
        f4=" Add Emergency contact
"
      />
        <Card
        title="Menu Tag
"
        price="1499"
        description="We are giving away 2 years complete free to first 2000 Menu tags, try Now.


"
        f1=" Lifetime service
"
        f2=" WhatsApp, SMS and Masked Call
"
        f3=" Add multiple numbers
"
        f4=" Add Emergency contact
"
      />
      </div>
    </div>
  );
}
