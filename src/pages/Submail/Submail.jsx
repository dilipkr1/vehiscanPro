import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashnavbar from "../DashNav/Dashnavbar";
import { DataGrid } from "@mui/x-data-grid";
import { subColumns } from "../../submailsTable";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CustomerContext } from "../../context/customrContext";
import Switcher4 from "../Message/Messge";

export default function Submail() {
  const [isChecked, setIsChecked] = useState(false);

  const { customerData, setcustomerData } = useContext(CustomerContext);

  if (!customerData || customerData.length === 0) {
    return <div>Loading...</div>;
  }

  const rows = customerData.map((customer, index) => ({
    id: index + 1,
    ...customer,
  }));

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`#`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
              <Switcher4/>

            <div
              className="deleteButton"
              // onClick={() => deleteCustomer(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="home text-main">
        <Sidebar />
        <div className="homeContainer">
          <Dashnavbar />
          <div className="mb-0 pt-5 px-5">
            <h2 className="text-2xl font-serif font-extraligh tracking-wider leading-10  text-main">
              Subscribed Mails
            </h2>
          </div>

          <div className="p-5">
            <DataGrid
              rows={rows}
              className="datagrid"
              columns={subColumns.concat(actionColumn)}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
}
