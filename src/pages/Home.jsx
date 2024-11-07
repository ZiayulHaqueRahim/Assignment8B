import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Component/Header";
import Categories from "../Component/Categories";


const Home = () => {
    const categories = useLoaderData();
   
    return (
        <div>
            <Header />
            <div className="flex flex-row max-w-full justify-between gap-5">
                <div className="min-h-[400px]  flex justify-start items-start flex-col gap-5 max-w-[2/6] p-3 rounded-xl bg-slate-100 px-3">
                    <Categories categories={categories} />
                    
                </div>
                <Outlet />
            </div>
            
        </div>
    );
};



export default Home;