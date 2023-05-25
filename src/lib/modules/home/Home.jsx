import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import OverviewBanner from "../../components/OverviewBanner";
import Title from "../../components/Title";
import service from "../../../assets/home/chef-service.jpg";
import Wrapper from "../../components/Wrapper";

const Home = () => {
    return (
        <div className="space-y-14 lg:space-y-20">
            <Banner />
            <Title
                title={"ORDER ONLINE"}
                subtitle={"From 11:00am to 10:00pm"}
            />
            <Categories />
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
            <div></div>
        </div>
    );
};

export default Home;
