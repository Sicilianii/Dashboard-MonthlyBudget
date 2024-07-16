import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "../layouts/root.layout.tsx";
import Login from "../../pages/Login/login.tsx";
import Home from "../../pages/Home/home.tsx";
import Start from "../../pages/GetStart/start.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <>Error Page</>,
        children: [
            {
                index: true,
                element: <Start />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'dashboard',
                element: <Home />
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router;