import React from "react";

const SkillCard = ({ icon, name }) => {
  return (
    <div className="w-28 h-28 duration-300  border-[#2978b5] hover:shadow-2xl hover:scale-125 hover:bg-black hover:-translate-y-3 hover:text-white transition-all flex flex-col justify-center items-center border-2 rounded-md p-4">
      <p>{icon}</p>
      <p className="font-bold">{name}</p>
    </div>
  );
};

export default SkillCard;
