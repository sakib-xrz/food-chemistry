import { RouterProvider } from "react-router-dom";
import router from "./lib/router/Route";


const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
