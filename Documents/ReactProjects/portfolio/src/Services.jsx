import React from 'react';
import ServiceItem from './ServiceItem'

function Services(){
	return (
		<section id="services" className="bg-gray-950 font-mono md:p-10 p-3 pb-10">
		  <h1 className="text-3xl md:text-4xl text-indigo-400 mt-10 mb-5 font-bold">My Quality Services</h1>
		  <p className="md:w-3/5 mx-auto md:mb-10 text-sm text-slate-100"> 
		  Aspiring for excellence in all I do, I'm determined to give the best,
		  quality service available in the following skillset:
		  </p>
		  <ServiceItem 
		  id="01"
		  title="Front-end Web Development"
		  content="With 4 years of experience using HTML, CSS and Javascript
		  and with experience using React.js, I build responsive web pages"
		  />

		  <ServiceItem 
		  id="02"
		  title="Back-end Web Development"
		  content="Using frameworks such as flask and django, I create scalable web applications
		  that interact with databases using the MVC protocol"
		  />

		  <ServiceItem 
		  id="03"
		  title="Python software programming"
		  content="With over 4 years of python programming, I am able to build amazing python software 
		  solutions"
		  />

		  <ServiceItem 
		  id="04"
		  title="Web Scraping"
		  content="All web scraping solutions are being done using the beautifulsoup and selenium libaries
		  amongst others"
		  />

		  <ServiceItem 
		  id="05"
		  title="Embedded Systems Engineering"
		  content="Implementing marvelous electronic hardware and software solutions"
		  />
		
		</section>

	);
}
export default Services;