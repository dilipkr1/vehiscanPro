import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

const SettingDataContext = createContext();

const SettingDataProvider = ({ children }) => {
  const [settingData, setSettingData] = useState();
  useEffect(() => {
    fetchSettingsData().then(data => {
      setSettingData(data);
    });
  }, []);

   const fetchSettingsData = async () => {
    const response = await fetch('');
    const data = await response.json();
    console.log(data)
    return data;
  };

  return (
    <SettingDataContext.Provider value={{ settingData, setSettingData }}>
      {children}
    </SettingDataContext.Provider>
  );

}
 
export {SettingDataContext, SettingDataProvider}