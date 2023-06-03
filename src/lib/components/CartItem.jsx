import { RxCross2 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const CartItem = () => {

    const [quantity,setQuantity] = useState(1)

  const handleAddToCart = () => {
      setQuantity(quantity+1);
  };
  const handleDecreaseCart = () => {
      setQuantity(quantity - 1);
  };

    return (
        <div className="md:flex md:gap-5 items-center py-4 border-t border-gray-200">
            <div className="md:pl-3">
                <img
                    src="https://i.ibb.co/CBtBDsb/1.jpg"
                    className="w-20 h-20 object-center object-cover rounded-md"
                />
            </div>
            <div className="md:pl-3 md:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                    <div>
                        <p className="font-semibold text-2xl text-neutral">
                            Strawberry Ice Cream
                        </p>
                        <p className="text-neutral font-medium"><span>Price:</span> $6</p>
                    </div>
                    <div className="flex gap-2">
                        <AiOutlineHeart className="w-6 h-6 text-red-500 cursor-pointer" />
                        <RxCross2 className="w-6 h-6 text-red-500 cursor-pointer" />
                    </div>
                </div>
                <div className="flex items-center justify-between pt-3">
                    <div className="cart-product-quantity font-medium">
                        <button
                            className="font-bold disabled:opacity-20"
                            disabled={quantity < 2}
                            onClick={() => handleDecreaseCart()}
                        >
                            -
                        </button>
                        <div className="count">{quantity}</div>
                        <button
                            className="font-bold "
                            onClick={() => handleAddToCart()}
                        >
                            +
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <p className="font-black text-neutral">Total:</p>
                        <p className="font-black text-neutral">$6</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
