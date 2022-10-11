import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { fullName, Email, Message, SenderEmail } = req.body;

  const transporter = nodemailer.createTransport({
    service: "hotmail",

    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: Email,
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
