import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header.jsx';

function Layout() {
  
  const [isHeaderButtonActive, setIsHeaderButtonActive] = useState('true');

  return (
    <div className="layout">
      <Header isHeaderButtonActive={isHeaderButtonActive} />
      <Outlet context={(value) => setIsHeaderButtonActive(value)} />
    </div>
  );
}

export default Layout;
