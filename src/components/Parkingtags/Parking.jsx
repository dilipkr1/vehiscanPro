import React, { useState } from "react";
import "./parking.css";
export default function Parking() {
  // const { parkingtag, setParkingTag } = useState("");

  function clickHandler() {}
  return (
    <div>
      <div className="lg:flex lg:flex-row lg:justify-between lg:items-center  customMobflexCol  justify-center items-center  gap-6 mb-10 mx-5 lg:gap-2  md:px-20 md:py-7">
        <div className="lg:flex-col ">
          <div className="parkingtags flex justify-center items-center gap-3 ">
            <a className="p-3" href="#">
              <i className="fa-solid fa-qrcode mx-3 px-3 py-3 bg-color7 rounded-full"></i>
              Parking Tags
            </a>
          </div>
          <div className="parkingMid flex justify-between">
            <a href="#" className="mr-10">
              <i className="fa-solid fa-briefcase mx-1 py-3 px-3 bg-color7 rounded-full"></i>
              Business Card
            </a>
            <a href="#" className="ml-4">
              <i className="fa-solid fa-door-open mx-1 px-3 py-3 bg-color7 rounded-full"></i>
              Door Tag
            </a>
          </div>
          <div className="parkingTagBtm flex justify-center py-3">
            <a href="#">
              <i className="fa-solid fa-spoon mx-3 px-3 py-3 bg-color7 rounded-full	"></i>
              Menu Tag
            </a>
          </div>
        </div>
        <div className="displayImageOnClick gap-6 lg:flex flex customMobflexCol justify-center text-main font-roboto lg:flex-1">
          <div className="">
            <img className="w-90" src="/images/parking1.png" alt="parking1_image" />
          </div>
          <div className="gap-6">
            <span className="text-pgcolor tracking-wide font-thin">
              Vehicle Parking Tags
            </span>
            <h3 className="giveSpace my-5 sm:text-base text-4xl tracking-wider   text-left font-700 font-bold">
              Give people option to contact you in case of any issue with your
              parked vehicle.
            </h3>
            <p className="text-pgcolor tracking-wide leading-6">
              Your contact details will not be shared, but anyone who has any
              issue with your parked vehicle can contact you. We will send you
              WhatsApp, SMS and Masked call.
            </p>
            <button
              type="button"
              className="my-4 w-40 text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {" "}
              <a className="no-underline " href="#">
                Shop Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
