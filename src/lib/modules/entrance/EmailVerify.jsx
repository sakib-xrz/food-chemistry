import { useState } from "react";
import sad from "../../../assets/others/sad.png";
import smile from "../../../assets/others/smile.png";
import Button from "../../components/Button";
import Loader from "../../components/Loader";

const EmailVerify = () => {
    // const [pageLoading, setPageLoading] = useState(true);
    // const [error, setError] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <Loader />
            </div>
            <div>
                <div className="h-screen flex flex-col justify-center items-center font-bold">
                    <div className="flex items-center justify-center  ">
                        <img className="h-40 w-40" src={sad} alt="" />
                    </div>
                    <p className="text-5xl text-primary my-4 text-center">
                        Oh no !{" "}
                    </p>
                    <p className="text-lg text-primary font-medium">
                        {" "}
                        {"Email verified failed"} . . . .
                    </p>
                </div>
            </div>

            <div className="h-screen flex flex-col justify-center items-center font-bold">
                <div className="flex items-center justify-center  ">
                    <img className="h-40 w-40" src={smile} alt="" />
                </div>
                <p className="text-5xl text-green-500 my-4 text-center">
                    Email Verified Successful
                </p>
                <p className="text-lg text-primary font-medium">
                    Your email was verified you can continue using the
                    application
                </p>
                <a href="/login">
                    <Button className={"mt-5"}>Login now</Button>
                </a>
            </div>
        </>
    );
};

export default EmailVerify;
