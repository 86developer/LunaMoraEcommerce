'use client';
import React, { useState } from 'react';

import {
    Roboto_Condensed, Alex_Brush
} from 'next/font/google';

const roboto = Roboto_Condensed({
    weight: ["300"],
    style: ["normal"],
    subsets: ["latin"],
})
const alex = Alex_Brush({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})


function Colecciones() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const callouts = [
        {
            name: 'Algodon',
            description: 'Si tenes problemas con algun tipo de tela sintetica esta es tu categoria.',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '#',
        },
        {
            name: 'Poliester',
            description: 'Creaciones en las ultimas telas del mercado entra aca y conocelas.',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
            imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
            href: '#',
        },
        {
            name: 'New Arrivals',
            description: 'Nuevas creaciones, tenemos novedades en cada una de las categorias.',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
    ]
    return (
        <div className="bg-fuchsia-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className={`text-5xl text-gray-900 ${alex.className}`}>Colecciones</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className={`mt-6 text-3xl ${alex.className} text-black-300`}>
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className={`text-base ${roboto.className}`}>{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Colecciones;
