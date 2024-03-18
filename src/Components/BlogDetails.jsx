import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <p style={{ color: data.color }} className="font-bold">
          DESIGN
        </p>
        <p className="font-extrabold text-3xl">{data?.name}</p>
        <p className="text-sm">{data.shortDesc?.substring(0, 200) + "..."}</p>
        <div className="flex justify-start items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-green-500 border-2"></div>
          <p className="font-bold">{data.author}</p>
          <p className="text-xs ml-auto font-bold">{data.date}</p>
        </div>
      </div>
      <div className="w-full">
        <img className="w-full rounded-xl" src={data.img1} alt="" />
      </div>
      <p className="text-sm">
        {data.shortDesc?.substring(200, data.shortDesc?.length - 1)}
      </p>

      <div className="space-y-3">
        <p className="font-extrabold text-2xl">1. {data.chapterName}</p>
        <p className="text-sm">{data.chapterText?.substring(0, 300) + "."}</p>
        <p className="text-sm">{data.chapterText?.substring(301, 500) + "."}</p>
        <p className="text-sm">{data.chapterText?.substring(501, 860) + "."}</p>
        <div className="w-full">
          <img className="w-full rounded-xl" src={data.img2} alt="" />
        </div>
        <p className="text-sm">
          {data.chapterText?.substring(862, data.chapterText?.length - 1) + "."}
        </p>
      </div>

      <div className="space-y-3">
        <p className="font-extrabold text-2xl">Conclusion</p>
        <p className="text-sm">{data.conclusion}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
