import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function News(){
	const [today, setToday] = useState(new Date());

    useEffect(() => {
      setToday(new Date());
    }, []);
	return(
		<div>
			<NewsCard 
	    	backgroundImageUrl="Designer.jpeg" 
	    	cardDate={today.toLocaleDateString()}
		    cardTitle="Check Todays Weather" 
	    	/>
	    	<p className="text-base my-5 text-cyan-700 font-mono">
	    		Make Money from scratch
	    	</p>

	    	<p className="text-base my-5 text-cyan-700 font-mono">
	    		10 Tips to avoid if you want to have clear skin
	    	</p>

	    	<NewsCard 
	    	backgroundImageUrl="news1.jpg" 
	    	cardDate="7/23/2024"
		    cardTitle="Four men caught on fire" 
	    	/>
	    	<NewsCard 
	    	backgroundImageUrl="news2.jpg" 
	    	cardDate="2/18/2024"
		    cardTitle="A historical Change" 
	    	/>
	    	<p className="text-base my-5 text-cyan-700 font-mono">
	    		Do you love Pie?
	    	</p>
	    </div>

  )
}
export default News;