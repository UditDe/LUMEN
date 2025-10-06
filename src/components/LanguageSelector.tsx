import type React from "react";
import "./styles/LanguageSelector.scss";
import type { Lang } from "./Ide";
import { useEffect, useState } from "react";
import { getRuntimes } from "../services/api.compiler";

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
    const [langList, setLangList] = useState<LangVersions_type | null>(null);
    useEffect(() => {
        (async () => {
            const resp: LangVersions_type = await getRuntimes();
            if (resp) setLangList(resp);
        })();
    }, []);
    return (
        <div className="lang-navbar">
            <span
                onClick={() => langSelector("cpp")}
                className={`${lang === "cpp" ? "active-span" : ""}`}
            >
                CPP {`(${langList?.cpp})`}
            </span>
            <span
                onClick={() => langSelector("java")}
                className={`${lang === "java" ? "active-span" : ""}`}
            >
                JAVA {`(${langList?.java})`}
            </span>
            <span
                onClick={() => langSelector("python")}
                className={`${lang === "python" ? "active-span" : ""}`}
            >
                PYTHON {`(${langList?.python})`}
            </span>
        </div>
    );
};

export default LanguageSelector;
