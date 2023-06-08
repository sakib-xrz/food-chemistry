import Cart from "../../lib/modules/Cart/Cart";

function CartPage() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return (
        <div>
            <Cart />
        </div>
    );
}

export default CartPage;