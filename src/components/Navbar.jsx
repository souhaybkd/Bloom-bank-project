import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-item">
                <Link to="/">Dashboard</Link>
                </div>
                <div className="navbar-item">
                <Link to="/donor">Donor</Link>
                </div>
                <div className="navbar-item">
                <Link to="/request">Request</Link>
                </div>
                <div className="navbar-item">
                <Link to="/blood-collection">Blood Collection</Link>
                </div>
                <div className="navbar-item">
                <Link to="/login">Log In</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
