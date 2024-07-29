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
import { useContext, useEffect, useState } from 'react';
import { PlansContext } from '../Context';
import staticshark from '../assets/IdleAlphaGIF.gif';
import Userpool from '../Userpool';
import axios from 'axios';
import HomePage from './HomePage';

function DashboardPage() {
    const { plans, info, userInfo, setUserInfo } = useContext(PlansContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [plan, setPlan] = useState('');
    const [name, setName] = useState('');
    const [profile, setProfile] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [user, setUser] = useState('');
    const [purchasedPlans, setPurchasedPlans] = useState(0);
    const purchasedPlan: any = [];

    const getCurrentUser = (callback: any) => {
        const cognitoUser = Userpool.getCurrentUser();

        if (!cognitoUser) return false;

        cognitoUser.getSession((err: any, session: any) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Session valid:" + session.isValid());
            console.log(session);
            setUser(session.accessToken.payload.username)
            setUserInfo({
                user: session.accessToken.payload.username
            })

            cognitoUser.getUserAttributes((err, attr) => {
                if (err) return console.log(err);

                callback(attr);
            })

            fetchPlans(session.accessToken.payload.username)
        })
    }

    const fetchPlans = (userId: string) => {
        console.log(userId);
        
        // let config = {

        //     method: "get",
        //     maxBosyLength: Infinity,
        //     url: `https://iy5ispsidmfhpzojalaofamqiq0nerep.lambda-url.ap-south-1.on.aws/getplans/${userId}`,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }

        axios.get(`https://iy5ispsidmfhpzojalaofamqiq0nerep.lambda-url.ap-south-1.on.aws/getplans/${userId}`)
            .then((res: any) => {
                console.log(res.data)
                // handleRazorpayScreen(response.data.amount)
                res.data.map((d:any) => purchasedPlan.push(d.planType));
                // setPurchasedPlans(purchasedPlan.length)
            })
            .catch((error: any) => {
                console.log("error at", error)
            })

            // console.log(purchasedPlans)

        // setPurchasedPlans([...purchasedPlans, purchasedPlan])
    }

    useEffect(() => {
        getCurrentUser((attr : any) => {
            for (let i = 0; i < attr.length; i++) {
                console.log(attr[i].Name)
                if (attr[i].Name === "email") {
                    // console.log(attr[i].)
                    setEmail(attr[i].Value);
                }

                if (attr[i].Name === "phone_number") {
                    setPassword(attr[i].Value);
                }

                if (attr[i].Name === "custom:plan") {
                    setPlan(attr[i].Value);
                }

                if (attr[i].Name === "picture") {
                    setProfile(attr[i].Value);
                }

                if (attr[i].Name === "name") {
                    setName(attr[i].Value);
                }
            }
        })
    }, [])
    
    return (
            <div className="dashboardPage">
            <div className="header">
                <div className="left-side">
                    <img src={logo} className="home-logo" alt="Scholar Shark" />
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
                        <img src={staticshark} alt="shark" className='sharkGif' />
                    </div>
                    <div className='banner silver-banner'>
                        <div className="banner-text">
                            <h1>Silver Tier</h1>
                            <div className='banner-prize'>
                                <img src={silverbg} alt='prizes' className='prize-ticket' />
                                <h6>Participate in silver tier and win prizes upto 1 lakh* every week </h6>
                            </div>
                        </div>
                        {/* <video className='video' width="100%" height="100%" loop autoPlay muted>
                            <source src={sharkVideo} type="video/webm" />
                        </video> */}
                        <img src={staticshark} alt="shark" className='sharkGif' />
                    </div>
                    <div className='banner gold-banner'>
                        <div className="banner-text">
                            <h1>Gold Tier</h1>
                            <div className='banner-prize'>
                                <img src={goldbg} alt='prizes' className='prize-ticket' />
                                <h6>Participate in gold tier and win prizes upto 2 lakh* bi-weekly</h6>
                            </div>
                        </div>
                        <img src={staticshark} alt="shark" className='sharkGif' />
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
                        <img src={staticshark} alt="shark" className='sharkGif' />
                    </div>
                </Carousel>
            </div>
            {/* <div>
                <h4>At scholar shark, we believe knowledge of any form should be heavily rewarded. So swim with us, take our quiz and win exciting prizes</h4>
            </div> */}
            <div className="plans">
                <h3>Your Plans</h3>
                <div className='plancard-grp'>
                    <Plancard title={'Silver'} count={100} type={'silver'} disabled={true}/>
                    <Plancard title={'Gold'} count={150} type={'gold'} disabled={true} />
                    <Plancard title={'Diamond'} count={300} type={'diamond'} disabled={true} />
                </div>
            </div>
            <div className="quizs">
                <h3>Quizes</h3>
                <h4>Silver Quiz</h4>
                <div className='card-grp'>
                    <Card title={'cricket'} count={200} disabled={true}/>
                    <Card title={'history'} showCount={true} count={200} disabled={true}/>
                    <Card title={'food'} showCount={true} count={200} disabled={true}/>
                </div>
                <h4>Gold Quiz</h4>
                <div className='card-grp'>
                    <Card title={'travel'} showCount={true} count={200} disabled={true}/>
                    <Card title={'indian-mythology'} showCount={true} count={200} disabled={true}/>
                </div>
                <h4>Diamon Quiz</h4>
                <div className='card-grp'>
                    <Card title={'finance'} showCount={true} count={200} disabled={true}/>
                </div>
            </div>
            <div className="leaderboard"></div>
        </div>  
    )
}

export default DashboardPage;