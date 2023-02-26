import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="container mt-2">
                <div className="title">
                    <h1>Project Manager</h1>
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
