const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "211d4679e3d79c",
            pass: "9e2b7d43009e26",
        },
    });
    let info = await transporter.sendMail({
        from: "ukhanb@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message,
    });

}

module.exports = { sendEmail }



