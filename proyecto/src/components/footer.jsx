import React from 'react';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="footer bg-white shadow">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 <Link href="/home" className="hover:underline">Luna Mora</Link>. Todos los derechos reservados.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
            </div>
        </footer>
    );
}
