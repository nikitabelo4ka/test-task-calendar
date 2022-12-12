import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './header.css';

function Header({ isHeaderButtonActive, onSignOut }) {
  const navigate = useNavigate();

  const userName = localStorage.getItem('userName');

  function signOut() {
    localStorage.setItem('isLogin', 'false');
    localStorage.setItem('userName', '');
    onSignOut(false);
    navigate('/login');
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <nav className="header-container">
            <NavLink to="/" style={{ textDecoration: 'none' }} end>
              <p className="header-link">Calendar</p>
            </NavLink>
            <NavLink to="/login" style={{ textDecoration: 'none' }}>
              <p className="header-link">Login</p>
            </NavLink>
            <NavLink to="/profile" style={{ textDecoration: 'none' }}>
              <p className="header-link">Profile</p>
            </NavLink>
            <NavLink to="/info" style={{ textDecoration: 'none' }}>
              <p className="header-link">Info</p>
            </NavLink>
          </nav>
          <p className="user-name">{userName}</p>
          <button
            className={isHeaderButtonActive ? 'sign-out-button' : 'sign-out-button-unactive'}
            disabled={isHeaderButtonActive ? '' : 'disabled'}
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
