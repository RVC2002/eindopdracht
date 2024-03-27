import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHome,  } from '@fortawesome/free-solid-svg-icons'; // Importeer faSignInAlt en faShareAlt

function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="navbar-items">
                <ul className="navbar-list">
                    <li>
                        <Link to="/" className="navbar-home">
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </li>
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
                        <Link to="/share">Deel weerbericht</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profiel</Link>
                    </li>


                    <li>
                        <Link to="/holidays" className="navbar-holidays">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;