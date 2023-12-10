import React from 'react';
import Image from 'next/image';
import '../styles/nosotros.css';
import ropabanner from 'public/img/ropabanner.webp';
import img2 from 'public/img/imagen2.webp';
import img3 from 'public/img/imagen3.webp';
import mujerbanner from 'public/img/mujerbanner.webp';


export default function Nosotros({ imgSrc, description, index }) {

    if (index === 1) {
        imgSrc = "./img/ropabanner.webp";
        description = "En medio de la incertidumbre de la pandemia, nació mi pasión por la lencería de diseño propio. Cada prenda es una manifestación de creatividad y dedicación.";
    } else if (index === 2) {
        imgSrc = "./img/imagen2.webp";
        description = "Cada pieza que diseño es única, desde el concepto hasta el último detalle. Me esfuerzo por garantizar que cada prenda sea cómoda, segura y estéticamente atractiva.";
    } else if (index === 3) {
        imgSrc = "./img/imagen3.webp";
        description = "La exclusividad es un pilar fundamental de nuestro proyecto. Las prendas que diseñamos son de edición limitada y confeccionadas de manera artesanal, lo que les confiere un toque único y especial.";
    } else if (index === 4) {
        imgSrc = "./img/mujerbanner.webp";
        description = "Nuestro compromiso es ofrecer lencería que combine belleza y funcionalidad. Cada cliente que elige una de mis creaciones está adquiriendo algo más que una prenda; está adquiriendo una historia de pasión y esfuerzo, y un símbolo de calidad.";
    }
    return (
        <>

            <div className="nosotros">
                <div className=" contenedor-imagen bg-orange-100 ">
                    <a href="#" className="">
                        <div>
                            <img src={imgSrc} alt="Descripción de la imagen" loading="lazy" layout="responsive" className="" />
                        </div>
                    </a>
                    <div className="contenedor-texto">
                        <p className="texto text-amber-900">{description}</p>
                    </div>

                </div>
            </div>

        </>
    );
};
