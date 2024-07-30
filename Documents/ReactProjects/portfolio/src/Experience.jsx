import React from 'react';
import ExperienceItem from './ExperienceItem'

function Experience(){
	return (
		<section id="experience" className="bg-gray-950 md:flex md:flex-row font-mono p-2 md:p-10">
		  <div className="md:basis-1/2 m-10" >
		    <h3 className="text-4xl font-bold text-indigo-400 mb-7 text-left">My Experience</h3>
		    <ExperienceItem
		      date="2023-Present"
		      title="Embedded Systems Engineer"
		      content="Access Solutions Limited" 
		      />
		     <ExperienceItem
		      date="2022-Present"
		      title="Freelancer"
		      content="Insight Computers Institute" 
		      />
		    <ExperienceItem
		      date="2022-2023"
		      title="Maths Teacher"
		      content="Foundation International School" 
		      />
		    <ExperienceItem
		      date="2020-2021"
		      title="Junior Python and Web Developer"
		      content="Splufic Automations Systems" 
		      />
		    <ExperienceItem
		      date="2018-2019"
		      title="Electrical Engineering Intern"
		      content="Federal Medical Center" 
		      />

		  </div>

		  <div className="md:basis-1/2 m-10">
		    <h3 className="text-4xl font-bold text-indigo-500 mb-7 text-left">My Education</h3>
		    <ExperienceItem
		      date="2021-2022"
		      title="Higher National Diploma"
		      content="Federal Polytechnic Nasarawa" 
		      />
		    <ExperienceItem
		      date="2018-2019"
		      title="National Diploma"
		      content="Federal Polytechnic Nasarawa" 
		      />
		    <ExperienceItem
		      date="2011-2017"
		      title="SSCE"
		      content="Flobam British International Academy" 
		      />
		  	
		  </div>	
		</section>

	);
}
export default Experience;