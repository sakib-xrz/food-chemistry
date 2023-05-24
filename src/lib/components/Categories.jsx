import Wrapper from "./Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import category1 from "../../assets/home/slide1.jpg";
import category2 from "../../assets/home/slide2.jpg";
import category3 from "../../assets/home/slide3.jpg";
import category4 from "../../assets/home/slide4.jpg";

const categories = [
    {
        img: category1,
        title: "Salads",
    },
    {
        img: category2,
        title: "Pizzas",
    },
    {
        img: category3,
        title: "Soups",
    },
    {
        img: category4,
        title: "Desserts",
    },
];

const Categories = () => {
    return (
        <Wrapper>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
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
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="relative">
                        <img src={category.img} alt="" />
                        <p className="text-2xl text-white absolute bottom-3 left-1/2 transform -translate-x-1/2">
                            {category.title}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};

export default Categories;
