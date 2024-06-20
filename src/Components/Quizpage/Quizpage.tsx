import { useState, useLayoutEffect } from 'react';
import './index.css';
import questions from '../../assets/questions.json';
import Question from '../Question/Question';
import Result from '../Result/Result';
import Lighthouse from '../Lighthouse/Lighthouse';
import { useNavigate } from 'react-router-dom';

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
    const [explanation, setExplanation] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(true);

    const navigate = useNavigate();

    const onAnswerCheck = (e: any,question: any, text : any) => {
        // document.getElementById('options')?.classList.add('true')
        console.log(question.rightAnswer);
        if(text === question.rightAnswer) {
            e.target.classList.add('correct')
        } else if (text !== question.rightAnswer) {
            e.target.classList.add('wrong');
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

    const handleNextQuestion = (isCorrect: boolean) => {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswers([...userAnswers, isCorrect]);
        setExplanation(false);
        setNextDisabled(true);



        if((questions.length - 1) === currentQuestion) {
            navigate('/leaderboard');
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
                </div>
                <div className='quizPanel-right'>
                  
                    
                    {
                        currentQuestion < questions.length &&
                        <Question nextDisabled={nextDisabled} question={questions[currentQuestion]} explanation={explanation} onAnswerCheck={onAnswerCheck} onAnswerClick={handleNextQuestion} />
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
