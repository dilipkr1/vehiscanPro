import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashnavbar from "../DashNav/Dashnavbar";
import { DataGrid } from "@mui/x-data-grid";
import { packageColumns, packageRows } from "../../packageTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Packages() {
  const [data, setData] = useState(packageRows);
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
            <Link to={`#`} style={{ textDecoration: "none" }}>
              <div className="updateButton">Update</div>
            </Link>
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
              Our Packages
            </h2>
          </div>
           
          <div className="p-5">
            <DataGrid
              className="datagrid"
              rows={data}
              columns={packageColumns.concat(actionColumn)}
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
