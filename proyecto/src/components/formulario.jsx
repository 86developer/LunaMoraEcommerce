import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';




export default function Formulario() {

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
        agree: Yup.boolean().oneOf([true], 'Por favor acepte nuestra política'),
    });


    const initialValues = {
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        agree: false,
    };

    const handleSubmit = (values, { setSubmitting }) => {
        // Aquí puedes manejar el envío del formulario
        console.log(values);
        setSubmitting(false);
    };

    return (
        <div className="formulario">
            <div>
                <h2>Completa tus datos y nos contactaremos a la brevedad</h2>
            </div>
            <div className="flex-auto p-6">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, handleBlur, }) => (
                        <Form action="https://formsubmit.co/sbrivas@estudiodpp.com.ar" method="post" className="form-horizontal">
                            <div className="mb-4 flex flex-wrap">
                                <div className="campo">
                                    <label htmlFor="nombre" className="sm:w-1/3 pr-4 pl-4 pt-2 pb-2 mb-0 leading-normalcampo">Nombre</label>

                                    <Field
                                        placeholder="Ingrese su nombre"
                                        type="text"
                                        name="nombre"
                                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" onBlur={handleBlur} />

                                    <ErrorMessage name="nombre" component="div" className="text-red-500" />






                                </div>
                            </div>
                            <div className="mb-4 flex flex-wrap ">
                                <div className="campo">
                                    <label className="sm:w-1/3 pr-4 pl-4 pt-2 pb-2 mb-0 leading-normal campo" for="apellido">Apellido</label>
                                    <Field placeholder="Ingrese su apellido" type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="apellido" name="apellido" required onBlur={handleBlur} />
                                    <ErrorMessage name="apellido" component="div" className="text-red-500" />


                                </div>
                            </div>
                            <div className="mb-4 flex flex-wrap ">
                                <div className="campo">
                                    <label className="sm:w-1/3 pr-4 pl-4 pt-2 pb-2 mb-0 leading-normal campo" for="telefono">Telefono</label>
                                    <Field placeholder="Ingrese su telefono" type="telefono" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="telefono" name="telefono" required onBlur={handleBlur} />
                                    <ErrorMessage name="telefono" component="div" className="text-red-500" />


                                </div>
                            </div>
                            <div className="mb-4 flex flex-wrap ">
                                <div className="campo">
                                    <label className="sm:w-1/3 pr-4 pl-4 pt-2 pb-2 mb-0 leading-normal campo" for="email">Email</label>
                                    <Field placeholder="Ingrese su email" type="email" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="email" name="email" required onBlur={handleBlur} />
                                    <ErrorMessage name="email" component="div" className="text-red-500" />


                                </div>
                            </div>

                            <button type="submit" disabled={isSubmitting}>Enviar</button>
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

