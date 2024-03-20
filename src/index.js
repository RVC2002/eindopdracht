import React from 'react';
import { createRoot } from 'react-dom'; // Importeer createRoot in plaats van ReactDOM
import './styles/index.css';
import App from './App';
import WeatherComponent from './components/WeatherComponent';
import { AuthProvider } from './gebruikersauthenticatiegegevens';

// Gebruik createRoot in plaats van ReactDOM.render
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <App />
            <WeatherComponent /> {/* Voeg de WeatherComponent toe */}
        </AuthProvider>
    </React.StrictMode>
);
