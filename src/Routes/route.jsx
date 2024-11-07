import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import All from "../Component/All";
import DetailsPage from "../Layouts/DetailsPage";



const routes = createBrowserRouter([
    {
        path: '/',
        element:  <MainLayout />,
        errorElement: <p>Error!!!!</p>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: ()=> fetch('../../public/category.json'),
                children:[
                        {
                            path: '/',
                            element: <All />,
                            loader: ()=> fetch('../../public/data.json'),
                        },
                        ,
                        {
                            path: '/category/:category',
                            element: <All />,
                            loader: ()=> fetch('../../public/data.json'),
                        },
                ],
            },
            {
                path: '/statistics',
                element: <Statistics />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/details',
                element: <DetailsPage />,
                loader: ()=> fetch('../../public/data.json'),
            }
        ],
    },
])



export default routes;