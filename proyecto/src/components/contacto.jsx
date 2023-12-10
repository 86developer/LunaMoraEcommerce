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


export default function Contacto() {

    return (
        <>
            <div className="flex-row bg-orange-100">
                <div className="pt-8 pl-4 lg:pl-20 lg:pt-12">
                    <h2 className={`text-5xl text-amber-900 ${alex.className}`}>Contacto</h2>
                    <p className={`xl:text-xl text-amber-900 ${roboto.className}`}>Completa tus datos y nos contactaremos a la brevedad</p>
                </div>

                <div className="flex justify-center items-center px-3 py-6 max-w-2xl lg:max-w-screen-lg space-x-1 lg:space-x-6 lg:pl-12 lg:pt-0 lg:ml-32 ">
                    <div className="w-full lg:w-1/2">
                        <Formulario />
                    </div>
                    <div className="w-full lg:w-1/2 hidden md:block ">
                        <div className="h-full w-full relative">
                            <img
                                src="./img/formv.webp"
                                alt="Descripción de la imagen"
                                loading="lazy"
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


