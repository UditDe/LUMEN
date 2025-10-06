import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import "./styles/Ide.scss";
import { useRef, useState } from "react";
import { CODE_SNIPPETS } from "../Constants/boilerPlates";
import { GoUnfold } from "react-icons/go";

export type Lang = keyof typeof CODE_SNIPPETS;

const Ide = () => {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [value, setValue] = useState("");
    const [language, setLanguage] = useState<Lang>("cpp");
    const [height, setHeight] = useState(60);

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

    return (
        <div className="ide-container" ref={containerRef}>
            <LanguageSelector langSelector={langSelector} lang={language} />
            <Editor
                options={{
                    minimap: {
                        enabled: false,
                    },
                }}
                height={`${(height && height > 20) ? (height) : 20}%`}
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
                <button>Run Code</button>
            </div>
        </div>
    );
};

export default Ide;
