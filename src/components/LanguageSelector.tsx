import type React from "react";
import "./styles/LanguageSelector.scss";
import type { Lang } from "./Ide";

type LanguageSelector_type = {
    lang: Lang;
    langSelector: (language: Lang) => void;
};

const LanguageSelector: React.FC<LanguageSelector_type> = ({
    langSelector,
    lang,
}) => {
    return (
        <div className="lang-navbar">
            <span
                onClick={() => langSelector("cpp")}
                className={`${lang === "cpp" ? "active-span" : ""}`}
            >
                CPP
            </span>
            <span
                onClick={() => langSelector("java")}
                className={`${lang === "java" ? "active-span" : ""}`}
            >
                JAVA
            </span>
            <span
                onClick={() => langSelector("python")}
                className={`${lang === "python" ? "active-span" : ""}`}
            >
                PYTHON
            </span>
        </div>
    );
};

export default LanguageSelector;
