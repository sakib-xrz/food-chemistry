import TopBanner from "../../components/TopBanner";
import banner from "../../../assets/menu/banner3.jpg";

const Menu = () => {
    return (
        <div>
            <TopBanner
                img={banner}
                title={"OUR Menu"}
                description={"Would you like to try a dish?"}
            />
        </div>
    );
};

export default Menu;