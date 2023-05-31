import TopBanner from "../../components/TopBanner";
import banner from "../../../assets/menu/banner3.jpg";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import MenuCover from "../../components/MenuCover";
import desserts from "../../../assets/menu/dessert-bg.jpeg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import salad from "../../../assets/menu/salad-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import MenuItem from "../../components/MenuItem";
import ButtonPrimary from "../../components/ButtonPrimary";
import { Link } from "react-router-dom";

const Menu = () => {
    const offerDataLoad = useFetch(
        "http://localhost:5000/api/v1/menu/get-menu/offered?limit=6"
    );
    const dessertDataLoad = useFetch(
        "http://localhost:5000/api/v1/menu/get-menu/dessert?limit=6"
    );
    const pizzaDataLoad = useFetch(
        "http://localhost:5000/api/v1/menu/get-menu/pizza?limit=6"
    );
    const saladDataLoad = useFetch(
        "http://localhost:5000/api/v1/menu/get-menu/salad?limit=6"
    );
    const soupDataLoad = useFetch(
        "http://localhost:5000/api/v1/menu/get-menu/soup?limit=6"
    );

    const { loading: offerLoading, data: offerData } = offerDataLoad;
    const { loading: dessertLoading, data: dessertData } = dessertDataLoad;
    const { loading: pizzaLoading, data: pizzaData } = pizzaDataLoad;
    const { loading: saladLoading, data: saladData } = saladDataLoad;
    const { loading: soupLoading, data: soupData } = soupDataLoad;

    return (
        <div className="space-y-14 lg:space-y-20">
            <TopBanner
                img={banner}
                title={"OUR Menu"}
                description={"Would you like to try a dish?"}
            />
            <Wrapper>
                <Title title={"TODAY'S OFFER"} subtitle={"Don't miss"} />
                {offerLoading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-12">
                        {offerData?.data?.map((menuItem) => (
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
                <Link to={"/shop"}>
                    <div className="flex justify-center mt-10">
                        <ButtonPrimary>Order Your Favorite Food</ButtonPrimary>
                    </div>
                </Link>
            </Wrapper>
            <MenuCover
                img={desserts}
                title={"Desserts"}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <Wrapper>
                {dessertLoading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-12">
                        {dessertData?.data?.map((menuItem) => (
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
                <Link to={"/shop"}>
                    <div className="flex justify-center mt-10">
                        <ButtonPrimary>Order Your Favorite Food</ButtonPrimary>
                    </div>
                </Link>
            </Wrapper>
            <MenuCover
                img={pizza}
                title={"Pizza"}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <Wrapper>
                {pizzaLoading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-12">
                        {pizzaData?.data?.map((menuItem) => (
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
                <Link to={"/shop"}>
                    <div className="flex justify-center mt-10">
                        <ButtonPrimary>Order Your Favorite Food</ButtonPrimary>
                    </div>
                </Link>
            </Wrapper>
            <MenuCover
                img={salad}
                title={"Salad"}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <Wrapper>
                {saladLoading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-12">
                        {saladData?.data?.map((menuItem) => (
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
                <Link to={"/shop"}>
                    <div className="flex justify-center mt-10">
                        <ButtonPrimary>Order Your Favorite Food</ButtonPrimary>
                    </div>
                </Link>
            </Wrapper>
            <MenuCover
                img={soup}
                title={"Soup"}
                description={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <Wrapper>
                {soupLoading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-12">
                        {soupData?.data?.map((menuItem) => (
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
                <Link to={"/shop"}>
                    <div className="flex justify-center mt-10">
                        <ButtonPrimary>Order Your Favorite Food</ButtonPrimary>
                    </div>
                </Link>
            </Wrapper>
            <div></div>
        </div>
    );
};

export default Menu;
