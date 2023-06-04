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
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const Home = () => {
    const getMenu = useFetch(
        "http://localhost:5000/api/v1/menu/get-menus?limit=6"
    );

    const { data, loading } = getMenu;

    const menuItems = data.data;

    const getRecommends = useFetch(
        "http://localhost:5000/api/v1/menu/get-menu/offered?limit=3"
    );

    const { data: recommendsItemsData, loading: isLoading } = getRecommends;

    const recommendsItems = recommendsItemsData.data;

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
                {loading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-12">
                        {menuItems?.map((menuItem) => (
                            <MenuItem
                                key={menuItem?._id}
                                img={menuItem?.image}
                                title={menuItem?.name}
                                price={menuItem?.price}
                                description={menuItem?.recipe}
                            />
                        ))}
                    </div>
                )}
                <div className="flex justify-center mt-8">
                    <Link to={"/menu"}>
                        <ButtonPrimary>View Full Menu</ButtonPrimary>
                    </Link>
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

                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-12 gap-auto md:gap-5 lg:gap-10">
                        {recommendsItems?.map((item) => (
                            <MenuCard
                                item={item}
                                key={item?._id}
                                img={item?.image}
                                title={item?.name}
                                description={item?.recipe}
                                price={item?.price}
                            />
                        ))}
                    </div>
                )}
            </Wrapper>
            <div className="bg-img">
                <Wrapper>
                    <div className="flex-col md:flex-row flex justify-center items-center gap-10 py-14 lg:py-28">
                        <img
                            className="md:w-6/12 h-auto rounded-sm"
                            src={featured}
                            alt=""
                        />
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
        </div>
    );
};

export default Home;
