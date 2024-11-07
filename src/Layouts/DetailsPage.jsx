
import { useLoaderData } from 'react-router-dom';
import BannerDetails from '../Component/BannerDetails';
import Navbar from '../Component/Navbar';


const DetailsPage = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Navbar />
            <BannerDetails key={data.product_id} data={data}/>
          
        </div>
    );
};

export default DetailsPage;