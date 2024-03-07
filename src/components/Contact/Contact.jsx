 
import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  // const [bgColor, setBgColor] = useState(null);
  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleBgColor = (color) => {
  //   setBgColor(color);
  //   setSelectedOption(color === bgColor ? null : color);
  // };

  return (
    <div className="contact">
      <div className="conatactNavbar">
        <img
          className="contactLogo"
          src="https://vehiclean.in/wp-content/uploads/2023/02/vehiclean-hd-logo.png"
          alt="logo_vehicCL"
        />
      </div>

      <div className="contactBox mobileBox">
        <div className="contactTitleBox">
          <hr className="upperHr" />
          <h3 className="contactTitle">Contact Vehicle Owner.</h3>
          <hr className="hrLine" />
          <p className="contactParagraph">
            Please select a reason why do you want to contact the owner.
          </p>
        </div>
        <div className="chooseOption">
          <label
            // style={{ backgroundColor:  "#FFA500" }}
            // onClick={() => handleBgColor("#FFA500")}
            className="custom"
          >
            <i className="fa-regular fa-sun"></i>The lights of this car is on.
            <input
              type="radio"
              className="ppearance-none checked:bg-red"
              name="radio"
            />
            <span className="checkmark"></span>
          </label>
          <label
            // style={{ backgroundColor: selectedOption === "#FF0000" ? bgColor : null }}
            // onClick={() => handleBgColor("#FF0000")}
            className="custom"
          >
            <i className="fa-solid fa-square-parking"></i>The car is in no parking.
            <input type="radio" checked="checked" name="radio" />
            <span className="checkmark"></span>
          </label>
          <label
            // style={{ backgroundColor: selectedOption === "#FF0000" ? bgColor : null }}
            // onClick={() => handleBgColor("#FF0000")}
            class="custom"
          >
            <i class="fa-solid fa-baby"></i>
            There is a baby or pet in car.
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label
            //  style={{ backgroundColor: selectedOption === "#FF0000" ? bgColor : null }}
            //  onClick={() => handleBgColor("#FF0000")}
            class="custom"
          >
            <i class="fa-solid fa-window-maximize"></i>
            The window or car is open.
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label
          //  style={{ backgroundColor: selectedOption === "#FF0000" ? bgColor : null }}
          //   onClick={() => handleBgColor("#FF0000")}
            class="custom"
          >
            <i class="fa-solid fa-triangle-exclamation"></i>
            Something wrong with this car.
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="contactBtn">
          <button className="btn">
            <a className="btnLink" href="/">
              Message
            </a>
          </button>
          <button className="btn">
            <a className="btnLink" href="tel:5551234567">
              Call Now
            </a>
          </button>
        </div>
        <hr className="hrLine" />
        <div className="contactFooterSec">
          <p>
            <a className="link" href="ttps://vehiclean.in/urgent">
              <span className="text-xs text-pgcolor tracking-tight">
                Urgency?
              </span>
            </a>
            <a className="link" href="https://vehiclean.in/connect">
              <span className="text-xs text-pgcolor tracking-tight font-extralight">
                Connect with VEHICONNECT
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
