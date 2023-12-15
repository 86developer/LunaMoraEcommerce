import React from 'react';
import Link from 'next/link';

function handleScrollToNosotros(e) {
    e.preventDefault();
    const nosotrosElement = document.getElementById('nosotros-component');

    if (nosotrosElement) {
        window.scrollTo({
            top: nosotrosElement.offsetTop,
            behavior: 'smooth',
        });
    }
}

function handleScrollToColecciones(e) {
    e.preventDefault();
    const coleccionesElement = document.getElementById('colecciones-component');

    if (coleccionesElement) {
        window.scrollTo({
            top: coleccionesElement.offsetTop,
            behavior: 'smooth',
        });
    }
}

export default function Footer() {



    return (
        <footer className="footer bg-orange-200 shadow">
            <div className="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center ">

                <ul className="flex flex-wrap items-center my-1 mr-8 text-sm font-medium text-amber-900 sm:mt-0">
                    <li>
                        <Link href="#" onClick={handleScrollToNosotros}>

                            <div className="mr-4 hover:underline md:mr-6">
                                <span>Nosotros</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={handleScrollToColecciones} className="mr-4 hover:underline md:mr-6">Colecciones</Link>
                    </li>
                    <li>
                        <a href="/#" className="mr-4 hover:underline md:mr-6">Licencia</a>
                    </li>
                    <li>
                        <Link href="/contacto" className="hover:underline">Contacto</Link>
                    </li>
                </ul>
                <span className="text-sm sm:text-center text-amber-900">
                    © 2023 <Link href="#" className="hover:underline">86developer</Link>. Todos los derechos reservados.
                </span>
            </div>
        </footer>
    );
}
