import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashnavbar from "../../pages/DashNav/Dashnavbar";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { PackageContext } from "../../context/packageContext";
import Avatar from "@mui/material/Avatar";
import { OrderContext } from "../../context/OrderContext";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function Profile() {
  const { orderData, setOrderData } = useContext(OrderContext);
  const { packageData, setPackageData } = useContext(PackageContext);
  const navigate = useNavigate();
  const { state, isAuthenticated } = useContext(AuthContext);
  const { user, Orders } = state;

  if (!Orders || Orders.length === 0) {
    return "You don't have any Orders";
  }

  const orderStatus = Orders[0].status;

  if (!isAuthenticated) {
    return navigate("/login");
  }

  if (!user || user.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div className="home text-main mt-20 pt-20 lg:mx-20 lg:px-20 flex flex-col">
      <div className="Profile flex flex-col justify-center items-center">
        <Avatar src="/broken-image.jpg" />
        <div className="flex justify-center ">
          {user.map((customer, index) => (
            <div className="flex gap-2" key={index}>
              <div>
                <p>Name: {customer.customerName}</p>
                <p>Email: {customer.customerEmail}</p>
              </div>
              <div>
                <p>Phone: {customer.customerPhone}</p>
                <p>Address: {customer.customerAddresss}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="orders">
        <h3>Your Orders</h3>
        {Orders.map((order) => (
          <div key={order._id}>
            {order.cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-5">
                <div>
                  <p>Qty..: {item.quantity}</p>
                  <p>Total: {item.subTotal}</p>
                </div>
                {packageData.map((product) => {
                  if (product._id === item.product_id) {
                    return (
                      <div className="">
                        <img
                          key={product._id}
                          src={product.packageImg}
                          alt={product.packageName}
                          className="w-10 h-10 ml-4"
                        />
                        <p>{product.packageName}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <h1>Your Order Status : {orderStatus}</h1>
      </div>
    </div>
  );
}
