import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import BannerSt from "../Component/BannerSt";

const Statistics = () => {
    return (
        <div>
            <Navbar />
            <BannerSt />

            <div className="min-h-[100px] md:container mx-auto">

                <Outlet />
            </div>
        </div>
    );
};

export default Statistics;