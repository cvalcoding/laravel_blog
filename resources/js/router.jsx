import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import Profile from "./pages/auth/Profile";
import RootLayout from "./components/layout/RootLayout";
import UserLayout from "./components/layout/UserLayout";

const router = createBrowserRouter([
    {
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: About },
            {
                path: "user",
                Component: UserLayout,
                children: [
                    { index: true, Component: Profile },
                    { path: "signin", Component: Login },
                    { path: "signup", Component: Register },
                ],
            },
        ],
    },
]);

export default router;
