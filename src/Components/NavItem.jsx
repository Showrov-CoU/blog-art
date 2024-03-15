import { useState } from "react";
import Modal from "./Modal";

const NavItem = ({ name, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  //const [activeModal, setActiveModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   console.log(id);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        setIsModalOpen(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        handleModalClose();
      }}
      className={`h-full  flex justify-center items-center px-2 cursor-pointer ${
        isHovered ? "bg-[#E0561B]" : ""
      }`}
    >
      <span>{name}</span>
    </div>
  );
};

export default NavItem;
