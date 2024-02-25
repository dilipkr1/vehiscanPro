import "./new.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashnavbar from "../DashNav/Dashnavbar";
import Dashcopy from "../Dashcopy/Dashcopy";

const New = ({ inputs, title }) => {
  const naviagte = useNavigate();
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
      const url = "http://localhost:8000/api/customer/details";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      naviagte("/dashboard/customers");
      setCustomer({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        customerAddress: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Dashnavbar />
        <div className="top">
          <h1 className="text-2xl font-roboto tracking-wide">
            <i class="fa-solid fa-user"></i> {title}
          </h1>
        </div>
        <div className="bottom">
          <div className="right">
            <div className="container w-full">
              <form
                onSubmit={handleSubmit}
                className="ml-5 mt-10	w-full  p-10 rounded"
              >
                <div className="flex flex-wrap gap-0 w-full">
                  <div className=" lg:w-1/2 flex flex-col">
                    <label className="mb-2 text-lg" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      onChange={handleChange}
                      id="customerName"
                      name="customerName"
                      value={customer.customerName}
                      className="w-90 rounded formInput mr-10"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="lg:w-1/2 flex flex-col">
                    <label className="mb-2 text-lg" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-90 rounded formInput mr-10"
                      type="email"
                      placeholder="Email  "
                      onChange={handleChange}
                      id="customerEmail"
                      name="customerEmail"
                      value={customer.customerEmail}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-0 w-full mt-3">
                  <div className=" lg:w-1/2 flex flex-col">
                    <label className="mb-2 text-lg" htmlFor="Phone">
                      Phone
                    </label>
                    <input
                      required
                      className="w-90 rounded formInput mr-10"
                      type="Number"
                      placeholder="Mobile Number"
                      onChange={handleChange}
                      id="customerPhone"
                      name="customerPhone"
                      value={customer.customerPhone}
                    />
                  </div>
                  <div className="lg:w-1/2 flex flex-col">
                    <label className="mb-2 text-lg" htmlFor="email">
                      Address
                    </label>
                    <input
                      required
                      className="w-90 rounded formInput mr-10"
                      type="address"
                      placeholder="Address"
                      onChange={handleChange}
                      id="customerAddress"
                      name="customerAddress"
                      value={customer.customerAddress}
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-10  ">
                  <button
                    type="submit"
                    className="w-40 mr-8 bg-black   hover:bg-logoClr text-white   font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center  pb-2 mr-10 absolute bottom-0 right-10">
          <Dashcopy />
        </div>
      </div>
    </div>
  );
};

export default New;
