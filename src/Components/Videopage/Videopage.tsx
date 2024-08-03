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
        <h1>These tides of knowledge and curiosity will lead you to the shore. Sharks are the apex predators of the ocean. Do you have what it takes to be one?</h1>
        <h1>Come with us. Challenge others in a bout of knowledge with a wide variety of quizzes and win exciting prizes. </h1>
        <h1>To the victor go the spoils.</h1>
        <h1>Are you one?</h1>
      </div>
      <div className='rotate-screen' id="screen">
        <h1>Please rotate a screen for best experience</h1>
      </div>
    </>
  )
}

export default Videopage
