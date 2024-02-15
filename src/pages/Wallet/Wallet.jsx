import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashnavbar from "../DashNav/Dashnavbar";

export default function Wallet() {
  return (
    <div>
      <div className="home text-main">
        <Sidebar />
        <div className="homeContainer">
          <Dashnavbar />
          <div className="mb-0 pt-5 px-5">
            <h2 className="text-2xl font-serif font-extraligh tracking-wider leading-10  text-main">Wallet</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
