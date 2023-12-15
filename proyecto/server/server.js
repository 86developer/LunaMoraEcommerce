// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/api/contacto', (req, res) => {
    const { nombre, apellido, telefono, email, mensaje } = req.body;

    console.log('Datos del formulario recibidos:');
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Teléfono:', telefono);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);

    // Configuración del transportador de correo
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lunamoramdp@gmail.com',
            pass: 'lenceriadiseno',
        },
    });

    // Contenido del correo electrónico
    let mailOptions = {
        from: 'lunamoramdp@gmail.com',
        to: 'duckdev86@gmail.com',
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${nombre}\nApellido: ${apellido}\nTeléfono: ${telefono}\nEmail: ${email}\nMensaje: ${mensaje}`,
    };

    // Envío del correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el mensaje');
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).send('Mensaje enviado');
        }
    });
});

app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001');
});
