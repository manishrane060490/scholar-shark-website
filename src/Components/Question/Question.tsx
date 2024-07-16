import React, { useState } from 'react'

export default function Question({disabled, number, question, onAnswerClick, onAnswerCheck, explanation, nextDisabled} : any) {
    let answer; 

  return (
    <div className='question'>
        <p className='question-num'>Question {number + 1}</p>
        <h2>{question.question}</h2>
        <ul className='options' id='options'>
            {question.answerOptions.map((option: { text: string; isCorrect: boolean }) => {
                return (
                    <li key={option.text}>
                        <button disabled={disabled} className='answers glow-on-hover' onClick={(e) => onAnswerCheck(e, question, option.text)}>{option.text}</button>
                    </li>
                )
            })}
        </ul>
        <button className='button full-width' disabled={nextDisabled} onClick={() => onAnswerClick()}>Submit</button>
        {
            explanation && 
            <p>{question.explanation}</p>
        }
    </div>
      
  )
}
