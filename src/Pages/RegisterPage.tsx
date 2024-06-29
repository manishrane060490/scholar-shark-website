import React, {useContext, useState} from "react";
import Lighthouse from "../Components/Lighthouse/Lighthouse";
import { Link } from "react-router-dom";
import { PlansContext } from "../Context";

function RegisterPage() {
    const { plans, setPlans } = useContext(PlansContext);
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    const handleEmailChange = (e:any) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        // Check if the entered email is valid
        const isValid = validateEmail(inputEmail);
        setValidEmail(isValid);
    };

    const validateEmail = (email:string) => {
        // Regex for basic email validation
        // This regex is a simple one and may not cover all cases. 
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    return (
        <>
            <Lighthouse light={false}/>
            <div className='panel register-page'>
                <div className='panel-left'>
                    <h2>Welcome Shark &#128075;</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div className="selected-plan">
                        You have selected {plans.plan} Plan ({plans.amt})
                    </div>

                    <div className="register-form">
                        <div>
                            <p>Name</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Email</p>
                            <input type="email" 
                                value={email} 
                                onChange={handleEmailChange} 
                                placeholder="Enter your email" 
                                style={{ borderColor: validEmail ? '' : 'red' }} 
                            />
                            {!validEmail && email.length > 0 && (
                                <p style={{ color: 'red' }}>Please enter a valid email address.</p>
                            )}
                        </div>
                        <div>
                            <p>Mobile No.</p>
                            <input type="text" />
                        </div>
                    </div>

                    <Link to='/summary' className="register-btn">
                        Register
                    </Link>
                </div>
                <div className='panel-right'>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;