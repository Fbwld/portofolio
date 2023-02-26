/* eslint-disable no-unused-vars */
// import './App.css';
 // eslint-disable-next-line no-unused-vars
import React,{useEffect, useState} from "react"
import {NavBar} from "./components/NavBar"
import {Home} from "./components/Home"
import {Skills} from "./components/Skills"
import {Project} from "./components/Project"
import { FixedContact } from './components/FixedContact';
import { GetIn } from "./components/GetIn";
import { SplashScreen } from "./components/SplashScreen";

function App() {
 
  const [loading, setLoading] = useState(true);
  const handleScroll = () => {
    const targetElement = document.getElementById('skills');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },800)
  },[]);
  if(loading){
    return(
      <div >
        <SplashScreen/>
      </div>
    )
  }
  return (
    <div className="App">
      <NavBar />
      <Home handleScroll={handleScroll} />
      <Skills />
      <Project />
      <GetIn />
      <FixedContact />
      
    </div>
  );
}

export default App;
