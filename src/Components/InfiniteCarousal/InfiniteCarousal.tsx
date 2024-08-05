import React from 'react'
import './index.css';

export default function InfiniteCarousal() {
    return (
        <>
            <div className="carousel-container">
                <div className="infinitecarousel">
                    <div className="carousel__list">
                        <i className="carousel__item fa-brands fa-apple" style={{ "--position": 1 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-windows" style={{ "--position": 2 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-cc-visa" style={{ "--position": 3 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-dribbble" style={{ "--position": 4 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-airbnb" style={{ "--position": 5 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-amazon" style={{ "--position": 6 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-imdb" style={{ "--position": 7 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-linkedin" style={{ "--position": 8 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-facebook" style={{ "--position": 9 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-twitter" style={{ "--position": 10 } as React.CSSProperties}></i>
                    </div>
                </div>
                <br />
                <div className="infinitecarousel" data-reverse="true">
                    <div className="carousel__list">
                        <i className="carousel__item fa-brands fa-apple" style={{ "--position": 1 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-windows" style={{ "--position": 2 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-cc-visa" style={{ "--position": 3 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-dribbble" style={{ "--position": 4 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-airbnb" style={{ "--position": 5 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-amazon" style={{ "--position": 6 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-imdb" style={{ "--position": 7 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-linkedin" style={{ "--position": 8 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-facebook" style={{ "--position": 9 } as React.CSSProperties}></i>
                        <i className="carousel__item fa-brands fa-twitter" style={{ "--position": 10 } as React.CSSProperties}></i>
                    </div>
                </div>
            </div>
        </>
    )
}
