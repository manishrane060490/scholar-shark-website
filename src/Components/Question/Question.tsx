import React, { useState } from 'react'

export default function Question({question, onAnswerClick, onAnswerCheck, explanation, nextDisabled} : any) {
    let answer; 
    console.log(question);
    

  return (
    <div className='question'>
        <h2>{question.question}</h2>
        <ul className='options' id='options' data-correct={answer}>
            {question.answerOptions.map((option: { text: string; isCorrect: boolean }) => {
                return (
                    <li key={option.text}>
                        <button className='answers' data-answer={question.rightAnswer} onClick={(e) => onAnswerCheck(e, question, option.text)}>{option.text}</button>
                    </li>
                )
            })}
        </ul>
        <button disabled={nextDisabled} onClick={() => onAnswerClick()}>Next</button>
        {
            explanation && 
            <p>{question.explanation}</p>
        }
    </div>
      
  )
}
