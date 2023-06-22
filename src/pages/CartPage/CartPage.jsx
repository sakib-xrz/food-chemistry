import useTitle from "../../lib/hooks/useTitle";
import Cart from "../../lib/modules/Cart/Cart";

function CartPage() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Cart");
    return (
        <div>
            <Cart />
        </div>
    );
}

export default CartPage;
