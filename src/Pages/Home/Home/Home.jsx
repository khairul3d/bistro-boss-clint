import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopulerManu from "../PopulerManu/PopulerManu";
import Swaiper from "../Swaiper/Swaiper";
import Featured from "./Featured/Featured";
import Tastimonials from "./Tastimonials/Tastimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Swaiper></Swaiper>
            <PopulerManu></PopulerManu>
            <Featured></Featured>
            <Tastimonials></Tastimonials>
        </div>
    );
};

export default Home;