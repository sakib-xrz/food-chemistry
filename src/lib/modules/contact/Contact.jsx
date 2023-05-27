import TopBanner from "../../components/TopBanner";
import banner from "../../../assets/contact/banner.jpg"

const Contact = () => {
    return (
        <div>
            <TopBanner
                img={banner}
                title={"CONTACT US"}
                description={"Would you like to try a dish?"}
            />
        </div>
    );
};

export default Contact;