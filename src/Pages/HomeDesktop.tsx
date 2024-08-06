import React, {useEffect, useRef} from 'react';
import AccordionCarousel from '../Components/AccordionCarousel/AccordionCarousel';
import ThreeDCarousel from '../Components/ThreeDCarousel/ThreeDCarousel';
import InfiniteCarousal from '../Components/InfiniteCarousal/InfiniteCarousal';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import Rules from '../Components/Rules/Rules';

export default function HomeDesktop() {
    

    return (
        <div className="deskHome">
            <div className="section" style={{ overflowX: 'hidden' }}>
                <AccordionCarousel />
            </div>
            <div className="section">
                <About />
            </div>
            <div className="section">
                <ThreeDCarousel />
            </div>
            <div className="section">
                <Rules />
            </div>
            <div className="section">
                <InfiniteCarousal />
                <Footer />
            </div>
        </div>
    )
}
