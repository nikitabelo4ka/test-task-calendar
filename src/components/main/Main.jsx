import React, { useEffect, useState } from "react";
import "./main.css";

function Main() {

    const isLogin = localStorage.getItem('isLogin');

    if (!isLogin || isLogin === 'false') {
      window.location.replace('/login');
    }

    return (
        <div className="main">
            <h1>Main</h1>
        </div>
    );
}

export default Main;