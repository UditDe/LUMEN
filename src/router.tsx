import type { RouteObject } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Auth from "./pages/Auth";
import CodeEditor from "./pages/CodeEditor";

export const routerConfig: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/auth",
                element: <Auth />
            },
            {
                path: "/solve",
                element: <CodeEditor />
            },
            {
                path: "*",
                element: <>404 Not Found</>
            }
        ],
    },
];
