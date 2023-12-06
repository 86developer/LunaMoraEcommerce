import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, imageSrc: '/img/contacto.webp', altText: 'Slide 1' },
        { id: 2, imageSrc: '/img/ropabanner.webp', altText: 'Slide 2' },
        { id: 3, imageSrc: '/img/mujerbanner.webp', altText: 'Slide 3' },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            //setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        },);

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
                            backgroundImage: `url(${slide.imageSrc})`, // Establecer la imagen de fondo en línea con la URL proporcionada
                            backgroundSize: 'cover', // Ajustar el tamaño de la imagen de fondo al contenedor
                            backgroundPosition: 'center', // Alinear la imagen de fondo al centro
                            height: '500px', // Ajusta la altura del banner según tus necesidades
                            width: '100%', // Ajusta el ancho del banner según tus necesidades
                            display: index === currentSlide ? 'block' : 'none', // Mostrar solo la imagen actual, ocultar las demás
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
