import rpsLogo from '../assets/rps-logo.jpg';
import mjkLogo from '../assets/mjk.png';
import skmLogo from '../assets/skm.png';
import msmLogo from '../assets/msm.png';

const Services = () => {
  return (
    <>
      <div className="main-container py-14 bg-gray-50 " id="project">
        <h1 className="text-5xl font-bold underline text-center mb-12">Projects</h1>
        <div className="services-container flex flex-wrap justify-center gap-10 px-5 md:px-10">
          <div className="service bg-slate-100 p-5 text-center space-y-3 shadow-lg rounded-xl cursor-pointer hover:bg-zinc-300 w-full md:w-1/2 lg:w-1/3">
            <img src={rpsLogo} alt="RPS College Logo" className="rounded-full shadow-lg mx-auto w-20 h-20" />
            <h1 className="text-3xl font-bold">R.P.S College Mahnar, Bihar</h1>
            <p className="text-justify">
              The Ram Prasad Singh College, Bihar Admission System is a comprehensive web application designed to streamline the admissions process for RPS College. Leveraging <strong>PHP</strong> for backend functionality and <strong>HTML5, CSS3, BootStrap5</strong> for frontend, and <strong>MySQL</strong> for database management, this project offers a user-friendly interface for both students and administrative staff.
            </p><br />
            <a href="https://rpscollegemahnar.in/" target="_blank" className="px-3 py-2  bg-orange-500 rounded-full shadow-lg text-xl text-white">View Website</a>
          </div>

          <div className="service bg-slate-100 p-5 text-center space-y-3 shadow-lg rounded-xl cursor-pointer hover:bg-zinc-300 w-full md:w-1/2 lg:w-1/3">
            <img src={mjkLogo} alt="MJK College Logo" className="rounded-full shadow-lg mx-auto w-20 h-20" />
            <h1 className="text-3xl font-bold">M.J.K College, Bettiah Bihar</h1>
            <p className="text-justify">
              The Maharani Janki Kunwar College, Bettiah Admission System is a comprehensive web application designed to streamline the admissions process for RPS College. Leveraging <strong>Java & Spring Boot Framework</strong> for backend functionality and <strong>HTML5, CSS3, BootStrap5</strong> for frontend, and <strong>MySQL</strong> for database management, this project offers a user-friendly interface for both students and administrative staff.
            </p> <br />
            <a href="https://mjkcollegebettiah.in/" target="_blank" className="px-3 py-2  bg-orange-500 rounded-full shadow-lg text-xl text-white">View Website</a>
          </div>

          <div className="service bg-slate-100 p-5 text-center space-y-3 shadow-lg rounded-xl cursor-pointer hover:bg-zinc-300 w-full md:w-1/2 lg:w-1/3">
            <img src={skmLogo} alt="SKM College Logo" className="rounded-full shadow-lg mx-auto w-20 h-20" />
            <h1 className="text-3xl font-bold">S.K.M College Muzaffarpur, Bihar</h1>
            <p className="text-justify">
              I developed a fully responsive website for Sri Krishna Medical College, complete with an intuitive admin panel for easy management. This project showcases my skills in <strong>HTML5, CSS3, BootStrap5</strong> for frontend development and <strong>MySQL</strong> for database management.
            </p> <br />
            <a href="https://skmedicalcollege.org/index.php" target="_blank" className="px-3 py-2  bg-orange-500 rounded-full shadow-lg text-xl text-white">View Website</a>
          </div>

          <div className="service bg-slate-100 p-5 text-center space-y-3 shadow-lg rounded-xl cursor-pointer hover:bg-zinc-300 w-full md:w-1/2 lg:w-1/3">
            <img src={msmLogo} alt="MSM College Logo" className="rounded-full shadow-lg mx-auto w-20 h-20" />
            <h1 className="text-3xl font-bold">M.S.M. Samta College, Jandaha, Bihar</h1>
            <p className="text-justify">
            I developed a fully responsive website for M.S.M. Samta College, Bihar enhancing their online presence and admissions process. The admin panel allows efficient management of notices and study materials. Built with <strong>PHP</strong>, <strong>MySQL</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, and <strong>Bootstrap5</strong>, it ensures a seamless, user-friendly experience.
            </p>
            <a href="https://msmscollege.in/" target="_blank" className="px-3 py-2  bg-orange-500 rounded-full shadow-lg text-xl text-white">View Website</a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Services;
