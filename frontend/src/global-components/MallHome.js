import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

function MallHome() {
    return (
        <div className="mainWrap">
            <TopNav />
            <Outlet />
        </div>
    );
}

export default MallHome;