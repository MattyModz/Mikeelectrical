import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { fullName, Message, SenderEmail } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false

    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: "matt-wynne07@hotmail.co.uk",
      to: "matt-wynne07@hotmail.co.uk",
      subject: `Contact form submission from ${fullName}`,
      html: `<p>You have a new contact form submission</p><br>
       <p><strong>Email: </strong> ${SenderEmail} </p><br>
      <p><strong>Name: </strong> ${fullName} </p><br>
   
       <p><strong>Message: </strong> ${Message} </p><br>
       `,
    });
    console.log("Message Sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
}
