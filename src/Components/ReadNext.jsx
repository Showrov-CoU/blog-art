import { useEffect, useState } from "react";
import Blog from "./Blog";

const ReadNext = () => {
  const [blogs, setBlogs] = useState([]);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [totalPage, setTotalPage] = useState([]);
  const itemPerPage = 4;
  const totalPage = Math.ceil(6 / itemPerPage);
  //console.log(totalPage);
  const pages = [...Array(totalPage).keys()];

  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((result) => setBlogs(result));
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center gap-5">
        {blogs.map((item) => (
          <Blog key={item._id} item={item}></Blog>
        ))}
      </div>
      <div>
        {pages.map((page) => (
          <button key={page} className="btn">
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReadNext;
