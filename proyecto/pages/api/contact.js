import nodemailer from"nodemailer"
export default async function ContactApi(req,res){
    const{name,email,message} = req.body

    const user = process.env.user
 
    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port:465,
    secure: true,
    auth: {
        user: user,
        pass: process.env.pass,
    }

    });

    try {

        const mail = await transporter.sendMail({
            from: user,
            to:"joel@hotmail.com",
            replyTo:email,
            subject: `Envio de formulario de ${name}`,
            html:`
            <p>Nombre ${name}</p>
            <p>Email ${email}</p>
            <p>Mensaje ${message}</p>`
        });
        console.log("mensage enviado:", mail.messageId);
        return res.status(200).json({message:"success"})

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"No se pudo enviar el email. Tu mensaje no a sido enviado"
        });
    }
     

}