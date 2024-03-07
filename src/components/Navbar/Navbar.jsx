import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { AuthContext } from "../../context/AuthContext";
import { display } from "@mui/system";

export default function Navbar() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="fixed w-full z-10 top-0  bg-white z-1 flex  justify-between items-center h-25  py-3 px-3.5 lg:pt-7  border-gray border-b-0 ">
      <div className="p-2 flex justify-end w-1/3 ">
        <Link to="/">
          <img
            className="w-16 h-16"
            src="/images/vehicln.png"
            alt="vehiclean_iamges"
          />
        </Link>
      </div>

      <ul className="customNavResponsive flex w-2/3 lg:justify-center font-roboto text-main-500 leading-10 items-center gap-6 ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="navRight flex lg:justify-center justify-end lg:mr-10  items-center w-full gap-3">
        <Link to="/dashboard">
          <i className="fa-solid fa-user px-1 faSize"></i>
        </Link>
        {isAuthenticated ? (
          " "
        ) : (
          <span className="faSize font-roboto text-main-700">
            <Link to="/login">Login</Link>
          </span>
        )}
        <i className="lg:hidden fa-solid fa-bars faSize"></i>
      </div>
    </div>
  );
}
