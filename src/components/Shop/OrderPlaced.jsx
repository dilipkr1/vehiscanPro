import React from "react";
import orderPlaced from "../../images/order-placed.gif";
const OrderPlaced = () => {
  return (
    <div className=" mt -20 pt-20 bg-logoClr w-100 h-100 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img
          className="my-10 py-15 rounded-xl w-20 h-20"
          src={orderPlaced}
          alt="orderPlaced_img"
        />

        <span className="text-white text-center text-xl font-sans mb-10  ">
          Successfully You Order has been Placed{" "}
          <a className="underline" href="/profile">
            see orders
          </a>
        </span>
      </div>
    </div>
  );
};

export default OrderPlaced;
