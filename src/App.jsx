import { useState } from "react";
import { RouterProvider, Route, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Overview from "./routes/overview";
import About from "./routes/about";
import Portfolio from "./routes/portfolio";
import Contact from "./routes/contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement: <div>Error</div>,
        children: [
            {
                path: '/',
                element: <Overview />,
            }, 
            {
                path: "about",
                element: <About />,
            }, 
            {
                path: "portfolio",
                element: <Portfolio />,
            }, 
            {
                path: "contact",
                element: <Contact />,
            }, 
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
