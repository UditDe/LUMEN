import React from "react";
import { question_list } from "../../Constants/questionList";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { clean_spaces } from "../../Utils/manage_content";
import type { qs_component } from "../../types/QuestionComponentTypes";

const Questions: React.FC<qs_component> = ({qs_number}) => {
    return (
        <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {clean_spaces(question_list[qs_number].description)}
            </ReactMarkdown>
        </>
    );
};

export default Questions;
