import React from 'react';
import WeatherComponent from './components/WeatherComponent';
import HolidayComponent from './components/HolidayComponent';
import LoginComponent from './components/LoginComponent';
import { AuthProvider } from './gebruikersauthenticatiegegevens';

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <header className="App-header">
                    <div className="weather-container">
                        <WeatherComponent />
                    </div>
                    <div className="holiday-container">
                        <HolidayComponent />
                    </div>
                    <LoginComponent />
                </header>
            </div>
        </AuthProvider>
    );
}

export default App;