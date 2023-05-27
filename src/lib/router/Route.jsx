import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Homepage from "../../pages/homepage/Homepage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import MenuPage from "../../pages/MenuPage/MenuPage";
import ShopPage from "../../pages/ShopPage/ShopPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/home",
                element: <Homepage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/menu",
                element: <MenuPage />
            },
            {
                path: "/shop",
                element: <ShopPage />
            },
        ]
    },
]);

export default router
