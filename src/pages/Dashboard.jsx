import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import BannerDash from "../Component/BannerDash";


const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <BannerDash />
            <div className="min-h-[100px] md:container mx-auto">

                <Outlet />
            
            </div>
        </div>
    );
};

export default Dashboard;