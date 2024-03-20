import {createBrowserRouter} from "react-router-dom";
import Protected from "~/routes/Protected.tsx";
import Home from "~/pages/home";
import Public from "~/routes/Public.tsx";
import NotFound from "~/routes/NotFound.tsx";
import Login from "~/pages/login";
import Register from "~/pages/register";
import Explore from "~/pages/explore";
import Reels from "~/pages/reels";
import Messages from "~/pages/messages";
import Profile from "~/pages/profile";
import Main from "~/layouts/main";
import PostPreview from "~/pages/post-preview";

const rotues = createBrowserRouter([
    {
        path: ":username/:profileParam?",
        element: <Main><Profile /></Main>
    },
    {
        path: "p/:postId", // p/C4lMB1biHwFalOUgRiGzHolwkNJJctKDAoccxw0/
        element: <Main><PostPreview /></Main>
    },
    {
        path: "p/:postId/comments", // p/C4lMB1biHwFalOUgRiGzHolwkNJJctKDAoccxw0/
        element: <Main><PostPreview /></Main>
    },
    {
        path: "p/:postId/c/:commentId/liked_by", // p/C4lMB1biHwFalOUgRiGzHolwkNJJctKDAoccxw0/
        element: <Main><PostPreview /></Main>
    },
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