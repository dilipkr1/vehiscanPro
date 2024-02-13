import "./dtatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../dataTableSource";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { CustomerContext } from "../../context/customrContext";

const Datatable = () => {
  const { customerData, setCustomerData } = useContext(CustomerContext);
  // const { setCustomerData } = useContext(CustomerContext);
  // const [customerData, setCustomerData] = useState();

  if (!customerData || customerData.length === 0) {
    return <div>Loading...</div>;
  }

  const rows = customerData.map((customer, index) => ({
    id: index + 1,
    ...customer,
  }));

  async function deleteCustomer(id) {
    try {
      const response = await fetch(
        `http://localhost:8000/api/customer/delete-customer/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to delete customer with ID ${id}`);
      }
      console.log(`Customer with ID ${id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
    const filterData = customerData.filter((item) => item._id !== id);
    setCustomerData(filterData);
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link
              to={`/dashboard/customers/${params.row._id}/edit`}
              style={{ textDecoration: "none" }}
            >
              <div className="updateButton">Update</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => deleteCustomer(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable font-serif text-sm">
      <div className="datatableTitle">
        <h2 className="text-xl font-serif font-black tracking-wider leading-10  text-main"> Customer List</h2>
        <Link to="/dashboard/customers/new" className="link">
          <AddCircleSharpIcon className="AddCircleSize"/>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[100]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
