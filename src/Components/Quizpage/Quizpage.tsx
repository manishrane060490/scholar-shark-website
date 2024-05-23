import { useState, useLayoutEffect } from 'react';
import './index.css';
import quizImg from './quizleft.svg';
import questions from '../../assets/questions.json';
import Question from '../Question/Question';
import Result from '../Result/Result';

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
            <div className="scene">
                <div className="background">
                    <div className="stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </div>
                    <div className="moon"></div>
                    <div className="mountains">
                        <div className="mountain"></div>
                        <div className="mountain"></div>
                        <div className="mountain"></div>
                        <div className="mountain"></div>
                    </div>
                    <div className="sea">
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="waves">
                            <div className="boat">
                                <div className="base"></div>
                                <div className="sail"></div>
                                <div className="sail"></div>
                                <div className="sail"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lighthouse-group">
                    <div className="land"></div>
                    <div className="lighthouse-holder">
                        <div className="shadow"></div>
                        <div className="lighthouse"></div>
                        <div className="top"></div>
                        <div className="windows">
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                        </div>
                        <div className="door">
                            <div className="stairs"></div>
                        </div>
                        <div className="top">
                            <div className="light-container">
                                <div className="light"></div>
                            </div>
                            <div className="rail"></div>
                            <div className="middle"></div>
                            <div className="roof">
                                <div className="roof-light"></div>
                            </div>
                            <div className="glow"></div>
                        </div>
                    </div>
                </div>
            </div>
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
