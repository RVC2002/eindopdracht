import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <div className="navbar-right">
                <Link to="/holidays" className="navbar-holidays">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
