import React, { useState, useLayoutEffect } from 'react';
import './index.css';
import { Link, useNavigate } from "react-router-dom";
import Lighthouse from '../Lighthouse/Lighthouse';
import logo from '../../assets/logo.png';
import shark from '../../assets/shark.gif';
import sharkVideo from '../../assets/IdleAlphaWEBM1.webm';
import sharkVideoMov from '../../assets/IdleAlphaWEBM.ogg';
import { ReactTyped, Typed } from "react-typed";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
  const [typed, setTyped] = useState<Typed | undefined>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

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

  const skipLang = () => {
    typed?.destroy();
    showLang();
  }

  const changeLanguage = (lng: any) => {
    // i18n.changeLanguage(lng);
    navigate('/login')
  };

  document.onmousemove = e => {
    for (const card of document.getElementsByClassName('card-glow-border') as HTMLCollectionOf<HTMLElement>) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  }


  return (
    <>
      <img className='logo' src={logo} />


      
      <motion.div initial={{ opacity: 0, x: '40%' }} animate={{ opacity: 1, x: 0 }} transition={{
        ease: "linear",
        duration: 1,
        x: { duration: 1 }
      }} className='lang-selector card-glow-border glow-on-hover lang-animation' id="lang-selector">
        <div className='card-glow-border-inner '>
          <div>
            {/* <h1>
            Welcome to Scholarsharks
          </h1>
          <h4>Please select your Language</h4> */}
            <h1>{t('welcome')}</h1>
            <p>Please select your Language</p>
          </div>

          <div className='button-container'>
            <button className='button' onClick={() => changeLanguage('en')}>English</button>
            <button className='button disabled' onClick={() => changeLanguage('hi')}>हिंदी <span className='coming-text'>Coming soon</span></button>
            <button className='button disabled' onClick={() => changeLanguage('mr')}>मराठी <span className='coming-text'>Coming soon</span></button>
          </div>
        </div>
      </motion.div>
      <div className='rotate-screen'>
        <h1>Please rotate a screen for best experience</h1>
      </div>

    </>
  )
}

export default Language
