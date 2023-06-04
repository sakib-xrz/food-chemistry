import TopBanner from "../../components/TopBanner";
import banner from "../../../assets/shop/banner2.jpg";
import Wrapper from "../../components/Wrapper";
import useFetch from ".././../hooks/useFetch.js";
import { useState } from "react";
import MenuCard from "../../components/MenuCard";
import Loader from "../../components/Loader";

const Shop = () => {
    const categoryFromLocalStorage = JSON.parse(localStorage.getItem("category"));

    const [selectedCategory, setSelectedCategory] = useState(categoryFromLocalStorage ?? "dessert");

    const getDataBySelectedCategory = useFetch(
        `http://localhost:5000/api/v1/menu/get-menu/${selectedCategory}`
    );
    const { data: categoryWiseData, loading } = getDataBySelectedCategory;

    const categoryData = categoryWiseData?.data;

    const getAllCategories = useFetch(
        "http://localhost:5000/api/v1/menu/get-categories"
    );

    const { data } = getAllCategories;

    const allCategories = data?.data;
    const filteredData = allCategories?.filter(
        (data) => data !== "offered" && data !== "popular"
    );

    return (
        <div className="space-y-14 lg:space-y-20">
            <TopBanner
                img={banner}
                title={"OUR Shop"}
                description={"Would you like to try a dish?"}
            />
            <Wrapper>
                <div className="flex justify-center gap-5 lg:gap-14 mb-10">
                    {filteredData?.map((category, index) => (
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

                {loading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-12 gap-auto md:gap-5 lg:gap-10">
                        {categoryData?.map((item) => (
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
