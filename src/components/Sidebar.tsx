import type React from "react";
import "./styles/Sidebar.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { GiPowerLightning } from "react-icons/gi";
import { GiProcessor } from "react-icons/gi";
import { GoSidebarExpand } from "react-icons/go";
// import { GoSidebarCollapse } from "react-icons/go";

type Sidebar_type = {
    isCollapsed: boolean;
    toggleSideBar: () => void;
};

const Sidebar: React.FC<Sidebar_type> = ({ isCollapsed, toggleSideBar }) => {
    return (
        <div className="sidebar-container" onClick={() => {
            if(isCollapsed) toggleSideBar();
        }}>
            <span onClick={toggleSideBar} className="toggle-btn">
                {!isCollapsed && <GoSidebarExpand />}
            </span>
            <img
                src={`${
                    isCollapsed
                        ? "logo/lumen-sign-v2.png"
                        : "logo/lumen-logo-v2.png"
                }`}
                className={isCollapsed ? "collapsed-image" : ""}
                alt="lumnen"
            />
            {!isCollapsed && <h2>DSA Sheets</h2>}
            <div className={`option-list-container ${isCollapsed && "option-list-container-collapsed"}`}>
                <span>
                    {" "}
                    <GiNinjaHeroicStance />{" "}
                    {!isCollapsed && "Scratch to Conqueror"}
                </span>
                <span>
                    {" "}
                    <GiPowerLightning /> {!isCollapsed && "Speed Run"}
                </span>
                <span>
                    {" "}
                    <GiProcessor /> {!isCollapsed && "Advanced Algo"}
                </span>
            </div>
            <div
                className={`account-info-container ${
                    isCollapsed && "account-info-container-collapsed"
                }`}
            >
                <FaRegUserCircle />
                {!isCollapsed && <span>testuser</span>}
            </div>
        </div>
    );
};

export default Sidebar;
