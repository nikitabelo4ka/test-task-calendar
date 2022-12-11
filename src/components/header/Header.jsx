import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header({ isHeaderButtonActive }) {
  
  const userName = localStorage.getItem('userName');

  function signOut(event) {
    event.stopPropagation();
    localStorage.setItem('isLogin', 'false');
    localStorage.setItem('userName', '');
    window.location.reload();
  }

  return (
    <header className="header">
      <nav className="header-container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <p className="header-link">Calendar</p>
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
      <p className="user-name">{userName === '' ? '' : `${userName}`}</p>
      <button
        className={isHeaderButtonActive === 'true' ? 'sign-out-button' : 'sign-out-button-unactive'}
        disabled={isHeaderButtonActive === 'true' ? '' : 'disabled'}
        onClick={(event) => {
          signOut(event);
        }}
      >
        Sign Out
      </button>
    </header>
  );
}

export default Header;
