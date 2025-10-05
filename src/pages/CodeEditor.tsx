import { useRef, useState } from "react";
import ProlemStatement from "../components/ProlemStatement";
import "./styles/CodeEditor.scss";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../Constants/boilerPlates";
import LanguageSelector from "../components/LanguageSelector";

export type Lang = keyof typeof CODE_SNIPPETS;

const CodeEditor = () => {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [width, setWidth] = useState(50); // percentage
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState<Lang>("cpp");

    const onMount = (editor: any) => {
        editorRef.current = editor;
        editor.focus();
    };

    const langSelector = (language: Lang) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language]);
    };

    const startDragging = () => {
        const container = containerRef.current;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();

        const onMouseMove = (moveEvent: MouseEvent) => {
            const newWidthPercent =
                ((moveEvent.clientX - containerRect.left) /
                    containerRect.width) *
                100;
            setWidth(newWidthPercent);
        };

        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    };
    return (
        <div className="code-editor-page-container" ref={containerRef}>
            <div
                className="problem-statement-section"
                style={{ width: `${width}%` }}
            >
                <ProlemStatement />
            </div>
            <div className="resizer" onMouseDown={startDragging} />
            <div className="ide-section" style={{ width: `${100 - width}%` }}>
                <LanguageSelector langSelector={langSelector} lang={language}/>
                <Editor
                    options={{
                        minimap: {
                            enabled: false,
                        },
                    }}
                    height="60%"
                    theme="vs-dark"
                    language={language}
                    defaultValue={CODE_SNIPPETS[language]}
                    onMount={onMount}
                    value={value}
                    onChange={(value) => setValue(value ?? "")}
                />
            </div>
        </div>
    );
};

export default CodeEditor;
