import "./Results.scss";
import React, { useState } from "react";
import type { terminal_navigation_type } from "../../types/navbarOptions";
import { FaTerminal } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const Results: React.FC = () => {
    const [selectedOption, setSelectedOption] =
        useState<terminal_navigation_type>("");
    const [isClose, setIsClose] = useState<boolean>(true);

    return (
        <div className="result-container">
            <div className="terminal-header">
                <span
                    onClick={() => setSelectedOption("testcases")}
                    className={
                        selectedOption === "testcases" ? `active-span` : ""
                    }
                >
                    <FaTerminal /> Test Cases
                </span>
                <span
                    onClick={() => setSelectedOption("custom-testcases")}
                    className={
                        selectedOption === "custom-testcases"
                            ? `active-span`
                            : ""
                    }
                >
                    <MdOutlineDashboardCustomize /> Custom Test Cases
                </span>
                <span className="open-close-btn" onClick={() => setIsClose(!isClose)}>
                    <FaChevronDown className={`${isClose && "rotate-btn"}`} />
                </span>
            </div>
            <div className={`terminal-content ${!isClose ? "show" : ""}`}>
                
            </div>
        </div>
    );
};

export default Results;
