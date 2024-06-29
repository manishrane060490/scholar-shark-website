import React from "react";
import Lighthouse from "../Components/Lighthouse/Lighthouse";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <>
            <Lighthouse light={false}/>
            <div className='panel register-page'>
                <div className='panel-left'>
                    <h2>Welcome Shark &#128075;</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div className="register-form">
                        <div>
                            <p>Name</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>password</p>
                            <input type="password" />
                        </div>
                    </div>

                    {/* <button className="register-btn">
                        Login
                    </button> */}
                    <Link to='/dashboard' className="register-btn">
                        Register
                    </Link>
                </div>
                <div className='panel-right'>
                </div>
            </div>
        </>
    )
}

export default LoginPage;