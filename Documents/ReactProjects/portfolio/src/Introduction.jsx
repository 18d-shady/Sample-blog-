import React from 'react';

function Introduction(){
	const imageUrl = require('./img/profile.jpeg');
	return (

		<section id="introduction" className="lg:h-scr lg:pb-36 pt-5 bg-gradient-to-r from-black via-indigo-950 to-black">
		{/*<!-- for small screens only -->*/}
		  <div className="block md:hidden mx-auto profilep h-64 w-52 rounded-full" 
			style={{ backgroundImage: `url(${imageUrl})`, }}>
		  </div>
		  <div className="flex md:flex-row justify-center p-10">
		    
			<div className="block md:basis-2/3 lg:mx-10 md:my-10 text-left">
			  <p className="text-slate-100 text-2xl md:text-4xl font-bold ">
			  	I am Davis
			  </p>
			  <h1 className="text-indigo-300 text-3xl md:text-5xl mt-3 font-bold">
			  	Full Stack Web Developer + 
			  	Software Programmer + 
			  	Embedded Systems Engineer
			  </h1>
			  <p className="text-slate-200 text-sm md:w-2/3 my-3 ">
			  	A very efficient problem solver, I break tasks down into smaller bits,
			  	 to achieve them and ensure a very efficient system, in all the areas
			  	 mentioned above
			  </p>

			  <button className="block md:mx-auto md:inline-block text-blue-800 
			  font-bold text-xl lg:me-7 rounded-3xl border-2 border-blue-800 p-3 hover:bg-blue-800 hover:text-white"> 
			  Download CV 
			  </button>

			{/* <!-- Github --> */}
			  <a href="https://github.com/18d-shady" className="p-2">
			  <svg 
			    className="md:h-8 md:w-8 h-5 w-5 text-blue-800 inline-block mx-1 md:mx-2 lg:mx-3 hover:text-white hover:rounded-full hover:bg-blue-800 hover:p-1"  
			    width="24" 
			    height="24" 
			    viewBox="0 0 24 24" 
			    stroke-width="2" 
			    stroke="currentColor" 
			    fill="none" 
			    stroke-linecap="round" 
			    stroke-linejoin="round">  
			    <path stroke="none" d="M0 0h24v24H0z"/>  
			    <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
			  </svg>
			  </a>

			  {/* <!-- Instagram --> */}
			  <svg 
			    className="md:h-8 md:w-8 h-5 w-5 text-blue-800 inline-block mx-1 md:mx-2 lg:mx-3 hover:text-white hover:rounded-full hover:bg-blue-800 hover:p-1"  
			    width="24" 
			    height="24" 
			    viewBox="0 0 24 24" 
			    stroke-width="2" 
			    stroke="currentColor" 
			    fill="none" 
			    stroke-linecap="round" 
			    stroke-linejoin="round">  
			    <path stroke="none" d="M0 0h24v24H0z"/>  
			    <rect x="4" y="4" width="16" height="16" rx="4" />  
			    <circle cx="12" cy="12" r="3" />  
			    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
			  </svg>

			  {/* <!-- Whatsapp --> */}
			  <svg
		        xmlns="http://www.w3.org/2000/svg"
		        className="md:h-6 md:w-6 h-4 w-4 inline-block mx-1 md:mx-2 lg:mx-3 text-blue-800 hover:text-white hover:rounded-full hover:bg-blue-800" 
		        stroke-width="2" 
		        fill="currentColor"
		        viewBox="0 0 24 24">
		        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
		      </svg>

		  	{/* <!-- Facebook --> */}
		      <svg 
		        className="md:h-8 md:w-8 h-5 w-5 text-blue-800 inline-block mx-1 md:mx-2 lg:mx-3 hover:text-white hover:rounded-full hover:bg-blue-800 hover:p-1"  
		        width="24" 
		        height="24" 
		        viewBox="0 0 24 24" 
		        stroke-width="2" 
		        stroke="currentColor" fill="none" 
		        stroke-linecap="round" stroke-linejoin="round">  
		        <path stroke="none" d="M0 0h24v24H0z"/>  
		        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
		      </svg>

		  	{/* <!-- Linkedin --> */}
		      <a href="/" className="">
		      <p 
		      className="text-base md:text-lg font-bold text-blue-800 rounded-lg md:border-2 md:border-blue-800 
		      inline-block mx-1 md:mx-2 lg:mx-3 p-1 hover:bg-blue-800 hover:text-white">
		      in
		      </p>
		      </a>
				
			</div>

			<div className="hidden md:flex md:basis-1/3 mx-10 mt-10 profilep h-96" 
			style={{ backgroundImage: `url(${imageUrl})`, }}>
				
			</div>
	      </div>
		</section>

	);
}
export default Introduction;