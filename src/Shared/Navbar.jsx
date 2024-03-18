import logo from "../assets/logo.png";
import { MdOutlineEventAvailable } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import { FaAngleUp } from "react-icons/fa";
// import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "./../Provider/AuthProvider";

const Navbar = () => {
  const { user, googleSignIn, facebookSignIn, logOut } =
    useContext(AuthContext);

  const handleGoogleLogIn = () => {
    googleSignIn().then((result) => console.log(result));
  };

  const handleFacebookLogin = () => {
    facebookSignIn().then((result) => console.log(result));
  };

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:navbar bg-[#D9D9D9] py-7 md:px-16">
      <div className="flex-1">
        <img className="" src={logo} alt="" />
      </div>
      <div className="flex-none">
        <ul className="flex justify-center items-center px-1 gap-5 md:gap-10 text-black md:font-medium">
          <li className="flex justify-center items-center md:gap-2">
            <MdOutlineEventAvailable></MdOutlineEventAvailable>
            <a>Events</a>
          </li>
          <li className="flex justify-center items-center md:gap-2">
            <CiLocationOn className="text-xl"></CiLocationOn>
            <a>Find us</a>
          </li>

          <li className="flex flex-col justify-center items-center">
            {user ? (
              <button onClick={handleLogout} className="btn btn-outline">
                <span className="text-xl">
                  <div>
                    <img
                      className="size-8 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                </span>{" "}
                Sign Out
              </button>
            ) : (
              <div className="bg-[#D9D9D9] dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-outline m-1 flex justify-between items-center"
                >
                  <span className="text-xl">
                    <BiUser></BiUser>
                  </span>
                  <span className="text-sm">Sign In</span>
                  <span>
                    <FaAngleDown></FaAngleDown>
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-72 space-y-2 bg-[#D9D9D9]"
                >
                  <li>
                    <button
                      onClick={handleGoogleLogIn}
                      className="btn btn-outline"
                    >
                      <span className="text-xl">
                        <FaGoogle></FaGoogle>
                      </span>{" "}
                      Sign in with google
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleFacebookLogin}
                      className="btn btn-outline"
                    >
                      <span className="text-xl">
                        <FaFacebook></FaFacebook>
                      </span>{" "}
                      Sign in with Facebook
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {user ? (
              <div className="pt-1 text-sm text-lime-700">
                {user?.displayName}
              </div>
            ) : undefined}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
