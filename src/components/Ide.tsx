import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import "./styles/Ide.scss";
import { useEffect, useRef, useState } from "react";
import { CODE_SNIPPETS } from "../Constants/boilerPlates";
import { GoUnfold } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { useAutoResizeTextarea } from "../utils/useAutoResizeTextarea";
import { executeCode_v2 } from "../services/api.compiler";

export type Lang = keyof typeof CODE_SNIPPETS;

const Ide = () => {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textareaRef = useAutoResizeTextarea();

    const [value, setValue] = useState<string>("");
    const [language, setLanguage] = useState<Lang>("cpp");
    const [height, setHeight] = useState(60);
    const [activeCustomInput, setActiveCustomInput] = useState<boolean>(false);
    const [stdIn, setStdIn] = useState<string>("");
    const [expected, setExpected] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setValue(CODE_SNIPPETS[language]);
    }, []);

    const onMount = (editor: any) => {
        editorRef.current = editor;
        editor.focus();
    };

    const langSelector = (language: Lang) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language]);
    };

    const startVerticalDragging = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        const startY = e.clientY; // where the drag started
        const startHeight = container.offsetHeight * (height / 100); // current editor height in px
        const containerHeight = container.offsetHeight; // total container height in px

        const onMouseMove = (moveEvent: MouseEvent) => {
            const deltaY = moveEvent.clientY - startY; // how much user moved vertically
            const newHeightPx = startHeight + deltaY;

            // Convert to percentage relative to container height
            const newHeightPercent = (newHeightPx / containerHeight) * 100;

            // Clamp between 10% and 90% to avoid breaking layout
            setHeight(Math.min(Math.max(newHeightPercent, 10), 90));
        };

        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    };

    const runCode = async (input_stream: string = "") => {
        setIsLoading(true);
        setExpected("");
        try {
            const resp = await executeCode_v2(value, input_stream);
            if(resp && resp.output) {
                setResult(resp.output);
            } else {
                console.log("resp : \n", resp);
            }
        } catch (err) {
            console.log("API Call failed");
        }
        setIsLoading(false);
    };

    return (
        <div className="ide-container" ref={containerRef}>
            <LanguageSelector langSelector={langSelector} lang={language} />
            <Editor
                options={{
                    minimap: {
                        enabled: false,
                    },
                }}
                height={`${height && height > 20 ? height : 20}%`}
                theme="vs-dark"
                language={language}
                defaultValue={CODE_SNIPPETS[language]}
                onMount={onMount}
                value={value}
                onChange={(value) => setValue(value ?? "")}
            />
            <div
                className="resizer-horizontal"
                onMouseDown={startVerticalDragging}
            >
                <div className="resizer-icon">
                    <GoUnfold />
                </div>
            </div>
            <div className="submission-btn-group">
                <button
                    className="custom-input-btn"
                    onClick={() => {
                        setActiveCustomInput(!activeCustomInput);
                        setStdIn("");
                    }}
                >
                    {!activeCustomInput ? (
                        "Custom Input"
                    ) : (
                        <>
                            Clear Inputs
                            <MdOutlineCancel />
                        </>
                    )}
                </button>
                {isLoading ? (
                    <div className="loader" />
                ) : (
                    <button onClick={() => runCode(stdIn)}>
                        Run Code
                    </button>
                )}
            </div>
            {activeCustomInput && (
                <div className="custom-input">
                    <textarea
                        name="code-input"
                        ref={textareaRef}
                        id="std-in"
                        value={stdIn}
                        onChange={(e) => setStdIn(e.target.value)}
                    />
                </div>
            )}
            {result.length > 0 && (
                <div className="output-container">
                    <h2>Output</h2>
                    <div className="custom-output">
                        {/* these value will come from compiler */}
                        <div className="output-elements">
                            <h4>Your Code's :</h4>
                            <div className="result">{result}</div>
                        </div>
                        {/* these value will come from db */}
                        {expected.length > 0 && (
                            <div className="output-elements">
                                <h4>Expected :</h4>
                                <div className="expected">{expected}</div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Ide;
