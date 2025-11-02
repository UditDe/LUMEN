import React from "react";
import type { SidebarChild_Props } from "../../types/navbarOptions";
import { IoClose } from "react-icons/io5";
import "./SidebarChild.scss";

const SidebarChild: React.FC<SidebarChild_Props> = ({ option }) => {
    return (
        <div className="collapsable-sidebar">
            <div className="sidebar-header">
                <span>{option}</span>
                <div className="header-close-btn">
                    <IoClose />
                </div>
            </div>
        </div>
    );
};

export default SidebarChild;
