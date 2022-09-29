import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

function MallHome() {
    return (
        <div>
            <TopNav />
            <Outlet />
        </div>
    );
}

export default MallHome;