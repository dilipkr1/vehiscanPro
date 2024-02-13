import "./single.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../DashNav/Dashnavbar";
import { useContext } from "react";
import { CustomerContext } from "../../context/customrContext";
import { useParams } from "react-router-dom";

const Single = () => {
  const customerData = useContext(CustomerContext);
  const { customerid } = useParams();
  // console.log(customerData);

  if (!customerData || customerData.length === 0) {
    return <div>Loading...</div>;
  }


  function getCustomer(customerData, customerId) {
    for (let key in customerData) {
      const customersArray = customerData[key];
      for (let i = 0; i < customersArray.length; i++) {
        const customer = customersArray[i];
        if (customer._id === customerId) {
          console.log("Customer found:", customer);
          return customer;
        }
      }
    }
    console.log("Customer not found");
    return null;
  }

  const customerDetails = getCustomer(customerData, customerid);

 
  return (
    <div class="mt-20 ml-20 bg-white overflow-hidden shadow rounded-lg border-none lg:w-1/3">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900 relative">
          Customer Profile
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          This is some information about the Customer.
        </p>
      </div>
      <div class="px-4 py-5 sm:p-0 ">
        <div className="editButton">Edit</div>
        <dl class="sm:divide-y  sm:divide-gray-200">
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-lg font-medium text-main font-roboto">Full name</dt>
            <dd class="mt-1  ml-4 text-main font-normal  sm:mt-0 sm:col-span-2">
              {customerDetails.customerName}
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-lg font-medium text-main font-roboto">
              Email address
            </dt>
            <dd class="mt-1  ml-4 text-main font-normal  sm:mt-0 sm:col-span-2">
              {customerDetails.customerEmail}
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-lg font-medium text-main font-roboto">
              Phone number
            </dt>
            <dd class="mt-1  ml-4 text-main font-normal  sm:mt-0 sm:col-span-2">
              {customerDetails.customerPhone}
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-lg font-medium text-main font-roboto">Address</dt>
            <dd class="mt-1  ml-4 text-main font-normal  sm:mt-0 sm:col-span-2">
              {customerDetails.customerAddress}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Single;
