import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CustomerProvider } from './context/customrContext'
import {SettingDataProvider} from './context/settingDetContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CustomerProvider>
        <SettingDataProvider>
            <App />
        </SettingDataProvider>
    </CustomerProvider>

);

