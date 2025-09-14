import React, { useState } from "react";
import { NavLink ,useLocation} from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaFacebookF,FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
// import SubNavbar from "./SubNav";
// import { Link } from "react-router-dom";
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleResourcesClick = (e) => {
    e.preventDefault();
    setIsResourcesOpen((prev) => !prev);
  };

  const handleSolutionClick = (e) => {
    e.preventDefault();
    setIsSolutionOpen((prev) => !prev);
  };
  const handleCourses=(e)=>{
    e.preventDefault();
    setIsCoursesOpen((prev)=>!prev);
  }

  //  give the information of  current location of url 
   const location = useLocation();
    const { pathname } = useLocation();

  // Check if any route under school-program is active
  const isActiveDropdown =
    location.pathname === "/school-program" || location.pathname === "/composite-lab";
    
 const ActiveDropdown =
    location.pathname === "/event" || location.pathname === "/lab-in-action";

 const CoursesDropdown =
    location.pathname === "/courses" || location.pathname === "/test-series"||location.pathname==="/online-program";

  const handleClick = (to) => {
    if (pathname === to) {
window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 w-[100%] text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 ">
        <div className="max-w-[90%] mx-auto flex flex-wrap items-center justify-between sm:flex-row xsm:flex-col md:flex-row lg:flex-nowrap ">
          <div className="left-to-right flex-1 sm:m-auto flex-nowrap text-center text-[4vw] sm:text-[2vw] md:text-[1.3vw] lg:text-[1.1vw] font-medium sm:m-2 xsm:mt-2">
            Welcome To Vigyan Pathshala Private Limited
          </div>
<div className="flex sm:m-2 xsm:mt-2 space-x-4 md:space-x-6 text-[1.5rem] sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.28rem]">

            <a
              href="https://www.youtube.com/@vigyanpathshala5738?si=xlG7M2iH9PXF3oX8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/robotics_sir/?utm_source=qr&igsh=MWFqaGh5dWRsMXN2Zw%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/vigyaninpathshala?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
             href="https://wa.me/8303309334?text=Hello%2C%20I%20am%20interested%20in%20your%20robotics%20training!"
             target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FaWhatsapp />
            </a>

                  <a
             href="https://www.linkedin.com/company/vigyanpathshalapvt.ltd./people/"
             target="_blank" rel="noopener noreferrer" classsName="hover:text-green-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>



      {/* Main Navbar+ modal */}
      <nav className="bg-gradient-to-r from-blue-700 to-blue-800 shadow-md relative sticky top-0 z-50">
        {/* nav container div exclude modal   */}
        <div className="w-full max-w-[100%] mx-auto px-4 sm:px-6 md:px-10 ">
          {/* div contain only nav links  */}
          <div className=" flex  flex-row items-center justify-between h-auto flex-wrap sm:flex-nowrap">

            {/* Logo */}
            <div className="w-[150%] sm:w-[50%] md:w-[20%] lg:w-[25%] lg:h-[6vw]">
              <NavLink to="/"
                 onClick={() => handleClick("/")}

            style={({ isActive }) => ({
              color: isActive ? "#79dfa7" : "white",
              textDecoration: "none",
              cursor: "pointer",
            })}
              className="flex items-center">
                <img
                  src="/assets/vigyan/logo-light.png"
                  alt="Logo"
                  className="h-[20vw] sm:h-[15vw] md:h-[6vw] lg:h-[5vw] w-[40vw] md:w-[12vw] lg:w-[25vw] max-w-full object-contain"
                />
              </NavLink>
            </div>

            {/* Nav Links (hidden on xs, shown on sm+) */}
            
    <div className="hidden md:flex w-full justify-center flex-wrap md:flex-nowrap mr-7 ml-5 md:mr-8 ">
  <ul className="flex items-center justify-around xl:font-bold xl:gap-5 xl:text-[1rem] xl:px-8 w-full
  lg:gap-[0%] lg:px-1 lg:text-[0.8rem] lg:font-bold lg:py-0
  md:text-[0.2rem] md:pr-2 font-bold md:gap-[1.3%] ">


        <li>
           <NavLink
            to="/"
           onClick={() => handleClick("/")}

            style={({ isActive }) => ({
              color: isActive ? "#79dfa7" : "white",
              textDecoration: "none",
              cursor: "pointer",
            })}
          >
            Home
          </NavLink> 

      </li>

                <li className="group relative">
                    <NavLink
            to="/about"
                       onClick={() => handleClick("/about")}

            style={({ isActive }) => ({
              color: isActive ? "#79dfa7" : "white",
              textDecoration: "none",
              cursor: "pointer",
            })}
          >
            About
          </NavLink>
                </li>
                <li className="group relative">
                  <NavLink
                  to="/success-story"
                             onClick={() => handleClick("/success-story")}

            style={({ isActive }) => ({
              color: isActive ? "#79dfa7" : "white",
              textDecoration: "none",
              cursor: "pointer",
            })}
            className="whitespace-nowrap group-hover:text-[#79dfa7] transition duration-300"
             >
            Success Stories
            </NavLink>
            </li>



                {/* Courses  */}
<li className="group relative">
      <div
        onClick={handleCourses}
        className={`flex items-center space-x-1 whitespace-nowrap py-6 cursor-pointer transition duration-300 ${
          CoursesDropdown ? "text-[#79dfa7]" : "text-white"
        }`}
      >
        <span>Courses</span>
        <FaChevronDown className="text-[1vw]" />
      </div>

      {isCoursesOpen && (
        <div className="absolute left-0 top-full bg-white text-gray-700 shadow-lg w-52 z-50">
          <ul className="p-2">
            <li>
              <NavLink
                to="/test-series"
                           onClick={() => handleClick("/test-series")}

                className={({ isActive }) =>
                  `block py-2 px-4 hover:bg-gray-200 ${
                    isActive ? "text-[#79dfa7] font-semibold" : ""
                  }`
                }
              >
                Test Series
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                           onClick={() => handleClick("/courses")}

                className={({ isActive }) =>
                  `block py-2 px-4 hover:bg-gray-200 ${
                    isActive ? "text-[#79dfa7] font-semibold" : ""
                  }`
                }
              >
               Courses
              </NavLink>
            </li>

      
          </ul>
        </div>
      )}
    </li>


                {/* School Program Dropdown */}
      <li className="group relative">
      <div
        onClick={handleSolutionClick}
        className={`flex items-center space-x-1 whitespace-nowrap py-6 cursor-pointer transition duration-300 ${
          isActiveDropdown ? "text-[#79dfa7]" : "text-white"
        }`}
      >
        <span>School Program</span>
        <FaChevronDown className="text-[1vw]" />
      </div>

      {isSolutionOpen && (
        <div className="absolute left-0 top-full bg-white text-gray-700 shadow-lg w-52 z-50">
          <ul className="p-2">
            <li>
              <NavLink
                to="/composite-lab"
                           onClick={() => handleClick("/composite-lab")}

                className={({ isActive }) =>
                  `block py-2 px-4 hover:bg-gray-200 ${
                    isActive ? "text-[#79dfa7] font-semibold" : ""
                  }`
                }
              >
                Composite Robotics Lab
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/school-program"
                           onClick={() => handleClick("/school-program")}

                className={({ isActive }) =>
                  `block py-2 px-4 hover:bg-gray-200 ${
                    isActive ? "text-[#79dfa7] font-semibold" : ""
                  }`
                }
              >
                School Program
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </li>

                {/* Resources Dropdown */}
      <li className="group relative">
      <div
        onClick={handleResourcesClick}
        className={`flex items-center space-x-1 whitespace-nowrap py-6 cursor-pointer transition duration-300 ${
          ActiveDropdown ? "text-[#79dfa7]" : "text-white"
        }`}
      >
        <span>Resources</span>
        <FaChevronDown className="text-[1vw]" />
      </div>

      {isResourcesOpen && (
        <div className="absolute left-0 top-full bg-white text-gray-700 shadow-lg w-40 z-50">
          <ul className="p-2">
            <li>
              <NavLink
                to="/event"
                onClick={() => handleClick("/event")}

                className={({ isActive }) =>
                  `block py-2 px-4 hover:bg-gray-200 ${
                    isActive ? "text-[#79dfa7] font-semibold" : ""
                  }`
                }
              >
                Event
              </NavLink>
            </li>
          

  <li>
  <NavLink
    to="/assets/12.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="block py-2 px-4 hover:bg-gray-200 text-gray-800"
  >
    Brochure
  </NavLink>
</li>



            <li>
              <NavLink
                to="/lab-in-action"
                onClick={() => handleClick("/lab-in-action")}

                className={({ isActive }) =>
                  `block py-2 px-4 hover:bg-gray-200 ${
                    isActive ? "text-[#79dfa7] font-semibold" : ""
                  }`
                }
              >
                Lab In Action
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </li>
                <li className="group relative">
                  <NavLink
                    to="/contact"
                    onClick={() => handleClick("/contact")}
               style={({ isActive }) => ({
              color: isActive ? "#79dfa7" : "white",
              textDecoration: "none",
              cursor: "pointer",
            })}
                    className="whitespace-nowrap group-hover:text-[#79dfa7] transition duration-300"
                  >
                    Contact
                  </NavLink>
                </li> 
                
              </ul>
            </div>



{/* Registration button  */}
<div className="hidden md:flex w-auto md:w-[20%] lg:w-[15%] justify-end items-center ml-2">
  <NavLink
    to="/bookdemo"
    onClick={() => handleClick("/bookdemo")}
    className={({ isActive }) =>
      `whitespace-nowrap transition duration-300 ${
        isActive ? "text-yellow-300" : "text-white"
      }`
    }
  >
    <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-extrabold rounded-full shadow-lg border border-white animate-pulse transition-all duration-500 ease-in-out px-3 py-1.5 text-[0.9rem] sm:text-[0.75rem] sm:px-2 sm:py-1 md:text-[0.8rem] md:px-2 md:py-1 lg:text-[1.1rem] lg:px-5 lg:py-2 sm:mr-2 md:mr-3 lg:mr-4">
    Registration
    </button>
  </NavLink>
</div>


  {/* Book Demo Button */}



  <div className="hidden md:flex w-auto md:w-[20%] lg:w-[15%] justify-end items-center ml-2">
  <NavLink
  to="/bookdemo"
  onClick={() => handleClick("/bookdemo")}
  className={({ isActive }) =>
    `whitespace-nowrap transition duration-300 ${
      isActive ? "text-[#79dfa7]" : "text-white"
    }`
  }
>
  <button className="bg-teal-500 hover:bg-green-500 text-white px-3 py-1.5 text-[0.9rem] sm:text-[0.75rem] sm:px-2 sm:py-1 md:text-[0.8rem] md:px-2 md:py-1 lg:text-[1.1rem] lg:px-5 lg:py-2 sm:mr-2 md:mr-3 lg:mr-4 font-semibold rounded transition-colors duration-[1000ms] ease-in-out whitespace-nowrap">
    BOOK DEMO
  </button>
</NavLink>
</div>
            

{/* Hamburger Icon */}
  <div className="md:hidden  block">
   <button onClick={toggleMenu} className="text-white text-[6vw] focus:outline-none">
   {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
   </button>
   </div>
   </div>
   </div>


 {/* Modal  */}

  {isOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
<ul className="flex flex-col items-center space-y-5 py-6 text-gray-800 font-semibold text-[4.5vw]">
  <li>
    <NavLink to="/" onClick={toggleMenu} 
   className={({ isActive }) =>
                  `block py-2 px-4 hover:bg-gray-200 ${
                    isActive ? "text-blue-500 font-semibold" : ""
                  }`
                }    >
      Home
    </NavLink>
  </li>

  <li>
    <NavLink to="/about" onClick={toggleMenu} 
   className={({ isActive }) =>
                  `block py-2 px-4 hover:bg-gray-200 ${
                    isActive ? "text-blue-500 font-semibold" : ""
                  }`
                }    >
      About Us
    </NavLink>
  </li>

  <li>
    <NavLink to="/test" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-yellow-500"}>
      Success Story
    </NavLink>
  </li>

  {/* School Program Dropdown */}
  <li className="w-full flex flex-col items-center">
    <button onClick={() => setIsSolutionOpen(!isSolutionOpen)} className="hover:text-blue-500">
      School Program ▾
    </button>
    {isSolutionOpen && (
      <ul className="mt-2 space-y-2 text-[4vw] text-gray-600 font-normal text-center">
        <li>
          <NavLink to="/school-program" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-yellow-500"}>
            School Program
          </NavLink>
        </li>
        <li>
          <NavLink to="/composite-lab" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-yellow-500"}>
            Composite Robotics Lab
          </NavLink>
        </li>
      </ul>
    )}
  </li>

  {/* Courses Dropdown */}
  <li className="w-full flex flex-col items-center">
    <button onClick={() => setIsCoursesOpen(!isCoursesOpen)} className="hover:text-blue-500">
      Courses ▾
    </button>
    {isCoursesOpen && (
      <ul className="mt-2 space-y-2 text-[4vw] text-gray-600 font-normal text-center">
        <li>
          <NavLink to="/test-series" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-yellow-500"}>
            Test Series
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-yellow-500"}>
            Courses
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/online-program" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-yellow-500"}>
            Online Program
          </NavLink>
        </li> */}
      </ul>
    )}
  </li>

  {/* Resources Dropdown */}
  <li className="w-full flex flex-col items-center">
    <button onClick={() => setIsResourcesOpen(!isResourcesOpen)} className="hover:text-blue-500">
      Resources ▾
    </button>
    {isResourcesOpen && (
      <ul className="mt-2 space-y-2 text-[4vw] text-gray-600 font-normal text-center">
        <li>
          <NavLink to="/event" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-yellow-500"}>
            Event
          </NavLink>
        </li>
        <li>
         <li>
  <NavLink
    to="/assets/12.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="block py-2 px-4 hover:bg-gray-200 text-gray-800"
  >
    Brochure
  </NavLink>
</li>
        </li>
        <li>
          <NavLink to="/lab-in-action" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-yellow-500"}>
            Lab in Action
          </NavLink>
        </li>
      </ul>
    )}
  </li>

  <li>
    <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-yellow-500"}>
      Contact
    </NavLink>
  </li>

   <li>
    <NavLink 
    to="/bookdemo" 
                 onClick={() => handleClick("/bookdemo")}
    >
      <button className="bg-blue-800 hover:bg-teal-500 text-white px-10 py-3 rounded-full font-semibold text-[4.5vw] transition-all duration-200">
        BOOK DEMO
      </button>
    </NavLink>
  </li>
<li>
  <NavLink 
    to="/bookdemo" 
    onClick={() => handleClick("/bookdemo")}
  >
    <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 animate-pulse hover:from-yellow-400 hover:to-pink-500 text-white font-extrabold px-10 py-3 rounded-full text-[4.5vw] transition-all duration-700 ease-in-out shadow-lg border border-white">
      Registration
          </button>
  </NavLink>
</li>



</ul>
  </div>
)}

 </nav>
</>
  );
};

export default Navbar;




