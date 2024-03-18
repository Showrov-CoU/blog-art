import { useEffect, useState } from "react";
import Blog from "./Blog";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const ReadNext = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;
  const totalPage = Math.ceil(6 / itemPerPage);
  const pages = [...Array(totalPage).keys()];

  useEffect(() => {
    fetch(`http://localhost:5000/blog?page=${currentPage}&size=${itemPerPage}`)
      .then((res) => res.json())
      .then((result) => setBlogs(result));
  }, [currentPage]);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  

  return (
    <div className="mx-40">
      <p className="font-bold text-2xl py-5 px-5">Read Next</p>
      <div className="flex justify-start items-center gap-5">
        {blogs.map((item) => (
          <Blog key={item._id} item={item}></Blog>
        ))}
      </div>
      <div className="py-10 w-fit mx-auto flex gap-2">
        <button
          onClick={handlePrev}
          className="btn btn-outline btn-primary border-0 flex justify-center items-center"
        >
          <FaAngleLeft></FaAngleLeft>Previous
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page + 1)}
            key={page}
            className={`btn btn-primary ${
              currentPage === page + 1 ? "btn-active" : "btn-outline"
            }`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          className="btn btn-outline btn-primary border-0 flex justify-center items-center"
        >
          Next <FaAngleRight></FaAngleRight>
        </button>
      </div>
    </div>
  );
};

export default ReadNext;
