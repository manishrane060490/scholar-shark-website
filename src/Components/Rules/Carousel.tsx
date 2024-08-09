import { Button } from '@mui/material';
import React, {useState} from 'react';
import './index.css';
import next from '../../assets/next.svg';
import prev from '../../assets/prev.svg';

const cardInfo =  [
        {
                "title": "TIME FOR EACH QUIZ",
                "content": "Every quiz has a set amount of time under which the quiz needs to be finished. No extensions no matter what extenunating circumstance the user may face"
        },
  {             
          "title": "ATTEMPTS",
          "content": "A single quiz can be attempted as many times as user wants but a single ticket gets only one chance to attempt the quiz."
  },
  {
          "title": "POINTS SYSTEM",
          "content": "If you get a Diamond tier ticket then you are automatically allowed to challenge a single silver tier quiz as well as single gold tier quiz within the current quarter."
  },
  {
          "title": "POINTS SYSTEM",
          "content": "Attempting a Gold tier ticket twice within one quarter will get you automatically a Diamond tier ticket which can be attempted within the current quarter."
  },
  {
          "title": "POINTS SYSTEM",
          "content": "Attempting a Silver tier ticket thrice within one quarter will get you automatically a Diamond tier ticket which can be attempted within the current quarter."
  }
  
]


export default function Carousel({children}: any) {
  const MAX_VISIBILITY = 3;
  const CARDS = 5;
  const [active, setActive] = useState(0);
  const count = 5;

  return (
    <div className='threeDCarousel'>
    <div className='carousel'>
      {active > 0 && <button className='carNav left' onClick={() => setActive(i => i - 1)}><img src={prev} alt="prev"/></button>}
      {cardInfo.map((card, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          } as React.CSSProperties}>
          <div className='card'>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
      {active < count - 1 && <button className='carNav right' onClick={() => setActive(i => i + 1)}><img src={next} alt="next"/></button>}
    </div>
    </div>
  );
}

// const Carousel = ({children}) => {
//     const [active, setActive] = useState(2);
//     const count = React.Children.count(children);
    
//     return (
//       <div className='carousel'>
//         {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
//         {React.Children.map(children, (child, i) => (
//           <div className='card-container' style={{
//               '--active': i === active ? 1 : 0,
//               '--offset': (active - i) / 3,
//               '--direction': Math.sign(active - i),
//               '--abs-offset': Math.abs(active - i) / 3,
//               'pointer-events': active === i ? 'auto' : 'none',
//               'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
//               'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
//             }}>
//             {child}
//           </div>
//         ))}
//         {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
//       </div>
//     );
//   };
  
//   const App = () => (
//     <div className='app'>
//       <Carousel>
//         {[...new Array(CARDS)].map((_, i) => (
//           <Card title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
//         ))}
//       </Carousel>
//     </div>
//   );