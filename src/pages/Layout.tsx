import { Outlet } from "react-router-dom";
import "./styles/Layout.scss";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <div className="body-layout">
            <div className="left-container">
                <Sidebar />
            </div>
            <div className="right-container">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
