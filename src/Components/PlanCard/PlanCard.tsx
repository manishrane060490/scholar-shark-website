import './index.css';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.jpg';
import { useNavigate } from 'react-router-dom';

function Plancard({ title, count, type, disabled }: any) {
  const navigate = useNavigate();

  return (
    <div className={`plancard ${disabled ? 'disabled' : ''}`}>
      <div className='plancard-body'>
        <div className='plancard-left'>
          <div className='plancard-info'>
            <div className='plancard-text'>
              <div>
                <h3>{title} Tier</h3>
                <span>3 Quizes</span>
              </div>
              {/* <div>
                <h4>40%</h4>
                <span>Completed</span>
              </div> */}
            </div>
            {/* <div className='progress'>
              <span className='progress-line'></span>
              <span className='progress-main'></span>
            </div> */}
            <button className='button full-width' onClick={() => navigate('/silverQuiz')}>{disabled ? 'Challenge' : 'Selected'}</button>
          </div>

        </div>
        <div className='plancard-right'>
          <div className={`plancard-bg ${type}`}></div>
          {disabled && 
            <>
            { 
              type === 'gold' && 
              <div className='subDiv'>
                <h5>BE BETTER. </h5>
                <h5>Challenge this tier to unlock the prizes</h5>
              </div>

            }
            {
              type === 'diamond' && 
              <div className='subDiv'>
                <h5>You are a diamond in rough.</h5>
                <h5>Challenge this tier to win prizes upto 15 cr. *</h5>
                
              </div>
            }
              
            </>
          }
        </div>
      </div>
      <div>
        <div className='person-grp'>
          <img src={person1} alt='persons' className='person' />
          <img src={person2} alt='persons' className='person' />
          <img src={person3} alt='persons' className='person' />
        </div>
        <h3 className='count-text'>Over {count}+ People are taking quiz right now</h3>
      </div>
    </div>
  )
}

export default Plancard
