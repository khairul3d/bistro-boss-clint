import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Naveber from "../Pages/Shared/Naveber/Naveber";


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') ||
    location.pathname.includes('signup')
    return (
        <div>
           { noHeaderFooter || <Naveber></Naveber>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;