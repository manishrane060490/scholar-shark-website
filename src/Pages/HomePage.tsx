import logo from '../assets/logo.png';
import Card from '../Components/Card/Card';
import Plancard from '../Components/PlanCard/PlanCard';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import { Button } from "@mui/material";
import staticshark from '../assets/IdleAlphaGIF.gif';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { PlansContext } from '../Context';
import Rules from '../Components/Rules/Rules';

function HomePage() {
    const navigate = useNavigate();
    const { plans, setPlans, userInfo } = useContext(PlansContext);
    const [plan, setPlan] = useState(false);

    const planSelected = (plan: string, amt: string) => {
        setPlans({plan, amt});
        setPlan(true);
    }
    
    return (
        <div className="homePage">
            
            <div className="bannersection">
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

                <div className='banner-inner'>
                    <h1>National <br/> Finance Quiz</h1>
                    <h4>Welcome to Scholar Sharks</h4>
                    <div className='button-grp'>
                        <Button type='submit' variant='contained' onClick={() => navigate('/plans')}>Select a Plan</Button>
                        <Button type='submit' variant='outlined' className='btn-white' onClick={() => navigate('/quiz')}>Try Quiz</Button>
                    </div>
                    <div className='banner-count'>
                        <div className='person-grp'>
                        <img src={person1} alt='persons' className='person' />
                        <img src={person2} alt='persons' className='person' />
                        <img src={person3} alt='persons' className='person' />
                        </div>
                        <h3 className='count-text'>Over 200+ People are taking quiz right now</h3>
                    </div>
                    <img src={staticshark} alt='shark' className='shark-img' />
                </div>

                
            </div>
            {/* <div>
                <h4>At scholar shark, we believe knowledge of any form should be heavily rewarded. So swim with us, take our quiz and win exciting prizes</h4>
            </div> */}
            {/* <div className='rules'>
                <h1>Rule book for Quiz</h1>
                <Rules />
            </div> */}
            <div className='about'>
                <h1>What is Scholar Sharks ?</h1>
                <p>
                Scholar Sharks is not just an educational platform; it's an ocean of knowledge and a hub for engaging and insightful learning experiences. Formerly known as LearnEng, we have a legacy of making a significant impact in the field of financial literacy, and our journey continues to evolve.
                </p>
            </div>
            <div className="plans">
                <h1>Our Awesome Plans</h1>
                <div className="plan-container">
                        <div className={plans.plan === 'silver' ? "plan selected" : 'plan' }>
                            <div className="plan-body">
                                <div>
                                    <h2>Silver Tier</h2>
                                    <p>Find your silver linings in this quiz. </p>
                                    <p>You can attempt the quiz once of any topic you desire. It will be held every week, with prizes ranging from Rs. 20,000 to Rs. 1,00,000*. </p>
                                    <p>Also Added advantage is you will get 399 coins that can be redeemed for the next Gold or diamond quiz. Giving this quiz three times automatically gives you the right to participate in a diamond quiz.</p>
                                </div>
                                <div className="plan-amt">
                                    <h5>1 Quiz to play</h5>
                                    <button onClick={() => planSelected('silver', '₹499.00')}>₹499.00</button>
                                </div>
                            </div>
                            <div className="plan-footer">
                                <p>3 Quiz Categories</p> 
                                {/* <ul>
                                    <li>Quiz 1</li>
                                    <li>Quiz 2</li>
                                    <li>Quiz 3</li>
                                </ul> */}
                                <div className="plan-list">
                                    <p>Cricket</p>
                                    <p>History</p>
                                    <p>Food</p>
                                </div>
                            </div>
                        </div>

                        <div className={plans.plan === 'gold' ? "plan selected recom" : 'plan recom' }>
                            <div className="plan-body">
                                <div>
                                    <h2>Gold Tier</h2> 
                                    {/* <span>Recommended</span> */}
                                    <p>Real Gold is never afraid of the melting pot.</p> 
                                    <p>Here the quizzes are a bit more challenging but with more exciting prizes.
                                    This quiz will be held once every two weeks and the prizes range from Rs.40,000 to Rs.2,00,000.</p>
                                    <p>As an added advantage you will get 799 coins which can be used for platinum quizzes. Giving this test twice gives you the right to participate in a diamond quiz.</p>
                                </div>
                                <div className="plan-amt">
                                    <h5>2 Quiz to play</h5>
                                    <button onClick={() => planSelected('gold', '₹799.00')}>₹799.00</button>
                                </div>
                            </div>
                            <div className="plan-footer">
                                <p>2 Quiz Categories</p> 
                                <div className="plan-list">
                                    <p>Travel</p>
                                    <p>Indian Mythology</p>
                                </div>
                            </div>
                        </div>

                        <div className={plans.plan === 'diamond' ? "plan selected" : 'plan' }>
                            <div className="plan-body">
                                <div>
                                    <h2>Diamond Tier</h2>
                                    <p>Be like a Diamond precious and rare and not like a stone present everywhere.</p>
                                    <p>This is the ultimate quiz where you can prove your mettle. You will be a shark upon completing this quiz and we will rain prizes upon prizes for you. This quiz will be held once every three months. There are prizes upto 15cr*. Check the entire list of prizes here.(Give a hyperlink here for the list of prizes). As an added advantage you will get an opportunity to participate in one Gold and one silver quiz for free. </p>
                                </div>
                                <div className="plan-amt">
                                    <h5>3 Quiz to play</h5>
                                    <button onClick={() => planSelected('diamond', '₹1499.00')}>₹1499.00</button>
                                </div>
                            </div>
                            <div className="plan-footer">
                                <p>1 Quiz Categories</p> 
                                <div className="plan-list">
                                    <p>Finance</p>
                                </div>
                            </div>
                        </div>


                    </div>
            </div>
            <div className="quizs">
                <h1>Explore Quizzes</h1>
                <div className='card-grp'>
                    <Card title={'cricket'} showCount={false} count={200} disabled={false}/>
                    <Card title={'history'} showCount={false}  count={200} disabled={false}/>
                    <Card title={'food'} showCount={false} count={200} disabled={false}/>
                    <Card title={'travel'} showCount={false}  count={200} disabled={false}/>
                    <Card title={'indian-mythology'} showCount={false}  count={200} disabled={false}/>
                    <Card title={'finance'} showCount={false}  count={200} disabled={false}/>
                </div>
            </div>
            <div className="leaderboard"></div>
        </div>
    )
}

export default HomePage;