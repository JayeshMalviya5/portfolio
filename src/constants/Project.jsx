import codedeck from "../assets/codedeck.png";
import eCommerce from "../assets/eCommerce.png";
import Swiggy from "../assets/Swiggy.png";
import Twitter from "../assets/Twitter.png";
import weatherApp from "../assets/weatherApp.png";
import blogAssingment from "../assets/blogAssigment.png";

export const project = [
  {
    name: "Code-Deck",
    image: (
      <img
        src={codedeck}
        alt=""
        className="border-2 border-[#2978b5] rounded-lg"
      />
    ),
    description:
      "loremvb rttrcac evtcrbt btr aewcv bytawecewf rbrtb ntn rvaafwefgtr bdgnty rfvsdcawef grgwawdqgbrg ntyn ntndb sfvbrt bresv ",
    tech: ["ReactJS", "Tailwind CSS", "code-editor", "HTML", "Js"],
    live: "https://jayeshmalviya5.github.io/Code-deck/",
    source: "https://github.com/JayeshMalviya5/Code-deck.git",
    isMain: true,
  },
  {
    name: "Blog-App",
    image: (
      <img
        src={blogAssingment}
        alt=""
        className="border-2 border-[#2978b5] rounded-lg"
      />
    ),
    description:
      "Build Blog application with secured login / Register functionality. User from worldwide can post a blog which is visible to everyone",
    tech: ["ReactJS", "NodeJs", "Tailwind CSS", "JWT", "MongoDB", ""],
    live: "https://blog-mern-stack.netlify.app/",
    source: "https://github.com/JayeshMalviya5/blog-assingment-frontend.git",
    isMain: false,
  },
  {
    name: "E-Commerce",
    image: (
      <img
        src={eCommerce}
        alt=""
        className="border-2 border-[#2978b5] rounded-lg"
      />
    ),
    description:
      "Build E-commerce with item filter, Cart implementation in it. Used Redux for state management User can add/remove items from the cart",
    tech: ["Redux", "ReactJs", "HTML", "CSS", "JavaScript"],
    live: "https://ecommerceze.netlify.app/",
    source: "https://github.com/JayeshMalviya5/ecommerce-test.git",
    isMain: false,
  },
  {
    name: "Weather App",
    image: (
      <img
        src={weatherApp}
        alt=""
        className="border-2 border-[#2978b5] rounded-lg"
      />
    ),
    description:
      "Build Weather forcasting application which gives todays weather as well as predictions for next 7 days weather forecast",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMapApi", "Api's"],
    live: "https://weather-api-map-k.netlify.app/",
    source: "https://github.com/JayeshMalviya5/Weather_using_api.git",
    isMain: false,
  },
  {
    name: "Swiggy UI Clone",
    image: (
      <img
        src={Swiggy}
        alt=""
        className="border-2 border-[#2978b5] rounded-lg"
      />
    ),
    description: "Build clone on food delivery website SWIGGY, for HTML, CSS & JS Practice purpose ",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://swiggy-clone-basic.netlify.app/",
    source: "https://github.com/JayeshMalviya5/Swiggy_clone.git",
    isMain: false,
  },
  {
    name: "Twitter UI Clone",
    image: (
      <img
        src={Twitter}
        alt=""
        className="border-2 border-[#2978b5] rounded-lg"
      />
    ),
    description: "Build clone on food delivery website SWIGGY, for HTML, CSS & JS Practice purpose",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://clone-twitter-kk.netlify.app/",
    source: "https://github.com/JayeshMalviya5/Twitter_clone.git",
    isMain: false,
  },
];
