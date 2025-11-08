import React from "react";
import "./SidebarMain.scss";
import { LuCodeXml } from "react-icons/lu";
import { BsCpu } from "react-icons/bs";
import type { SidebarMain_Props } from "../../types/navbarOptions";



const SidebarMain: React.FC<SidebarMain_Props> = ({option, handleOptions}) => {
    
    return (
        <div className="fixed-sidebar">
            <div
                className={`navigation-logo ${
                    option === "Questions" && "active-for-border"
                }`}
                onClick={() => handleOptions("Questions")}
            >
                <LuCodeXml size={25} />
            </div>
            <div
                className={`navigation-logo ${
                    option === "Ask LUMEN" && "active-for-border"
                }`}
                onClick={() => handleOptions("Ask LUMEN")}
            >
                <BsCpu size={25} />
            </div>
        </div>
    );
};

export default SidebarMain;
