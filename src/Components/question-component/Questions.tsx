import React from "react";
import "./Question.scss";
import { question_list } from "../../Constants/questionList";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { clean_spaces } from "../../Utils/manage_content";
import type { qs_component } from "../../types/QuestionComponentTypes";

const Questions: React.FC<qs_component> = ({ qs_number, toggle_ide }) => {
    return (
        <div className="question-container">
            <div className="qs-header-section">
                <h4>
                    {question_list[qs_number].qs_name.toLocaleUpperCase()}
                </h4>
                <button onClick={toggle_ide}>
                    SOLVE
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
