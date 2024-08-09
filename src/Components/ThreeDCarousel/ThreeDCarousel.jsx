import React, { useEffect } from 'react';
import * as $ from "jquery";
import './index.css';
import CButton from '../CButton/CButton';
import { useNavigate } from 'react-router-dom';

export default function ThreeDCarousel() {
    const navigate = useNavigate();

    function test() {
        let activeIndex = 0
        let limit = 0
        let disabled = false
        let $stage
        let $controls
        let canvas = false

        const SPIN_FORWARD_CLASS = 'js-spin-fwd'
        const SPIN_BACKWARD_CLASS = 'js-spin-bwd'
        const DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled'
        const SPIN_DUR = 1000

        const appendControls = () => {
            for (let i = 0; i < limit; i++) {
                $('.carousel__control').append(`<a href="#" data-index="${i}"></a>`)
            }
            let height = $('.carousel__control').children().last().outerHeight()

            $('.carousel__control').css('height', (30 + (limit * height)))
            $controls = $('.carousel__control').children()
            $controls.eq(activeIndex).addClass('active')
        }

        const setIndexes = () => {
            $('.spinner').children().each((i, el) => {
                $(el).attr('data-index', i)
                limit++
            })
        }

        const duplicateSpinner = () => {
            const $el = $('.spinner').parent();
            const html = $('.spinner').parent().html()
            console.log($el);
            // console.log(html);
            $el.append(html)
            $('.spinner').last().addClass('spinner--right')
            $('.spinner--right').removeClass('spinner--left')

            $('.spinner--right').on('click', '.carBtn', function(){
                const type = $el.find('.dynamic-type').val();
                navigate('/silverQuiz', {state:{type}})
            });
        }

        const paintFaces = () => {
            // $('.spinner__face').each((i, el) => {
            //     const $el = $(el)
            //     let color = $(el).attr('data-bg')
            //     $el.children().css('backgroundImage', `url(${getBase64PixelByColor(color)})`)
            // })
        }

        // const getBase64PixelByColor = (hex) => {
        //     if (!canvas) {
        //         canvas = document.createElement('canvas')
        //         canvas.height = 1
        //         canvas.width = 1
        //     }
        //     if (canvas.getContext) {
        //         const ctx = canvas.getContext('2d')
        //         ctx.fillStyle = hex
        //         ctx.fillRect(0, 0, 1, 1)
        //         return canvas.toDataURL()
        //     }
        //     return false
        // }

        const prepareDom = () => {
            setIndexes()
            // // paintFaces()
            duplicateSpinner()
            appendControls()
        }

        const spin = (inc = 1) => {
            if (disabled) return
            if (!inc) return
            activeIndex += inc
            disabled = true

            if (activeIndex >= limit) {
                activeIndex = 0
            }

            if (activeIndex < 0) {
                activeIndex = (limit - 1)
            }

            const $activeEls = $('.spinner__face.js-active')
            const $nextEls = $(`.spinner__face[data-index=${activeIndex}]`)
            $nextEls.addClass('js-next')

            if (inc > 0) {
                $stage.addClass(SPIN_FORWARD_CLASS)
            } else {
                $stage.addClass(SPIN_BACKWARD_CLASS)
            }

            $controls.removeClass('active')
            $controls.eq(activeIndex).addClass('active')

            setTimeout(() => {
                spinCallback(inc)
            }, SPIN_DUR, inc)
        }

        const spinCallback = (inc) => {

            $('.js-active').removeClass('js-active')
            $('.js-next').removeClass('js-next').addClass('js-active')
            $stage
                .addClass(DISABLE_TRANSITIONS_CLASS)
                .removeClass(SPIN_FORWARD_CLASS)
                .removeClass(SPIN_BACKWARD_CLASS)

            $('.js-active').each((i, el) => {
                const $el = $(el)
                $el.prependTo($el.parent())
            })
            setTimeout(() => {
                $stage.removeClass(DISABLE_TRANSITIONS_CLASS)
                disabled = false
            }, 100)

        }

        const attachListeners = () => {

            document.onkeyup = (e) => {
                switch (e.keyCode) {
                    case 38:
                        spin(-1)
                        break
                    case 40:
                        spin(1)
                        break
                }
            }

            $controls.on('click', (e) => {
                e.preventDefault()
                if (disabled) return
                const $el = $(e.target)
                const toIndex = parseInt($el.attr('data-index'), 10)
                spin(toIndex - activeIndex)

            })
        }

        const assignEls = () => {
            $stage = $('.carousel__stage')
        }

        const init = () => {
            assignEls()
            prepareDom()
            attachListeners()
        }


        $(() => {
            init();
        });
    }

    // document.getElementById('challenge')?.addEventListener("click", handleClick);
    // console.log(document.getElementById('challenge'));

    // const handleClick = () => {
    //     alert('test');
    // }

    useEffect(() => {
        test();
        // document.getElementById("challenge").addEventListener("click", () => {
        //     alert('add')
        // }) 
        // document.getElementById('challenge')?.addEventListener("click", function manish () {
        //     alert('red')
        // });
        // console.log(document.getElementById('challenge'));
    })

    return (
        <>
            <div className="carousel">
                <div className="carousel__control">
                </div>
                <div className="carousel__stage">
                    <div className="spinner spinner--left">
                        <div className="spinner__face js-active" data-bg="#27323c">
                            <input className='dynamic-type' type='hidden' value="cricket" />
                            <div className="content" data-type="iceland" style={{backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/iceland.jpg')"}}>
                                <div className="content__left">
                                    <h1>CRICKET<br /><span>Mr.Fin</span></h1>
                                </div>
                                <div className="content__right">
                                    <div className="content__main">
                                        <p>“Did You Know?
                                        Cricket is the second most popular sport after soccer/football with an estimated fan base of 2.5 billion people. If you are one such fan then challenge yourself among your peers and win assured prizes every week.” </p>
                                        <button className='carBtn pulse-btn-car'>Challenge Now</button>
                                        {/* <CButton type="cricket"/> */}
                                    </div>
                                    <h3 className="content__index">01</h3>
                                </div>
                            </div>
                        </div>
                        <div className="spinner__face" data-bg="#19304a">
                            <input className='dynamic-type' type='hidden' value="travel" />
                            <div className="content" data-type="china" style={{backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/china.jpg')"}}>
                                <div className="content__left">
                                    <h1>HISTORY<br /><span>Mr.Fin</span></h1>
                                </div>
                                <div className="content__right">
                                    <div className="content__main">
                                        <p>“Did You know?
                                        India never invaded any country in her last 100000 years of history. Indian history is both ancient and fascinating. We are a tresure trove of rich memories filled with exciting events. If you're fan of such things, we got you covered. Give our history Quizzes a whirl and win amazing prizes once a week.”</p>
                                        <button className='carBtn pulse-btn-car'>Challenge Now</button>
                                        {/* <Button type='submit' style={{marginTop: '20px'}} variant='contained' onClick={() => handleClick('history')}>Challenge Now</Button> */}
                                    </div>
                                    <h3 className="content__index">02</h3>
                                </div>
                            </div>
                        </div>
                        {/* <div className="spinner__face" data-bg="#2b2533">
                            <div className="content" data-type="usa" style={{backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/usa.jpg')"}}>
                                <div className="content__left">
                                    <h1>USA<br /><span>NORTH AMERICA</span></h1>
                                </div>
                                <div className="content__right">
                                    <div className="content__main">
                                        <p>“When it comes to travel, America has always floored me with its staggering range of possibilities. Not many other countries have so much natural beauty – mountains, beaches, rainforest, deserts, canyons, glaciers – coupled with fascinating cities to explore, an unrivaled music scene and all the things that make travel so rewarding (friendly locals, great restaurants and farmers markets, and plenty of quirky surprises).” </p>
                                        <p>– Regis St Louis</p>
                                    </div>
                                    <h3 className="content__index">03</h3>
                                </div>
                            </div>
                        </div> */}
                        <div className="spinner__face" data-bg="#312f2d">
                            <input className='dynamic-type' type='hidden' value="food" />
                            <div className="content" data-type="peru" style={{backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/peru.jpg')"}}>
                                <div className="content__left">
                                    <h1>FOOD<br /><span>Mr.Fin</span></h1>
                                </div>
                                <div className="content__right">
                                    <div className="content__main">
                                        <p>“There's more water in cucumber than watermelon. Okay, not by much, but this was still a fun food fact to us! Watermelon is about 92% water, while cucumber is 95%. If you are the kinda of person who knows even such obscure facts, then we have fun filled quiz which will win you prizes that will reward you for just being a foodie.”</p>
                                        <button className='carBtn pulse-btn-car'>Challenge Now</button>
                                        {/* <Button type='submit' variant='contained' style={{marginTop: '20px'}} onClick={() => handleClick('food')}>Challenge Now</Button> */}
                                    </div>
                                    <h3 className="content__index">03</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{height: 0, width: 0, overflow: "hidden"}}>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/peru.jpg" />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/canada.jpg" />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/china.jpg" />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/usa.jpg" />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/iceland.jpg" />
            </div>
        </>
    )
}
