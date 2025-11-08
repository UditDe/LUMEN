import Editor from "@monaco-editor/react";
import type { OnMount } from "@monaco-editor/react";
import React, { useState } from "react";
import { CODE_SNIPPETS } from "../../Constants/defaultValues";
import "./IDE.scss";
import { IoPlayOutline } from "react-icons/io5";

const IDE: React.FC = () => {
    // const [language, setLanguage] = useState<string>("cpp");
    // const editorRef = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState<string>("");
    const onMount: OnMount = (_editor, monaco) => {
        if (!monaco) return;
        monaco.editor.defineTheme("myCustomDark", {
            base: "vs-dark",
            inherit: true,
            rules: [],
            colors: {
                "editor.background": "#0d1117", // custom background
            },
        });

        monaco.editor.setTheme("myCustomDark");
    };

    return (
        <div className="ide-container">
            <div className="ide-header-section">
                <h4>LANGUAGE : CPP</h4>
                <button> <IoPlayOutline /> RUN</button>
            </div>
            <Editor
                options={{
                    minimap: {
                        enabled: false,
                    },
                }}
                height="100vh"
                theme="vs-dark"
                language={"cpp"}
                defaultValue={CODE_SNIPPETS[0].code}
                onMount={onMount}
                value={value}
                onChange={(value) => setValue(value ?? "")}
            />
        </div>
    );
};

export default IDE;
