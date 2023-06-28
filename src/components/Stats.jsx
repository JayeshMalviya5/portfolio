import React from "react";
import githubStats from "../assets/githubStats.png";

const Stats = () => {
  return (
    <div className="px-20 py-0 flex flex-col gap-5">
      <h1 className="text-2xl font-bold">
        My coding Calender{" "}
        <span className="text-3xl font-semibold text-[#2978b5]">
          FY-2022-23
        </span>{" "}
      </h1>
      <img src={githubStats} alt="Stats" className="shadow-md w-full rounded-3xl transition-all"/>
    </div>
  );
};

export default Stats;
