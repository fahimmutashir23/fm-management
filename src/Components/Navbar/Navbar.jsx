import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const Navbar = () => {

    const {user, logoutUser} = useContext(AuthContext);
    
    const handleLogOut =()=>{
        logoutUser()
    }

  const navItem = (
    <>
      
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-b-2" : " ")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/special"
            className={({ isActive }) => (isActive ? "border-b-2" : " ")}>
            Spacial Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={({ isActive }) => (isActive ? "border-b-2" : " ")}>
            Your Booking
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "border-b-2" : " ")}>
            Contact
          </NavLink>
        </li>
        
          <li>
            <NavLink
              to="/registration"
              className={({ isActive }) => (isActive ? "border-b-2" : " ")}>
              Registration
            </NavLink>
          </li>
     
    </>
  );

  return (
    <div className="bg-bg_nav_footer text-primary_color fixed w-full z-20 opacity-90">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/"
           className="btn btn-ghost normal-case text-xl text-secondary_color font-roboto">
            <div className="text-left">
            <p className="text-primary_color text-3xl font-extrabold -mb-2 font-roboto">FM</p>
            <p className="text-card font-roboto text-lg">Management</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-primary_color menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end flex flex-col md:flex-row">
            {
                user && <div className="mr-2">
                <img src={user?.photoURL} className="rounded-full w-10 h-10" />
                
              </div>
            }
            { 
              user? <button
              onClick={handleLogOut}
              className="btn px-5 hover:text-primary_color py-2 border-none bg-primary_color rounded-md font-roboto text-secondary_color">
              <div className="space-y-1">
              <p>Log out</p>
              <p className="text-center">{user?.displayName}</p>
              </div>
            </button>
              :
              <Link
                to="/login"
                className="btn px-5 hover:text-primary_color py-2 border-none bg-primary_color rounded-md font-roboto text-secondary_color">
                Log in
              </Link>
              
            }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
