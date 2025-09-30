import "./styles/Sidebar.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { GiPowerLightning } from "react-icons/gi";
import { GiProcessor } from "react-icons/gi";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <img src="logo/lumen-logo-v2.png" alt="lumnen" />
            <h2>DSA Sheets</h2>
            <div className="option-list-container">
                <span>
                    {" "}
                    <GiNinjaHeroicStance /> Scratch to Conqueror
                </span>
                <span>
                    {" "}
                    <GiPowerLightning /> Speed Run
                </span>
                <span>
                    {" "}
                    <GiProcessor /> Advanced Algo
                </span>
            </div>
            <div className="account-info-container">
                <FaRegUserCircle />
                <span>testuser</span>
            </div>
        </div>
    );
};

export default Sidebar;
