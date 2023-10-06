import { Link } from "react-router-dom";
import error from "../../assets/image/404_not found.png"

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <img src={error} alt="" className="w-1/2"/>
                <Link to="/" className="text-primary_color text-lg">Go to home</Link>
            </div>            
        </div>
    );
};

export default ErrorPage;