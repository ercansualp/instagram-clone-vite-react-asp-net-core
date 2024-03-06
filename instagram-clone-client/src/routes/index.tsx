import { createBrowserRouter } from "react-router-dom";
import Protected from "~/routes/Protected.tsx";
import Home from "~/pages/home";
import Public from "~/routes/Public.tsx";
import NotFound from "~/routes/NotFound.tsx";
import Login from "~/pages/login";
import Register from "~/pages/register";
import Explore from "~/pages/explore";
import Reels from "~/pages/reels";
import Messages from "~/pages/messages";

const rotues = createBrowserRouter([
    {
        path: "/",
        element: <Protected />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "explore",
                element: <Explore />
            },
            {
                path: "reels",
                element: <Reels />
            },
            {
                path: "direct/inbox",
                element: <Messages />
            }
        ]
    },
    {
        path: "*",
        element: <Public />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

export default rotues;