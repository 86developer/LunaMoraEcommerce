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

export default function Nosotros() {
    return (
        <div >
            <div className="bg-fuchsia-300 container mx-auto p-4">
                <h1 className={`text-4xl font-bold mb-6 ${alex.className}`}>Nosotros</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="w-full lg:w-1/2 p-4">
                        <img
                            src="https://via.placeholder.com/600"
                            alt="Team"
                            className="w-full rounded-lg shadow-md"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
                            aliquam eros, nec feugiat est tempor eget.
                        </p>
                        <p className="mb-4">
                            Integer vehicula risus a elit dapibus, nec venenatis velit commodo.
                            Vivamus at odio ullamcorper, facilisis quam at, fringilla dolor.
                        </p>
                        <p>
                            Mauris tincidunt orci nec diam volutpat, sit amet pretium nulla
                            fermentum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


