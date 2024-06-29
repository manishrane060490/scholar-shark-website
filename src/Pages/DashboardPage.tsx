import logo from '../assets/logo.png';
import sharkVideo from '../assets/IdleAlphaWEBM.webm';
import { ReactTyped } from "react-typed";

function DashboardPage() {
    return (
        <div className="homePage">
            <div className="header">
                <div className="left-side">
                    <img src={logo} className="home-logo" alt="Scholar Shark"/>
                </div>
            </div>
            <div className="banner">
                <div className="banner-text">
                <ReactTyped
                    strings={[
                        "Hello friends!",
                        "It's time to unleash your knowledge to conquer the seas of wisdom with scholar sharks.",
                        "Use your skills and knowledge to bag outstanding prizes and make a difference with our outstanding quizzes."
                    ]}
                    typeSpeed={100}
                />
                </div>
                <video className='video' width="100%" height="100%" loop autoPlay muted>
                    <source src={sharkVideo} type="video/webm" />
                </video>
            </div>
            <div className="plans">
                <h3>Your Plans</h3>
            </div>
            <div className="quizs"></div>
            <div className="leaderboard"></div>
        </div>
    )
}

export default DashboardPage;