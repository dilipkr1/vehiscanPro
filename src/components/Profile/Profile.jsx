import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashnavbar from "../../pages/DashNav/Dashnavbar";
 
export default function Profile() {
   return (
    <div className="home text-main">
      <Sidebar />
      <div className="homeContainer">
        <Dashnavbar />
        <div className="wallet">
        <h3>User Profile</h3>
      </div>
      </div>
     </div>
  );
}
