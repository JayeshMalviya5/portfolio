

const ProjectCard = ({ name, description, live, tech, image, source,isMain }) => {
  return (
    <div className={`flex flex-col justify-center hover:scale-105 hover:shadow-2xl border-[#2978b5] duration-500 transition-all items-center gap-3 p-7 border-2 ${isMain ? "w-4/5" : "w-2/5"} rounded-lg`}>
      {image}
      <h1 className="text-3xl font-semibold text-[#2978b5]">{name}</h1>
      <hr className="w-full border-black"/>
      <div className="text-center text-gray-600 font-semibold mt-5 mb-2">{description}</div>
      <div className="flex gap-3 font-bold text-[#2978b5]">
        {tech?.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })}
      </div>
      <div className="flex gap-5">
        <button
          className="border-2 mt-5 rounded-md text-[#2978b5] border-[#2978b5] hover:bg-[#2978b5] hover:text-white transition-colors py-1 px-3"
          onClick={() => window.open(live)}
        >
          Live Site
        </button>
        <button
          className="border-2 mt-5 rounded-md text-[#2978b5] border-[#2978b5] hover:bg-[#2978b5] hover:text-white transition-colors py-1 px-3"
          onClick={() => window.open(source)}
        >
          Source-Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
