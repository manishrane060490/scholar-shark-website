import './index.css';
import cricket from '../../assets/cricket.jpg';
import { url } from 'inspector';

function Card({title, count}: any) {

  return (
    <div>
      <div className='card'>
          <div className={`card-bg ${title}`}></div>
          <h3>{title}</h3>
          <p>Questions: 10</p>
          <button disabled={true} className='full-width button disabled'>Take Quiz</button>
      </div>
      <div className='card-count'>
          <span className='right'></span>
          <h4>{count} People Quizing</h4>
      </div>
    </div>
  )
}

export default Card
