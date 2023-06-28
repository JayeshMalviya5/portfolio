import React, { useRef } from "react";
import { dsa, softSkills, techSkills } from "../constants/skills";
import SkillCard from "../utils/SkillCard";

const Skills = () => {
    const divRef = useRef(null)

    const showDiv = ()=>{

    }
  return (
    <div className="w-screen h-auto px-20 py-10 flex flex-col justify-center items-center gap-10">
      <h2 className="text-3xl font-semibold text-[#2978b5]">SKILLS</h2>
      <div className="w-full" onScroll={showDiv} ref={divRef}>
        <h1 className="text-2xl font-bold">
          Technical Skills - Frontend & Backend
        </h1>
        <div className="flex p-10 flex-wrap gap-24 ">
          {techSkills.map((item, idx) => {
            return <SkillCard icon={item.icons} name={item.name} key={idx} />;
          })}
        </div>
      </div>
      <div className="w-full"  onScroll={showDiv} ref={divRef}>
        <h1 className="text-2xl font-bold">Data Structures & Algorithms</h1>
        <div className="flex p-10 flex-wrap gap-24 ">
          {dsa.map((item, idx) => {
            return <SkillCard icon={item.icons} name={item.name} key={idx} />;
          })}
        </div>
      </div>
      <div className="w-full"  onScroll={showDiv} ref={divRef}>
        <h1 className="text-2xl font-bold">Soft Skills</h1>
        <div className="flex p-10 flex-wrap gap-24 ">
          {softSkills.map((item, idx) => {
            return <SkillCard icon={item.icons} name={item.name} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
