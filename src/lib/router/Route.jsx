import { createBrowserRouter } from "react-router-dom";

import ContactPage from "../../pages/ContactPage/ContactPage";
import MenuPage from "../../pages/MenuPage/MenuPage";
import ShopPage from "../../pages/ShopPage/ShopPage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Homepage from "../../pages/homepage";
import Main from "../layouts/Main";
import CartPage from "../../pages/CartPage/CartPage";
import EmailVerifyPage from "../../pages/EmailVerifyPage/EmailVerifyPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
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
                path: "/cart",
                element: <CartPage />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/auth/verify-email",
        element: <EmailVerifyPage />,
    },
]);

export default router;
