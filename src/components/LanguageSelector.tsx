import type React from "react";
import "./styles/LanguageSelector.scss";
import type { Lang } from "./Ide";

type LanguageSelector_type = {
    lang: Lang;
    langSelector: (language: Lang) => void;
};

export type LangVersions_type = {
    cpp?: string;
    java?: string;
    python?: string;
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
                CPP {`(13.3.3)`}
            </span>
            
        </div>
    );
};

export default LanguageSelector;
