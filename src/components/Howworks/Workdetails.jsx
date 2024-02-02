import React from "react";
import "./workingdetails.css";

// import { workingDetails } from "./workingdetails";

export default function Workdetails() {
  return (  
    <div className="gap-3  flex flex-wrap justify-center items-center lg:mx-20">
      <div className="hover:shadow-boxShadow1  flex flex-col justify-center items-center text-center mt-7 p-5 lg:p-10 lg:mt-7 max-w-sm bg-white rounded-lg h-45  dark:bg-gray-800">
        <div>
          <div className="custombgColor">
            <i className=" iconSize fa-solid fa-white fa-mask px-3 py-3 rounded-full bg-color1"></i>
          </div>
          <h5 className="my-3 text-2xl font-bold tracking-tight ">
            Private Contact
          </h5>
 
           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Your contact details are not shared when someone contacts you.
          </p>
        </div>
      </div>
      <div class="hover:shadow-boxShadow1 flex flex-col justify-center items-center text-center mt-7 p-5 max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="">
          <i className="iconSize  fa-brands fa-whatsapp px-3 py-3 rounded-full bg-color2"></i>
          <h5 className="my-3 text-2xl font-bold tracking-tight ">
          WhatsApp Update
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Receive Updates on your WhatsApp, SMS and Also Masked Calls.
          </p>
        </div>
      </div>
      <div class="hover:shadow-boxShadow1 flex flex-col justify-center items-center text-center mt-7 p-5 max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="">
          <i className="iconSize  fa-solid fa-file fa-3x px-3 py-3 rounded-full bg-color3"></i>
          <h5 className="my-3 text-2xl font-bold tracking-tight ">
          Upload Files
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Add your vehicle documents, access with OTP.
          </p>
        </div>
      </div>
      <div class="hover:shadow-boxShadow1 flex flex-col justify-center items-center text-center mt-7 p-5 max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="">
          <i className="iconSize fa-solid fa-rupee-sign px-3 py-3 rounded-full bg-color4"></i>
          <h5 className="my-3 text-2xl font-bold tracking-tight ">
          One time Buy
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Buy the tag once, and access all free services always.
          </p>
        </div>
      </div>
      <div class="hover:shadow-boxShadow1 flex flex-col justify-center items-center text-center mt-7 p-5 max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="">
          <i className="iconSize  fa-solid fa-truck-medical px-3 py-3 rounded-full bg-color5"></i>
          <h5 className="my-3 text-2xl font-bold tracking-tight ">
          Emergency Call
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Add your emergency contact details in the tag
          </p>
        </div>
      </div>
      <div class="hover:shadow-boxShadow1 flex flex-col justify-center items-center text-center mt-7 p-5 max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="">
          <i className=" iconSize fa-solid fa-lock px-3 py-3 rounded-full bg-color6"></i>
          <h5 className="my-3 text-2xl font-bold tracking-tight ">
          Vehicle IN and Out Logs
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Societies and corporate can manage vehicle entry logs using the same Tag.          </p>
        </div>
      </div>
    </div>
  );
}
