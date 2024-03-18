import PropTypes from "prop-types";
import "./blog.css";
import { Link } from "react-router-dom";

const Blog = ({ item }) => {
  const handleClick = () => {
    // console.log("ok");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Link to={`/${item._id}`}>
      <div
        onClick={handleClick}
        className="card card-compact hover:bg-[#D9D9D9]"
      >
        <figure className="w-52 h-44 mx-auto">
          <img className="w-52 h-44 rounded-xl" src={item.img1} alt="" />
        </figure>
        <div className="card-body w-52 p-0">
          <h2 className="card-title ps-2">
            {item.name?.substring(0, 20) + "..."}
          </h2>
          <p className="ps-2">{item.shortDesc?.substring(0, 45) + "..."}</p>
          <p className="font-bold ps-2">{item.author}</p>
        </div>
      </div>
    </Link>
  );
};

Blog.propTypes = {
  item: PropTypes.object,
};
export default Blog;
