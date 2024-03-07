import React from "react";
import "./footer.css";
export default function () {
  return (
    <div className="dontDisplayOnmob py-10 bg-pricingcard text-pgcolor tracking-wide	font-roboto font-thin ">
      <div className="leftFooter mt-20 flex justify-evenly text-pgcolor leading-4">
        <div className="flex flex-col  gap-5">
          <p className="">
            Contact vehicle owner when in <br /> VehiClean Call vehicle owner
            with Privacy
          </p>
          <a href="#">Read More</a>
          <i></i>
          <ul className="flex gap-8">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook bg-white rounded px-2 py-2"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram bg-white rounded px-2 py-2"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter bg-white rounded px-2 py-2"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-youtube bg-white rounded px-2 py-2"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin bg-white rounded px-2 py-2"></i>
              </a>
            </li>
          </ul>
          {/* </div> */}
        </div>
        {/* <div className="lowerMiddle"> */}
        <div className="navItem flex flex-col">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
          </ul>
          {/* </div> */}
        </div>
        {/* <div className="higherMiddle"> */}
        <div className="navItem flex flex-col gap-8">
         
          {/* </div> */}
        </div>
        {/* <div className="right"> */}
        <div className="navItem flex flex-col gap-4">
          <a href="#">example@gmail.com</a>
          <p>+91 73-0000-7462</p>
          <a
            className="tracking-wider"
            href="https://maps.app.goo.gl/qDJCPWuXXKk7mZ647"
          >
            Address : C-2 Sagar Enclave, Nearbr <br /> Vande Matram Circle,
            Mansarovar, Jaipur, Rajasthan, 302020
          </a>
        </div>
      </div>
      {/* </div> */}
      <hr className="my-10" />
      <div className="flex justify-between lg:px-20">
        <div className="copyRight flex gap-4">
          <button className="bg-white hover:bg-pricingcard text-main-700 font-semibold  py-2 px-4 border border-blue-50 hover:border-transparent rounded">
            <a href="#">Download for Apple</a>
          </button>
          <button className="bg-transparent hover:bg-white text-main-700 font-semibold  py-2 px-4 border border-blue-50 hover:border-transparent rounded">
            <a href="#">Download for Android</a>
          </button>
        </div>
        <div className="text-pgcolor leading-4">
          <p>Copyright © 2024 VEHICLEAN. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
