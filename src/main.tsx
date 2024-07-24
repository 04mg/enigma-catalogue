import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home, { homeLoader } from "./routes/home"
import "./index.css"
import ErrorPage from "./routes/error"
import Root from "./routes/root"
import Category, { categoryLoader } from "./routes/category"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader
            },
            {
                path: "category/:category",
                element: <Category />,
                loader: categoryLoader
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
