import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { fullName, Message, SenderEmail } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    secure: false,
    port: 587, // port for secure SMTP
    requireTLS: true,
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
      from: "mikewire@hotmail.com",
      to: "mikewire@hotmail.com",
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
