//import './App.css';
import React from 'react'; 
//import MyHeader from './MyHeader';
//<Route path="/" element={<LoginDirect />} />
  //          <Route path="/login" element={<LoginDirect />} />
  //return <LoginDirect setToken={setToken} />
import Blog from './Blog';
import LoginDirect from './LoginDirect';
import Input from './Input';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginDirect />} />
            <Route path="/login" element={<LoginDirect />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/signup" element={<Input />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
