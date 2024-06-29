import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Lighthouse from "../Components/Lighthouse/Lighthouse";
import { PlansContext } from "../Context";

function SummaryPage() {
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div className="plan-container">

                        <div>
                            <div>
                                <h3>Name: Manish Rane</h3>
                            </div>
                            <div>
                                <h3>Email: manish.mahadeorane@gmail.com</h3>
                            </div>
                        </div>

                        <div className="plan-info">
                            <div className="plan-details">
                                <h3>Selected Plan</h3>
                                <Link to='/plans' className="button change-btn">
                                    Change Plan
                                </Link>
                            </div>
                            
                            <div className="plan">
                                <div className="plan-body">
                                    <div>
                                        <h2>Platinum Plan</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div className="plan-amt">
                                        <h5>3 Quiz to play</h5>
                                        <h4>₹1499.00</h4>
                                    </div>
                                </div>
                                <div className="plan-footer">
                                    <p>3 Quiz Categories</p> 
                                    <div className="plan-list">
                                        <p>Quiz 1</p>
                                        <p>Quiz 2</p>
                                        <p>Quiz 3</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to='/login' className="register-btn">
                            Proceed to Payment
                        </Link>
                        

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