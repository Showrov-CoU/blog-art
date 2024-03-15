import { useState } from "react";

const NavItem = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-full flex justify-center items-center px-2 cursor-pointer ${
        isHovered ? "bg-[#E0561B]" : ""
      }`}
    >
      <span>{name}</span>
    </div>
  );
};

export default NavItem;
