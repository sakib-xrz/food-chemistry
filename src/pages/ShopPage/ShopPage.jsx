import useTitle from "../../lib/hooks/useTitle";
import Shop from "../../lib/modules/shop/Shop";

const ShopPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Shop");
    return (
        <div>
            <Shop />
        </div>
    );
};

export default ShopPage;
