import React from "react";
import vehicleanImage from "../../images/vlogo.png";
export default function Dashcopy() {
  return (
    <div className="h-30 w-full text-pgcolor text-xs  flex justify-around">
      <img className="h-6 w-auto" src={vehicleanImage} alt="" />
      <span className="w-auto"> © 2024 Vehicle an Pvt Limited.</span>
    </div>
  );
}
