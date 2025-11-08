import React from "react";
import "./Question.scss";
import { question_list } from "../../Constants/questionList";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { clean_spaces } from "../../Utils/manage_content";
import type { qs_component } from "../../types/QuestionComponentTypes";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Questions: React.FC<qs_component> = ({
    qs_number,
    open_ide,
    toggle_ide,
}) => {
    return (
        <div className="question-container">
            <div className="qs-header-section">
                <h4>{question_list[qs_number].qs_name.toUpperCase()}</h4>
                <button onClick={toggle_ide}>
                    {open_ide ? <FaArrowRightToBracket /> : "SOLVE"}
                </button>
            </div>
            <div className="qs-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {clean_spaces(question_list[qs_number].description)}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Questions;
