import React from 'react';

function NewsCard({
  backgroundImageUrl,
  cardDate,
  cardTitle
 }) {

 	const imageUrl = require(`./${backgroundImageUrl}`);

  return(
  	<div className="h-48 w-full text-white shadow-md rounded-lg mb-5 bg-blue-600" 
  	style={{ backgroundImage: `url(${imageUrl})`, }} >
  	  <div className="w-full bg-black shadow-md bg-opacity-25 p-3 rounded-lg">
	  		<p className="text-xs font-mono">{cardDate}</p>
	  		<h3 className="text-base font-mono">{cardTitle}</h3>
  		</div>
  	</div>
  	
  );

}
export default NewsCard;