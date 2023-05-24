import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import Title from "../../components/Title";

const Home = () => {
    return (
        <div className="space-y-20">
            <Banner />
            <Title
                title={"ORDER ONLINE"}
                subtitle={"From 11:00am to 10:00pm"}
            />
            <Categories />
            <div></div>
        </div>
    );
};

export default Home;