import type React from "react";
import "./styles/LanguageSelector.scss";
import type { Lang } from "../pages/CodeEditor";

type LanguageSelector_type = {
    lang: Lang
    langSelector: (language : Lang) => void;
};

const LanguageSelector : React.FC<LanguageSelector_type> = ({langSelector, lang}) => {
    return (
        <div className="lang-navbar">
            <span onClick={() => langSelector("cpp")} style={{border: `${lang === "cpp" ? "1px solid #D3DAD9" : "none"}`}}>CPP</span>
            <span onClick={() => langSelector("java")} style={{border: `${lang === "java" ? "1px solid #D3DAD9" : "none"}`}}>JAVA</span>
            <span onClick={() => langSelector("python")} style={{border: `${lang === "python" ? "1px solid #D3DAD9" : "none"}`}}>PYTHON</span>
        </div>
    );
};

export default LanguageSelector;
