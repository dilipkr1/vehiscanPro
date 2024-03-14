import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import { AuthContext } from "../../context/AuthContext";
import heroImg from "../../images/vehiclean.png"

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, dispatch } =
    useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="fixed w-full z-10 top-0  bg-white z-1 flex  justify-between items-center h-25  py-3 px-3.5 lg:pt-7  border-gray border-b-0 ">
      <div className="p-2 flex justify-end w-1/3 ">
        <Link to="/">
          <img
            className="w-16 h-16"
            src={heroImg}
            alt="vehiclean_iamges"
          />
        </Link>
      </div>

      <ul className="customNavResponsive flex lg:w-2/3 lg:justify-center font-roboto text-main-500 leading-10 items-center gap-6 lg:gap-10 ">
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
        <Link to="/profile">
          <i className="fa-solid fa-user px-1 faSize"></i>
        </Link>
        {isAuthenticated ? (
          <button
            className="faSize font-roboto text-main-700 tracking-wide"
            onClick={handleLogout}
          >
            LogOut
          </button>
        ) : (
          <span className="faSize font-roboto text-main-700">
            <Link to="/login">Login</Link>
          </span>
        )}
        <div className=" ">
          <i className="lg:hidden fa-solid fa-bars faSize"></i>
          {/* <ul className="customNavResponsive">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Info</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
