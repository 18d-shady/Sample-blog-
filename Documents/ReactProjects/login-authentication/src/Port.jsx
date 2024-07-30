import React from 'react';
import PortCardItem from './portCardItem';

function Port(){
	return(
		<div>
			<a href="http://localhost:3001">
		    <PortCardItem
		    imageUrl="turn.png"
		    cardTitle="Olehi Davis" 
		    cardExplanation="Web programmer and software engineer"
		    />
		  </a>

		    <PortCardItem
		    imageUrl="firstImgg.jpg"
		    cardTitle="A Random Person" 
		    cardExplanation="Just testing the card function"
		    />
		    <p className="text-base my-5 text-cyan-700 font-mono">
	    		Make Money from scratch
	    	</p>

	    	<p className="text-base my-5 text-cyan-700 font-mono">
	    		10 Tips to avoid if you want to have clear skin
	    	</p>
	    	<p className="text-base my-5 text-cyan-700 font-mono">
	    		Make Money from scratch
	    	</p>

	    	<p className="text-base my-5 text-cyan-700 font-mono">
	    		10 Tips to avoid if you want to have clear skin
	    	</p>
	    	<p className="text-base my-5 text-cyan-700 font-mono">
	    		Make Money from scratch
	    	</p>

	    	<p className="text-base my-5 text-cyan-700 font-mono">
	    		10 Tips to avoid if you want to have clear skin
	    	</p>
	    	<p className="text-base my-5 text-cyan-700 font-mono">
	    		Make Money from scratch
	    	</p>

	    	<p className="text-base my-5 text-cyan-700 font-mono">
	    		10 Tips to avoid if you want to have clear skin
	    	</p>
	    </div>
		
  )
}
export default Port;