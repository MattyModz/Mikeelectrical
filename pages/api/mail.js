import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  secure: false,
  port: 587,
  auth: {
    user: "mikewire@hotmail.com",
    pass: "20Birleystreet!",
  },
  requireTLS: true,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  debug: true,
  logger: true,
});

export default async function handler(req, res) {
  const { fullName, Message, SenderEmail } = req.body;

  const emailtemp = {
    from: "mikewire@hotmail.com",
    to: "mikewire@hotmail.com",
    subject: `Contact form submission from ${fullName}`,
    html: `<p>You have a new contact form submission</p><br>
       <p><strong>Email: </strong> ${SenderEmail} </p><br>
      <p><strong>Name: </strong> ${fullName} </p><br>
       <p><strong>Message: </strong> ${Message} </p><br>
       `,
  };

  try {
    const emailRes = await transporter.sendMail(emailtemp);
    console.log("Message Sent", emailRes.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);

    if (err.response) {
      res.status(400).json({
        error: "Failed to send email. Check email content and recipients.",
      });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
