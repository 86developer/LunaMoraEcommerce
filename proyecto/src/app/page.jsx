'use client';
import React, { useEffect } from 'react';
import Carousel from '@/components/carousel';
import Colecciones from '@/components/colecciones';
import ScrollCard from '@/components/scrollcard';
import img1 from 'public/img/imagen1.webp';
import img2 from 'public/img/imagen2.webp';
import img3 from 'public/img/imagen3.webp';
import img4 from 'public/img/imagen1.webp'; // Asegúrate de que sea diferente a las primeras cuatro
import 'aos/dist/aos.css'; // Importa los estilos CSS de AOS
import AOS from 'aos';
import Logo from '@/components/logo';


export default function Home() {
    useEffect(() => {
        // Inicializa AOS una vez que el componente ha montado
        AOS.init();
    }, []);

    return (
        <>
            <Carousel />
            <div className=''>
                <p className='my-20 text-center  text-green-400 '>
                    "Acompáñame en este viaje, y juntos podremos explorar la belleza y la sensualidad en la lencería de diseño propio."
                </p>
            </div>
            <Colecciones />

            <ScrollCard imgSrc={img1} description="En medio de la incertidumbre de la pandemia, nació mi pasión por la lencería de diseño propio. Cada prenda es una manifestación de creatividad y dedicación." fadeleft />
            <ScrollCard imgSrc={img2} description="Cada pieza que diseño es única, desde el concepto hasta el último detalle. Me esfuerzo por garantizar que cada prenda sea cómoda, segura y estéticamente atractiva." alignStart />
            <ScrollCard imgSrc={img3} description="La exclusividad es un pilar fundamental de nuestro proyecto. Las prendas que diseñamos son de edición limitada y confeccionadas de manera artesanal, lo que les confiere un toque único y especial." fadeleft />
            <ScrollCard imgSrc={img4} description="Nuestro compromiso es ofrecer lencería que combine belleza y funcionalidad. Cada cliente que elige una de mis creaciones está adquiriendo algo más que una prenda; está adquiriendo una historia de pasión y esfuerzo, y un símbolo de calidad." alignStart />

        </>
    )
}
