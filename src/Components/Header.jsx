import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/16/solid";
import resume from '../assets/Ashish-Raj.pdf';

const Header = () => {
  const [brandName, setBrandName] = useState("Ashish Raj");
  const [menulink, setMenulink] = useState([
    { title: "Home", link: "#home", id: 1 },
    { title: "About", link: "#about", id: 2 },
    { title: "Skills", link: "#skills", id: 3 },
    { title: "Project", link: "#project", id: 4 },
    { title: "Education", link: "#education", id: 5 },
    { title: "Contact", link: "#contact", id: 6 },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: resume,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (event, link) => {
    event.preventDefault();
    const section = document.querySelector(link);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white z-50" >
      <div className="md:flex justify-between items-center py-4 px-7 md:px-10 relative">
        <div className="flex text-2xl cursor-pointer items-center">
          <h1 className="font-bold">{brandName}</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div onClick={() => setIsOpen(!isOpen)} className="w-7 h-7 absolute right-1/2 transform -translate-x-1/2 top-6 cursor-pointer md:hidden">
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-16" : "top-[-490px]"
          }`}
        >
          {menulink.map((link) => (
            <li key={link.id} className="font-semibold my-5 md:my-0 md:ml-8">
              <a
                href={link.link}
                onClick={(event) => handleScroll(event, link.link)}
                className="hover:text-orange-400 duration-500"
              >
                {link.title}
              </a>
            </li>
          ))}
          {/* Download CV Button */}
          <a
            href={actionButton.link}
            target="_blank"
            download
            className="px-3 py-2 md:ml-8 bg-orange-500 rounded text-1xl text-white hover:bg-orange-600 duration-300"
          >
            {actionButton.title}
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
