import PropTypes from "prop-types";
import "./blog.css";

const Blog = ({ item }) => {
  return (
    <div className="card card-compact">
      <figure className="w-52 h-52 mx-auto">
        <img className="size-52" src={item.img1} alt="" />
      </figure>
      <div className="card-body w-52 p-0">
        <h2 className="card-title ps-2">
          {item.name?.substring(0, 20) + "..."}
        </h2>
        <p className="ps-2">{item.shortDesc?.substring(0, 45) + "..."}</p>
        <p className="font-bold ps-2">{item.author}</p>
      </div>
    </div>
  );
};

Blog.propTypes = {
  item: PropTypes.object,
};
export default Blog;
