'use client';
import React, { useState } from 'react';
import Formulario from '@/components/formulario';

import Image from 'next/image';
import img from 'public/img/formv.webp';
import img2 from 'public/img/imagen2.webp';
import img3 from 'public/img/imagen3.webp';
import '../styles/globals.css';

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


export default function Contacto() {

    return (
        <>
            <div className="flex justify-center rounded-lg my-12 bg-orange-100">
                <div className="flex justify-center items-center my-12 px-6 py-6 max-w-2xl rounded-lg sm:py-12 lg:max-w-none lg:py-10 space-x-6">

                    <div className="w-1/2">
                        <div className=" pb-12 pl-6">
                            <h2 className={`text-5xl text-amber-900 ${alex.className}`}>Contacto</h2>

                            <h2 className='text-amber-900'>Completa tus datos y nos contactaremos a la brevedad</h2>
                        </div>
                        <Formulario />
                    </div>
                    <div className="w-1/2">
                        <div className="h-full w-full relative">
                            <Image
                                src={img}
                                alt="Descripción de la imagen"
                                layout="responsive"
                                className="rounded-lg object-contain object-center"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


