import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { redirect } from 'react-router-dom';
import Blog from './Blog';


function LoginDirect(){
	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
  	const [error, setError] = useState(null);

	const handleSubmit = async e => {
	    e.preventDefault();
	    console.log(email, password);
	    try {
	      const response = await fetch('http://localhost:8080/api/login', {
	      	//mode: 'no-cors',
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({ email, password }),
	      });
	      const data = await response.json();
	      if (data.error) {
	        setError(data.error);
	      } else {
	        // Login successful, redirect to dashboard
	        window.location.href = '/blog';
	      }
	    } catch (error) {
	      setError(error.message);
	    }
	  };

	return(
		<div className=" overflow-hidden">
		<Blog className="absolute top-0 left-0 w-full h-full  overflow-hidden " />
		<div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75  overflow-hidden">
		  <Link  to="/blog" className="cancelB float-right me-8 mt-2 text-slate-400 text-4xl">x</Link>
		  <div className="container flex mx-auto h-screen items-center w-96 ">
		    <div className="w-full bg-white p-6 bg-opacity-80 rounded-lg">
		    <svg className="h-24 w-24 text-blue-800 mx-auto "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
			    <path stroke="none" d="M0 0h24v24H0z"/>  
			    <circle cx="12" cy="12" r="9" />  
			    <line x1="9" y1="10" x2="9.01" y2="10" />  
			    <line x1="15" y1="10" x2="15.01" y2="10" />  
			    <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
		    </svg> 
		    <p className="text-slate-700 text-center mt-6 mb-3 font-serif">To access this site you have to login first</p>
		    <form onSubmit={handleSubmit}>
		    <input 
		      name="email" id="email" placeholder="Username or Email" type="email"
		      onChange={e => setEmail(e.target.value)} value={email}
		      className="w-full my-3 py-2 px-4 shadow-md rounded-lg"
		    />

		    <input 
		      name="password" id="password" placeholder="Password" type="password"
		      onChange={e => setPassword(e.target.value)} value={password}
		      className="w-full my-3 py-2 px-4 shadow-md rounded-lg"
		    />

		    <button type="submit"
		      className="bg-blue-800 mt-3 hover:bg-blue-900 text-slate-100 w-full py-2 px-4 font-semibold shadow-md rounded-lg">
		      Login
		    </button>
		    </form>
		    {error && <div style={{ color: 'red' }}>{error}</div>}
		    
		    <p className="mt-3 mb-10 text-sm text-center">Dont have an account? 
		
		    <Link to="/signup" className="text-blue-800 hover:underline"> Signup</Link>
		    </p>


		    </div>
		  	
		  </div>
			
		</div>
		</div>
	)
}

export default LoginDirect;

