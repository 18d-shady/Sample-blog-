import React, { useState, useEffect } from 'react';
import MyHeader from './MyHeader';
import BlogItem from './BlogItem';
import News from './News';
import Port from './Port';



function Blog(){
	const [email, setEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/api/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setEmail(data.email);
        console.log(data)
      })
      .catch(error => {
        console.error(error);
      });
    } else {
      //window.location.href = '/login';
    }
  }, []);
  
	return (
		<div className=" bg-slate-100">
		  <MyHeader emaill={email} />
		  <div className="flex w-screen justify-center bg-white mt-2">

		    <div 
		     className="hidden md:flex  p-5 md:w-1/3 lg:w-1/4 overflow-y-scroll bg-white h-screen shadow-md rounded-lg fixed left-0 top-16">
		      <News />
		    </div>

		    <div className="w-full md:w-1/3 mt-16 lg:w-1/2 bg-slate-100 mx-5  h-full">
			    <BlogItem 
			    backgroundImageUrl="Designer.jpeg" 
			    cardTitle="Learn to Build Front-end Web Pages" 
			    cardExplanation="Do you want to learn how to build front end web pages?" 
			    />
			    <BlogItem 
			    backgroundImageUrl="firstImage.jpg" 
			    cardTitle="Apply to Victory High School" 
			    cardExplanation="A stable environment for Learning" 
			    />
			    <BlogItem 
			    backgroundImageUrl="firstImgg.jpg" 
			    cardTitle="Apply to Lauren High School" 
			    cardExplanation="A stable environment for Learning for children" 
			    />
		    
		    </div>
		    
		    <div className="hidden md:flex md:w-1/3 lg:w-1/4 ps-7 h-screen overflow-y-scroll right-0 top-16 fixed">
		      <Port />
		    </div>
		  </div>
			
		</div>

	);
}
export default Blog;

/*
// Dashboard.js
import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/api/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setEmail(data.email);
        console.log(email)
      })
      .catch(error => {
        console.error(error);
      });
    } else {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {email}!</p>
    </div>
  );
}

export default Dashboard;
*/