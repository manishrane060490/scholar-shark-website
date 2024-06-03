import React, {useState, useLayoutEffect} from 'react';
import './index.css';
import { Link } from "react-router-dom";
import Lighthouse from '../Lighthouse/Lighthouse';

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

  return (
    <>
      <Lighthouse />
      <div className='lang-selector'>
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
