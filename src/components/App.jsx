import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Main from "./main/Main.jsx";
import Login from "./login/Login.jsx";
import Info from "./info/Info.jsx";
import Profile from "./profile/Profile.jsx";
import "../index.css";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="login" element={<Login />} />
                        <Route path="info" element={<Info />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;