import { useState } from "react";
import bannerBackground from '../assets/banner_wallpaper.svg';
import './Banner.css';

const Expertise = () => {
  const [text, setText] = useState({
    title: "Passionate About Technology",
    para: `With a strong foundation in both front-end and back-end technologies,
          I excel at creating intuitive and user-friendly interfaces while ensuring 
          robust and secure server-side functionality.
          My expertise spans across various frameworks and languages.
          `,
    actionButton: {
    title: "Hire Me",
    link: '/hireme',
    }
  });

  return (
    <>
      <div className="mt-2 bg-gray-50" id="skills">
        <h1 className="mb-16 text-5xl font-bold text-center underline">My Skills</h1>

        <div style={{ backgroundImage: `url(${bannerBackground})`, backgroundSize: "cover" }} className="box-container flex flex-col lg:flex-row py-16 items-center justify-around text-white">
          <div className="flex justify-center items-center mb-10 lg:mb-0">
            <div className="w-4/5 lg:w-2/3 text-center space-y-4">
              <h1 className="text-4xl font-bold">{text.title}</h1>
              <p >{text.para}</p><br />
              <a href={text.actionButton.link} className="px-4 py-2 text-2xl bg-orange-500 rounded-full shadow-lg cursor-pointer">{text.actionButton.title}</a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-4/5 lg:w-2/3 flex justify-center flex-wrap gap-3">
              {[
                "Core Java", "J2EE", "Hibernate(ORM)", "Spring Framework", "Spring Boot Framework", 
                "Spring Security", "HTML5", "CSS3", "BootStrap", "JavaScript", 
                "ReactJs", "Core Php", "MY SQL"
              ].map((skill, index) => (
                <p key={index} className="bg-gray-300 text-black mt-1 rounded-full px-3 py-2 hover:bg-orange-500 cursor-pointer">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertise;
