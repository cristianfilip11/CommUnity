import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = ({ onLogoClick, onReportClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={onLogoClick}>
        <span>CommUnity</span>
      </div>

      <ul className="navbar-links">
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/feed">Map</Link></li>
      </ul>
      <div className="navbar-cta">
        <button className="report-button" onClick={onReportClick}>
          Semnalează problemă
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
