import { useState, useLayoutEffect } from 'react';
import './index.css';
import questions from '../../assets/questions.json';
import Question from '../Question/Question';
import Result from '../Result/Result';
import Lighthouse from '../Lighthouse/Lighthouse';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}


function Quizpage() {
    const [width, height] = useWindowSize();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState<any>([]);


    // Keep all of the logic in App.tsx 

    const handleNextQuestion = (isCorrect: boolean) => {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswers([...userAnswers, isCorrect])
    }

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setUserAnswers([]);
    }

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = height * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    let vhWidth = width * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vhwidth', `${vhWidth}px`);

    console.log(questions)

    return (
        <>
            <Lighthouse light/>
            <div className='quizPanel'>
                <div className='quizPanel-left'>
                    {/* <img src={quizImg} alt='quizImg' /> */}
                </div>
                <div className='quizPanel-right'>
                  
                    
                    {
                        currentQuestion < questions.length &&
                        <Question question={questions[currentQuestion]} onAnswerClick={handleNextQuestion} />
                    }

                    {/* {Result component} */}
                    {
                        currentQuestion === questions.length &&
                        <Result
                            userAnswers={userAnswers}
                            questions={questions}
                            resetQuiz={resetQuiz}
                        />
                    }
                </div>
            </div>
        </>
    )
}

export default Quizpage
