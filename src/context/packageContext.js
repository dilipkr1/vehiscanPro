import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const PackageContext = createContext();

const PackageProvider = ({ children }) => {
  const [packageData, setPackageData] = useState();

  useEffect(() => {
    fetchPackageData();
  }, []);

  const fetchPackageData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/packages/get-package');
      setPackageData(response.data);
    } catch (error) {
      console.error('Error fetching package data:', error);
    }
  };

  return (
    <PackageContext.Provider value={{ packageData, setPackageData }}>
      {children}
    </PackageContext.Provider>
  );
};

export { PackageContext, PackageProvider };
