import React, {useRef, useEffect} from 'react';
import sharkImg from '../../assets/IdleAlphaGIF.gif';
import { motion, useAnimation, useInView } from 'framer-motion';


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
            <motion.div className='section-left' variants={{
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
            <motion.div className='about' style={{ padding: '100px 40px', color: '#fff' }} variants={{
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
                We are a Edutainment Platform i.e. we are not just an educational platform, we want people to be rewarded for their knowledge of exciting
                and facinating things. Formerly known as LearnEng, we have a legacy of  making a significant impact in the field of financial literacy.
                Our journey continues to evolve and diversify in different fields like cricket, mythology, history, travel, food etc. We are Sharks... ScholarSharks

                Come with us. Exhibit and Flaunt your knowledge in front of your peers. 
                Compete with the best and win exciting prizes every week.

                </p>
            </motion.div>
        </div>
    )
}
