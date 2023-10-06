import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Registration from "../Pages/Registration/Registration";
import Contact from "../Pages/Contact/Contact";
import Special from "../Pages/Special/Special";
import Login from "../Pages/Login/Login";


const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
                path: "special",
                element: <Special></Special>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])


export default Routers;