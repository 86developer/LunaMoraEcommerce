'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from 'public/img/imagen1.webp';
import img2 from 'public/img/imagen2.webp';
import prendabanner from 'public/img/prendabanner.webp';
import '../styles/globals.css';

import {
    Roboto_Condensed, Alex_Brush
} from 'next/font/google';

const roboto = Roboto_Condensed({

    style: ["normal"],
    subsets: ["latin"],
    weight: '400',
    display: 'swap',
})
const alex = Alex_Brush({

    style: ["normal"],
    subsets: ["latin"],
    weight: '400',
    display: 'swap',
})


function Colecciones() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const callouts = [
        {
            name: 'Algodon',
            description: 'Descubre nuestra lencería de algodón: suave, ligera y perfecta para el día a día. Diseñada para brindar comodidad sin sacrificar el estilo, cada prenda ofrece una sensación delicada y transpirable. Desde sutiles sujetadores hasta conjuntos elegantes, nuestra colección es la combinación ideal de confort y sofisticación.',
            imageSrc: './img/prendabanner.webp',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '#',
        },
        {
            name: 'Poliester',
            description: 'Explora nuestra colección de lencería de poliéster: moderna, duradera y lista para cualquier ocasión. Con telas innovadoras, estas prendas ofrecen versatilidad y estilo. Desde diseños vibrantes hasta cortes elegantes, nuestra lencería de poliéster combina moda y funcionalidad para destacar en cada momento.',
            imageSrc: './img/imagen1.webp',
            imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
            href: '#',
        },
        {
            name: 'New Arrivals',
            description: 'Encuentra aqui nuestras adiciones más recientes en lencería. Cada nueva incorporación a nuestra colección trae diseños innovadores y emocionantes. Descubre lo último en moda íntima: desde estilos frescos hasta reinventadas interpretaciones de clásicos, cada prenda está lista para cautivarte.',
            imageSrc: './img/imagen2.webp',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
    ]
    return (
        <div className="sm:mx-6 md:mx-8 lg:mx-16">
            <div className={`px-6 py-6 my-12  max-w-2xl rounded-lg sm:py-12 lg:max-w-none lg:py-10 bg-orange-100`}>
                <h2 className={`text-5xl text-amber-900 ${alex.className}`}>Colecciones</h2>

                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    {callouts.map((callout) => (
                        <div key={callout.name} className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <Image
                                    src={callout.imageSrc}
                                    alt={callout.imageAlt}
                                    height={300}
                                    width={300}
                                    className="object-cover object-center  w-full h-full"
                                />
                            </div>
                            <h3 className={`mt-6 text-3xl text-amber-900 ${alex.className}`}>
                                <a href={callout.href}>
                                    <span className="absolute inset-0" />
                                    {callout.name}
                                </a>
                            </h3>
                            <p className={`text-base font-bold text-amber-900 ${roboto.className}`}>{callout.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Colecciones;
