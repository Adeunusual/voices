import React from 'react'
import '../cardCarousel/assets/css/cardCarousel.css';
import Carousel from './assets/Carousel';

const CardCarouselLayout = ({ hide }) => {
    return (
        <>
            <div id="premium" className="loadM-wrapper">
                <a href="assured.com" id="load-more" className="load-more">Load more artworks</a>
            </div>
            <div className={`carousel-wrapper ${hide ? 'd-none' : ''}`}>
                <div className="carousel-inner-w">
                    <div className="heading">
                        <h2>Premium 🌟</h2>
                    </div>
                    <Carousel />
                </div>
            </div>
        </>
    )
}

export default CardCarouselLayout;