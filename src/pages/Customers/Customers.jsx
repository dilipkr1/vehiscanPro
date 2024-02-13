import "./customers.css";
import React, { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import DashNav from "../DashNav/Dashnavbar";
import Datatable from "../../components/Datatable/Datatable";

const Customers = () => {
 
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <DashNav />
        <Datatable />
      </div>
    </div>
  );
};

export default Customers;
