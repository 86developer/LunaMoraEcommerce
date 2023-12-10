import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';
import { object } from 'yup';

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, imageSrc: './img/contacto.webp', altText: 'Slide 1' },
        { id: 2, imageSrc: './img/ropabanner.webp', altText: 'Slide 2' },
        { id: 3, imageSrc: './img/mujerbanner.webp', altText: 'Slide 3' },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            //setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 5000 : prevSlide + 1));
        }, /* Aquí va el intervalo de tiempo para el cambio automático de slides */);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel-content">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            backgroundImage: `url(${slide.imageSrc})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '60vw', // Establece una altura fija para el carrusel
                            width: '100%', // El ancho se ajustará automáticamente
                            display: index === currentSlide ? 'block' : 'none',
                        }}
                    ></div>
                ))}
            </div>
            <button onClick={prevSlide} className="carousel-button left hover:bg-orange-300 text-white font-extrabold text-xl opacity-60">
                &lt;
            </button>
            <button onClick={nextSlide} className="carousel-button right hover:bg-orange-300 text-white font-extrabold text-xl opacity-60">
                &gt;
            </button>
        </div>
    );
}

export default Carousel;
