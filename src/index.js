import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CustomerProvider } from './context/customrContext'
import { SettingDataProvider } from './context/settingDetContext'
import { UserContextProvider } from './context/userContext'
import { TransactionProvider } from './context/transactonContext'
import { PackageProvider } from './context/packageContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PackageProvider>
        <TransactionProvider>
            <UserContextProvider>
                <CustomerProvider>
                    <SettingDataProvider>
                        <App />

                    </SettingDataProvider>
                </CustomerProvider>
            </UserContextProvider>
        </TransactionProvider>
    </PackageProvider>

);

