import React, { useState } from "react";
import Header from "../Components/header-component/Header";
import SidebarMain from "../Components/slidebar-component/SidebarMain";
import "./Home.scss";
import type { activeIcon } from "../types/navbarOptions";
import SidebarChild from "../Components/slidebar-component/SidebarChild";

const Home: React.FC = () => {
    const [option, setOption] = useState<activeIcon>("");
    const handleOptions = (str: activeIcon) => {
        setOption(str);
    };
    return (
        <div className="layout">
            <Header />
            <div className="main-container">
                <div className="left-container">
                    <SidebarMain
                        option={option}
                        handleOptions={handleOptions}
                    />
                    {option !== "" && (
                        <SidebarChild
                            option={option}
                            closeSidebar={handleOptions}
                        />
                    )}
                </div>
                <div className="right-container">
                  
                </div>
            </div>
        </div>
    );
};

export default Home;
