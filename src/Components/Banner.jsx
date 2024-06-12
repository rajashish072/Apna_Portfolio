import bannerImage from '../assets/Ashish-Pic.png';
import bannerBackground from '../assets/banner_wallpaper.svg';
import './Banner.css';
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Developer", "Php Developer", "Frontend Developer"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container  flex flex-col md:flex-row items-center mt-20 h-auto p-5 md:p-10" id="home">
      <div className='w-full md:w-1/2 flex flex-col items-center text-white '>
        <div className='space-y-4 text-center md:text-left'>
          <h3 className='text-3xl font-semibold'>Hi, I am</h3>
          <h1 className='text-5xl font-bold'>Ashish Raj</h1>
          <h2 className='text-3xl'>And I am <span className='font-bold text-black' ref={el}></span></h2>
          <p>
              I am a passionate software developer with expertise in Java, PHP, and frontend technologies. I enjoy crafting robust and efficient solutions that solve real-world problems. With a keen eye for detail and a dedication to quality, I strive to deliver exceptional results in every project I undertake. 
              My journey in the world of technology has been exhilarating, filled with opportunities to learn and grow. I am committed to staying updated with the latest trends and advancements in the field, constantly expanding my skillset to tackle new challenges.
           </p>          
            <div className="icon-container flex justify-center md:justify-start space-x-4">
            <a className='border cursor-pointer hover:bg-orange-500 px-4 py-4 rounded-full bg-gray-800 flex justify-center items-center'>
              <i className="fa-brands text-4xl fa-facebook"></i>
            </a>
            <a className='border cursor-pointer hover:bg-orange-500 px-4 py-4 rounded-full bg-gray-800 flex justify-center items-center'>
              <i className="fa-brands text-4xl fa-instagram"></i>
            </a>
            <a className='border cursor-pointer hover:bg-orange-500 px-4 py-4 rounded-full bg-gray-800 flex justify-center items-center'>
              <i className="fa-brands text-4xl fa-youtube"></i>
            </a>
            <a className='border cursor-pointer hover:bg-orange-500 px-4 py-4 rounded-full bg-gray-800 flex justify-center items-center'>
              <i className="fa-brands text-4xl fa-linkedin"></i>
            </a>
          </div>
          <a className='px-5 py-3 text-xl bg-orange-500 rounded-full shadow-lg mt-4 inline-block' href="/contact" >Contact Me</a>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center mt-10 md:mt-0 '>
        <img className='rounded-full shadow-lg w-64 h-64 md:w-96 md:h-96 object-cover' src={bannerImage} alt="Ashish Raj" />
      </div>
    </div>
  )
}

export default Banner;
