import useTitle from "../../lib/hooks/useTitle";
import Login from "../../lib/modules/entrance/Login";

const LoginPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Login");
    return (
        <div>
            <Login />
        </div>
    );
};

export default LoginPage;
