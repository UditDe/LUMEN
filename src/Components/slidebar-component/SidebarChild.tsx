import React, { useEffect, useState } from "react";
import type {
    question_type,
    SidebarChild_Props,
} from "../../types/navbarOptions";
import { IoClose } from "react-icons/io5";
import "./SidebarChild.scss";
import { question_list } from "../../Constants/questionList";
import { truncate_string } from "../../Utils/manage_content";
import { colors, Tooltip } from "@mui/material";

const SidebarChild: React.FC<SidebarChild_Props> = ({
    option,
    closeSidebar,
    handle_question_number,
    selected_indx,
}) => {
    const [list, setList] = useState<question_type[]>(question_list);
    useEffect(() => {
        if (option !== "Questions") setList([]);
        else setList(question_list);
    }, [option]);
    return (
        <div className="collapsable-sidebar">
            <div className="sidebar-header">
                <span>{option.toLocaleUpperCase()}</span>
                <div
                    className="header-close-btn"
                    onClick={() => closeSidebar("")}
                >
                    <IoClose />
                </div>
            </div>
            <div className="question-list-with-name-difficulty">
                {list &&
                    list.map((qs, indx) => (
                        <div
                            key={indx}
                            className="each-qs"
                            onClick={() => handle_question_number(indx)}
                        >
                            <Tooltip title={qs.qs_name}>
                                <span
                                    style={
                                        selected_indx !== undefined &&
                                        selected_indx === indx
                                            ? { color: "#66b2ff" }
                                            : { color: "#d3dad9" }
                                    }
                                >
                                    {truncate_string(qs.qs_name)}
                                </span>
                            </Tooltip>
                            <div className="level">{qs.level}</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SidebarChild;
