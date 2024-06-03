import { Link } from "react-router-dom";
import Lighthouse from "../Components/Lighthouse/Lighthouse";

function PlansPage() {
    return (
        <>
            <Lighthouse/>
            <div className='panel plan-page'>
                <div className='panel-left'>
                    <h2>Welcome Shark &#128075;</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div className="plan-container">
                        <div className="plan">
                            <div className="plan-body">
                                <div>
                                    <h2>Silver Plan</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="plan-amt">
                                    <h5>1 Quiz to play</h5>
                                    <button>₹499.00</button>
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
                                    <p>Quiz 1</p>
                                    <p>Quiz 2</p>
                                    <p>Quiz 3</p>
                                </div>
                            </div>
                        </div>

                        <div className="plan recom">
                            <div className="plan-body">
                                <div>
                                    <h2>Gold Plan</h2> 
                                    {/* <span>Recommended</span> */}
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="plan-amt">
                                    <h5>2 Quiz to play</h5>
                                    <button>₹799.00</button>
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

                        <div className="plan">
                            <div className="plan-body">
                                <div>
                                    <h2>Platinum Plan</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="plan-amt">
                                    <h5>3 Quiz to play</h5>
                                    <button>₹1499.00</button>
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

                    <Link to='/register' className="plan-btn">
                        Proceed to pay
                    </Link>
                </div>
                <div className='panel-right'>
                </div>
            </div>
        </>
    )
}

export default PlansPage;