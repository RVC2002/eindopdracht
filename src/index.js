import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WeatherComponent from './components/WeatherComponent';
import { AuthProvider } from './gebruikersauthenticatiegegevens';

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
            <WeatherComponent /> {/* Voeg de WeatherComponent toe */}
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

