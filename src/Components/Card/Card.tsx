import './index.css';
import cricket from '../../assets/cricket.jpg';
import { url } from 'inspector';
import {Link} from 'react-router-dom';

function Card({title, count, disabled}: any) {

  return (
    <div>
        <div>
            <div className={`card ${disabled ? 'disabled' : ''}`}>
                <div className={`card-bg ${title}`}></div>
                <h3>{title}</h3>
                <p>Questions: 10</p>
                <Link to='/silverQuiz' className="full-width button disabled">
                    Take Quiz
                </Link>
                {/* <button disabled={true} className='full-width button disabled'>Take Quiz</button> */}
            </div>
            <div className='card-count'>
                <span className='right'></span>
                <h4>{count} People Quizing</h4>
            </div>
        </div>
        {disabled && 
            <div className='subDiv'>
              <h5>Please buy this plan to unlock the prizes </h5>
            </div>
          }
    </div>
  )
}

export default Card
