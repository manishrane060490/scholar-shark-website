import React, { useEffect, useState } from 'react';
import AccordionCarousel from '../Components/AccordionCarousel/AccordionCarousel';
import ThreeDCarousel from '../Components/ThreeDCarousel/ThreeDCarousel';
import InfiniteCarousal from '../Components/InfiniteCarousal/InfiniteCarousal';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import Rules from '../Components/Rules/Rules';
import FAQ from '../Components/Faq/Faq';


export default function HomeDesktop() {
    const [faqs, setFaqs] = useState([
        {
          question: "How many programmers does it take to screw a lightbulb?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
          open: true
        },
        {
          question: "Who is the most awesome person?",
          answer: "You! The viewer!",
          open: false
        },
        {
          question:
            "How many questions does it take to makes a succesful FAQ Page?",
          answer: "This many!",
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
                <AccordionCarousel />
            </div>
            <div className="section">
                <About />
            </div>
            <div className="section">
                <ThreeDCarousel />
            </div>
            <div className="section">
                <Rules />
            </div>
            <div className='section'>
                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </div>
            <div className="section">
                <InfiniteCarousal />
                <Footer />
            </div>
        </div>
    )
}
