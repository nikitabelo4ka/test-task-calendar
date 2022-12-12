import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'Components/header/Header.jsx';

function Layout() {
  const isLogin = localStorage.getItem('isLogin');
  const isLoginBoolean = isLogin === 'true' ? true : false;
  const [isHeaderButtonActive, setIsHeaderButtonActive] = useState(isLoginBoolean);

  return (
    <div className="layout">
      <Header
        isHeaderButtonActive={isHeaderButtonActive}
        onSignOut={(value) => setIsHeaderButtonActive(value)}
      />
      <Outlet context={[isHeaderButtonActive, setIsHeaderButtonActive]} />
    </div>
  );
}

export default Layout;
