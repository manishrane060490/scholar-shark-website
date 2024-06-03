import React from "react";
import Lighthouse from "../Components/Lighthouse/Lighthouse";
import { Link } from "react-router-dom";

function RegisterPage() {
    return (
        <>
            <Lighthouse/>
            <div className='panel register-page'>
                <div className='panel-left'>
                    <h2>Welcome Shark &#128075;</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div className="selected-plan">
                        You have selected Gold Plan (₹799.00)
                    </div>

                    <div className="register-form">
                        <div>
                            <p>Name</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Email</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Mobile No.</p>
                            <input type="text" />
                        </div>
                    </div>

                    <Link to='/login' className="register-btn">
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