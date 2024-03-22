import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons'; // Importeer het gebruikerspictogram
import WeatherComponent from './components/WeatherComponent';
import HolidayComponent from './components/HolidayComponent';
import LoginComponent from './components/LoginComponent';
import SevenDayForecast from './components/SevenDayForecast';
import SignUpComponent from './components/SignUpComponent';
import ShareWeatherComponent from './components/ShareWeatherComponent';
import { AuthProvider } from './components/gebruikersauthenticatiegegevens';
import Navbar from './components/Navbar';
import ProfielPageComponent from './components/ProfielPageComponent';
import NotesSidebar from './components/NotesSidebar'; // Importeer de NotesSidebar

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
                                <FontAwesomeIcon icon={faUser} /> {/* Voeg het gebruikerspictogram toe */}
                                <Link to="/profile">Profiel</Link> {/* Voeg de link naar het gebruikersprofiel toe */}
                                <FontAwesomeIcon icon={faSignInAlt} />
                                <Link to="/login">Login</Link>
                            </div>
                        </Navbar>
                        <NotesSidebar /> {/* Plaats de NotesSidebar hier buiten de Routes */}
                        <Routes>
                            <Route path="/" element={<WeatherComponent />} />
                            <Route path="/holidays" element={<HolidayComponent />} />
                            <Route path="/login" element={<LoginComponent />} />
                            <Route path="/7-day-forecast" element={<SevenDayForecast />} />
                            <Route path="/signup" element={<SignUpComponent />} />
                            <Route path="/share" element={<ShareWeatherComponent weatherData="Vandaag wordt het zonnig!" />} />
                            <Route path="/profile" element={<ProfielPageComponent />} />
                        </Routes>
                    </header>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
