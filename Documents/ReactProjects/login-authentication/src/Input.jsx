import React, { useState } from "react";
//import MyHeader from './MyHeader';
import { Link } from 'react-router-dom';
import Blog from './Blog';
//import { TEInput, TERipple } from "tw-elements-react";
function Input(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/signup', {
        //mode: 'no-cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, confirmPassword }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        // Signup successful, redirect to login
        window.location.href = '/login';
      }
    } catch (error) {
      setError(error.message);
    }
  };

	return(


	<section className="">
  <Blog className="absolute top-0 left-0 w-full h-full   " />
	
      <div className="h-full fixed  items-center flex top-0 left-0 w-screen h-screen bg-black bg-opacity-75">
        <div className="container mx-auto p-6 h-100 bg-white bg-opacity-80 rounded-lg items-center w-96">
          
            <form onSubmit={handleSubmit}>
              {/* <!--Sign in section--> */}
              <p className="mb-0 mr-4 text-lg font-serif">Sign up with</p>

              <input 
      		      name="email" id="email" placeholder="Input your Email" type="email"
      		      className="w-full my-3 py-2 px-4 shadow-md rounded-lg"
                value={email} onChange={(e) => setEmail(e.target.value)}
      		    />

      		    <input 
      		      name="password" id="password" placeholder="Input any Password of your choice" type="password"
      		      className="w-full my-3 py-2 px-4 shadow-md rounded-lg"
                value={password} onChange={(e) => setPassword(e.target.value)}
      		    />

              <input 
                name="password" id="confirm-password" placeholder="Input Password again" type="password"
                className="w-full my-3 py-2 px-4 shadow-md rounded-lg"
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
              />

              <div className="mb-6 flex items-center justify-between">
                {/* <!-- Remember me checkbox --> */}
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>

                {/* <!--Forgot password link--> */}
                <a href="#!">Terms and conditions</a>
              </div>

              {/* <!-- Login button --> */}
              <div className="text-center lg:text-left">
   
                  <button
                    type="submit"
                    className="inline-block rounded bg-blue-800 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Register
                  </button>
     

                {/* <!-- Register link --> */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Have an account?{" "}
                  <Link to="/login"
                    className="text-blue-800 hover:underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
       
        </div>
      </div>
    </section>

	)
}
export default Input;
