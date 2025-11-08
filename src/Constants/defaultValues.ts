import type { code_snippet } from "../types/defaultValuesType";

export const CODE_SNIPPETS : code_snippet[] = [
    {
        lang : "cpp",
        code : `\n#include <iostream>\nusing namespace std;\n\nvoid greet(string name) {\n\tcout << "Hello, " << name << "!" << endl;\n}\n\nint main() {\n\tgreet("Alex");\n\treturn 0;\n}\n`
    },
    {
        lang : "java",
        code : `\npublic class Greet {\n\tpublic static void main(String[] args) {\n\t\tgreet("Alex");\n\t}\n\n\tpublic static void greet(String name) {\n\t\tSystem.out.println("Hello, " + name + "!");\n\t}\n}\n`
    },
    {
        lang : "python",
        code : `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`
    }
]