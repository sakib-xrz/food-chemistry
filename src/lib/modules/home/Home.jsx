import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import OverviewBanner from "../../components/OverviewBanner";
import Title from "../../components/Title";
import service from "../../../assets/home/chef-service.jpg";
import Wrapper from "../../components/Wrapper";
import MenuItem from "../../components/MenuItem";
import ButtonPrimary from "../../components/ButtonPrimary";

const Home = () => {
    return (
        <div className="space-y-14 lg:space-y-20">
            <Banner />
            <div>
                <Title
                    title={"ORDER ONLINE"}
                    subtitle={"From 11:00am to 10:00pm"}
                />
                <Categories />
            </div>
            <Wrapper>
                <OverviewBanner
                    img={service}
                    title={"FOOD CHEMISTRY"}
                    description={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
                    }
                    bgcolor={"bg-white"}
                />
            </Wrapper>
            <Wrapper>
                <Title title={"FROM OUR MENU"} subtitle={"Check it out"} />
                <div className="grid grid-cols-12">
                    <MenuItem
                        img={"https://i.ibb.co/5L9n7wZ/1.jpg"}
                        title={"ROAST DUCK BREAST"}
                        price={14.5}
                        description={
                            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
                        }
                    />
                    <MenuItem
                        img={"https://i.ibb.co/54nSnfv/2.jpg"}
                        title={"Tuna Niçoise"}
                        price={12.5}
                        description={
                            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
                        }
                    />
                    <MenuItem
                        img={"https://i.ibb.co/dfWFtxL/4.jpg"}
                        title={"Escalope de Veau"}
                        price={10.5}
                        description={
                            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
                        }
                    />
                    <MenuItem
                        img={"https://i.ibb.co/mBFNRDR/7.jpg"}
                        title={"Chicken and Walnut Salad"}
                        price={13.5}
                        description={
                            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
                        }
                    />
                    <MenuItem
                        img={"https://i.ibb.co/tC6c412/13.jpg"}
                        title={"Fish Parmentier"}
                        price={12.5}
                        description={
                            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
                        }
                    />
                    <MenuItem
                        img={"https://i.ibb.co/CBtBDsb/1.jpg"}
                        title={"Roasted Pork Belly"}
                        price={12.5}
                        description={
                            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
                        }
                    />
                </div>
                <div className="flex justify-center mt-8">
                    <ButtonPrimary>View Full Menu</ButtonPrimary>
                </div>
            </Wrapper>
            <div></div>
        </div>
    );
};

export default Home;
