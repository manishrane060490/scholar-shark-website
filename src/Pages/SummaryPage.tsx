import { useEffect, useCallback } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Lighthouse from "../Components/Lighthouse/Lighthouse";
import { PlansContext } from "../Context";
import axios from 'axios';
import logo from '../assets/logo.png';

function SummaryPage() {
    const [responseId, setResponseId] = useState("");
    const [responseState, setResponseStatus] = useState([]);
    const { plans, info } = useContext(PlansContext);
    console.log(info);
    console.log(plans);

    // const planSelected = (plan: string, amt: string) => {
    //     setPlans({ plan, amt });
    //     setPlan(true);
    // }

    // useEffect(() => {
    //     setPlan(false);
    // }, [])

    const loadScript = (src: string) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const createRazorpayOrder = (amount: number) => {
        let data = JSON.stringify({
            amount: amount * 100,
            currency: "INR"
        })

        let config = {
            method: "post",
            maxBosyLength: Infinity,
            url: "http://localhost:1000/orders",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }

        axios.request(config)
            .then(response => {
                console.log(JSON.stringify(response.data))
                handleRazorpayScreen(response.data.amount)
            })
            .catch(error => {
                console.log("error at", error)
            })
    }

    const handleRazorpayScreen = async (amount: number) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("Some error at razorpay screen loading")
            return;
        }

        const options = {
            key: 'rzp_test_xVhe8Kc1nyWe7C',
            amount: amount,
            currency: 'INR',
            name: info.name,
            description: "payment",
            handler: function (response: any) {
                setResponseId(response.razorpay_payment_id)
            },
            prefill: {
                name: info.name,
                email: info.email
            },
            theme: {
                color: "#f4c430"
            }
        }

        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.open()
    }
    return (
        <>
            <Lighthouse light={false} />
            <div className='panel plan-page'>
                <div className='panel-left'>
                    <h2>Welcome Shark &#128075;</h2>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}

                    <div className="plan-container">

                        <div>
                            <div>
                                <h3>Name: {info.name}</h3>
                            </div>
                            <div>
                                <h3>Email: {info.email}</h3>
                            </div>
                        </div>

                        <div className="plan-info">
                            <div className="plan-details">
                                <h3>Selected Plan</h3>
                                <Link to='/plans' className="button change-btn">
                                    Change Plan
                                </Link>
                            </div>

                            <div className="plan-container">
                                {
                                    plans.plan === 'silver' &&
                                    <div className={'plan'}>
                                        <div className="plan-body">
                                            <div>
                                                <h2>Silver Tier</h2>
                                                <p>Find your silver linings in this quiz. </p>
                                                <p>You can attempt the quiz once of any topic you desire. It will be held every week, with prizes ranging from Rs. 20,000 to Rs. 1,00,000*. </p>
                                                <p>Also Added advantage is you will get 399 coins that can be redeemed for the next Gold or diamond quiz. Giving this quiz three times automatically gives you the right to participate in a diamond quiz.</p>
                                            </div>
                                            <div className="plan-amt">
                                                <h5>1 Quiz to play</h5>
                                                <h6>₹499.00</h6>
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
                                }


                                {
                                    plans.plan === 'gold' &&
                                    <div className='plan recom'>
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
                                                <h6>₹799.00</h6>
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
                                }


                                {
                                    plans.plan === 'diamond' &&
                                    <div className={"plan"}>
                                        <div className="plan-body">
                                            <div>
                                                <h2>Diamond Tier</h2>
                                                <p>Be like a Diamond precious and rare and not like a stone present everywhere.</p>
                                                <p>This is the ultimate quiz where you can prove your mettle. You will be a shark upon completing this quiz and we will rain prizes upon prizes for you. This quiz will be held once every three months. There are prizes upto 15cr*. Check the entire list of prizes here.(Give a hyperlink here for the list of prizes). As an added advantage you will get an opportunity to participate in one Gold and one silver quiz for free. </p>
                                            </div>
                                            <div className="plan-amt">
                                                <h5>3 Quiz to play</h5>
                                                <h6>₹1499.00</h6>
                                            </div>
                                        </div>
                                        <div className="plan-footer">
                                            <p>1 Quiz Categories</p>
                                            <div className="plan-list">
                                                <p>Finance</p>
                                            </div>
                                        </div>

                                    </div>
                                }



                            </div>
                        </div>

                        {/* <Link to='/login' className="register-btn">
                            Proceed to Payment
                        </Link> */}

                        <button onClick={() => handleRazorpayScreen(700)} className="register-btn">
                            Proceed to Payment
                        </button>


                    </div>

                    {/* {
                        plan && 
                        <Link to='/register' className="plan-btn">
                            Proceed to pay
                        </Link>
                    }   */}
                </div>
                <div className='panel-right'>
                </div>
            </div>
        </>
    )
}

export default SummaryPage;