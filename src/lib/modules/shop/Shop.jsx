import TopBanner from "../../components/TopBanner";
import banner from "../../../assets/shop/banner2.jpg";
import Wrapper from "../../components/Wrapper";
import useFetch from ".././../hooks/useFetch.js";
import { useState } from "react";
import MenuCard from "../../components/MenuCard";
import Loader from "../../components/Loader";
import { BASE_URL } from "../../helpers/global";

const Shop = () => {
    const categoryFromLocalStorage = JSON.parse(
        localStorage.getItem("category")
    );

    const [selectedCategory, setSelectedCategory] = useState(
        categoryFromLocalStorage ?? "dessert"
    );

    const getAllCategories = useFetch(`${BASE_URL}/menu/get-categories`);

    const getSelectedData = useFetch(
        `${BASE_URL}/menu/get-menu/${selectedCategory}`
    );

    const { data: categoriesData, loading: categoriesLoading } =
        getAllCategories;

    const allCategory = categoriesData?.data?.filter(
        (data) => data !== "offered" && data !== "popular"
    );

    const { data: categoryData, loading: categoryLoading } = getSelectedData;

    return (
        <div className="space-y-14 lg:space-y-20">
            <TopBanner
                img={banner}
                title={"OUR Shop"}
                description={"Would you like to try a dish?"}
            />
            <Wrapper>
                {categoriesLoading ? (
                    <Loader />
                ) : (
                    <div className="flex justify-center gap-5 lg:gap-14 mb-10">
                        {allCategory?.map((category, index) => (
                            <p
                                onClick={() => setSelectedCategory(category)}
                                key={index}
                                className={`${
                                    selectedCategory === category
                                        ? "text-primary"
                                        : ""
                                }  capitalize font-bold lg:text-2xl cursor-pointer hover:text-primary`}
                            >
                                {category}
                            </p>
                        ))}
                    </div>
                )}

                {categoryLoading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-12 gap-auto md:gap-5 lg:gap-10">
                        {categoryData?.data?.map((item) => (
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
            <div></div>
        </div>
    );
};

export default Shop;
