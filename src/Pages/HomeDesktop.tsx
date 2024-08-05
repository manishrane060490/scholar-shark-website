import React from 'react';
import Carousal from '../Components/Carousal/Carousal';
import AccordionCarousel from '../Components/AccordionCarousel/AccordionCarousel';

export default function HomeDesktop() {
    return (
        <div className="deskHome">
            <div className="section" style={{overflowX: 'hidden'}}>
                <AccordionCarousel />
            </div>
            <div className="section">
                <div className='about' style={{padding: '100px 40px', color: '#000'}}>
                    <h1>What is Scholar Sharks ?</h1>
                    <p>
                    Scholar Sharks is not just an educational platform; it's an ocean of knowledge and a hub for engaging and insightful learning experiences. Formerly known as LearnEng, we have a legacy of making a significant impact in the field of financial literacy, and our journey continues to evolve.
                    </p>
                </div>
            </div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
        </div>
    )
}
