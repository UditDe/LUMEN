import React from "react";
import "./Header.scss";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="logo-container">LUMEN</div>
            <div className="account-settings">
                <MdOutlineAccountCircle size={25}/>
            </div>
        </div>
    );
};

export default Header;
