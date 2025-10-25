import axios from "axios";
import type { LangVersions_type } from "../components/LanguageSelector";

type runtime_type = {
    language: string;
    runtime?: string;
    version: string;
};

const compiler_url = import.meta.env.VITE_COMPILER_URL;
const compiler_url_2nd = import.meta.env.VITE_COMPILER_URL_TWO;

const apiClient = axios.create({
    baseURL: compiler_url,
    headers: {
        "Content-Type": "application/json",
    },
});

const apiClient_v2 = axios.create({
    baseURL: compiler_url_2nd,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getRuntimes = async (): Promise<LangVersions_type> => {
    try {
        const resp: runtime_type[] = (await apiClient.get("/runtimes")).data;
        if (resp) {
            const arr: LangVersions_type = {};
            for (const obj of resp) {
                if (obj.language === "c++") arr["cpp"] = obj.version;
                else if (obj.language === "java") arr["java"] = obj.version;
                else if (obj.language === "python") arr["python"] = obj.version;
            }
            return arr;
        } else {
            console.info("resp.data doesn't exists");
            return {};
        }
    } catch (error) {
        console.error(error);
        return {};
    }
};

export const executeCode = async (
    language: string,
    sourceCode: string,
    ver: string,
    input_stream: string = ""
) => {
    try {
        const response = await apiClient.post("/execute", {
            language: language,
            version: ver,
            files: [
                {
                    content: sourceCode,
                },
            ],
            stdin: input_stream,
        });
        return response.data;
    } catch (err) {
        console.error(err);
        return {};
    }
};

export const executeCode_v2 = async (sourceCode: string, input_stream: string = "") => {
    try {
        console.log("code: ", sourceCode);
        console.log("input: ", input_stream);
        const response = await apiClient_v2.post("/compile/cpp", {
            code : sourceCode,
            input : input_stream
        })
        return response.data;
    } catch (err) {
        console.error(err);
    }
}
