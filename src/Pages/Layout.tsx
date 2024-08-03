import React from 'react'
import Lighthouse from '../Components/Lighthouse/Lighthouse';
import { motion } from 'framer-motion';

export default function Layout({ lightBg, children }: any) {
    return (
        <div>
            <Lighthouse light={lightBg} />
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: '0' }}
                transition={{
                    duration: 2,
                    ease: [0.2,1,0.2,1],
                }}
                className='slide'
            >
                {children}
            </motion.div>
        </div>

    )
}
