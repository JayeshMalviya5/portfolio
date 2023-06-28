import React from "react";
import dp from "../assets/Profile.jpg";
const Summary = () => {
  return (
    <div className="flex py-5 px-40 mt-12 justify-center items-center">
      <div className="w-2/5 ">
        <img
          src={dp}
          alt="Profile"
          className="rounded-md shadow-lg w-64 brightness-75 hover:scale-110 hover:shadow-2xl transition-all"
        />
      </div>
      <div className="w-3/5 text-2xl text-gray-700 font-semibold">
        Hey there!! I'm{" "}
        <span className="text-[#2978b5] font-bold">Jayesh Malviya</span>, from{" "}
        <span className="text-[#2978b5] font-bold">Rajasthan</span>. I'm a Full
        Stack Web Developer. I'm proficient in{" "}
        <span className="text-[#2978b5] font-bold">MERN stack</span>, using
        which I have completed multiple group and individual projects. Check
        them out!
      </div>
    </div>
  );
};

export default Summary;
