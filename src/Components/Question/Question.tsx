import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Question({ disabled, number, question, onAnswerClick, onAnswerCheck, explanation, nextDisabled }: any) {
    let answer;

    console.log(question)

    return (
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0' }}
            exit={{ x: '-100%' }}
            transition={{
                duration: 2,
                ease: [0.2, 1, 0.2, 1],
                delay: 1
            }}
            className='question'
        >
            <p className='question-num'>Question {number + 1}</p>
            <h2>{question.question}</h2>
            <ul className='options' id='options'>
                {question.answers.map((option: { answertext: string; isCorrect: boolean }) => {
                    return (
                        <li key={option.answertext}>
                            <button disabled={disabled} className='answers glow-on-hover' onClick={(e) => onAnswerCheck(e, question, option.answertext)}>{option.answertext}</button>
                        </li>
                    )
                })}
            </ul>
            {
                !nextDisabled &&
                <button className='button full-width' onClick={() => onAnswerClick()}>Next</button>
            }
            {
                explanation &&
                <p>{question.explanation}</p>
            }
        </motion.div>

    )
}
