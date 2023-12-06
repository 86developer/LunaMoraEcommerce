import React from 'react';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="footer bg-orange-200 shadow">
            <div className="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center ">

                <ul className="flex flex-wrap items-center my-1 mr-8 text-sm font-medium text-amber-900 sm:mt-0">
                    <li>
                        <Link href="/nosotros" className="mr-4 hover:underline md:mr-6">Nosotros</Link>
                    </li>
                    <li>
                        <Link href="/colecciones" className="mr-4 hover:underline md:mr-6">Colecciones</Link>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licencia</a>
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
