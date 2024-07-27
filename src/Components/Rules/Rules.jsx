import React from 'react';
import HTMLFlipBook from "react-pageflip";
import './index.css';

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });
  
  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          {/* <h2 className="page-header">Page header - {props.number}</h2>
          <div className="page-image"></div> */}
          <div className="page-text">{props.children}</div>
          {/* <div className="page-footer">{props.number + 1}</div> */}
        </div>
      </div>
    );
  });

function Rules(){
    return (
        <div className='container' style={{paddingTop: '100px'}}>
            {/* <h3 className="s-sub-title">Rules for Scholar Sharks Quiz</h3> */}
        <HTMLFlipBook 
        width={200}
        height={150}
        size="stretch"
        minWidth={200}
        maxWidth={500}
        minHeight={150}
        maxHeight={300}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        // onFlip={this.onPage}
        // onChangeOrientation={this.onChangeOrientation}
        // onChangeState={this.onChangeState}
        className="flip-book"
        // ref={(el) => (this.flipBook = el)}
        >
          <PageCover>National Finance Quiz rule book</PageCover>
            <Page number={2}>Only 3,00,000 participants </Page>
            <Page number={3}>
                <p>Registration cost 100 INR.</p>
                <p>2nd quiz is free for early bird registrations.</p>
            </Page>
            <Page number={4}>
                <p>Prizes worth 1,00,00,000 INR.</p>
                <p>Prizes are dynamic. I.e. based on total number of participants </p>
            </Page>
            <Page number={5}>
                <p>1st prize car upto 10,00,000. </p>
                <p>2nd to 22nd prize smartphone upto 50,000 INR per participant. </p>
                <p>Next 3000 participants receive 1000 INR as cash prize for the upcoming finance quiz</p>
            </Page>
            <Page number={6}>
                <p>All participants receive certificates </p>
                <p>Exciting discounts to further quizzes and English enhancement course</p>
            </Page>
            <Page number={7}>
                <p>4 quizzes each year. </p>
                <p>1 quiz every 3 months</p>
            </Page>
            <Page number={8}>
                <p>Quiz available in English/hindi</p>
            </Page>
            <Page number={9}>
                <p>Prizes for each quiz shall be announced on the day of quiz launch.</p>
            </Page>
            <Page number={10}>
                <p>Total questions- 30 questions  </p>
                <p>Total duration- 10 minutes </p>
                <p>Time provided for each answer 15 seconds for level 1 & level 2 and 30 seconds for level 3</p>
            </Page>
            <PageCover>National Finance Quiz rule book</PageCover>
        </HTMLFlipBook>
        </div>
      );
} 

export default Rules;