import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Components/Structure/Navbar.jsx";
import Footer from "./Components/Structure/Footer.jsx";

const Structure = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Structure />,
        children: [
            {
                path: "/",
                element: <App />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
