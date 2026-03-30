import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import About from "./pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/about",
        Component: About,
    },
    {
        path: "/signin",
        Component: Login,
    },
    {
        path: "/signup",
        Component: Register,
    },
]);

export default router;
