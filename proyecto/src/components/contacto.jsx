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
            <div className="flex-row bg-orange-100">
                <div className="pt-8 pl-4 lg:pl-20 lg:pt-12">
                    <h2 className={`text-5xl text-amber-900 ${alex.className}`}>Contacto</h2>

                    <p className='text-amber-900'>Completa tus datos y nos contactaremos a la brevedad</p>
                </div>
                <div className="flex justify-center items-center px-3 py-6 max-w-2xl lg:max-w-screen-lg space-x-1 lg:space-x-6 lg:pl-12 lg:pt-0 lg:ml-32 ">

                    <div className="w-full lg:w-1/2">

                        <Formulario />
                    </div>
                    <div className="w-auto lg:w-1/2 ">
                        <div className="h-full w-full relative">
                            <Image
                                src={img}
                                alt="Descripción de la imagen"
                                layout="responsive"
                                className="object-contain object-center pb-14"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


