import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CustomerProvider } from './context/customrContext'
import { SettingDataProvider } from './context/settingDetContext'
import { AuthProvider } from './context/AuthContext';
import { TransactionProvider } from './context/transactonContext'
import { PackageProvider } from './context/packageContext';
import { CartProvider } from './context/cartContext'
import { OrderProvider } from './context/OrderContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <OrderProvider>
            <CartProvider>
                <PackageProvider>
                    <TransactionProvider>
                        <CustomerProvider>
                            <SettingDataProvider>

                                <App />

                            </SettingDataProvider>
                        </CustomerProvider>
                    </TransactionProvider>
                </PackageProvider>
            </CartProvider>
        </OrderProvider>
    </AuthProvider>
);

