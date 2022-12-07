import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <p className="header-link">Home</p>
                </Link>
                <Link to="login" style={{ textDecoration: 'none' }}>
                    <p className="header-link">Login</p>
                </Link>
                <Link to="profile" style={{ textDecoration: 'none' }}>
                    <p className="header-link">Profile</p>
                </Link>
                <Link to="info" style={{ textDecoration: 'none' }}>
                    <p className="header-link">Info</p>
                </Link> 
            </div>
        </div>
    );
}

export default Header;