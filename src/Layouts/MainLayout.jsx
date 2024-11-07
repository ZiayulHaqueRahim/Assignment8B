import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";



const MainLayout = () => {
    return (
        <div>
            <div>
                <div className="min-h-[100px] md:container mx-auto">

                    <Outlet />
                </div>





                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;