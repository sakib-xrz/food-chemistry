import Wrapper from "./Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import useFetch from "../hooks/useFetch";

const Categories = () => {
    const response = useFetch(
        "http://localhost:5000/api/v1/menu/get-categories-and-images"
    );

    const { loading, data } = response;

    const allCategories = data.data

    const categories = allCategories?.filter(
        (item) => item?.category !== "offered" && item?.category !== "popular"
    );
    
    if (loading) {
        <h1 className="text-center text-6xl">Loading....</h1>
    }

    return (
        <Wrapper>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                speed={700}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {categories?.map((category, index) => (
                    <SwiperSlide key={index} className="relative">
                        <img
                            className="h-44 w-full object-cover relative rounded-md"
                            src={category?.image}
                            alt=""
                        />
                        <div className="absolute duration-500 rounded-md inset-0 bg-black opacity-50 hover:cursor-pointer hover:opacity-10"></div>
                        <p className="text-3xl font-semibold uppercase text-white absolute left-1/2 bottom-1/2 transform translate-y-1/2 -translate-x-1/2 hover:cursor-pointer">
                            {category?.category}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};

export default Categories;
