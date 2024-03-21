import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSignInAlt, faCog } from '@fortawesome/free-solid-svg-icons';
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
                                <Link to="/weather">
                                    <FontAwesomeIcon icon={faCalendarAlt} /> {/* Kalender icoon */}
                                </Link>
                            </div>
                            <div className="Navbar-center">
                                {/* Zoekbalk hier */}
                            </div>
                            <div className="Navbar-right">
                                <Link to="/login">
                                    <FontAwesomeIcon icon={faSignInAlt} /> {/* Sign-in knopje */}
                                </Link>
                                <Link to="/settings">
                                    <FontAwesomeIcon icon={faCog} /> {/* Instellingen icoon */}
                                </Link>
                            </div>
                        </Navbar>
                        <Routes>
                            <Route path="/weather" element={<WeatherComponent />} />
                            <Route path="/holidays" element={<HolidayComponent />} /> {/* Toegevoegde route voor holidays */}
                            <Route path="/login" element={<LoginComponent />} />
                            {/* Route voor instellingen */}
                        </Routes>
                    </header>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
