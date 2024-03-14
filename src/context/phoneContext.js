import React, { createContext, useState, useEffect } from 'react';

const FamilyContactContext = createContext();

const FamilyContactProvider = ({ children }) => {
  const [familyContactData, setFamilyContactData] = useState();

  useEffect(() => {
    fetchFamilyContactData().then(data => {
      setFamilyContactData(data);
    });
  }, []);

  const fetchFamilyContactData = async () => {
    // const response = await fetch('http://localhost:8000/api/contacts/get-contacts');
    // const data = await response.json();

    // return data;
  };

  return (
    <FamilyContactContext.Provider value={{ familyContactData, setFamilyContactData }}>
      {children}
    </FamilyContactContext.Provider>
  );
};

export { FamilyContactContext, FamilyContactProvider };
