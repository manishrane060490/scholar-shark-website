import React from 'react'

export default function Question({question, onAnswerClick} : any) {
    let answer; 
    console.log(question)
    // const onCheckAnswer = (ans: string) => {
    //     console.log(question.answer === ans)
    // }

  return (
    <div className='question'>
        <h2>{question.question}</h2>
        <ul className='options' data-correct={answer}>
            {question.answerOptions.map((option: { text: string; isCorrect: boolean }) => {
                return (
                    <li key={option.text}>
                        <button onClick={() => onAnswerClick(option.text)}>{option.text}</button>
                    </li>
                )
            })}
        </ul>
        <button onClick={() => onAnswerClick()}>Next</button>
    </div>
      
  )
}
