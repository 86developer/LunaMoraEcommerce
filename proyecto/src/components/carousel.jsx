import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, imageSrc: 'https://previews.123rf.com/images/irishasel/irishasel1802/irishasel180200270/95651205-bragas-de-algod%C3%B3n-a-rayas-y-sujetador-blanco-lencer%C3%ADa-femenina-en-el-fondo-de-madera-vista.jpg', altText: 'Slide 1' },
        { id: 2, imageSrc: 'https://img.freepik.com/fotos-premium/arreglo-lenceria-femenina-bodegon_23-2150411322.jpg?w=740', altText: 'Slide 2' },
        { id: 3, imageSrc: 'https://www.shutterstock.com/shutterstock/photos/1718154814/display_1500/stock-photo-portrait-of-a-confident-and-sexy-female-model-with-brown-hair-wearing-black-lingerie-while-laying-1718154814.jpg', altText: 'Slide 3' },
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
            <button onClick={prevSlide} className="carousel-button left">
                Previous
            </button>
            <button onClick={nextSlide} className="carousel-button right">
                Next
            </button>
        </div>

    );
}

export default Carousel;
