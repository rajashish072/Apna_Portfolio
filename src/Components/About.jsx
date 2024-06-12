import { useState } from "react";
import bannerImage from "../assets/Ashu.png";
import './Banner.css';

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & Php Developer",
    disc1: `We are a team of passionate developers specializing in Java and PHP development. With expertise in Java frameworks like Spring Boot and Core PHP. Our collaborative approach and commitment to excellence ensure that your project is in capable hands, whether you require a Java Developer or PHP Developer. Get in touch with us today to discuss how we can bring your ideas to life.`,
    actionButton: {
      title: "Read More...",
      link: '/readmore'
    },
  });

  return (
    <div className="main-container bg-gray-100 py-16" >
      <h1 className="text-center text-5xl underline pb-16 font-bold">About Me</h1>
      <div className="mainBox flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
        <div className="ImageContainer w-full md:w-1/2 flex justify-center">
          <img src={data.image} alt="Ashu" className="rounded-full shadow-lg AboutImage w-64 h-64 md:w-96 md:h-96 object-cover" />
        </div>
        <div className="textContainer w-full md:w-1/2 flex justify-center">
          <div className="space-y-5 px-5 md:px-0 text-center md:text-left">
            <h1 className="text-5xl font-semibold">{data.title}</h1>
            <p>{data.disc1}</p>
            <a href={data.actionButton.link} className="bg-orange-500 px-5 py-3 rounded-full shadow-lg cursor-pointer inline-block">{data.actionButton.title}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
