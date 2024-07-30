import React from 'react';

function ExperienceItem({
	date, title, content
}){
	return (
		<div className="p-3 text-left bg-indigo-950 hover:bg-indigo-600 hover:text-white my-3 ">
		  <p className=" font-bold text-indigo-400">{date}</p>
		  <h3 className="font-bold text-xl text-white">{title}</h3>
		  <p className="text-sm text-white">{content}</p>
		</div>

	);
}
export default ExperienceItem;