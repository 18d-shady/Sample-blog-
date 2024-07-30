import React from 'react';
import { WorkTabs, WorkTab } from './WorkTabs';
import WorkItem from './WorkItem';


function Works(){
	return (
		<section id="resume" className="bg-gradient-to-r from-black via-indigo-950 to-black font-mono p-3 md:p-10">
		  <h1 className="text-4xl text-indigo-500 mt-10 mb-5 font-bold">My Recent Works</h1>
		  <p className="w-3/5 mx-auto mb-10 text-sm text-slate-100"> 
		  Depicted below is a detailed description of my recent works, feel free to spy...
		  </p>
		  <div>
		      <WorkTabs>
		        <WorkTab label="All">
		          <div className="">
		            <WorkItem 
		              backgroundImageUrl="img/weather.jpg"
		              title="Weather App"
		              urlink="#"
		              content="A react weather application"
		            />

		          
		            <WorkItem 
		              backgroundImageUrl="img/logblog2.jpg"
		              title="Educational Blog"
		              urlink="#"
		              content="A react blog template, created solely with HTML, CSS and React"
		            />
		            
		            <WorkItem 
		              backgroundImageUrl="img/audio1.jpg"
		              title="Audio Editor"
		              urlink="#"
		              content="This is an audio editor app written in python and tkinter gui.
		              Its was written mainly using the pydub and pygame libaries alonside others,
		              and is capable of various complex audio manipulation"
		            />

		            <WorkItem 
		              backgroundImageUrl="img/sign.jpeg"
		              title="Signature Pad"
		              urlink="#"
		              content="An electronic signature pad built with esp8266 and a touch screen 
		              for the hardware ant TFTesPi for the software"
		            />


		            <WorkItem 
		              backgroundImageUrl="img/hand1.jpg"
		              title="Mouse Cursor controller Using Hand Gestures"
		              urlink="#"
		              content="Written in python using the pyautogui and OpenCv libary for computer vision,
		              This script gives an alternative to physical mouse - using hand gestures to control 
		              the cursor."
		            />

		            <WorkItem 
		              backgroundImageUrl="img/music.jpg"
		              title="Music Application"
		              urlink="#"
		              content="A python music application, written mainly using the pygame libary. 
		              It is capable of loading the music files on the pc, and playing them, alongside many 
		              other functionalities."
		            />

		            <WorkItem 
		              backgroundImageUrl="img/im2text2.jpg"
		              title="Image To Text Converter"
		              urlink="#"
		              content="This is a python OCR application that uses the pytesseract, OpenCv and tkinter
		              libaries to convert image to text."
		            />

		            <WorkItem 
		              backgroundImageUrl="img/speech.jpg"
		              title="Speech To Text Converter and Translation"
		              urlink="#"
		              content="This is a python OCR application that uses the pytesseract, OpenCv and tkinter
		              libaries to convert image to text."
		            />

		            <WorkItem 
		              backgroundImageUrl="img/secSchool.jpg"
		              title="Secondary School"
		              urlink="#"
		              content="This is a site advertising a secondary school"
		            />

		            
		            <WorkItem 
		              backgroundImageUrl="img/face2.jpg"
		              title="Attendance System Face Recognition"
		              urlink="#"
		              content="A software application designed to take attendance of an event
		              using face recognition system - matching the faces in attendance to 
		              their profiles"
		            />

		            
		          </div>
		        </WorkTab>

		        <WorkTab label="Python">
		          <div className="">

		            <WorkItem 
		              backgroundImageUrl="img/audio1.jpg"
		              title="Audio Editor"
		              urlink="#"
		              content="This is an audio editor app written in python and tkinter gui.
		              Its was written mainly using the pydub and pygame libaries alonside others,
		              and is capable of various complex audio manipulation"
		            />

		            <WorkItem 
		              backgroundImageUrl="img/hand1.jpg"
		              title="Mouse Cursor controller Using Hand Gestures"
		              urlink="#"
		              content="Written in python using the pyautogui and OpenCv libary for computer vision,
		              This script gives an alternative to physical mouse - using hand gestures to control 
		              the cursor."
		            />

		            <WorkItem 
		              backgroundImageUrl="img/music.jpg"
		              title="Music Application"
		              urlink="#"
		              content="A python music application, written mainly using the pygame libary. 
		              It is capable of loading the music files on the pc, and playing them, alongside many 
		              other functionalities."
		            />

		            <WorkItem 
		              backgroundImageUrl="img/im2text2.jpg"
		              title="Image To Text Converter"
		              urlink="#"
		              content="This is a python OCR application that uses the pytesseract, OpenCv and tkinter
		              libaries to convert image to text."
		            />

		            <WorkItem 
		              backgroundImageUrl="img/speech.jpg"
		              title="Speech To Text Converter and Translation"
		              urlink="#"
		              content="This is a python OCR application that uses the pytesseract, OpenCv and tkinter
		              libaries to convert image to text."
		            />

		          
		            <WorkItem 
		              backgroundImageUrl="img/face2.jpg"
		              title="Attendance System Face Recognition"
		              urlink="#"
		              content="A software application designed to take attendance of an event
		              using face recognition system - matching the faces in attendance to 
		              their profiles"
		            />

		            
		          </div>
		        </WorkTab>

		        <WorkTab label="Web">
		          <div className="">
		            <WorkItem 
		              backgroundImageUrl="img/weather.jpg"
		              title="Weather App"
		              urlink="#"
		              content="A react weather application"
		            />

		            <WorkItem 
		              backgroundImageUrl="img/logblog2.jpg"
		              title="Educational Blog"
		              urlink="#"
		              content="A react blog template, created solely with HTML, CSS and React"
		            />

		            <WorkItem 
		              backgroundImageUrl="img/secSchool.jpg"
		              title="Secondary School"
		              urlink="#"
		              content="This is a site advertising a secondary school"
		            />


		            
		          </div>
		        </WorkTab>

		        <WorkTab label="Engineering">
		          <div className="">
		            <WorkItem 
		              backgroundImageUrl="img/sign.jpeg"
		              title="Signature Pad"
		              urlink="#"
		              content="An electronic signature pad built with esp8266 and a touch screen 
		              for the hardware ant TFTesPi for the software"
		            />

		            
		          </div>
		        </WorkTab>
		        
		      </WorkTabs>
		    </div>


		  
		
		</section>

	);
}
export default Works;
