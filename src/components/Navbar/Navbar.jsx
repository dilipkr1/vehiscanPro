import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Login from "../Login/Login";

export default function Navbar() {
  return (
    <div className="fixed w-full z-10 top-0  bg-white z-1 flex  justify-between items-center h-25  py-3 px-3.5 lg:pt-7  border-gray border-b-0 ">
      <div className="p-2 flex justify-end w-1/3 ">
        <img
          className="w-16 h-16"
          src="/images/vehicln.png"
          alt="vehiclean_iamges"
        />
      </div>

      <ul className="customNavResponsive flex w-2/3 lg:justify-center font-roboto text-main-500 leading-10 items-center gap-6 ">
        <li>
          <Link to="/">Home</Link>
          {/* <a href="#">Home</a> */}
        </li>
        <li>
          {/* <a href="#">Shop</a> */}
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          {/* <a href="#">News</a> */}
          <Link to="/news">News</Link>
        </li>
        <li>
          {/* <a href="#">Contact</a> */}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="navRight flex lg:justify-center justify-end lg:mr-10  items-center w-full gap-3">
        <Link to="/nopage">
          <i className="fa-solid fa-user px-1 faSize"></i>
        </Link>
        <span className="faSize font-roboto text-main-700">
          <Link to="/login">Login</Link>
        </span>
        <i className="lg:hidden fa-solid fa-bars faSize"></i>
      </div>
    </div>
  );
}
