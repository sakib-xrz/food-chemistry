import { Link } from "react-router-dom";
import Button from "../../lib/components/Button";
import useTitle from "../../lib/hooks/useTitle";
import { useAuth } from "../../lib/context/AuthProvider";
import Loader from "../../lib/components/Loader";

const FailedPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Failed");
        const { isLoading } = useAuth();
    return (
        <div className="h-screen flex justify-center items-center">
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <div className="bg-white p-6 md:mx-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-red-500 w-20 h-20 mx-auto my-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <div className="text-center">
                            <h3 className="md:text-4xl text-base text-red-500 font-semibold text-center mb-8">
                                Payment Failed!
                            </h3>
                            <Link to={"/cart"}>
                                <Button className={"bg-red-500 text-white"}>
                                    Back To Cart
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FailedPage;
