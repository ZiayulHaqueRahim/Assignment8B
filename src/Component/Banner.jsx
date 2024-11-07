import { Link } from "react-router-dom";


const Banner = () => {
    return (
    <div className="bg-[#9538E2] mx-auto md:container h-[450px] rounded-lg flex flex-col justify-center items-center">
        
        <div className="flex flex-col gap-5 justify-center items-center py-10 pb-40 ">
            <h1 className="text-white text-center text-3xl font-bold">Upgrade your Tech Accesories with<br/>
             Gadget Heaven Accesories</h1>
             <p className="text-white text-lg text-center">Explore the latest gadget that take your experience into <br/>
             a next level and boost up your confidence on the peak...</p>
             <Link to='/shop' className='text-[#9538E2] bg-white rounded-3xl p-2 text-center max-w-100 '>Shop Now</Link>
        </div>

        <div className=" flex  flex-col items-center text-center justify-center ">
            <div  className="w-96 h-96">
             <img className="absolute w-[400px] lg:w-[500px] h-96 top-[320px]  left-[50px] md:left-[150px] lg:left-[390px]  rounded-3xl shadow-slate-700" src='../../public/assets/banner.jpg'>
             </img>
            </div>
        </div>
    </div>
    );
};

export default Banner;