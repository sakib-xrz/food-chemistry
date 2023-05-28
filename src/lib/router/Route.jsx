import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Homepage from "../../pages/homepage/Homepage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import MenuPage from "../../pages/MenuPage/MenuPage";
import ShopPage from "../../pages/ShopPage/ShopPage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/home",
                element: <Homepage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/menu",
                element: <MenuPage />,
            },
            {
                path: "/shop",
                element: <ShopPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
        ],
    },
]);

export default router;
