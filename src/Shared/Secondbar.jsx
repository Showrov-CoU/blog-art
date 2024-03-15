import { useState } from "react";
import NavItem from "../Components/NavItem";
import Modal from "../Components/Modal";

const Secondbar = () => {
  const [openModalId, setIsModalId] = useState(null);
  const [isShow, setIsShow] = useState(false);

  //   const openModal = () => {
  //     setIsModalOpen(true);
  //   };
  //console.log(isModalOpen, openModalId);

  return (
    <>
      <div className="h-96 md:h-12 flex justify-center items-center bg-black text-white w-full">
        <div className="h-full">
          <div className="px-1 flex flex-col md:flex-row justify-center items-center md:gap-5 h-full ">
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsModalId("item1");
              }}
            >
              <NavItem name="Study abroad" id="item1"></NavItem>
            </div>

            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsModalId("item2");
              }}
            >
              <NavItem name="What we do?" id="item2"></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsModalId("item3");
              }}
            >
              <NavItem name="Destinations" id="item3"></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsModalId("item4");
              }}
            >
              <NavItem name="Find a course" id="item4"></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsModalId("item5");
              }}
            >
              <NavItem name="Student Essential Services" id="item5"></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsModalId("item6");
              }}
            >
              <NavItem name="IELTS" id="item6"></NavItem>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-[80%] md:w-[50%] mx-auto bg-[#F3F3F3] p-5"
        onMouseLeave={() => setIsModalId(null)}
      >
        <Modal id={openModalId}></Modal>
      </div>
    </>
  );
};

export default Secondbar;
