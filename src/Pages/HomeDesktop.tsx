import React, { useEffect, useState } from 'react';
import AccordionCarousel from '../Components/AccordionCarousel/AccordionCarousel';
import ThreeDCarousel from '../Components/ThreeDCarousel/ThreeDCarousel';
import InfiniteCarousal from '../Components/InfiniteCarousal/InfiniteCarousal';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import Rules from '../Components/Rules/Rules';
import FAQ from '../Components/Faq/Faq';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


export default function HomeDesktop() {
  const [faqs, setFaqs] = useState([
    {
      question: "How is a winner determined?",
      answer:
        "Its based on percentile system. The one who has answered the most amnount of questions in the least amount of time gets to be the winner. ",
      open: true
    },
    {
      question: "What if two people answer the same amount of questions in the same time?",
      answer: "We rack upto microseconds of the answer submission. The one with the least amount of time with the same score will win the prize. If even the micro seconds are the same then both of them are eleigible for the prize.",
      open: false
    },
    {
      question:
        "When do the prizes get announced?",
      answer: "Once the Quiz is conducted the results are tallied and announced in 24 hours.",
      open: false
    },
    {
      question:
        "How often are the quizzes conducted?",
      answer: "Silver tier quizzes are conducted every weeek, while the gold tier quizzes are conducted once every two weeks. The diamond tier quizzes are conducted every three months.",
      open: false
    },
    {
      question:
        "When can i attempt the quiz?",
      answer: "The date will be provided for every quiz. You will have a window of 24 hours.",
      open: false
    },
    {
      question:
        "How can i claim the prizes?",
      answer: "We will contact you with the number and mail id thats been used for registration and the prizes will be delivered to you in 7 working days.",
      open: false
    }
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };


  return (
    <div className="deskHome">
      <div className="section" style={{ overflowX: 'hidden' }}>
        <div className="header">
          <div className="left-side">
            <img src={logo} className="home-logo" alt="Scholar Shark" />
          </div>
          <div className='right-side'>
            <div className='right-side-item'>
              <Link to="/login">Login</Link>
              <Link to="/dashboard">Dashboard</Link>
              {/* <img src={person1} alt='person' className='dropdown-img' /> */}
            </div>
          </div>
        </div>
        <AccordionCarousel />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <ThreeDCarousel />
      </div>
      <div className="section">
        <h1 className='section-title'>Rules</h1>
        <Rules />
      </div>
      <div className='section'>
        <h1 className='section-title'>FAQ's</h1>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      <div className='section desktop-only'>
        <h1 className='section-title'>Partner's</h1>
        <InfiniteCarousal />
        <br />
        <br />
        <Footer />
      </div>
      <div className='section mobile-only'>
        <h1 className='section-title'>Partner's</h1>
        <InfiniteCarousal />
      </div>
      <div className='section mobile-only'>
        <Footer />
      </div>
    </div>
  )
}
