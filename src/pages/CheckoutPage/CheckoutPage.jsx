import useTitle from "../../lib/hooks/useTitle";
import Checkout from "../../lib/modules/checkout/Checkout";

const CheckoutPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Checkout");
    return (
        <div>
            <Checkout />
        </div>
    );
};

export default CheckoutPage;
