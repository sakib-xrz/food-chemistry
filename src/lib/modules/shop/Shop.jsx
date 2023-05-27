import TopBanner from "../../components/TopBanner";
import banner from "../../../assets/shop/banner2.jpg";

const Shop = () => {
    return (
        <div>
            <TopBanner
                img={banner}
                title={"OUR Shop"}
                description={"Would you like to try a dish?"}
            />
        </div>
    );
};

export default Shop;