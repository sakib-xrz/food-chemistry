import useTitle from "../../lib/hooks/useTitle";
import EmailVerify from "../../lib/modules/entrance/EmailVerify";

const EmailVerifyPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Email verify");
    return (
        <div>
            <EmailVerify />
        </div>
    );
};

export default EmailVerifyPage;
