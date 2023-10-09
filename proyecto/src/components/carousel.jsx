'use client';

import React, { useState, useEffect } from 'react';

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, imageSrc: 'https://previews.123rf.com/images/irishasel/irishasel1802/irishasel180200270/95651205-bragas-de-algod%C3%B3n-a-rayas-y-sujetador-blanco-lencer%C3%ADa-femenina-en-el-fondo-de-madera-vista.jpg', altText: 'Slide 1' },
        { id: 2, imageSrc: 'https://www.infobae.com/new-resizer/EGlxQmMw1vViOBZziFy5_a9Ii9c=/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/CWIPYTBDMBBELDGQRAE6MNGTSE.jpg', altText: 'Slide 2' },
        { id: 3, imageSrc: 'https://www.shutterstock.com/shutterstock/photos/1718154814/display_1500/stock-photo-portrait-of-a-confident-and-sexy-female-model-with-brown-hair-wearing-black-lingerie-while-laying-1718154814.jpg', altText: 'Slide 3' },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos 
        return () => {
            clearInterval(interval);
        };
    }, [currentSlide]);

    return (
        <div className="carousel-container">
            <button onClick={prevSlide} className="carousel-button left">
                Previous
            </button>
            <div className="carousel-content">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <img src={slide.imageSrc} alt={slide.altText} />
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className="carousel-button right">
                Next
            </button>
        </div>
    );
}

export default Carousel;
