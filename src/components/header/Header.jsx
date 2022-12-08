import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {

    const isLogin = localStorage.getItem("isLogin");

    const [isLoginState, setIsLoginState] = useState(isLogin);

    function signOut(event) {
        event.stopPropagation();
        setIsLoginState(false);
        localStorage.setItem("isLogin", "false");
        localStorage.setItem("userName", "");
        window.location.reload();
    }

    return (
        <header className="header">
            <nav className="header-container">
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
            </nav>
            <p className="user-name">{localStorage.getItem("userName") === "" ? "" : `${localStorage.getItem("userName")}`}</p>
            <button className={isLoginState === "true" ? "sign-out-button" : "sign-out-button-unactive"} disabled={isLoginState === "true" ? "" : "disabled"} onClick={(event) => {signOut(event)}}>Sign Out</button>
        </header>
    );
}

export default Header;