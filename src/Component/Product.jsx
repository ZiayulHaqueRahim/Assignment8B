import { Link } from "react-router-dom";


const Product = ({product}) => {
    const{product_name,product_image,product_title,price}=product;
    return (
    
         <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-5 py-10 rounded-xl shadow-2xl'>
           <div className="flex flex-col gap-4">
                    <div>
                        <img   className='max-w-100% max-h-40' src={product_image}></img>
                    </div>
                    <h3>{product_name}</h3>
                    <p>Price: {price}</p>
                    <Link to='/details' className="btn btn-outline btn-primary">Details</Link>
           </div>
        </div>
      
    );
};

export default Product;