import logo from "../assets/logo.png";
import { MdOutlineEventAvailable } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BiUser } from "react-icons/bi";

// let color = "#FF3D00";

const Navbar = () => {
  return (
    <div className="navbar bg-[#D9D9D9] py-7 md:px-16">
      <div className="flex-1">
        <img
          className="w-[155px] h-[22px] md:w-[188px] md:h-[32px]"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex-none">
        <ul className="flex justify-center items-center px-1 gap-1 md:gap-10 text-black md:font-medium">
          <li className="flex justify-center items-center md:gap-2">
            <MdOutlineEventAvailable></MdOutlineEventAvailable>
            <a>Events</a>
          </li>
          <li className="flex justify-center items-center md:gap-2">
            <CiLocationOn className="text-xl"></CiLocationOn>
            <a>Find us</a>
          </li>
          <button className="btn btn-outline">
            <span className="text-xl">
              <BiUser></BiUser>
            </span>{" "}
            Sign up
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
