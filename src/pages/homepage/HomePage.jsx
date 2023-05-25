import useTitle from "../../lib/hooks/useTitle";
import Home from "../../lib/modules/home/Home";


const Homepage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Home")
    return (
        <div>
            <Home />
        </div>
    );
};

export default Homepage;