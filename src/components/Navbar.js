import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHome } from '@fortawesome/free-solid-svg-icons'; // Importeer faHome

function Navbar() {
    return (
        <nav className="navbar-container">
            {/* Huis-icoon met link naar WeatherComponent */}
            <Link to="/" className="navbar-home">
                <FontAwesomeIcon icon={faHome} />
            </Link>
            <ul className="navbar-list">
                <li>
                    <Link to="/login">Inloggen</Link>
                </li>
                <li>
                    <Link to="/7-day-forecast">7-daagse Weersvoorspelling</Link>
                </li>
                <li>
                    <Link to="/signup">Registreren</Link>
                </li>
                <li>
                    <Link to="/share">Deel weerbericht</Link> {/* Corrigeer naar "/share" */}
                </li>
            </ul>
            <div className="navbar-right">
                {/* Kalender-icoon met link naar HolidayComponent */}
                <Link to="/holidays" className="navbar-holidays">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
