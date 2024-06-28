import { useState, useLayoutEffect, useContext } from 'react';
import './index.css';
import questions from '../../assets/questions.json';
import Question from '../Question/Question';
import Result from '../Result/Result';
import Lighthouse from '../Lighthouse/Lighthouse';
import { useNavigate } from 'react-router-dom';
import { PlansContext } from '../../Context';
import sharkVideo from '../../assets/IdleAlphaWEBM.webm';
import sharkThumpsUpVideo from '../../assets/ThumbsUpAlphaWEBM.webm';
import sharkThumpsDownVideo from '../../assets/ThumbsDownAlphaWEBM.webm';

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
    const { setAnsCount, setAnswer } = useContext(PlansContext);
    const [width, height] = useWindowSize();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState<any>([]);
    const [explanation, setExplanation] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(true);
    const [showShark, setShowShark] = useState('static');

    const navigate = useNavigate();

    const onAnswerCheck = (e: any,question: any, text : any) => {
        // console.log(question.rightAnswer);
        if(text === question.rightAnswer) {
            e.target.classList.add('correct');
            // const newAnswer = { isCorrect: true };
            setUserAnswers([...userAnswers, true]);
            setShowShark('thumpsup');
        } else if (text !== question.rightAnswer) {
            e.target.classList.add('wrong');
            setShowShark('thumpsdown');
            setUserAnswers([...userAnswers, false]);
            var elements = document.getElementsByClassName('answers');

            for (var i = 0; i < elements.length; i++) {
                if(elements[i].innerHTML === question.rightAnswer) {
                    elements[i].classList.add('correct')
                }
            }
        }

        setExplanation(true);
        setNextDisabled(false);
        
    }


    // Keep all of the logic in App.tsx 

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        
        setExplanation(false);
        setNextDisabled(true);
        setShowShark('static');


        
        if((questions.length - 1) === currentQuestion) {
            navigate('/leaderboard');
            
            const count = userAnswers.reduce((count: number, currentValue: boolean) => {
                return currentValue === true ? count + 1 : count;
              }, 0);

              setAnswer(userAnswers);
              setAnsCount(count);
        }
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
                    
                        {/* <source src={sharkVideo} type="video/mp4" /> */}
                        {/* <source src="/video/video.ogv" type="video/ogg" /> */}
                        { showShark === 'static' &&
                            <video className='video' width="100%" height="100%" loop autoPlay muted>
                                <source src={sharkVideo} type="video/webm" />
                            </video>
                        }
                        { showShark === 'thumpsup' &&
                            <video className='video' width="100%" height="100%" loop autoPlay muted>
                                <source src={sharkThumpsUpVideo} type="video/webm" />
                            </video>
                        }
                        { showShark === 'thumpsdown' &&
                            <video className='video' width="100%" height="100%" loop autoPlay muted>
                                <source src={sharkThumpsDownVideo} type="video/webm" />
                            </video>
                        }
                </div>
                <div className='quizPanel-right'>
                  
                    
                    {
                        currentQuestion < questions.length &&
                        <Question number={currentQuestion} nextDisabled={nextDisabled} question={questions[currentQuestion]} explanation={explanation} onAnswerCheck={onAnswerCheck} onAnswerClick={handleNextQuestion} />
                    }
                    {
                        currentQuestion === questions.length &&  <h1>Welcome</h1>
                    }

                    {/* {Result component} */}
                    {/* {
                        currentQuestion === questions.length &&
                        <Result
                            userAnswers={userAnswers}
                            questions={questions}
                            resetQuiz={resetQuiz}
                        />
                    } */}

                    {/* <button onClick={() => navigate('/plans')}>Manish</button> */}
                </div>
            </div>
        </>
    )
}

export default Quizpage
