import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import OverviewBanner from "../../components/OverviewBanner";
import Title from "../../components/Title";
import service from "../../../assets/home/chef-service.jpg";
import Wrapper from "../../components/Wrapper";
import MenuItem from "../../components/MenuItem";
import ButtonPrimary from "../../components/ButtonPrimary";
import MenuCard from "../../components/MenuCard";
import featured from "../../../assets/home/featured.jpg";

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
            <Wrapper>
                <div className="bg-[#151515]">
                    <p className="text-white text-center font-medium text-2xl lg:text-6xl py-16">
                        Call Us: +880 1409029742
                    </p>
                </div>
            </Wrapper>
            <Wrapper>
                <Title title={"CHEF RECOMMENDS"} subtitle={"Should Try"} />
                <div className="grid grid-cols-12 gap-auto md:gap-5 lg:gap-10">
                    <MenuCard
                        img={"https://i.ibb.co/dfWFtxL/4.jpg"}
                        title={"Roast Duck Breast"}
                        description={
                            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
                        }
                    />
                    <MenuCard
                        img={"https://i.ibb.co/5L9n7wZ/1.jpg"}
                        title={"Tuna Niçoise"}
                        description={
                            "Warm goats cheese and roasted vegetable salad with black olive tapenade crostini"
                        }
                    />
                    <MenuCard
                        img={"https://i.ibb.co/CBtBDsb/1.jpg"}
                        title={"Escalope de Veau"}
                        description={
                            "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette"
                        }
                    />
                </div>
            </Wrapper>
            <div className="bg-img">
                <Wrapper>
                    <div className="flex-col md:flex-row flex justify-center items-center gap-10 py-14 lg:py-28">
                        <img className="md:w-6/12 h-auto rounded-sm" src={featured} alt="" />
                        <div className="text-white md:w-6/12 space-y-2 text-center md:text-left">
                            <h5>March 20, 2023</h5>
                            <h4 className="font-bold text-lg">
                                WHERE CAN I GET SOME?
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Error voluptate facere,
                                deserunt dolores maiores quod nobis quas quasi.
                                Eaque repellat recusandae ad laudantium tempore
                                consequatur consequuntur omnis ullam maxime
                                tenetur.
                            </p>
                            <button className="border-2 border-l-0 border-r-0 border-transparent border-b-white text-white font-medium py-2 px-6 rounded-md transition-all hover:bg-white hover:text-primary hover:border-b-primary">
                                Read More
                            </button>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div></div>
        </div>
    );
};

export default Home;
