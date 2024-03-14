import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./messages.css";
import { useNavigate } from "react-router-dom";
import vehicln from "../../images/vehiclean.png";
import { OrderContext } from "../../context/OrderContext";
import { CustomerContext } from "../../context/customrContext";

export default function Messages() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [value, setValue] = useState(null);
  const [selectedOption, setSelectedOption] = useState("sun");
  const { orderData } = useContext(OrderContext);
  const { customerData } = useContext(CustomerContext);

  useEffect(() => {
    setIsLoading(false);
  }, [orderData]);

  if (!orderData || orderData.length === 0) {
    return <p>Loading ...</p>;
  }

  if (!customerData || customerData.length === 0) {
    return <p>Loading..</p>;
  }

  const uid = "3247";
  const getUid = orderData.cartItems.filter((order) => order.uid === uid);
  const userId = getUid[0].userId;
  let ownerPhoneNum;
  customerData.filter((customer) => {
    if (customer.userId === userId) {
      ownerPhoneNum = customer.customerPhone;
    }
  });

  const handleMessage = (e) => {
    const getvalue = e.target.value;
    setValue(getvalue);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(value);
    const response = await axios.post(
      "http://localhost:8000/api/messages/send-message",
      {
        selectedReason: value,
      }
    );
    if (response.status === 200) {
      navigate("/message/success");
    }
    console.log(response.data);
  };
  function changeBackgroundColor(option) {
    setSelectedOption(option);
  }
 
  const QrUid = uid;
  const ownerNumber = ownerPhoneNum;

  const handleCall = async () => { 
    const username = "7852010838";
    const password = "admin";
    const key = QrUid;
    const number = ownerNumber;
    console.log(number);

    const auth = btoa(`${username}:${password}`);
    try {
      const response = await fetch("https://telephonycloud.co.in/api/v1/mask", {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "http://vehiclean.in"
        },
        body: new URLSearchParams({
          key: key,
          number: number,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to call API");
      }

      const data = await response.json();
      navigate("/message/success");
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="conatactNavbar">
        <a href="/">
          <img className="contactLogo" src={vehicln} alt="logo_vehicCL" />
        </a>
      </div>
      <hr className="bg-black w-full " />
      <div className="contact w-full">
        <div className="contactBox">
          <div className="contactTitleBox gap-1">
            <h3 className="contactTitle pb-3 font-bold font-sans text-center text-2xl tracking-wide leading-20">
              Contact Vehicle Owner.
            </h3>
            <hr className="w-full" />
            <p
              style={{ padding: "10px 10px" }}
              className="contactParagraph tracking-wide font-sans font-normal"
            >
              Please select a reason why do you want to contact the owner.
            </p>
          </div>
          <form onSubmit={handlePost}>
            <div className="chooseOption">
              <label
                className={`custom ${selectedOption === "sun" ? "active" : ""}`}
                onClick={() => changeBackgroundColor("sun")}
              >
                <i className="fa-regular fa-sun pr-2"></i>The lights of this car
                are on.
                <input
                  type="radio"
                  value="1"
                  name="radio"
                  onClick={handleMessage}
                />
                <span className="checkmark"></span>
              </label>
              <label
                className={`custom ${
                  selectedOption === "parking" ? "active" : ""
                }`}
                onClick={() => changeBackgroundColor("parking")}
              >
                <i className="fa-solid fa-square-parking pr-2"></i>The car is in
                no parking.
                <input
                  type="radio"
                  name="radio"
                  value="2"
                  onClick={handleMessage}
                />
                <span className="checkmark"></span>
              </label>
              <label
                className={`custom ${
                  selectedOption === "baby" ? "active" : ""
                }`}
                onClick={() => changeBackgroundColor("baby")}
              >
                <i className="fa-solid fa-baby pr-2"></i>There is a baby or pet
                in car.
                <input
                  type="radio"
                  name="radio"
                  value="3"
                  onClick={handleMessage}
                />
                <span className="checkmark"></span>
              </label>
              <label
                className={`custom ${
                  selectedOption === "window" ? "active" : ""
                }`}
                onClick={() => changeBackgroundColor("window")}
              >
                <i className="fa-solid fa-window-maximize pr-2"></i>The window
                or car is open.
                <input
                  type="radio"
                  name="radio"
                  value="4"
                  onClick={handleMessage}
                />
                <span className="checkmark"></span>
              </label>
              <label
                className={`custom ${
                  selectedOption === "wrong" ? "active" : ""
                }`}
                onClick={() => changeBackgroundColor("wrong")}
              >
                <i className="fa-solid fa-triangle-exclamation pr-2"></i>
                Something wrong with this car.
                <input
                  type="radio"
                  name="radio"
                  value="5"
                  onClick={handleMessage}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="contactBtn text-white">
              <button type="submit" className="btn">
                Message
              </button>
              <button className="btn text-white">
                <a onClick={handleCall} href={`tel:01205136386,${uid}`}>
                  Call Now
                </a>{" "}
              </button>
            </div>
          </form>

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
    </div>
  );
}
