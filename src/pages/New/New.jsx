import "./new.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../DashNav/Dashnavbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// import axios from 'axios'

const New = ({ inputs, title }) => {
  const naviagte = useNavigate();
  // const [file, setFile] = useState("");
  const [customer, setCustomer] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerAddress: "",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const url = 'http://localhost:8000/api/customer/details';  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      naviagte('/dashboard/customers')
       setCustomer({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        customerAddress: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
     }
  };
  

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="text-2xl font-roboto tracking-wide"><i class="fa-solid fa-user"></i> {title}</h1>
        </div>
        <div className="bottom">
          {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="right">
            <div className="container mx-auto">
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                <div className="mb-4">
                  <label
                    htmlFor="customerName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Customer Name
                  </label>
                  <input
                  required
                    type="text"
                    id="customerName"
                    name="customerName"
                    value={customer.customerName}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter customer name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                  required
                    type="email"
                    id="customerEmail"
                    name="customerEmail"
                    value={customer.customerEmail}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Phone
                  </label>
                  <input
                  required
                    type="Number"
                    id="customerPhone"
                    name="customerPhone"
                    value={customer.customerPhone}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Address
                  </label>
                  <textarea
                  required
                    id="customerAddress"
                    name="customerAddress"
                    value={customer.customerAddress}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter address"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-black hover:bg-blue-700 text-white   font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
