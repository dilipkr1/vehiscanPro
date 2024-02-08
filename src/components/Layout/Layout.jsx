import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import React from "react";
import { Outlet } from "react-router-dom";
import Workdetails from "../Howworks/Workdetails";
import Bestsellingpro from "../Bestproduct/Bestsellingpro";
import Parking from "../Parkingtags/ParkingTag";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Workdetails/>
      <Parking/>
      <Bestsellingpro/> */}
      <Footer />
    </div>
  );
}

export default Layout;
