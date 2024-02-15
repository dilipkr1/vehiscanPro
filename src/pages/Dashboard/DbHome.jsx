import "./dbhome.css"

import Sidebar from "../../components/Sidebar/Sidebar";
import Dashnavbar from "../DashNav/Dashnavbar";
 // import "./home.scss";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";

const DbHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Dashnavbar />
 
        <div className="charts flex justify-center items-center text-8xl font-black text-pretty">
        <h1>Hello From  Dashboard  </h1>
          {/* <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
         
      </div>
    </div>
  );
};

export default DbHome;
