import "./setting.css";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashnavbar from "../DashNav/Dashnavbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useNavigate } from "react-router-dom";
import Dashcopy from "../Dashcopy/Dashcopy";
export default function Global() {
const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  
  function handlChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append("businessImage", file);
      // formDataWithImage.append("businessImage2", file2);
      formDataWithImage.append("businessName", formData.businessName);
      formDataWithImage.append("phone", formData.phone);
      formDataWithImage.append("email", formData.email);
      formDataWithImage.append("address", formData.address);
      formDataWithImage.append("bio", formData.bio);

      const response = await fetch(
        "http://localhost:8000/api/settings/businessDetails",
        {
          method: "POST",
          body: formDataWithImage,
        }
      );

      if (response.ok) {
        // setFile(formData.get('businessImage'))
        navigate("/dashboard");
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
        <div className="homeContainer relative">
          <Dashnavbar />

          <div className="top">
            <h1 className="text-2xl font-roboto tracking-wide">Settings</h1>
          </div>
          <div className="container formContainer bottom border-slate-200 border-2">
            <form
              onSubmit={handleSubmit}
              enctype="multipart/form-data"
              className="ml-5 mt-15 p-7 rounded"
            >
              <div className="w-40 mx-7 p-3 pr-10 absolute right-0 top-30">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt="vehiConnect_logo"
                />
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    name="businessImage2"
                    type="file"
                    id="file2"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <div className="w-60 m-4 p-3 absolute right-0 bottom-10">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt="vehiConnect_logo"
                />
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    name="businessImage"
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
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
          </div>
          <div className="flex justify-center  pb-2 mr-10">
            <Dashcopy />
          </div>
        </div>
      </div>
    </div>
  );
}
