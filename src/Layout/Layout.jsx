import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="absolute top-[104px] md:top-[64px] lg:top-[69px] w-full">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
