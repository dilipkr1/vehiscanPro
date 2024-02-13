import React, { useContext } from "react";
import { CustomerContext } from "../../context/customrContext";


const CustomerTable = () => { 
  



  return (
    <div>
      <h2>Customer Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        {/* <tbody>
          {customerData.map((customer , i) => (
            <tr  >
              <td>{i}</td>
              <td>{customer.customerName}</td>
              <td>{customer.customerEmail}</td>
              <td>{customer.customerPhone}</td>
              <td>{customer.customerAddress}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default CustomerTable;
