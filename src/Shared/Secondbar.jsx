import { useState } from "react";
import NavItem from "../Components/NavItem";
import Modal from "../Components/Modal";

const Secondbar = () => {
  const [openModalId, setIsModalId] = useState(null);
  const [isMouseLeave, setIsMouseLeave] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

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
                setIsHovered(true);
                setIsModalId("item1");
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavItem
                name="Study abroad"
                id="item1"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>

            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsHovered(true);
                setIsModalId("item2");
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavItem
                name="What we do?"
                id="item2"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsHovered(true);
                setIsModalId("item3");
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavItem
                name="Destinations"
                id="item3"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsHovered(true);
                setIsModalId("item4");
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavItem
                name="Find a course"
                id="item4"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsHovered(true);
                setIsModalId("item5");
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavItem
                name="Student Essential Services"
                id="item5"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsHovered(true);
                setIsModalId("item6");
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavItem
                name="IELTS"
                id="item6"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-[80%] mx-auto bg-[#F3F3F3] p-5 ${
          !isHovered ? "hidden" : ""
        }`}
        onMouseEnter={() => {
          setIsHovered(true);
          //setIsModalId("item6");
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Modal id={openModalId}></Modal>
      </div>
    </>
  );
};

export default Secondbar;
