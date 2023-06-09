import { useEffect, useState } from "react";
import sad from "../../../assets/others/sad.png";
import smile from "../../../assets/others/smile.png";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../helpers/global";

const EmailVerify = () => {
    const location = useLocation();
    const token = location.search.split("=")[1];
    const [pageLoading, setPageLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (token) {
            verifyEmail(token);
        }
    }, [token]);

    const verifyEmail = async (token) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/user/verify-email?token=${token}`
            );
            if (response?.status === 400) {
                setError(true);
                setErrorMessage(response?.data?.message);
                setPageLoading(false);
            } else if (response?.status === 409) {
                setError(true);
                setErrorMessage(response?.data?.message);
                setPageLoading(false);
            } else if (response?.data?.success) {
                setPageLoading(false);
            }
            setPageLoading(false);
        } catch (e) {
            setPageLoading(false);
            setErrorMessage(e?.message);
            setError(true);
        }
    };

    return pageLoading ? (
        <div className="h-screen flex justify-center items-center">
            <Loader />
        </div>
    ) : error || !token ? (
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
                    {errorMessage} . . . .
                </p>
            </div>
        </div>
    ) : (
        <div className="h-screen flex flex-col justify-center items-center font-bold">
            <div className="flex items-center justify-center  ">
                <img className="h-40 w-40" src={smile} alt="" />
            </div>
            <p className="text-5xl text-green-500 my-4 text-center">
                Email Verified Successful
            </p>
            <p className="text-lg text-primary font-medium">
                Your email was verified you can continue using the application
            </p>
            <a href="/login">
                <Button className={"mt-5"}>Login now</Button>
            </a>
        </div>
    );
};

export default EmailVerify;
