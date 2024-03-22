// Importeer de benodigde componenten
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import WeatherComponent from './components/WeatherComponent';
import HolidayComponent from './components/HolidayComponent'; // Importeer HolidayComponent
import LoginComponent from './components/LoginComponent';
import { AuthProvider } from './gebruikersauthenticatiegegevens';
import Navbar from './components/Navbar';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Navbar>
                            <div className="Navbar-left">
                                {/* Link naar WeatherComponent */}
                                <FontAwesomeIcon icon={faCalendarAlt} />
                            </div>
                            <div className="Navbar-center">
                                {/* Zoekbalk hier */}
                            </div>
                            <div className="Navbar-right">
                                {/* Link naar LoginComponent */}
                                <FontAwesomeIcon icon={faSignInAlt} />
                            </div>
                        </Navbar>
                        <Routes>
                            {/* Standaardroute leidt naar WeatherComponent */}
                            <Route path="/" element={<WeatherComponent />} />
                            <Route path="/holidays" element={<HolidayComponent />} /> {/* Route naar HolidayComponent */}
                            <Route path="/login" element={<LoginComponent />} /> {/* Route naar LoginComponent */}
                        </Routes>
                    </header>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
