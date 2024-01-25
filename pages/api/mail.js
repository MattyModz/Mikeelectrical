import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { fullName, Message, SenderEmail } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // hostname
    // TLS requires secureConnection to be false
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

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: "mikewire@hotmail.com",
    to: "mikewire@hotmail.com",
    subject: `Contact form submission from ${fullName}`,
    html: `<p>You have a new contact form submission</p><br>
       <p><strong>Email: </strong> ${SenderEmail} </p><br>
      <p><strong>Name: </strong> ${fullName} </p><br>
       <p><strong>Message: </strong> ${Message} </p><br>
       `,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: "OK" });
}
