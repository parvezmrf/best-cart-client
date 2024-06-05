import AllProducts from "../components/home/AllProducts";
import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <AllProducts/>
        </div>
    );
};

export default Home;