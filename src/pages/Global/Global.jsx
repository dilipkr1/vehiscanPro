import "./setting.css";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashnavbar from "../DashNav/Dashnavbar";
import { SettingDataContext } from "../../context/settingDetContext";
import { useNavigate } from "react-router-dom";
import vehicleanImage from "../../images/vlogo.png";
import Dashcopy from "../Dashcopy/Dashcopy";
export default function Global() {
  const navigate = useNavigate();
  const { settingData } = useContext(SettingDataContext);
  console.log(settingData);
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    email: "",
    address: "",
    bio: "",
  });

  const customerid = "65cb574d3aa32d9a197b2002";

  useEffect(() => {
    if (settingData) {
      const flattenedData = Object.values(settingData).flat();
      const foundSettingData = flattenedData.find(
        (data) => data && data._id === customerid
      );

      if (foundSettingData) {
        setFormData(foundSettingData);
      } else {
        console.log("Setting data with the specified ID not found.");
      }
    } else {
      console.log("Setting data is undefined or null.");
    }
  }, [settingData, customerid]);

  function handlChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/api/settings/businessDetails",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        navigate("/dashboard/custoemrs/global");
        console.log("Request successful");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
      <div className="home text-main">
        <Sidebar />
        <div className="homeContainer">
          <Dashnavbar />
          <div className="top">
            <h1 className="text-2xl font-roboto tracking-wide">Settings</h1>
          </div>
          <div className="container formContainer bottom border-slate-200 border-2">
            <form onSubmit={handleSubmit} className="ml-5 mt-15	   p-7 rounded">
              <div className="flex flex-wrap gap-0 w-full mt-3">
                <div className=" lg:w-1/2 flex flex-col">
                  <label className="mb-2 text-lg" for="full_name">
                    Business Name:
                  </label>
                  <input
                    onChange={handlChange}
                    className="w-90 rounded formInput mr-10"
                    placeholder="Bussiness Name"
                    type="text"
                    id="full_name"
                    name="businessName"
                    value={formData.businessName}
                    required
                  />
                </div>
                <div className=" lg:w-1/2 flex flex-col">
                  <label className="mb-2 text-lg" for="phone_number">
                    Phone Number:
                  </label>
                  <input
                    onChange={handlChange}
                    className="w-90 rounded formInput mr-10"
                    type="tel"
                    id="phone_number"
                    name="phone"
                    value={formData.phone}
                    placeholder="+990 3343 7865"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-0 w-full mt-3">
                <div className=" lg:w-1/2 flex flex-col">
                  <label className="mb-2 text-lg" for="email">
                    Email Address:
                  </label>
                  <input
                    onChange={handlChange}
                    className="w-90 rounded formInput mr-10"
                    placeholder="Bussiness Email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    required
                  />
                </div>
                <div className="lg:w-1/2 flex flex-col">
                  <label className="mb-2 text-lg" for="address">
                    Address:
                  </label>
                  <input
                    onChange={handlChange}
                    className="w-90 rounded formInput mr-10"
                    placeholder="address"
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    required
                  />
                </div>
              </div>
              <div className="lg:w-full flex flex-col mt-3">
                <label className="mb-2 text-lg" for="bio">
                  BIO:
                </label>
                <textarea
                  onChange={handlChange}
                  className="w-90 rounded formInput mr-10"
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  rows="4"
                  cols="60"
                ></textarea>
              </div>

              <div className="mt-5 flex justify-center ">
                <button
                  type="submit"
                  className="w-40 bg-black hover:bg-logoClr hover:text-white  text-white   font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save Now
                </button>
              </div>
            </form>

            <div className="m-10 p-4">
              <img src={vehicleanImage} alt="" />
            </div>
          </div>
          <div className="flex justify-center  pb-2 mr-10">
            <Dashcopy />
          </div>
        </div>
      </div>
    </div>
  );
}
