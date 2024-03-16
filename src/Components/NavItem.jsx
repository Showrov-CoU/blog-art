import { useState } from "react";
import Modal from "./Modal";

const NavItem = ({ name, id, isHovered, openModalId }) => {
  //   const [isHovered, setIsHovered] = useState(false);

  //   const handleModalClose = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <div
      //   onMouseEnter={() => {
      //     setIsHovered(true);
      //     //setIsModalOpen(true);
      //   }}
      //   onMouseLeave={() => {
      //     setIsHovered(false);
      //     handleModalClose();
      //   }}
      className={`h-full  flex justify-center items-center px-2 cursor-pointer ${
        isHovered && openModalId === id ? "bg-[#E0561B]" : ""
      }`}
    >
      <span>{name}</span>
    </div>
  );
};

export default NavItem;
