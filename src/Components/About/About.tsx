import React, {useRef, useEffect} from 'react';
import sharkImg from '../../assets/shark-bg-trans.png';
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
                />
            </motion.div>
            <motion.div className='about' style={{ padding: '100px 40px', color: '#000' }} variants={{
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
                <h1>What is Scholar Sharks ?</h1>
                <p>
                    Scholar Sharks is not just an educational platform; it's an ocean of knowledge and a hub for engaging and insightful learning experiences. Formerly known as LearnEng, we have a legacy of making a significant impact in the field of financial literacy, and our journey continues to evolve.
                </p>
            </motion.div>
        </div>
    )
}
