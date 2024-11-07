import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";


const All = () => {
    const AllProducts = useLoaderData();
    const { category } = useParams();
    const [products, setProduct] = useState([]);
   
    useEffect(() => {
        if(category){
            const filterByCategory = [...AllProducts].filter(product => product.category === category)
            setProduct(filterByCategory)
        }else{
            setProduct(AllProducts)
        }
        
        
    }, [category, AllProducts])
    return (
            <div className=" ">
                {
                products.map(product => <Product key={product.product_id} product={product} />)
                }  
            </div>
        
    );
};

export default All;