import React from "react";
import ProjectCard from "../utils/ProjectCard";
import { project } from "../constants/Project";
const Project = () => {
  return (
    <div className="flex flex-col gap-7 mt-16 justify-center items-center w-screen p-7">
      <h1 className="text-3xl font-semibold text-[#2978b5]">My Projects</h1>
      <div className="flex justify-center">
        {project.map((item) => {
          if (item.isMain) {
            return (
              <ProjectCard
                key={"main"}
                name={item.name}
                description={item.description}
                source={item.source}
                live={item.live}
                tech={item.tech}
                image={item.image}
                isMain={item.isMain}
              />
            );
          }
        })}
      </div>
      <div className="flex flex-row flex-wrap gap-10 mt-20 justify-center items-center">
        {project.map((item,idx)=>{
            if(!item.isMain){
                return (
                    <ProjectCard
                key={idx}
                name={item.name}
                description={item.description}
                source={item.source}
                live={item.live}
                tech={item.tech}
                image={item.image}
                isMain={item.isMain}
              />
                )
            }
        })}
      </div>
    </div>
  );
};

export default Project;
