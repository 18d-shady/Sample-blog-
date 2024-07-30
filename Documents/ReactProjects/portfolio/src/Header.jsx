import React, { useState } from 'react';

export const navLinks = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

function Header({bgColor, active, setActive}){
	//const [active, setActive] = useState("Introduction");
    const [toggle, setToggle] = useState(false);
	return (
		<nav className={`font-mono sticky z-50 top-0 h-14 p-3 ${bgColor} shadow-md text-slate-100`}>
			
			<h1 
			className="inline-block float-left text-slate-100 mx-2 md:mx-3 font-bold font-serif italic text-3xl 
			md:text-4xl overline decoration-slate-100"
			>
			D
			</h1>
			<p className="align-middle inline-block mx-2 md:mx-5 text-sm float-left">olehidavis@gmail.com</p>
		 
		  <div className="float-right inline-block md:me-1 lg:me-10 text-sm h-full">
		    <ul className="md:inline-block hidden ">
		        {navLinks.map((nav, index) => (
		          <li
		            key={nav.id}
		            className={`font-poppins cursor-pointer align-middle inline-block ${
		              active === nav.title ? "border-b-2 border-blue-500" : "border-none"
		            } ${index === navLinks.length - 1 ? "mr-0" : "mr-6"}`}
		            onClick={() => setActive(nav.title)}
		          >
		            <a href={`#${nav.id}`}>{nav.title}</a>
		          </li>
		        ))}
		      </ul>

		    <a
		    href='#hire' 
		    className="hidden md:inline-block ms-6 text-white hover:bg-gradient-to-l bg-gradient-to-r 
		    from-indigo-500 via-purple-500 to-blue-500 px-2 py-1 rounded-full"
		    >
		    Hire Me 
		    </a>

		    <div className="md:hidden inline-block items-center">
		      <svg className={`w-5 h-5 md:hidden ${toggle ? "bg-blue-700 text-white p-1 rounded-full w-7 h-7" : "bg-none"}` }
		         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"
		         onClick={() => setToggle(!toggle)}>
	            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
	        </svg>

	    	{/*<!--Small Screen -->*/}
	        <div
	          className={`${
	            !toggle ? "hidden" : "inline-block"
	          } p-6 bg-blue-950 absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
	        >
	          <ul className="list-none flex justify-end items-start flex-1 flex-col">
	            {navLinks.map((nav, index) => (
	              <li
		            key={nav.id}
		            className={`font-poppins cursor-pointer${
		              active === nav.title ? "border-b-2 border-blue-500" : "border-none"
		            } ${index === navLinks.length - 1 ? "mr-0" : "mr-6"}`}
		            onClick={() => setActive(nav.title)}
		          >
	                <a href={`#${nav.id}`}>{nav.title}</a>
	              </li>
	            ))}
	          </ul>
	          <a 
	            href='#hire'
					    className="md:hidden mr-12 inline-block text-white hover:bg-gradient-to-l bg-gradient-to-r 
					    from-indigo-500 via-purple-500 to-blue-500 px-2 py-1 rounded-full"
					   >
					    Hire Me 
					  </a>
	        </div>
	      </div>



		  </div>
		</nav>

	);
}
export default Header;


