import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { signOut } from 'Helpers/helpers.js';
import './header.css';

function Header({ isHeaderButtonActive, onSignOut }) {
  const navigate = useNavigate();

  const userName = localStorage.getItem('userName');
  const isLogin = localStorage.getItem('isLogin');

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <nav className="header-container">
            <p className="header-link">
              <NavLink to="/" className={isLogin === 'true' ? 'navlink' : 'navlink disabled'} end>
                Main
              </NavLink>
            </p>
            <p className={isLogin === 'true' ? 'unvisible' : 'header-link'}>
              <NavLink to="/login" className="navlink">
                Login
              </NavLink>
            </p>
            <p className="header-link">
              <NavLink
                to="/profile"
                className={isLogin === 'true' ? 'navlink' : 'navlink disabled'}
              >
                Profile
              </NavLink>
            </p>
            <p className="header-link">
              <NavLink to="/info" className="navlink">
                Info
              </NavLink>
            </p>
          </nav>
          <p className="user-name">{userName}</p>
          <button
            className={isHeaderButtonActive ? 'sign-out-button' : 'sign-out-button-unactive'}
            disabled={isHeaderButtonActive ? '' : 'disabled'}
            onClick={() => signOut(onSignOut, navigate)}
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
