import { useRef, useState } from "react";
import ProlemStatement from "../components/ProlemStatement";
import "./styles/CodeEditor.scss";

const CodeEditor = () => {
    const [width, setWidth] = useState(50); // percentage
    const containerRef = useRef<HTMLDivElement | null>(null);

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
            <div className="ide-section">IDE Section</div>
        </div>
    );
};

export default CodeEditor;
