import React from 'react';
import './index.css';
import lighthouse from '../../assets/images/Lighthouse.svg'

function Lighthouse() {
  return (
    <div className='lighthouse'>
        <div className='sky'>
        
        </div>
        <div className='water'></div>
        <div className='stones'>
            <div>
            <img src={lighthouse} className='light-img'/>
            <div className="light-container">
            <div className="light"></div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Lighthouse
