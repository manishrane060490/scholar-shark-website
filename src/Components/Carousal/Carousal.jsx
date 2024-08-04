import React, { useEffect } from 'react';
import './index.css';
import gsap from 'gsap';
import carone from '../../assets/carousel/1.jpeg';
import cartwo from '../../assets/carousel/2.jpg';
import carThree from '../../assets/carousel/3.jpg';



export default function Carousal() {

    function test() {
        const getListItems = document.querySelectorAll(".js-carousel-list-item");
        const getList = document.querySelector(".js-carousel-list");
        const getCarousel = document.querySelector('.js-carousel');
        const listHeight = document.querySelector(".js-carousel-list").clientHeight;
        const bgImgs = document.querySelectorAll(".js-carousel-bg-img");
        const listItems = getListItems.length - 1;
        const carouselHeight = document.querySelector('.js-carousel').clientHeight;


        console.log(bgImgs);

        initCursor(getCarousel, getList, carouselHeight, listHeight);
        initCarousel(bgImgs, getListItems)
        bgImgController(getListItems, listItems, bgImgs)



    }

    function initCarousel(bgImgs, getListItems, listItems) {
        gsap.set(bgImgs, {
            autoAlpha: 0,
            scale: 1.05
        });

        gsap.set(bgImgs[0], {
            autoAlpha: 1,
            scale: 1
        });

        listOpacityController(0, getListItems, listItems)
    }

    function initCursor(getCarousel, getList, carouselHeight, listHeight) {
        var posY = 0;

        getCarousel.addEventListener(
            "mousemove",
            event => {
                console.log('posY', event.pageY - getCarousel.offsetTop)
                posY = event.pageY - getCarousel.offsetTop;
                let offset = -posY / carouselHeight * listHeight;

                gsap.to(getList, 0.3, {
                    y: offset,
                    ease: "power4.out"
                });
            },
            false
        );
    }

    function bgImgController(getListItems, listItems, bgImgs) {
        for (const link of getListItems) {
            link.addEventListener("mouseenter", ev => {
                let currentId = ev.currentTarget.dataset.itemId;
                console.log(currentId);

                listOpacityController(currentId, getListItems, listItems);

                gsap.to(ev.currentTarget, 0.3, {
                    autoAlpha: 1
                });

                gsap.to(".is-visible", 0.2, {
                    autoAlpha: 0,
                    scale: 1.05
                });

                console.log(bgImgs)
                if (!bgImgs[currentId].classList.contains("is-visible")) {
                    bgImgs[currentId].classList.add("is-visible");
                }

                gsap.to(bgImgs[currentId], 0.6, {
                    autoAlpha: 1,
                    scale: 1
                });
            });
        }
    }

    function listOpacityController(id, getListItems, listItems) {
        console.log(getListItems);
        id = parseInt(id);
        let aboveCurrent = listItems - id;
        let belowCurrent = parseInt(id);

        if (aboveCurrent > 0) {
            for (let i = 1; i <= aboveCurrent; i++) {
                let opacity = 0.5 / i;
                let offset = 5 * i;
                gsap.to(getListItems[id + i], 0.5, {
                    autoAlpha: opacity,
                    x: offset,
                    ease: "power3.out"
                });
            }
        }

        if (belowCurrent > 0) {
            for (let i = 0; i <= belowCurrent; i++) {
                let opacity = 0.5 / i;
                let offset = 5 * i;
                gsap.to(getListItems[id - i], 0.5, {
                    autoAlpha: opacity,
                    x: offset,
                    ease: "power3.out"
                });
            }
        }
    }



    useEffect(() => {
        test();
    }, [])

    // test();


    return (
        <div>
            <div className="container">
                <header className="c-header c-header--archive c-header--project-list">
                    <div className="c-mouse-vertical-carousel js-carousel u-media-wrapper u-media-wrapper--16-9">
                        <ul className="c-mouse-vertical-carousel__list js-carousel-list">
                            <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="0">
                                <a href="#">
                                    {/* <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                        <span>
                                            
                                        </span> Silver Plan
                                    </p> */}

                                    <p className="c-mouse-vertical-carousel__title u-a5">
                                        Silver Plan
                                    </p>
                                </a>
                            </li>

                            <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="1">
                                <a href="#">
                                    {/* <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                        <span>
                                            
                                        </span> Gold Plan
                                    </p> */}

                                    <p className="c-mouse-vertical-carousel__title u-a5">
                                        Gold Plan
                                    </p>
                                </a>
                            </li>

                            <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="2">
                                <a href="#">
                                    {/* <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                        <span>
                                            
                                        </span> Diamond
                                    </p> */}

                                    <p className="c-mouse-vertical-carousel__title u-a5">
                                    Diamond Plan
                                    </p>
                                </a>
                            </li>

                            {/* <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="3">
                                <a href="">
                                    <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                        <span>
                                            04
                                        </span> Oklahoma
                                    </p>

                                    <p className="c-mouse-vertical-carousel__title u-a5">
                                        Oklahoma City
                                    </p>
                                </a>
                            </li>

                            <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="4">
                                <a href="">
                                    <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                        <span>
                                            05
                                        </span> North Carolina
                                    </p>

                                    <p className="c-mouse-vertical-carousel__title u-a5">
                                        Raleigh
                                    </p>
                                </a>
                            </li>

                            <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="5">
                                <a href="">
                                    <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                        <span>
                                            06
                                        </span> Utah
                                    </p>

                                    <p className="c-mouse-vertical-carousel__title u-a5">
                                        Salt Lake City
                                    </p>
                                </a>
                            </li>

                            <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="6">
                                <a href="">
                                    <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                                        <span>
                                            07
                                        </span> Missouri
                                    </p>

                                    <p className="c-mouse-vertical-carousel__title u-a5">
                                        Jefferson City
                                    </p>
                                </a>
                            </li> */}
                        </ul>
                        {/* <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{backgroundimage: `url('https://psmag.com/.image/t_share/MTU4NzUzMjc3MDkyMDQ2NTUy/gettyimages-1031626122.jpg')`}}></i> */}
                        <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{backgroundImage: `url(${carone})`}}></i>
                        <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{backgroundImage: `url(${cartwo})`}}></i>
                        <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{backgroundImage: `url(${carThree})`}}></i>
                        
                        {/* <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{backgroundImage: "url('https://www.gousa.in/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-03/f13bafc9dbcd2df659faac33a29cf4ae.jpeg?itok=rj0Zoh1b')"}}></i>
                        <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{backgroundImage: "url('https://www.history.com/.image/t_share/MTU3ODc5MDg1ODk1NDYwMTY5/natural-bridge-bryce-canyon-utah-usa.jpg')"}}></i>
                        <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{backgroundImage: "url('https://www.addictioncenter.com/app/uploads/2018/06/xMissouri.jpeg.pagespeed.ic.9qVaCJN2BK.jpg')"}}></i> */}
                        <i className="c-gradient-overlay"></i>
                    </div>
                </header>
            </div>
        </div>
    )
}
