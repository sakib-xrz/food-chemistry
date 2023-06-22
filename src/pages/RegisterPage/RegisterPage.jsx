import useTitle from "../../lib/hooks/useTitle";
import Register from "../../lib/modules/entrance/Register";

const RegisterPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Register");
    return (
        <div>
            <Register />
        </div>
    );
};

export default RegisterPage;
