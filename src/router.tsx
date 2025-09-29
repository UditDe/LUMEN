import type { RouteObject } from "react-router-dom";
import Layout from "./pages/Layout";
import Auth from "./pages/Auth";

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
                path: "*",
                element: <>404 Not Found</>
            }
        ],
    },
];
