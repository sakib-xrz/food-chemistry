import { Outlet } from "react-router-dom";
import Navbar from "./lib/components/Navbar";
import Footer from "./lib/components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default App;
