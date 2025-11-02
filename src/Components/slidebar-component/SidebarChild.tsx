import React, { useState } from "react";
import type { question_type, SidebarChild_Props } from "../../types/navbarOptions";
import { IoClose } from "react-icons/io5";
import "./SidebarChild.scss";
import { question_list } from "../../Constants/questionList";

const SidebarChild: React.FC<SidebarChild_Props> = ({ option, closeSidebar }) => {
    const [list, setList] = useState<question_type[]>(question_list);
    return (
        <div className="collapsable-sidebar">
            <div className="sidebar-header">
                <span>{option}</span>
                <div className="header-close-btn" onClick={() => closeSidebar("")}>
                    <IoClose />
                </div>
            </div>
            <div className="question-list-with-name-difficulty">
                {list && list.map((qs, indx) => (
                    <div key={indx} className="each-qs">
                        <span>
                            {qs.qs_name}
                        </span>
                        <div className="level">
                            {qs.level}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SidebarChild;
