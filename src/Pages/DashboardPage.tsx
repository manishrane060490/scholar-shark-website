import logo from '../assets/logo.png';
import sharkVideo from '../assets/IdleAlphaWEBM.webm';
import { ReactTyped } from "react-typed";
import Card from '../Components/Card/Card';
import Plancard from '../Components/PlanCard/PlanCard';
import person1 from '../assets/person1.jpg';
import goldbg from '../assets/goldbg.png';
import dbg from '../assets/diamondbg.png';
import silverbg from '../assets/silverbg.png';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useContext } from 'react';
import { PlansContext } from '../Context';
import staticshark from '../assets/IdleAlphaGIF.gif';

function DashboardPage() {
    const { plans, info } = useContext(PlansContext);
    console.log(plans);
    return (
        <div className="homePage">
            <div className="header">
                <div className="left-side">
                    <img src={logo} className="home-logo" alt="Scholar Shark"/>
                </div>
                <div className='right-side'>
                    <div>
                        <img src={person1} alt='person' className='dropdown-img' />
                    </div>
                </div>
            </div>
            <div className="bannersection">
                <Carousel autoPlay>
                    <div className='banner'>
                        <div className="banner-text">
                            {/* <ReactTyped
                                strings={[
                                    "Hello friends!",
                                    "It's time to unleash your knowledge to conquer the seas of wisdom with scholar sharks.",
                                    "Use your skills and knowledge to bag outstanding prizes and make a difference with our outstanding quizzes."
                                ]}
                                typeSpeed={100}
                            /> */}
                            <h4>At scholar shark, we believe knowledge of any form should be heavily rewarded. So swim with us, take our quiz and win exciting prizes</h4>
                        </div>
                        {/* <video className='video' width="100%" height="100%" loop autoPlay muted>
                            <source src={sharkVideo} type="video/webm" />
                        </video> */}
                        <img src={staticshark} alt="shark" className='sharkGif'/>
                    </div>
                    <div className='banner silver-banner'>
                        <div className="banner-text">
                            <h1>Silver Tier</h1>
                            <div className='banner-prize'>
                                <img src={silverbg} alt='prizes' className='prize-ticket'/>
                                <h6>Participate in silver tier and win prizes upto 1 lakh* every week </h6>
                            </div>
                        </div>
                        {/* <video className='video' width="100%" height="100%" loop autoPlay muted>
                            <source src={sharkVideo} type="video/webm" />
                        </video> */}
                        <img src={staticshark} alt="shark" className='sharkGif'/>
                    </div>
                    <div className='banner gold-banner'>
                        <div className="banner-text">
                            <h1>Gold Tier</h1>
                            <div className='banner-prize'>
                                <img src={goldbg} alt='prizes' className='prize-ticket'/>
                                <h6>Participate in gold tier and win prizes upto 2 lakh* bi-weekly</h6>
                            </div>
                        </div>
                        <img src={staticshark} alt="shark" className='sharkGif'/>
                    </div>
                    <div className='banner diamond-banner'>
                        <div className="banner-text">
                            <h1>Diamond Tier</h1>
                            <div className='banner-prize'>
                                {/* <img src={ticket} alt='prizes' className='prize-ticket'/> */}
                                <div className='imgGrp'>
                                    <img src={dbg} className='img1' />

                                </div>
                                <h6>Participate in Diamond tier and get a chance to win a mercedes and much every Quater</h6>
                            </div>
                        </div>
                        <img src={staticshark} alt="shark" className='sharkGif'/>
                    </div>
                </Carousel>
            </div>
            {/* <div>
                <h4>At scholar shark, we believe knowledge of any form should be heavily rewarded. So swim with us, take our quiz and win exciting prizes</h4>
            </div> */}
            <div className="plans">
                <h3>Your Plans</h3>
                <div className='plancard-grp'>
                    <Plancard title={'Silver'} count={100} type={'silver'}/>
                    <Plancard title={'Gold'} count={150} type={'gold'} disabled={plans.plan !== 'gold'}/>
                    <Plancard title={'Diamond'} count={300} type={'diamond'} disabled={plans.plan !== 'diamond'}/>
                </div>
            </div>
            <div className="quizs">
                <h3>Quizes</h3>
                <h4>Silver Quiz</h4>
                <div className='card-grp'>
                    <Card title={'cricket'} count={200}/>
                    <Card title={'history'} count={200}/>
                    <Card title={'food'} count={200}/>
                </div>
                <h4>Gold Quiz</h4>
                <div className='card-grp'>
                    <Card title={'travel'} count={200} />
                    <Card title={'indian-mythology'} count={200} />
                </div>
                <h4>Diamon Quiz</h4>
                <div className='card-grp'>
                    <Card title={'finance'} count={200} />
                </div>
            </div>
            <div className="leaderboard"></div>
        </div>
    )
}

export default DashboardPage;