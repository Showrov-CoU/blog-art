import PropTypes from "prop-types";
const NavItem = ({ name, id, isHovered, openModalId }) => {
  return (
    <div
      className={`h-full  flex justify-center items-center px-2 cursor-pointer ${
        isHovered && openModalId === id ? "bg-[#E0561B]" : ""
      }`}
    >
      <span>{name}</span>
    </div>
  );
};

NavItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  isHovered: PropTypes.bool,
  openModalId: PropTypes.string,
};

export default NavItem;
