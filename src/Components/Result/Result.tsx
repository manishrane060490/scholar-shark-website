import React from 'react'
import { Link } from 'react-router-dom'

export default function Result({ userAnswers, questions, resetQuiz }: any) {
    const correctAnswers = userAnswers.filter((ans: any) => ans).length
    console.log(userAnswers, questions)
    return (
        <div className='results'>
            <h2>Result</h2>
            <Link to='/plans' className="button">View Plans</Link>
            <p>
                You answered {correctAnswers} out of {questions.length} questions
                {/* <span onClick={resetQuiz}>Click here to Retry</span> */}
            </p>
            <ul>
                {questions.map((question: any, index: number) => {
                    return <li key={index} data-correct={userAnswers[index]}>
                        <p>Q{index + 1}. {question.question}</p>
                        <p>{question.explanation}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}
