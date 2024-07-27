import './index.css';
import cricket from '../../assets/cricket.jpg';
import { url } from 'inspector';
import {Link, useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';

function Card({title, count, disabled, showCount}: any) {
  const navigate = useNavigate();

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
            {
              showCount && 
              <div className='card-count'>
                <span className='right'></span>
                <h4>{count} People Quizing</h4>
              </div>
            }
            
        </div>
        {disabled && 
            <div className='subDiv'>
              <h5>Please buy this plan to unlock the prizes </h5>
              <Button type='submit' variant='contained' style={{marginTop: '20px'}} onClick={() =>  navigate('/plans')}>Plans</Button>
            </div>
          }
    </div>
  )
}

export default Card
