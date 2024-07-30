import React from 'react';

function Contact(){
	return (
		<section className="md:flex md:flex-row font-mono">
		  <section id='hire' className="md:basis-1/2 bg-gradient-to-r from-black to-indigo-950 text-white p-5" >
		    <h3 className="text-4xl font-bold text-indigo-400 my-7 text-center">Let's Work Together</h3>
		    <p className="w-4/5 text-sm mx-auto">I make sure I deliver the best possible solutions in whatever I do. Feel free to hire me for your exquisite software solutions</p>
			<form className="my-4">
			  <input 
		        name="fname" id="fname" placeholder="First Name" type="text"
		        className="bg-gray-950 inline-block mx-2 w-2/5 my-3 py-2 px-4 shadow-sm rounded-lg"
		      />

		      <input 
		        name="lname" id="lname" placeholder="Last Name" type="text"
		        className="bg-gray-950 inline-block mx-2 w-2/5 my-3 py-2 px-4 shadow-sm rounded-lg"
		      />

		      <input 
		        name="email" id="email" placeholder="Email Address" type="email"
		        className="bg-gray-950 inline-block mx-2 w-2/5 my-2 py-2 px-4 shadow-sm rounded-lg"
		      />

		      <input 
		        name="phone" id="phone" placeholder="Phone Number" type="text"
		        className="bg-gray-950 inline-block mx-2 w-2/5 my-2 py-2 px-4 shadow-sm rounded-lg"
		      />

		      <select name="service" id="service"
		      className="bg-gray-950 inline-block mx-5 w-5/6 my-2 py-2 px-4 shadow-sm rounded-lg"
		      >
		        <option value="">Choose Service</option>
			    <option value="Front-end">Front-end Web Development</option>
			    <option value="Back-end">Back-end Web Development</option>
			    <option value="Full Stack">Full Stack Web Development</option>
			    <option value="Web Scraping">Web Scraping</option>
			    <option value="OCR">OCR</option>
			    <option value="Python">Python Scripting</option>
			    <option value="Embedded Systems">Embedded Systems</option>
			  </select>

			  <textarea 
		        name="message" id="message" rows="6" cols="50" placeholder="Message"
		        className="bg-gray-950 inline-block mx-5 w-5/6 my-2 py-2 px-4 shadow-sm rounded-lg"
		      >
		      </textarea>

		      <button type="submit"
		      className="text-white block mx-10 hover:bg-gradient-to-l bg-gradient-to-r 
		      from-indigo-500 via-purple-500 to-blue-500 
		      px-3 py-2 rounded-full"
		      >
		      Send Message
		      </button>

			</form>		    
		  </section>

		  <section id="contact" className="md:basis-1/2 bg-gray-950 md:h-full flex text-white justify-center">
		    <div className="items-center my-10 md:my-56">
		      <div className="flex flex-row my-2">
		        <svg className="basis-1/10 h-10 text-white bg-indigo-500 p-2 rounded-full"
		          viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
		        </svg>
		        <div className="basis-8/10 text-left ms-2">
		          <p className="text-sm">Phone</p>
		          <p>09099249445</p>
		        </div>
		      </div>

		      <div className="flex flex-row my-2">
		        <svg className="basis-1/10 h-10 text-white bg-indigo-500 p-2 rounded-full"  
		          fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
				</svg>
				<div className="basis-8/10 text-left ms-2">
		          <p className="text-sm">Email</p>
		          <p>olehidavis@gmail.com</p>
		        </div>
		      </div>

		      <div className="flex flex-row my-2">
		        <svg className="basis-1/10 h-10 text-white bg-indigo-500 p-2 rounded-full"
		          viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle cx="12" cy="10" r="3" /></svg>
		        <div className="basis-8/10 text-left ms-2">
		          <p className="text-sm">Address</p>
		          <p>FCT, Abuja, Nigeria</p>
		        </div>
		      </div>
		    	
		    </div>
		  	
		  </section>	
		</section>

	);
}
export default Contact;