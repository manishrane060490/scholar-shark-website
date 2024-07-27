import { useEffect } from 'react';
import './index.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import intro from '../../assets/intro-bg.mp4';

function Videopage() {
  const navigate = useNavigate();
  

  // useEffect(() => {
  //   const video : HTMLVideoElement | null = document.querySelector('video');
  //   let menuDisplay : any = document.querySelector<HTMLElement>('.rotate-screen')?.style.display;
  //   video?.addEventListener('ended', (event) => {
  //     let man : any = document.getElementById('screen');
  //     man.style.display='block';
  //       //you can also do things with 'event' obj 
  //   });
  // }, []) 

  useEffect(() => {
      document.getElementById('text')?.classList.add('animate');

      setTimeout(() => {
        navigate('/language');
      }, 18000)
  }, [])

  return (
    <>
    <div className='intro-bg'>

    </div>
      {/* <video width="100%" height="100%" controls={false} autoPlay muted loop>
        <source src={intro} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* <Button type='submit' variant='contained' style={{marginTop: '20px'}} onClick={() =>  navigate('/register')}>Skip Intro</Button> */}
      <div className='text' id='text'>
      <h1>Hello friends!</h1>
        <h1>It's time to unleash your knowledge to conquer the seas of wisdom with scholar sharks.</h1>
        <h1>Use your skills and knowledge to bag outstanding prizes and make a difference with our outstanding quizzes.</h1>
      </div>
      <div className='rotate-screen' id="screen">
        <h1>Please rotate a screen for best experience</h1>
      </div>
    </>
  )
}

export default Videopage
