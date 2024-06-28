import React, { useState, useLayoutEffect } from 'react';
import './index.css';
import { Link } from "react-router-dom";
import Lighthouse from '../Lighthouse/Lighthouse';
import logo from '../../assets/logo.png';
import shark from '../../assets/shark.gif';
import sharkVideo from '../../assets/IdleAlphaWEBM1.webm';
import sharkVideoMov from '../../assets/IdleAlphaWEBM.ogg';
import { ReactTyped, Typed } from "react-typed";

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
  const [typed, setTyped] = useState<Typed | undefined>()

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

  function isColorInRange(expectedColor: any, givenColor: any) {
    const THRESHOLD = 40;
    for (var i = 0; i < 3; i++) {
      if (((expectedColor[i] - THRESHOLD) > givenColor[i])
        || ((expectedColor[i] + THRESHOLD) < givenColor[i])) {
        return false;
      }
    }
    return true;
  }

  function setVideoBgColor(vid: any, nativeColor:any) {
    if (vid) {
      var vidBg = vid.parentElement;
      if (vidBg) {
        // draw first pixel of video to a canvas
        // then get pixel color from that canvas
        var canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        var ctx = canvas.getContext("2d");
        ctx?.drawImage(vid, 0, 0, 1, 1);

        var p = ctx?.getImageData(0, 0, 1, 1).data;
        //console.log("rgb(" + p[0] + "," + p[1] + "," + p[2] + ")");
        // if (isColorInRange(nativeColor, p)) {
        //   vidBg.style.backgroundColor = ("rgb(" + p?[0] + "," + p?[1] + "," + p?[2] + ")");
        // }
      }
    }
  }

  function setVideoBgColorDelayed(vid:any, nativeColor:any) {
    setTimeout(setVideoBgColor, 100, vid, nativeColor);
  }

  const skipLang = () => {
    typed?.destroy();
    showLang();
  }

  return (
    <>
      <img className='logo' src={logo} />
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
              // onDestroy={() => showLang()}
              typedRef={setTyped}
            />
            <div className='bubble-buttons'>
              <button className='btn skip-btn' onClick={() => skipLang()}>Skip Intro</button>
              <Link className='btn start-btn' to="/quiz">Start Test</Link>
            </div>
          </blockquote>
          {/* <blockquote className="speech bubble"></blockquote> */}
        </section>
        <img src={shark} className='shark' />
        {/* <button className='btn skip-btn' onClick={() => skipLang()}>Skip Intro</button>
        <button className='btn start-btn' onClick={() => skipLang()}>Start Test</button> */}
        {/* <video width="100%" height="100%" controls autoPlay muted>
          <source src='../../assets/IdleAlphaWEBM.webm' type="video/xwebm" />
          Your browser does not support the video tag.
        </video> */}
        {/* <div id="video-container">
        </div> */}
        {/* <video id="video" playsInline className='video' width="100%" height="100%" loop autoPlay muted>
          <source src={sharkVideoMov} type="video/mov" />
          <source src={sharkVideo} type="video/webm" />
        </video> */}
      </div>

      <Lighthouse light />
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
