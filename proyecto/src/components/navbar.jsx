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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root">
                                        <a href="/nosotros" className="-m-2 block p-2 font-medium text-gray-900">
                                            Nosotros
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <a href="/colecciones" className="-m-2 block p-2 font-medium text-gray-900">
                                            Colecciones
                                        </a>
                                    </div>
                                </div>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root">
                                        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                            Sign in
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                            Create account
                                        </a>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                <p className="bg-orange-200 flex h-10 items-center justify-center px-4 text-lg font-medium text-amber-900 sm:px-6 lg:px-8">
                    BLACK FRIDAY!! 50% OFF
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

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
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="ml-auto flex items-center">
                                    <Link href="#" onClick={handleScrollToNosotros}>

                                        <div className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer" legacyBehavior>
                                            <span>Nosotros</span>
                                        </div>
                                    </Link>
                                    <Link href="#colecciones">
                                        <div className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer" legacyBehavior>
                                            <span>Colecciones</span>
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
