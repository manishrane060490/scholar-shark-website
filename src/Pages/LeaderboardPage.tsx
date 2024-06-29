import React, { useContext, useEffect } from "react";
import Lighthouse from "../Components/Lighthouse/Lighthouse";
import shark from '../assets/shark.png';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { PlansContext } from "../Context";
import leaders from '../assets/leader.json';

function LeaderboardPage() {
    const { answer, ansCount } = useContext(PlansContext);

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
                        <p>You answered {ansCount} out of 10 question. now select a Plan</p>
                        
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

                    <div className="mobile-view">
                        <div className="row">
                            <div>
                                <div className="rank">#</div>
                                <div className="name">Shark (You)</div>
                                <div className="result">{ansCount * 10}%</div>
                            </div>
                            <div className="score">
                                <h4>Score</h4>
                                <div>
                                    {
                                        answer.map((ans:boolean) => <span className={ans ? 'right' : 'wrong'}></span>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="row desktop-view">
                        <div className="rank">#</div>
                        <div className="name">Shark (You)</div>
                        <div className="score">
                            {
                                answer.map((ans:boolean) => <span className={ans ? 'right' : 'wrong'}></span>)
                            }
                        </div>
                        <div className="result">{ansCount * 10}%</div>
                    </div>

                        
                        <div className="leader-result mobile-view">
                        {
                            leaders.map((lead):any => (
                                <div className="row">
                                    <div>
                                        <div className="rank">{lead.rank}</div>
                                        <div className="name">{lead.name}</div>
                                        <div className="result">{lead.result}%</div>
                                    </div>
                                    <div className="score">
                                        <h4>Score</h4>
                                        <div>
                                            {
                                                lead.score.map(s => (
                                                    <span className={`${s ? 'right' : 'wrong'}`}></span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    
                                </div>
                            ))
                        }
                        
                        
                    </div>

                    <div className="leader-result desktop-view">
                        {
                            leaders.map((lead):any => (
                                <div className="row">
                                    <div className="rank">{lead.rank}</div>
                                    <div className="name">{lead.name}</div>
                                    
                                    <div className="score">
                                        {
                                            lead.score.map(s => (
                                                <span className={`${s ? 'right' : 'wrong'}`}></span>
                                            ))
                                        }
                                    </div>
                                    <div className="result">{lead.result}%</div>
                                </div>
                            ))
                        }
                        
                        
                    </div>

                    <div className="leader-result mobile-view">
                        {
                            leaders.map((lead):any => (
                                <div className="row">
                                    <div>
                                        <div className="rank">{lead.rank}</div>
                                        <div className="name">{lead.name}</div>
                                        <div className="result">{lead.result}%</div>
                                    </div>
                                    <div className="score">
                                        <h4>Score</h4>
                                        <div>
                                            {
                                                lead.score.map(s => (
                                                    <span className={`${s ? 'right' : 'wrong'}`}></span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    
                                </div>
                            ))
                        }
                        
                        
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