
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from "sweetalert2";

const PrivetRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const location = useLocation()
    

    if(loader){
        return <div className='flex justify-center items-start bg-secondary_color min-h-[50vh]'><span className="loading loading-spinner text-warning mt-7"></span></div>
    }

    if(user){
        return children
    }
    return <>
        {
            Swal.fire(
                "Sorry",
                "Please Sign in first",
                "warning"
                )
        }
    </> && <Navigate state={location.pathname} to="/login"></Navigate>
}

    

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;