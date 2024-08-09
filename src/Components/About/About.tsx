import React, {useRef, useEffect} from 'react';
import sharkImg from '../../assets/IdleAlphaGIF.gif';
import { motion, useAnimation, useInView } from 'framer-motion';
import './index.css';


export default function About() {
    const ref= useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls =useAnimation();

    useEffect(() => {
        console.log(isInView);
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    return (
        <div className='about' style={{
            display: 'flex', justifyContent: "center", alignItems: "center"
        }} ref={ref}>
            <motion.div className='about-left' variants={{
                        hidden: { opacity: 0, x: "-100%" },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial={{opacity: 0, x: "-100%"}}
                    animate={mainControls}
                    transition={{
                        duration: 1,
                        delay: 0.5
                    }}
                    exit="hidden">
                <img
                    src={sharkImg}
                    alt="shark"
                    style={{width: "100%"}}
                />
            </motion.div>
            <motion.div className='about-right' variants={{
                        hidden: { opacity: 0, x: "100%" },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial={{opacity: 0, x: "100%"}}
                    animate={mainControls}
                    transition={{
                        duration: 1,
                        delay: 0.5
                    }}
                    exit="hidden">
                <h1>Who are we?</h1>
                <p>
                We are a Edutainment Platform i.e. we are mix of Entertainment and Education... 
                <br/>Formerly known as LearnEng, we have a legacy of  making a significant impact in the field of financial literacy.
                Our journey continues to evolve and diversify in different fields like cricket, mythology, history, travel, food etc. 
                <br/><br/><b style={{fontSize: '20px'}}>We are Sharks... ScholarSharks!!!</b>
                <br/>
                <br/>
                Come with us. Exhibit and Flaunt your knowledge in front of your peers. 
                Compete with the best and win exciting prizes every week.

                </p>
            </motion.div>
        </div>
    )
}
