import React, { useEffect } from 'react';
import './index.css';
import sharkPng from '../../assets/shark.png';
import { motion } from 'framer-motion';

export default function AccordionCarousel() {

    function carousel() {

        const slider = document.querySelector('.slider') as HTMLElement;

        function activate(e: any) {
            const items = document.querySelectorAll('.item');
            console.log(items);
            e.target.matches('.next') && slider.append(items[0])
            e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
        }

        document.addEventListener('click', activate);

    }

    // useEffect({
    useEffect(() => {
        carousel();
    })
    // carousel();

    return (

        <>
            <main>
                <ul className='slider'>
                    <li className='item' style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')" }}>
                        <div className='content'>
                            <h2 className='title'>"Lossless Youths"</h2>
                            <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                praesentium nisi. Id laboriosam ipsam enim.  </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='item' style={{ backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')" }}>
                        <div className='content'>
                            <h2 className='title'>"Estrange Bond"</h2>
                            <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                praesentium nisi. Id laboriosam ipsam enim.  </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='item' style={{ backgroundImage: "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')" }}>
                        <div className='content'>
                            <h2 className='title'>"The Gate Keeper"</h2>
                            <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                praesentium nisi. Id laboriosam ipsam enim.  </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='item' style={{ backgroundImage: "url('https://images7.alphacoders.com/878/878663.jpg')" }}>
                        <div className='content'>
                            <h2 className='title'>"Last Trace Of Us"</h2>
                            <p className='description'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
                            </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    {/* <li className='item' style={{ backgroundImage: "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')" }}>
                        <div className='content'>
                            <h2 className='title'>"Urban Decay"</h2>
                            <p className='description'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
                            </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='item' style={{ backgroundImage: "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')" }}>
                        <div className='content'>
                            <h2 className='title'>"The Migration"</h2>
                            <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                praesentium nisi. Id laboriosam ipsam enim.  </p>
                            <button>Read More</button>
                        </div>
                    </li> */}
                </ul>
                <nav className='nav'>
                    <div className='btn prev md hydrated' role="img">
                        <div className="icon-inner">
                            &#60;
                        </div>
                    </div>
                    <div className='btn next md hydrated' role="img">
                        <div className="icon-inner">
                            &#62;
                        </div>
                    </div>
                    {/* <ion-icon className='btn prev' name="arrow-back-outline"></ion-icon>
                        <ion-icon className='btn next' name="arrow-forward-outline"></ion-icon> */}
                </nav>
            </main>



        </>
    )
}
