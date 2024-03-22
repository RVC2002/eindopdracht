import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import WeatherComponent from './components/WeatherComponent';
import HolidayComponent from './components/HolidayComponent';
import LoginComponent from './components/LoginComponent';
import SevenDayForecast from './components/SevenDayForecast';
import SignUpComponent from './components/SignUpComponent'; // Importeer de SignUpComponent
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
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                <Link to="/">Weather</Link>
                            </div>
                            <div className="Navbar-center">
                                {/* Zoekbalk hier */}
                            </div>
                            <div className="Navbar-right">
                                <FontAwesomeIcon icon={faSignInAlt} />
                                <Link to="/login">Login</Link>
                            </div>
                        </Navbar>
                        <Routes>
                            <Route path="/" element={<WeatherComponent />} />
                            <Route path="/holidays" element={<HolidayComponent />} />
                            <Route path="/login" element={<LoginComponent />} />
                            <Route path="/7-day-forecast" element={<SevenDayForecast />} />
                            <Route path="/signup" element={<SignUpComponent />} /> {/* Voeg deze nieuwe route toe voor SignUpComponent */}
                        </Routes>
                    </header>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
