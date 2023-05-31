import TopBanner from "../../components/TopBanner";
import banner from "../../../assets/menu/banner3.jpg";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import MenuCover from "../../components/MenuCover";
import desserts from "../../../assets/menu/dessert-bg.jpeg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import salad from "../../../assets/menu/salad-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
    return (
        <div className="space-y-14 lg:space-y-20">
            <TopBanner
                img={banner}
                title={"OUR Menu"}
                description={"Would you like to try a dish?"}
            />
            <Wrapper>
                <Title title={"TODAY'S OFFER"} subtitle={"Don't miss"} />
            </Wrapper>
            <MenuCover
                img={desserts}
                title={"Desserts"}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <MenuCover
                img={pizza}
                title={"Pizza"}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <MenuCover
                img={salad}
                title={"Salad"}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <MenuCover
                img={soup}
                title={"Soup"}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
        </div>
    );
};

export default Menu;
