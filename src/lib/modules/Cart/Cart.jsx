import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import Wrapper from "../../components/Wrapper";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Cart = () => {
    return (
        <Wrapper className="pt-14 md:pt-20 space-y-14 lg:space-y-20">
            <div className="lg:flex">
                <div className="lg:w-8/12 w-full md:pl-10 md:pr-4 md:py-12 py-8 bg-white">
                    <div className="flex pb-10 justify-between items-center text-neutral">
                        <p className="text-3xl md:text-5xl font-black leading-10">
                            Food Cart
                        </p>
                        <p className="text-md md:text-xl font-medium hover:text-red-500 md:mr-5 border border-neutral cursor-pointer duration-300 hover:border-red-500 px-2 py-1 rounded-md">
                            Clear Cart
                        </p>
                    </div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className="lg:w-4/12 w-full bg-[#F3F3F3] lg:h-[calc(100vh-5rem)] sticky top-20">
                    <div className="flex flex-col p-10 lg:pt-20 justify-between lg:h-[calc(100vh-5rem)]">
                        <div className="font-semibold">
                            <p className="text-3xl md:text-4xl font-black text-center text-neutral">
                                Order Summary
                            </p>
                            <div className="flex items-center justify-between pt-16">
                                <p className="text-base leading-none text-neutral">
                                    Subtotal
                                </p>
                                <p className="text-base leading-none text-neutral">
                                    $9,000
                                </p>
                            </div>
                            <div className="flex items-center justify-between pt-5">
                                <p className="text-base leading-none text-neutral">
                                    Shipping
                                </p>
                                <p className="text-base leading-none text-neutral">
                                    $30
                                </p>
                            </div>
                            <div className="flex items-center justify-between pt-5">
                                <p className="text-base leading-none text-neutral">
                                    Tax
                                </p>
                                <p className="text-base leading-none text-neutral">
                                    $35
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 md:mt-14 lg:mt-0">
                            <hr className="h-[2px] bg-neutral" />
                            <div className="flex items-center pb-6 justify-between ">
                                <p className="text-2xl leading-normal text-neutral">
                                    Total
                                </p>
                                <p className="text-2xl font-bold leading-normal text-right text-neutral">
                                    $10,240
                                </p>
                            </div>

                            <Button
                                className={
                                    "w-full rounded-sm bg-neutral md:text-xl"
                                }
                            >
                                PROCEED TO CHECKOUT
                            </Button>
                            <div className="flex items-center gap-2 mt-5 cursor-pointer">
                                <AiOutlineArrowLeft className="text-xl mt-1" />
                                <p className="md:text-xl text-neutral">
                                    Back to shopping
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </Wrapper>
    );
};

export default Cart;
