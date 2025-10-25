import type { RouteObject } from "react-router-dom";
import Home from "./Pages/Home";

export const routerConfig: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/intro",
                element: <h1>intro page</h1>
            },
            {
                path: "/solve/:question_id",
                element: <h1>solve Section</h1>
            },
            {
                path: "*",
                element: <>404 Not Found</>
            }
        ]
    },
    
]