import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashnavbar from "../DashNav/Dashnavbar";
import { DataGrid } from "@mui/x-data-grid";
import { packageColumns } from "../../packageTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dashcopy from "../Dashcopy/Dashcopy";
import Button from "@mui/material/Button";
import { PackageContext } from "../../context/packageContext";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function Packages() {
  const [isLoading, setIsLoading] = useState(true);
  const { packageData, setPackageData } = useContext(PackageContext);

  useEffect(() => {
    setIsLoading(false);
  }, [packageData]);

  if (!packageData || packageData.length === 0) {
    return <p>loading...</p>;
  }

  const rows = packageData.map((packageData, index) => ({
    id: ++index,
    ...packageData,
  }));

  const deletePackage = async (id) => {
    try {
      const url = `http://localhost:8000/api/packages/delete-package/${id}`;
      const response = await axios.delete(url);
      console.log(`Package with ID ${id} deleted successfully`);
      const filteredData = packageData.filter((item) => item._id !== id);
      setPackageData(filteredData);
    } catch (error) {
      console.log("Error", error);
      throw new Error(`Failed to delete package with ID ${id}`);
    }
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
            <Link to={`#`} style={{ textDecoration: "none" }}>
              <div className="updateButton">
                <EditIcon />
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => deletePackage(params.row._id)}
            >
              <IconButton aria-label="delete" size="large">
                <DeleteIcon style={{ color: "#d11a2a" }} fontSize="inherit" />
              </IconButton>
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
          <div className="flex justify-end items-end">
            <Link to="create-packages">
              <Button
                style={{ marginRight: "100px", backgroundColor: "#ff5722" }}
                variant="contained"
              >
                Add Packages
              </Button>
            </Link>
          </div>

          <div className="p-5">
            <DataGrid
              className="datagrid"
              rows={rows}
              columns={packageColumns.concat(actionColumn)}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
            />
          </div>
        </div>
        <div className="flex justify-center  pb-2 mr-10 absolute bottom-0 right-10">
          <Dashcopy />
        </div>
      </div>
    </div>
  );
}
