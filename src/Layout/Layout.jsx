import Navbar from "../Shared/Navbar";
import Secondbar from "../Shared/Secondbar";


const Layout = () => {
    return (
        <div className="leading-relaxed tracking-wider">
        <Navbar></Navbar>
        <Secondbar></Secondbar>
        {/* <Outlet></Outlet>
        <Footer></Footer> */}
      </div>
    );
};

export default Layout;