import PropTypes from "prop-types";
const Modal = ({ id, data }) => {
  if (!data) return <p>Loading...!!</p>;
  return (
    <div>
      <p className="pb-10 ps-10 text-2xl font-bold">{data[0]?.name}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-3 ">
        {data[0]?.data?.map((item) => (
          <div key={item.title} className="card bg-[#F3F3F3]">
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm text-center">{item.title}</h2>
            </div>
          </div>
        ))}
        {id === "abroad" && (
          <div className="w-32 h-72 justify-items-start flex flex-col gap-5">
            <a className="text-xs link link-hover">Study UX In SG</a>
            <a className="text-xs link link-hover">Study Ui In SG</a>
            <a className="text-xs link link-hover">Study Nothing</a>
            <a className="text-xs link link-hover">Study Something </a>
            <a className="text-xs link link-hover">Faking Study</a>
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array,
};
export default Modal;
