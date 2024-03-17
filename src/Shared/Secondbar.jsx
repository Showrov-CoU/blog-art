import { useEffect, useState } from "react";
import NavItem from "../Components/NavItem";
import Modal from "../Components/Modal";

const Secondbar = () => {
  const [openModalId, setIsModalId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (option) => {
    try {
      const res = await fetch(`http://localhost:5000/${option}`);
      const result = await res.json();
      setData(result);
      //   console.log(result);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    if (openModalId) {
      fetchData(openModalId);
    }
  }, [openModalId]);

  return (
    <>
      <div className="h-96 md:h-12 flex justify-center items-center bg-black text-white w-full">
        <div className="h-full">
          <div className="px-1 flex flex-col md:flex-row justify-center items-center md:gap-5 h-full ">
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsHovered(true);
                setIsModalId("abroad");
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                //setData([]);
              }}
            >
              <NavItem
                name="Study abroad"
                id="abroad"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>

            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsHovered(true);
                setIsModalId("whatwedo");
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavItem
                name="What we do?"
                id="whatwedo"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsHovered(true);
                setIsModalId("destination");
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavItem
                name="Destinations"
                id="destination"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsHovered(true);
                setIsModalId("course");
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <NavItem
                name="Find a course"
                id="course"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsHovered(true);
                setIsModalId("service");
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavItem
                name="Student Essential Services"
                id="service"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>
            <div
              className="h-full w-full md:w-fit"
              onMouseEnter={() => {
                setIsHovered(true);
                setIsModalId("ielts");
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavItem
                name="IELTS"
                id="ielts"
                isHovered={isHovered}
                openModalId={openModalId}
              ></NavItem>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute z-20 left-1/2 transform -translate-x-1/2 w-[80%] mx-auto bg-[#F3F3F3] p-5 rounded-xl ${
          !isHovered ? "hidden" : ""
        }`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Modal id={openModalId} data={data}></Modal>
      </div>
      {/* <p>hello</p> */}
    </>
  );
};

export default Secondbar;
