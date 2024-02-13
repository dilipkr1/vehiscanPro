import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="flex lg:justify-start lg:px-20 lg:flex-row justify-center lg:text-left lg:items-start items-center customMobflexCol lg:my-25 lg:px-50 mx-8 my-20 font-roboto customTextalign">
      <div className="flex lg:justify-start  flex-col items-end">
        <a href="http://localhost:3000/">
          <img
            className="lg:w-90 lg:pt-10"
            src="/images/home1.png"
            alt="home1_images"
          />
        </a>
      </div>

      <div className="lg:text-left lg:flex lg:flex-col lg:items-start text-right ">
        <span className="lg:text-left customTextalign text-black-500">
          NGF132 - Now Get Found.
        </span>
        <h1 className="giveSpace customTextalign mt-2.5 mx-0 mb-5 lg:text-3xl  text-4xl font-roboto tracking-wide font-bold text-main font-700  lg:text-left  leading-7.2 ">
          Let people contact you in case of any issue with your parked vehicle
        </h1>
        <p className="giveSpace text-pgcolor customTextalign lg:text-left sm:text-base leading-30">
          Your Phone number is not shared, and anyone with a smartphone can
          contact you for any issues with your parked vehicle.
        </p>

        <ul className="mt-10 mb-4 flex customMobflexCol  lg:flex-row justify-center items-center text-left lg:gap-4">
          <li className="list-square rounded-md playStore flex justify-center items-center bg-black hover:bg-white hover:text-black text-white mb-4 text-sm">
            <a
              className="flex justify-center items-center py-2.5 px-5"
              href="#"
            >
              <i className="fa-brands fa-apple fa-3x"></i>
              <span className="flex flex-col px-2 text-lg">
                <span className="text-sm inline-flex leading-tight">
                  Available on the{" "}
                </span>
                App Store
              </span>
            </a>
          </li>
          <li className="list-square rounded-md playStore flex justify-center items-center bg-white hover:bg-black hover:text-white text-black mb-4 text-sm">
            <a
              className="flex justify-center items-center py-2.5 px-5"
              href="#"
            >
              <i className="fa-solid fa-play fa-3x"></i>
              <span className="flex flex-col px-2 text-lg">
                <span className="text-sm inline-flex leading-tight">
                  Available on the{" "}
                </span>
                Google Play
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
