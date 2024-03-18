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
      <div className="min-h-screen pt-16">
        <div className="md:mx-32 min-h-screen flex justify-between">
          <div className="w-[45%]">
            <Outlet></Outlet>
          </div>
          <div className="w-[30%] border-2">
            <DetailsForm></DetailsForm>
          </div>
        </div>
        <div className="pt-5">
          <ReadNext></ReadNext>
        </div>
      </div>

      <Footer></Footer>
      <SecondFooter></SecondFooter>
    </div>
  );
};

export default Layout;
