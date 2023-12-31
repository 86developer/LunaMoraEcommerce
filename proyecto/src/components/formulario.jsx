import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';
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




export default function Formulario() {
    const [isFieldValid, setIsFieldValid] = useState(false);

    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
            .matches(/^[A-Za-z\s.,;:'"-]+$/, 'Por favor ingrese solo letras, espacios y signos de puntuación básicos')
            .required('Por favor ingrese su nombre'),
        apellido: Yup.string()
            .matches(/^[A-Za-z\s.,;:'"-]+$/, 'Por favor ingrese solo letras, espacios y signos de puntuación básicos')
            .required('Por favor ingrese su apellido'),
        telefono: Yup.string()
            .matches(/^[0-9]+$/, 'Por favor ingrese solo números')
            .required('Por favor ingrese su número de teléfono'),
        email: Yup.string()
            .email('Por favor ingrese un correo electrónico válido')
            .required('Por favor ingrese su correo electrónico'),
        mensaje: Yup.string()
            .matches(/^.{1,100}$/, 'Por favor ingrese hasta 100 caracteres')
            .required('Por favor ingrese su mensaje'),
        agree: Yup.boolean().oneOf([true], 'Por favor acepte nuestra política'),
    });


    const initialValues = {
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        mensaje: '',
        agree: false,
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        // Aquí puedes manejar el envío del formulario
        try {
            const response = await fetch('http://localhost:3001/api/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                // Éxito al enviar el formulario
                console.log('Mensaje enviado correctamente');
            } else {
                // Error al enviar el formulario
                console.error('Error al enviar el mensaje');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setSubmitting(false);
    }

    const handleFieldBlur = (e) => {
        // Realizar la validación del campo aquí
        const fieldValue = e.target.value;

        // Por ejemplo, verificar si el campo está completo y es válido
        if (fieldValue && fieldValue.length > 3) {
            setIsFieldValid(true);
        } else {
            setIsFieldValid(false);
        }
    }
    return (
        <div className="formulario">

            <div className="flex-auto p-0">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, handleBlur, errors, touched }) => (
                        <Form action="" method="post" className="form-horizontal">
                            <div className="mb-4 flex flex-wrap">
                                <div className="campo w-full lg:mb-8">
                                    <label htmlFor="nombre" className={`sm:w-1/3 xl:text-lg mb-0 leading-normalcampo text-amber-900 htmlFor="nombre" ${roboto.className}`}>Nombre</label>

                                    <Field
                                        placeholder="Ingrese su nombre"
                                        type="text"
                                        name="nombre"
                                        autocomplete="off"
                                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-amber-200 rounded "
                                        onBlur={(e) => {
                                            handleFieldBlur(e);
                                            handleBlur(e);
                                        }} />
                                    {isFieldValid && (
                                        <div className="text-green-500 font-semibold">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                    )}
                                    <ErrorMessage name="nombre" component="div" className="text-red-500 font-semibold" />




                                </div>
                            </div>
                            <div className="mb-4 flex flex-wrap ">
                                <div className="campo w-full lg:mb-8">
                                    <label className={`sm:w-1/3 xl:text-lg mb-0 leading-normalcampo text-amber-900 htmlFor="apellido" ${roboto.className}`}>Apellido</label>
                                    <Field
                                        placeholder="Ingrese su apellido"
                                        type="text"
                                        name="apellido"
                                        autocomplete="off"
                                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-amber-200 rounded" id="apellido" required
                                        onBlur={(e) => {
                                            handleFieldBlur(e);
                                            handleBlur(e);
                                        }} />
                                    {isFieldValid && (
                                        <div className="text-green-500 font-semibold">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                    )}
                                    <ErrorMessage name="apellido" component="div" className="text-red-500 font-semibold" />



                                </div>
                            </div>
                            <div className="mb-4 flex flex-wrap ">
                                <div className="campo w-full lg:mb-8">
                                    <label className={`sm:w-1/3 xl:text-lg mb-0 leading-normalcampo text-amber-900 htmlFor="telefono" ${roboto.className}`}>Telefono</label>
                                    <Field
                                        placeholder="Ingrese su telefono"
                                        type="telefono"
                                        name="telefono"
                                        autocomplete="off"
                                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-amber-200 rounded" id="telefono" required
                                        onBlur={(e) => {
                                            handleFieldBlur(e);
                                            handleBlur(e);
                                        }} />
                                    {isFieldValid && (
                                        <div className="text-green-500 font-semibold">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                    )}
                                    <ErrorMessage name="telefono" component="div" className="text-red-500 font-semibold" />


                                </div>
                            </div>
                            <div className="mb-4 flex flex-wrap ">
                                <div className="campo w-full lg:mb-8">
                                    <label className={`sm:w-1/3 xl:text-lg mb-0 leading-normalcampo text-amber-900 htmlFor="email" ${roboto.className}`}>Email</label>
                                    <Field
                                        placeholder="Ingrese su email"
                                        type="email"
                                        name="email"
                                        autocomplete="off"
                                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white  border border-amber-200 rounded" id="email" required
                                        onBlur={(e) => {
                                            handleFieldBlur(e);
                                            handleBlur(e);
                                        }} />
                                    {isFieldValid && (
                                        <div className="text-green-500 font-semibold">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                    )}
                                    <ErrorMessage name="email" component="div" className="text-red-500 font-semibold" />


                                </div>
                            </div>
                            <div className="mb-4 flex flex-wrap ">
                                <div className="campo w-full lg:mb-8">
                                    <label className={`sm:w-1/3 xl:text-lg mb-0 leading-normalcampo text-amber-900 htmlFor="mensaje" ${roboto.className}`}>Mensaje</label>
                                    <textarea
                                        placeholder="Ingrese su mensaje"
                                        type="textarea"
                                        name="mensaje"
                                        autocomplete="off"
                                        className="block appearance-none w-full h-36 resize-none py-1 px-2 mb-1 text-base leading-normal bg-white  border border-amber-200 rounded" id="email" required
                                        onBlur={(e) => {
                                            handleFieldBlur(e);
                                            handleBlur(e);
                                        }} />
                                    {isFieldValid && (
                                        <div className="text-green-500 font-semibold">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                    )}
                                    <ErrorMessage name="mensaje" component="div" className="text-red-500 font-semibold" />


                                </div>
                            </div>
                            <div className="flex justify-center w-20 h-10 rounded-md bg-orange-400">
                                <button className='text-white font-semibold w-20 h-10' type="submit" disabled={isSubmitting}>Enviar</button>
                            </div>
                            <Field type="hidden" name="_subject" value="Ha llegado un Nuevo Contacto" />
                            <Field type="hidden" name="_template" value="table" />
                        </Form>
                    )
                    }
                </Formik >
            </div >
        </div >
    );
}

