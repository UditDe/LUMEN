import React, { useState } from "react";
import Header from "../Components/header-component/Header";
import SidebarMain from "../Components/slidebar-component/SidebarMain";
import "./Home.scss";
import type { activeIcon } from "../types/navbarOptions";
import SidebarChild from "../Components/slidebar-component/SidebarChild";
import Questions from "../Components/question-component/Questions";
import IDE from "../Components/IDE/IDE";
import { motion, AnimatePresence } from "framer-motion";

const Home: React.FC = () => {
    const [option, setOption] = useState<activeIcon>("");
    const [question_number, setQuestion_number] = useState<number>(0);
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
                    <motion.div
                        key="questions"
                        animate={{ width: isEditorOpen ? "50%" : "100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="first-child"
                    >
                        <Questions
                            qs_number={question_number}
                            open_ide={isEditorOpen}
                            toggle_ide={toggleIde}
                        />
                    </motion.div>

                    <AnimatePresence>
                        {isEditorOpen && (
                            <motion.div
                                key="ide"
                                initial={{ x: "100%", width: 0 }}
                                animate={{ x: 0, width: "50%" }}
                                exit={{ x: "100%", width: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                className="second-child"
                            >
                                <IDE />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Home;
