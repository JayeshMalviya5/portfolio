import React, { useEffect, useRef } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import Typed from "typed.js";
const About = () => {
  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "MERN Stack Developer...",
        "Frontend Developer...",
        "Backend Developer...",
        "React Developer...",
        "NodeJs Developer...",
      ],
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 10,
      backDelay: 300,
      loop: true,
      smartBackspace: true,
    });
    return () => {
      typed.destroy();
    };
  });
  return (
    <div className="h-auto w-screen px-10 py-5 flex justify-center items-center">
      <div>
        <p className="text-5xl mb-10 text-gray-700 font-bold">
          Hello, I am <span className=" text-[#2978b5]">Jayesh Malviya</span>
        </p>
        <span ref={element} className="text-3xl font-semibold ml-40"></span>
        <div className="flex gap-8 justify-center mt-10">
          <a
            href=""
            target="blank"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jayesh-malviya-6119a6127/",
                "_blank"
              )
            }
            className="hover:scale-125 transition-transform"
          >
            <AiFillLinkedin size={40} />
          </a>
          <a
            href=""
            target="blank"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/#inbox?compose=new",
                "_blank"
              )
            }
            className="hover:scale-125 transition-transform"
          >
            <AiOutlineMail size={40} />
          </a>
          <a
            href=""
            target="blank"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jayesh-malviya-6119a6127/",
                "_blank"
              )
            }
            className="hover:scale-125 transition-transform"
          >
            <BsFillTelephoneFill size={35} />
          </a>
          <a
            href=""
            target="blank"
            onClick={() =>
              window.open("https://github.com/JayeshMalviya5", "_blank")
            }
            className="hover:scale-125 transition-transform"
          >
            <AiFillGithub size={40} />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <button className="border-2 mt-5 rounded-md text-[#2978b5] border-[#2978b5] hover:bg-[#2978b5] hover:text-white transition-colors py-1 px-3">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
