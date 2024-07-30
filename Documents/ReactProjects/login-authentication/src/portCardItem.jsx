import React from 'react';

function PortCardItem({
  imageUrl,
  cardTitle,
  cardExplanation
 }) {

 	const pImageUrl = require(`./${imageUrl}`);

  return(
  	
  	<div className="h-36 shadow-md mb-5 p-4 bg-white rounded-lg">
  	  <div className="flex flex-row">
	  	  <div className="bg-white basis-3/4 font-mono">

	        <h3 className="text-black font-bold text-lg md:text-md lg:text-md xl:text-lg "> 
	          {cardTitle}
	          <span className="text-slate-600 block text-sm font-normal">
	          By the Author
	          </span>
	        </h3>
	        
	  	  </div>
	  	  <img className="h-15 md:h-10 lg:h-12 xl:h-15 w-20 basis-1/4 " src={pImageUrl} alt="Profile" />
  	  </div>

  	  <div className="my-3 lg:my-2 xl:my-3 text-slate-600 text-base font-normal md:text-sm lg:text-sm xl:text-base">
  	  	<p>{cardExplanation}</p>
  	  </div>

  	</div>

  );

}
export default PortCardItem;