

const BannerDetails = ({ data }) => {
    const {product_name, product_title, category, price, description, rating,product_image} = data;
    



    return (
        <div className="min-h-[800px]">
            <div className="bg-[#9538E2] mx-auto md:container h-[650px] rounded-lg flex flex-col justify-center items-center">

                <div className="flex flex-col gap-5 justify-center items-center py-10 pb-40 ">
                    <h1 className="text-white text-center text-3xl font-bold">Product Details</h1>
                    <p className="text-white text-lg text-center">Explore the latest gadget that take your experience into <br />
                        a next level and boost up your confidence on the peak...</p>

                </div>

                <div className=" flex  flex-col items-center text-center justify-center ">
                    <div className="w-96 h-96">
                        <div className="card bg-base-100 w-96 shadow-xl flex flex-col">
                            <figure className="px-10 pt-10">
                                <img
                                    src={product_image}
                                    alt="product"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center flex flex-col">
                                <h2 className="card-title">{product_name}</h2>
                                <h3>{product_title}</h3>
                                <p>{description}</p>
                                <p>{category}</p>
                                <div>
                                    <p>{price}</p>
                                    <p>{rating}</p>
                                </div>
                               <div className="flex flex-row justify-between">
                                <div className="card-actions">
                                        <Link  to='/wishlist' className="btn btn-primary">Add to Wishlist</Link>
                                    </div>
                                    <div className="card-actions">
                                        <Link   to='/cart' className="btn btn-primary">Add to Cart</Link>
                                    </div>
                               </div>
                            </div>
                        </div>


                        {/* <img className="absolute w-[400px] lg:w-[500px] h-[500px] top-[350px]  left-[50px] md:left-[150px] lg:left-[390px]  rounded-3xl shadow-slate-700" src='../../public/assets/banner.jpg'>
                        </img> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerDetails;