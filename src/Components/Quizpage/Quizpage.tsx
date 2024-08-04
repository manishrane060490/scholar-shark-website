import { useState, useLayoutEffect, useContext,useEffect } from 'react';
import './index.css';
// import questions from '../../assets/questions.json';
import Question from '../Question/Question';
import Result from '../Result/Result';
import Lighthouse from '../Lighthouse/Lighthouse';
import { useNavigate } from 'react-router-dom';
import { PlansContext } from '../../Context';
import sharkVideo from '../../assets/IdleAlphaWEBM.webm';
import sharkThumpsUpVideo from '../../assets/ThumbsUpAlphaWEBM.webm';
import sharkThumpsDownVideo from '../../assets/ThumbsDownAlphaWEBM.webm';
import staticshark from '../../assets/IdleAlphaGIF.gif';
import thumpsup from '../../assets/ThumbsUpAlphaGIF.gif';
import thumpsdown from '../../assets/ThumbsDownAlphaGIF.gif';
import logo from '../../assets/logo.png';
import axios from 'axios';
import Layout from '../../Pages/Layout';
import { AnimatePresence } from 'framer-motion';

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
    const [showShark, setShowShark] = useState('staticshark');
    const [disabled, setDisabled] = useState(false);
    const [randomObject, setRandomObject] = useState(null);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // windowHeight = document.getElementsByTagName('body')[0].clientWidth;
        setWindowWidth(window.innerWidth);
        fetchQuiz();
    }, []);

    

    const fetchQuiz = async () => {
        await axios.get('https://zwhxhdbmy25zqawk7h4wohtbda0vwaoy.lambda-url.ap-south-1.on.aws/prequiz/eng/10/cat')
            .then((res: any) => {
                setQuestions(res.data.questions);
                // handleRazorpayScreen(response.data.amount)
                
            })
            .catch((error: any) => {
                console.log("error at", error)
            })
    }

    const navigate = useNavigate();

    const onAnswerCheck = (e: any, question: any, text: any) => {
        console.log(text);
        if (text === question.rightAnswer) {
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
                if (elements[i].innerHTML === question.rightAnswer) {
                    elements[i].classList.add('correct')
                }
            }
        }

        setExplanation(true);
        setNextDisabled(false);
        setDisabled(true);
    }


    // Keep all of the logic in App.tsx 

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);

        setExplanation(false);
        setNextDisabled(true);
        setShowShark('staticshark');
        setDisabled(false);

        // if((questions.length - 2) === currentQuestion) {
        //     alert('demo'); 
        // }

        if ((questions.length - 1) === currentQuestion) {
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
    // console.log(windowHeight)
    // console.log(windowHeight < 768)

    document.onmousemove = e => {
        for(const card of document.getElementsByClassName('card-glow-border') as HTMLCollectionOf<HTMLElement>) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
          
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      }

      // @ts-ignore
      questions.map(ques => console.log(ques.explanation));

    console.log(questions);

    return (
        <Layout>
            
            <div className='quizPanel'>
                <div className='quizPanel-left'>
                    <div className='quizPanel-section'>
                        <div className='quizPanel-logo'>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className='quizPanel-text'>
                            <h1>Unlesh your knowledge</h1>
                            <h4>Where learning takes a dive</h4>
                        </div>
                        <div>
                        {showShark === 'staticshark' && windowWidth < 991 &&
                            <img src={staticshark} alt="shark" className='sharkGif'/>
                        }
                        {showShark === 'thumpsup' && windowWidth <  991 &&
                            <img src={thumpsup} alt="shark" className='sharkGif'/>
                        }
                        {showShark === 'thumpsdown' && windowWidth < 991 &&
                            <img src={thumpsdown} alt="shark" className='sharkGif'/>
                        }
                        </div>
                    </div>
                    
                    {/* <img src={quizImg} alt='quizImg' /> */}
                    {/* <img src={staticshark} alt="shark" className='sharkGifhidden'/>
                    <img src={staticshark} alt="shark" className='sharkGifhidden'/>
                    <img src={staticshark} alt="shark" className='sharkGifhidden'/> */}
                    {/* <source src={sharkVideo} type="video/mp4" /> */}
                    {/* <source src="/video/video.ogv" type="video/ogg" /> */}
                    {showShark === 'staticshark' && windowWidth > 990 &&
                        <img src={staticshark} alt="shark" className='sharkGif'/>
                    }
                    {showShark === 'thumpsup' && windowWidth > 990 &&
                        <img src={thumpsup} alt="shark" className='sharkGif'/>
                    }
                    {showShark === 'thumpsdown' && windowWidth > 990 &&
                        <img src={thumpsdown} alt="shark" className='sharkGif'/>
                    }
                    {/* {showShark === 'static' && windowWidth > 768 &&
                        <video className='video' width="100%" height="100%" loop autoPlay muted>
                            <source src={sharkVideo} type="video/webm" />
                        </video>
                    }
                    {showShark === 'thumpsup' && windowWidth > 768 &&
                        <video className='video' width="100%" height="100%" loop autoPlay muted>
                            <source src={sharkThumpsUpVideo} type="video/webm" />
                        </video>
                    }
                    {showShark === 'thumpsdown' && windowWidth > 768 &&
                        <video className='video' width="100%" height="100%" loop autoPlay muted>
                            <source src={sharkThumpsDownVideo} type="video/webm" />
                        </video>
                    } */}
                </div>
                <div className='quizPanel-right'>
                    <AnimatePresence>
                    {
                        questions && currentQuestion < questions.length &&
                        <Question disabled={disabled} number={currentQuestion} nextDisabled={nextDisabled} question={questions[currentQuestion]} explanation={explanation} onAnswerCheck={onAnswerCheck} onAnswerClick={handleNextQuestion} />
                       
                    }
                    {
                        currentQuestion === questions.length && <h1>Welcome</h1>
                    }
                    </AnimatePresence>

                    {/* <div className='mobile-display'>
                        {showShark === 'static' &&
                            <video className='video' width="100%" height="100%" loop autoPlay muted>
                                <source src={sharkVideo} type="video/webm" />
                            </video>
                        }
                        {showShark === 'thumpsup' &&
                            <video className='video' width="100%" height="100%" loop autoPlay muted>
                                <source src={sharkThumpsUpVideo} type="video/webm" />
                            </video>
                        }
                        {showShark === 'thumpsdown' &&
                            <video className='video' width="100%" height="100%" loop autoPlay muted>
                                <source src={sharkThumpsDownVideo} type="video/webm" />
                            </video>
                        }
                    </div> */}
                </div>
            </div>
        </Layout>
    )
}

export default Quizpage
