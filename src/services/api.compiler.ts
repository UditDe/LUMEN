import axios from "axios";
import type { LangVersions_type } from "../components/LanguageSelector";

type runtime_type = {
    language : string,
    runtime? : string,
    version : string,
}

const compiler_url = import.meta.env.VITE_COMPILER_URL;

const apiClient = axios.create({
    baseURL: compiler_url,
    headers: {
        "Content-Type" : "application/json",
    }
});


export const getRuntimes = async () : Promise<LangVersions_type> => {
    try {
        const resp : runtime_type[] = (await apiClient.get("/runtimes")).data;
        if(resp) {
            const arr : LangVersions_type = {};
            for(const obj of resp) {
                if(obj.language === "c++") arr["cpp"] = obj.version
                else if(obj.language === "java") arr["java"] = obj.version
                else if(obj.language === "python") arr["python"] = obj.version
            }
        return arr;
        } else {
            console.info("resp.data doesn't exists");
            return {};
        }
    } catch (error) {
        console.error(error)
        return {};
    }
}


