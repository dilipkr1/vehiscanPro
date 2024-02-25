import React, { createContext, useState, useEffect } from 'react';

const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
  const [customerData, setCustomerData] = useState();
  useEffect(() => {
    fetchCustomerData().then(data => {
      setCustomerData(data);

    });
  }, []);
 
  const fetchCustomerData = async () => {
    const response = await fetch('http://localhost:8000/api/customer/details');
    const data = await response.json();

    return data;
  };

  return (
    <CustomerContext.Provider value={{ customerData, setCustomerData }}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerProvider };
