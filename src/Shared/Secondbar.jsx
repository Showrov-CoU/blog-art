import NavItem from "../Components/NavItem";

const Secondbar = () => {
  return (
    <div className="h-12 flex justify-center items-center bg-black text-white w-full">
      <div className="h-full">
        <div className="px-1 flex flex-col md:flex-row justify-center items-center gap-5 h-full">
          <NavItem name="Study abroad" ></NavItem>
          <NavItem name="What we do?"></NavItem>
          <NavItem name="Destinations"></NavItem>
          <NavItem name="Find a course"></NavItem>
          <NavItem name="Student Essential Services"></NavItem>
          <NavItem name="IELTS"></NavItem>
        </div>
      </div>
    </div>
  );
};

export default Secondbar;
