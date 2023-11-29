import React from 'react';
import Image from 'next/image';

export default function ScrollCard({ imgSrc, description, alignStart, fadeleft }) {


    return (
        <div className={`px-7 pb-6 flex ${alignStart ? 'justify-start' : 'justify-end'}`}
            data-aos={`${fadeleft ? "fade-left" : "fade-right"}`}
            data-aos-anchor="#example-anchor"
            data-aos-offset="50"
            data-aos-duration="1000">
            <div className="max-w-2xl mx-1 my-1 rounded-lg bg-green-200 lg:flex">
                <a href="#" className="lg:w-1/2">
                    <div style={{ maxWidth: '300px' }}> {/* Ajusta el ancho máximo según sea necesario */}
                        <Image src={imgSrc} alt="Descripción de la imagen" layout="responsive" className="rounded-lg" />
                    </div>
                </a>
                <div className="ml-1 lg:w-1/2 lg:pl-1">
                    <p className="nosotros mr-4 mb-3 leading-5 text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    );
};
