import nodemailer from 'nodemailer';
export async function sendMail(subject, toEmail, html) {
    var transporter = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        port: process.env.NODEMAILER_PORT,
        secure: false,
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD,
        },
    });

    var mailOptions = {
        from: '"Nexonpixel" <kumarsinghdeepak659@gmail.com>',
        to: toEmail,
        subject: subject,
        html: html,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(transporter,mailOptions)
        return { status: true };
    } catch (error) {
        return { status: false, message: error.message };
    }
}