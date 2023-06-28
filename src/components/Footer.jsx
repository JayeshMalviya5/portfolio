import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <h1 className="text-3xl font-semibold mb-7">
        GET IN
        <span className="text-3xl font-semibold text-[#2978b5]"> TOUCH</span>
      </h1>
      <div className="bg-black w-full text-white flex flex-col justify-center items-center py-32">
        <div className="flex gap-20 justify-center mt-10">
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
        <div className="flex flex-row gap-6 mt-10 text-[gray]">
            <div className="flex gap-2 items-center">
            <AiOutlineMail size={20} />
            <h2 className="">jayeshmalviya10@gmail.com</h2> 
            </div>
            <div className="flex gap-2 items-center">
            <BsFillTelephoneFill size={20} />
            <h2>+91 8769745833</h2> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
