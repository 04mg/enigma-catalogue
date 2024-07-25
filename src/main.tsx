import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home, { homeLoader } from "./routes/home"
import "./index.css"
import ErrorPage from "./routes/error"
import Root from "./routes/root"
import Category, { categoryLoader } from "./routes/category"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <QueryClientProvider client={queryClient}>
                <Root />
            </QueryClientProvider>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader(queryClient)
            },
            {
                path: "category/:category",
                element: <Category />,
                loader: categoryLoader(queryClient)
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
