import React from 'react';
import Image from 'next/image';
import '../styles/nosotros.css';



export default function Nosotros({ imgSrc, description }) {

    return (
        <>

            <div className="nosotros">
                <div className=" contenedor-imagen bg-orange-100 ">
                    <a href="#" className="">
                        <div>
                            <Image src={imgSrc} alt="Descripción de la imagen" layout="responsive" className="" />
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
