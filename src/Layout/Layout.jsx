import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Secondbar from "../Shared/Secondbar";
import SecondFooter from "../Shared/SecondFooter";
import DetailsForm from "../Components/DetailsForm";
import ReadNext from "../Components/ReadNext";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="leading-relaxed tracking-wider">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Secondbar></Secondbar>
      </div>
      <div className="min-h-screen pt-16">
        <div className="md:mx-32 min-h-screen flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          <div className="w-[90%] md:w-[45%]">
            <Outlet></Outlet>
          </div>
          <div className="w-[90%] md:w-[30%] h-fit rounded-xl overflow-hidden">
            <DetailsForm></DetailsForm>
          </div>
        </div>
        <div className="pt-5">
          <ReadNext></ReadNext>
        </div>
      </div>

      <Footer></Footer>
      <SecondFooter></SecondFooter>
      <Toaster></Toaster>
    </div>
  );
};

export default Layout;
