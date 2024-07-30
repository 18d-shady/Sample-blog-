import React from 'react';
//import bgImage from './Designer.jpg'

//const divStyle = { backgroundImage:url(${bgImage}), };
function BlogItem({
  backgroundImageUrl,
  cardTitle,
  cardExplanation
 }) {
  const imageUrl = require(`./${backgroundImageUrl}`);

  return(
  	<div className="h-64  shadow-md mb-5 p-5 md:p-2 lg:p-5 backGround bg-blue-600" style={{ backgroundImage: `url(${imageUrl})`, }} >
  	  

  	  <div className="bg-white h-full p-6 w-4/5 sm:w-1/2 md:w-full lg:w-1/2 flex items-center font-mono text-center">
        <h3 className="text-black font-bold text-center text-lg "> 
          {cardTitle}
          <span className="text-slate-600 block text-base font-normal text-center">
          {cardExplanation}
          </span>
          <span className="text-blue-600 block mt-1  text-sm font-normal text-center">
          Click to Learn More >>
          </span>
        </h3>
        
  	  </div>
  	</div>

  );
}
export default BlogItem