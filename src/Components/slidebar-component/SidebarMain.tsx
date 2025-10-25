import React, { useState } from "react";
import "./SidebarMain.scss";
import { LuCodeXml } from "react-icons/lu";
import { BsCpu } from "react-icons/bs";

type activeIcon = "qs-list" | "ai-support" | "";

const SidebarMain: React.FC = () => {
    const [activeIcon, setActive] = useState<activeIcon>("");

    // this one handles the ui effects on logos while selection
    const handleActiveIcons = (str: activeIcon) => {
        setActive(str);
    };
    return (
        <div className="fixed-sidebar">
            <div
                className={`navigation-logo ${
                    activeIcon === "qs-list" && "active-for-border"
                }`}
                onClick={() => handleActiveIcons("qs-list")}
            >
                <LuCodeXml size={25} />
            </div>
            <div
                className={`navigation-logo ${
                    activeIcon === "ai-support" && "active-for-border"
                }`}
                onClick={() => handleActiveIcons("ai-support")}
            >
                <BsCpu size={25} />
            </div>
        </div>
    );
};

export default SidebarMain;
