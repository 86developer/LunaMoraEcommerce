'use client'
import Link from 'next/link';
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import '../styles/navbar.css';

function handleScrollToNosotros() {
    const nosotrosElement = document.getElementById('nosotros-component');

    if (nosotrosElement) {
        window.scrollTo({
            top: nosotrosElement.offsetTop,
            behavior: 'smooth',
        });
    }
}

function handleScrollToColecciones() {
    const coleccionesElement = document.getElementById('colecciones-component');

    if (coleccionesElement) {
        window.scrollTo({
            top: coleccionesElement.offsetTop,
            behavior: 'smooth',
        });
    }
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}


            <header className="relative bg-white">
                <p className="bg-orange-200 flex h-10 items-center justify-center px-4 text-lg font-medium text-amber-900 sm:px-6 lg:px-8">
                    BLACK FRIDAY!! 50% OFF
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/" >
                                    {/* <span className="sr-only">Luna Mora</span> */}
                                    <img
                                        style={{
                                            width: '110px',
                                            height: '67px',
                                            objectFit: 'contain',
                                        }}
                                        priority
                                        width={1453} // Ancho real del logo
                                        height={836} // Alto real del logo 
                                        loading="lazy"
                                        src="./img/lunafondo.png"
                                        alt='lenceria de diseño' />
                                </Link>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className=" lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex m-4">
                                    <Link href="#" onClick={handleScrollToNosotros}>
                                        <div className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer" legacyBehavior>
                                            <p>Nosotros</p>
                                        </div>
                                    </Link>
                                    <Link href="#" onClick={handleScrollToColecciones}>
                                        <div className="flex ml-4 items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer" legacyBehavior>
                                            <p>Colecciones</p>
                                        </div>
                                    </Link>
                                    {/* Otros elementos del menú */}
                                </div>
                            </Popover.Group>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
