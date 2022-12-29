import React from 'react';
import { NavLink } from 'react-router-dom';
import './main.css';

function Main() {
  return (
    <div className="main">
      <h1 className="main-label">Добро пожаловать !</h1>
      <p className="main-text">Для открытия календаря нажмите на кнопку</p>
      <p className="main-link">
        <NavLink to="/calendar" className="main-link-text">
          Open Calendar
        </NavLink>
      </p>
    </div>
  );
}

export default Main;
