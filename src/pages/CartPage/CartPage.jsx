import Cart from "../../lib/modules/cart/Cart";

function CartPage() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return (
        <div>
            <Cart />
        </div>
    );
}

export default CartPage;