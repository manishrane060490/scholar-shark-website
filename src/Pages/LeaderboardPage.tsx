import React from "react";
import Lighthouse from "../Components/Lighthouse/Lighthouse";
import shark from '../assets/shark.png';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function LeaderboardPage() {
    return (
        <>
            <Lighthouse light={false}/>
            <div className='panel leader-page'>
                <div className='panel-header'>
                    <div>
                        <img src={shark} className="leader-shark" />
                    </div>
                    <div className="leader-text">
                        <h1>Welcome to LeaderBoard</h1>
                        <p>You scored 80% now select a Plan</p>
                        
                    </div>
                    <div>
                        <img src={logo} className="leader-logo" />
                    </div>
                    
                </div>
                <div className="panel-body">
                    <div className="row-header">
                        <div className="rank">Rank</div>
                        <div className="name">Name</div>
                        <div className="score">Score</div>
                        <div className="result">Result</div>
                    </div>

                    <div className="leader-result">
                        <div className="row">
                            <div className="rank">1</div>
                            <div className="name">Manish Rane</div>
                            <div className="score">
                                <span className="right"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                            </div>
                            <div className="result">90%</div>
                        </div>
                        <div className="row">
                            <div className="rank">2</div>
                            <div className="name">Manish Rane</div>
                            <div className="score">
                                <span className="right"></span>
                                <span className="wrong"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                            </div>
                            <div className="result">80%</div>
                        </div>
                        <div className="row">
                            <div className="rank">3</div>
                            <div className="name">Manish Rane</div>
                            <div className="score">
                                <span className="wrong"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                            </div>
                            <div className="result">70%</div>
                        </div>
                        <div className="row">
                            <div className="rank">4</div>
                            <div className="name">Manish Rane</div>
                            <div className="score">
                            <span className="wrong"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                            </div>
                            <div className="result">70%</div>
                        </div>
                        <div className="row">
                            <div className="rank">5</div>
                            <div className="name">Manish Rane</div>
                            <div className="score">
                            <span className="wrong"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                            </div>
                            <div className="result">70%</div>
                        </div>
                        <div className="row">
                            <div className="rank">6</div>
                            <div className="name">Manish Rane</div>
                            <div className="score">
                            <span className="wrong"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                            </div>
                            <div className="result">76%</div>
                        </div>
                        <div className="row">
                            <div className="rank">7</div>
                            <div className="name">Manish Rane</div>
                            <div className="score">
                            <span className="wrong"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                            </div>
                            <div className="result">76%</div>
                        </div>
                        <div className="row">
                            <div className="rank">8</div>
                            <div className="name">Manish Rane</div>
                            <div className="score">
                            <span className="wrong"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                            </div>
                            <div className="result">76%</div>
                        </div>
                        <div className="row">
                            <div className="rank">9</div>
                            <div className="name">Manish Rane</div>
                            <div className="score">
                            <span className="wrong"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                            </div>
                            <div className="result">76%</div>
                        </div>
                        <div className="row">
                            <div className="rank">9</div>
                            <div className="name">Manish Rane</div>
                            <div className="score">
                            <span className="wrong"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="wrong"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                                <span className="right"></span>
                            </div>
                            <div className="result">76%</div>
                        </div>
                    </div>
                </div>
                <div className="panel-footer">
                    <Link className='button' to='/plans'>Select Plan</Link>
                </div>
            </div>
        </>
    )
}

export default LeaderboardPage;