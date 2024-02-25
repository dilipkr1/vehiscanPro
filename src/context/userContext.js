

import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [customer, setCustomer] = useState(null);

  return (
    <UserContext.Provider value={{ customer, setCustomer }}>
      {children}
    </UserContext.Provider>
  );
};

export const useCustomer = () => useContext(UserContext);
