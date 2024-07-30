import React from 'react';

function WorkItem({
	backgroundImageUrl, title, content, urlink
}){
	const imageUrl = require(`./${backgroundImageUrl}`);
	return (
		<div className="m-5 inline-block w-11/12 h-96 lg:w-2/5 lg:h-96 relative bg-blue p-2 group workp" 
		 style={{ backgroundImage: `url(${imageUrl})`, }}>
		   <a href={urlink} className="w-11/12 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500
		     text-white text-left p-2 transition transform translate-y-8 ease-in-out invisible rounded-md
            absolute group-hover:visible mr-0 md:mt-32 md:ml-0 md:mr-3 text-xs group-hover:translate-y-0 left-5">
		     <h4 className="font-bold">{title}</h4>
		     <p className="">{content}</p>
		   </a>

		</div>

	);
}
export default WorkItem;

/*


*/