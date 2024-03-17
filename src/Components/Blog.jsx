import PropTypes from "prop-types";

const Blog = ({ item }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="size-52" src={item.img1} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name?.substring(0, 20) + "..."}</h2>
        <p>{item.shortDesc?.substring(0, 50) + "..."}</p>
        <p className="font-bold">{item.author}</p>
      </div>
    </div>
  );
};

Blog.propTypes = {
  item: PropTypes.object,
};
export default Blog;
