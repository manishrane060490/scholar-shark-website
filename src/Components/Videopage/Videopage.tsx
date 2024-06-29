import { useEffect } from 'react';
import './index.css';

function Videopage() {

  

  useEffect(() => {
    const video : HTMLVideoElement | null = document.querySelector('video');
    let menuDisplay : any = document.querySelector<HTMLElement>('.rotate-screen')?.style.display;
    video?.addEventListener('ended', (event) => {
      let man : any = document.getElementById('screen');
      man.style.display='block';
        //you can also do things with 'event' obj 
    });
  }, []) 

  return (
    <>
      <video width="100%" height="100%" controls autoPlay muted>
        <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
        <source src="https://www.w3schools.com/tags/movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div className='rotate-screen' id="screen">
        <h1>Please rotate a screen for best experience</h1>
      </div>
      
    </>
  )
}

export default Videopage
