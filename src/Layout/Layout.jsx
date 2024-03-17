import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Secondbar from "../Shared/Secondbar";
import SecondFooter from "../Shared/SecondFooter";
import DetailsForm from "../Components/DetailsForm";
import ReadNext from "../Components/ReadNext";

const Layout = () => {
  return (
    <div className="leading-relaxed tracking-wider">
      <Navbar></Navbar>
      <Secondbar></Secondbar>
      <div className="min-h-screen">
        <div className="min-h-screen flex justify-center">
          <Outlet></Outlet>
          <DetailsForm></DetailsForm>
        </div>
        <div>
          <ReadNext></ReadNext>
        </div>
      </div>

      <Footer></Footer>
      <SecondFooter></SecondFooter>
    </div>
  );
};

export default Layout;
