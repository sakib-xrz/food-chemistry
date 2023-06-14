import Wrapper from "../../components/Wrapper";
import { useAuth } from "../../context/AuthProvider";

const Checkout = () => {
    const { currentUser } = useAuth();
    return (
        <Wrapper className={"min-h-screen flex justify-center items-center"}>
            <div className="max-w-md md:mx-auto bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
                <div className="md:flex ">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="flex flex-row pb-5">
                            <h2 className="text-3xl text-primary font-semibold underline">
                                Checkout
                            </h2>
                        </div>
                        <span>Customer Information</span>
                        <div className="relative pb-5">
                            {" "}
                            <input
                                type="email"
                                name="email"
                                className="border text-neutral bg-white font-medium rounded h-10 w-full focus:outline-none focus:border-primary px-2 mt-2 text-sm"
                                defaultValue={currentUser?.email}
                                readOnly
                            />{" "}
                        </div>{" "}
                        <span>Shipping Address</span>
                        <div className="grid md:grid-cols-2 md:gap-2">
                            {" "}
                            <input
                                type="text"
                                name="mail"
                                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                placeholder="First name*"
                            />{" "}
                            <input
                                type="text"
                                name="mail"
                                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                placeholder="Last name*"
                            />{" "}
                        </div>{" "}
                        <input
                            type="text"
                            name="mail"
                            className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                            placeholder="Company (optional)"
                        />{" "}
                        <input
                            type="text"
                            name="mail"
                            className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                            placeholder="Address*"
                        />{" "}
                        <input
                            type="text"
                            name="mail"
                            className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                            placeholder="Apartment, suite, etc. (optional)"
                        ></input>
                        <div className="grid md:grid-cols-3 md:gap-2">
                            {" "}
                            <input
                                type="text"
                                name="mail"
                                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                placeholder="Zipcode*"
                            />{" "}
                            <input
                                type="text"
                                name="mail"
                                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                placeholder="City*"
                            />{" "}
                            <input
                                type="text"
                                name="mail"
                                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                placeholder="State*"
                            />{" "}
                        </div>{" "}
                        <input
                            type="text"
                            name="mail"
                            className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                            placeholder="Country*"
                        />{" "}
                        <input
                            type="text"
                            name="mail"
                            className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                            placeholder="Phone Number*"
                        ></input>
                        <div className="flex justify-between items-center pt-2">
                            {" "}
                            <button
                                type="button"
                                className="h-12 w-24 text-blue-500 text-xs font-medium"
                            >
                                Return to cart
                            </button>{" "}
                            <button
                                type="button"
                                className="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white"
                            >
                                Continue to Shipping
                            </button>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Checkout;
