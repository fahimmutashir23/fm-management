import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Registration from "../Pages/Registration/Registration";
import Contact from "../Pages/Contact/Contact";
import Special from "../Pages/Special/Special";
import Login from "../Pages/Login/Login";
import YourBooking from "../Pages/YourBooking/YourBooking";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";


const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/special",
                element: <PrivetRoute><Special></Special></PrivetRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/booking",
                loader: ()=> fetch('/data.json'),
                element: <PrivetRoute><YourBooking></YourBooking></PrivetRoute>
            },
            {
                path: "/details/:id",
                element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>,
                loader: ()=> fetch('/data.json')
            }
        ]
    }
])


export default Routers;