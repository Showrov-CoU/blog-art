import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Secondbar from "../Shared/Secondbar";
import SecondFooter from "../Shared/SecondFooter";

const Layout = () => {
  return (
    <div className="leading-relaxed tracking-wider">
      <Navbar></Navbar>
      <Secondbar></Secondbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
      <SecondFooter></SecondFooter>
    </div>
  );
};

export default Layout;
