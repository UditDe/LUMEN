import React, { useState } from "react";
import Header from "../Components/header-component/Header";
import SidebarMain from "../Components/slidebar-component/SidebarMain";
import "./Home.scss";
import type { activeIcon } from "../types/navbarOptions";
import SidebarChild from "../Components/slidebar-component/SidebarChild";
import Questions from "../Components/question-component/Questions";

const Home: React.FC = () => {
    const [option, setOption] = useState<activeIcon>("");
    const [question_number, setQuestion_number] = useState<
        number | undefined
    >();
    const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
    const handleQuestion_number = (indx: number): void => {
        setQuestion_number(indx);
    };
    const handleOptions = (str: activeIcon) => {
        setOption(str);
    };
    const toggleIde = () => setIsEditorOpen(!isEditorOpen);
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
                            handle_question_number={handleQuestion_number}
                            selected_indx={question_number}
                        />
                    )}
                </div>
                <div className="right-container">

                    {question_number !== undefined && (
                        <Questions qs_number={question_number} toggle_ide={toggleIde} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
