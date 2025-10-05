import { Outlet } from "react-router-dom";
import "../styles/Layout.scss";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const Layout = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleSideBar = () => setIsCollapsed(!isCollapsed);
    return (
        <div className="body-layout">
            <div className={`left-container ${isCollapsed ? "collapsed" : "not-collapsed"}`}>
                <Sidebar isCollapsed={isCollapsed} toggleSideBar={toggleSideBar}/>
            </div>
            <div className={`right-container ${isCollapsed ? "expand-right" : "shirnk-right"}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
