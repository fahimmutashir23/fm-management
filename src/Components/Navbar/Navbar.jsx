import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <>
      <ul className="flex gap-11">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-b-2" : " ")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination"
            className={({ isActive }) => (isActive ? "border-b-2" : " ")}>
            Spacial Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/registration"
            className={({ isActive }) => (isActive ? "border-b-2" : " ")}>
            Registration
          </NavLink>
        </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "border-b-2" : " ")}>
              Contact
            </NavLink>
          </li>
      </ul>
    </>
  );

  return (
    <div className="bg-bg_nav_footer text-primary_color">
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
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        <div className="sm:navbar-end">
            { (
              <button
                
                className="btn px-5 hover:text-primary_color py-2 border-none bg-primary_color rounded-md font-roboto text-secondary_color"
              >
                Log in
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
