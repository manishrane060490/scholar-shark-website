import React, {useState, useLayoutEffect} from 'react';
import './index.css';
import { Link } from "react-router-dom";
import Lighthouse from '../Lighthouse/Lighthouse';
import logo from '../../assets/logo.png';
import shark from '../../assets/shark.png';
import { ReactTyped } from "react-typed";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function Language() {

  const [width, height] = useWindowSize();

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = height * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  let vhWidth = width * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vhwidth', `${vhWidth}px`);

  const showLang = () => {
    let shark = document.getElementById('shark-talk');
    let lang = document.getElementById('lang-selector');

    shark?.classList.add("shark-animation");
    lang?.classList.add("lang-animation");
  }

  return (
    <>
      <img className='logo' src={logo}/>
      <div className='shark-talk' id='shark-talk'>
        <section className='fade-container'>
          <blockquote className="speech bubble fade">
            <ReactTyped
              strings={[
                "Hello friends!",
                "It's time to unleash your knowledge to conquer the seas of wisdom with scholar sharks.",
                "Use your skills and knowledge to bag outstanding prizes and make a difference with our outstanding quizzes."
              ]} 
              typeSpeed={100} 
              onComplete={() => showLang()}
            />
          </blockquote>
          {/* <blockquote className="speech bubble"></blockquote> */}
        </section>
        <img src={shark} className='shark' />
      </div>
      
      <Lighthouse light/>
      <div className='lang-selector' id="lang-selector">
        <div>
          <h1>
            Welcome to Scholarsharks
          </h1>
          <h4>Please select your Language</h4>
        </div>
        
        <div className='button-container'>
          <Link className='button' to="/quiz">English</Link>
          <Link className='button' to="/quiz">Marathi</Link>
          <Link className='button' to="/quiz">Hindi</Link>
        </div>
      </div>
      <div className='rotate-screen'>
        <h1>Please rotate a screen for best experience</h1>
      </div>
      
    </>
  )
}

export default Language
