import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Lighthouse from "../Components/Lighthouse/Lighthouse";
import { PlansContext } from "../Context";

function PlansPage() {
    const { plans, setPlans } = useContext(PlansContext);
    const [plan, setPlan] = useState(false)

    const planSelected = (plan: string, amt: string) => {
        setPlans({plan, amt});
        setPlan(true);
    }

    useEffect(() => {
        setPlan(false);
    }, [])

    return (
        <>
            <Lighthouse light={false}/>
            <div className='panel plan-page'>
                <div className='panel-left'>
                    <h2>Welcome Shark &#128075;</h2>
                    <p>Please select a plan for starting a quiz</p>

                    <div className="plan-container">
                        <div className={plans.plan === 'silver' ? "plan selected" : 'plan' }>
                            <div className="plan-body">
                                <div>
                                    <h2>Silver Plan</h2>
                                    <p>Find your silver linings in this quiz. You can attempt the quiz once of any topic you desire. It will be held every week, with prizes ranging from Rs. 20,000 to Rs. 1,00,000*. </p>
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
                                    <h2>Gold Plan</h2> 
                                    {/* <span>Recommended</span> */}
                                    <p>Real Gold is never afraid of the melting pot. Here the quizzes are a bit more challenging but with more exciting prizes.
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
                                    <h2>Diamond Plan</h2>
                                    <p>Be like a Diamond precious and rare and not like a stone present everywhere. This is the ultimate quiz where you can prove your mettle. You will be a shark upon completing this quiz and we will rain prizes upon prizes for you. This quiz will be held once every three months. There are prizes upto 15cr*. Check the entire list of prizes here.(Give a hyperlink here for the list of prizes). As an added advantage you will get an opportunity to participate in one Gold and one silver quiz for free. </p>
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

                    {
                        plan && 
                        <Link to='/register' className="plan-btn">
                            Proceed to pay
                        </Link>
                    }  
                </div>
                <div className='panel-right'>
                </div>
            </div>
        </>
    )
}

export default PlansPage;