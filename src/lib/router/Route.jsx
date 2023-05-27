import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Homepage from "../../pages/homepage/Homepage";
import ContactPage from "../../pages/ContactPage/ContactPage";

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
        ]
    },
]);

export default router
