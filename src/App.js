import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherComponent from './components/WeatherComponent';
import HolidayComponent from './components/HolidayComponent';
import LoginComponent from './components/LoginComponent';
import { AuthProvider } from './gebruikersauthenticatiegegevens';
import Navbar from './components/Navbar'

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Navbar /> {/* Voeg de Navbar component toe */}
                        <Routes>
                            <Route path="/weather" element={<WeatherComponent />} />
                            <Route path="/holidays" element={<HolidayComponent />} />
                            <Route path="/login" element={<LoginComponent />} />
                        </Routes>
                    </header>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
