import { useParams } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { CustomerContext } from "../../context/customrContext";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const naviagte = useNavigate();
  const { customerData, setCustomerData } = useContext(CustomerContext);
  const [customer, setCustomer] = useState(null);
  const { customerid } = useParams();
  console.log(customerData)

  useEffect(() => {
    const foundCustomer = Object.values(customerData)
      .flat()
      .find((customer) => customer._id === customerid);

    if (foundCustomer) {
      setCustomer(foundCustomer);
    }
  }, [customerData, customerid]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/customer/update/" + customerid,
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Failed to update customer data");
      }

      naviagte("/dashboard/customers");
    } catch (error) {
      console.error("Error updating customer data:", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };
  const customerName = customer?.customerName || "";
  const customerEmail = customer?.customerEmail || "";
  const customerPhone = customer?.customerPhone || "";
  const customerAddress = customer?.customerAddress || "";

  return (
    <div>
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
            value={customerName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter customer name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            required
            type="email"
            id="customerEmail"
            name="customerEmail"
            value={customerEmail}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone
          </label>
          <input
            required
            type="Number"
            id="customerPhone"
            name="customerPhone"
            value={customerPhone}
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
            id="customerAddress"
            name="customerAddress"
            value={customerAddress}
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
  );
}
