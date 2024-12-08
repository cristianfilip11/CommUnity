import React from 'react';
import './NavbarForum.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span>CommUnity</span>
            </div>

            <ul className="navbar-links">
                <li><Link to="/forum">Forum</Link></li>
                <li><Link to="/feed">Map</Link></li>
                <li>
                    <a href="/create-topic">Create Topic</a>
                </li>
            </ul>
            <div>

            </div>

        </nav>
    );
};

export default Navbar;
