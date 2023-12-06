'use client';
import React from 'react';
import Carousel from '@/components/carousel';
import Colecciones from '@/components/colecciones';
import Nosotros from '@/components/nosotros';
import Contacto from '@/components/contacto';
import img1 from 'public/img/imagen1.webp';
import img2 from 'public/img/imagen2.webp';
import img3 from 'public/img/imagen3.webp';
import mujerbanner from 'public/img/mujerbanner.webp';

import Logo from '@/components/logo';


export default function Home() {


    return (
        <>
            <Carousel />
            <div className=''>
                <blockquote className='my-8 mx-8 italic text-center text-base font-bold text-amber-900 '>
                    "Acompáñame en este viaje, y juntos podremos explorar la belleza y la sensualidad en la lencería de diseño propio."
                </blockquote>
            </div>
            <Colecciones />
            <Nosotros imgSrc={img1} description="En medio de la incertidumbre de la pandemia, nació mi pasión por la lencería de diseño propio. Cada prenda es una manifestación de creatividad y dedicación." />
            <Nosotros imgSrc={img3} description="Cada pieza que diseño es única, desde el concepto hasta el último detalle. Me esfuerzo por garantizar que cada prenda sea cómoda, segura y estéticamente atractiva." />
            <Nosotros imgSrc={img2} description="La exclusividad es un pilar fundamental de nuestro proyecto. Las prendas que diseñamos son de edición limitada y confeccionadas de manera artesanal, lo que les confiere un toque único y especial." />
            <Nosotros imgSrc={mujerbanner} description="Nuestro compromiso es ofrecer lencería que combine belleza y funcionalidad. Cada cliente que elige una de mis creaciones está adquiriendo algo más que una prenda; está adquiriendo una historia de pasión y esfuerzo, y un símbolo de calidad." />
            <Contacto />
        </>
    )
}
