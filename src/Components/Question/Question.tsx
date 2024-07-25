import React, { useState } from 'react'

export default function Question({disabled, number, question, onAnswerClick, onAnswerCheck, explanation, nextDisabled} : any) {
    let answer; 

  return (
    <div className='question'>
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
    </div>
      
  )
}
