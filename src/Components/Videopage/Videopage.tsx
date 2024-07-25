import { useEffect } from 'react';
import './index.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Videopage() {
  const navigate = useNavigate();
  

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
      <video width="100%" height="100%" controls={false} autoPlay muted loop>
        <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
        <source src="https://www.w3schools.com/tags/movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <Button type='submit' variant='contained' style={{marginTop: '20px'}} onClick={() =>  navigate('/register')}>Skip Intro</Button>
      <div className='text'><h1>Welcome to Scholar shark</h1></div>
      <div className='rotate-screen' id="screen">
        <h1>Please rotate a screen for best experience</h1>
      </div>
      
    </>
  )
}

export default Videopage
