import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const sendEmail = async ({ name, email, phone, message, course }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // your Gmail
      pass: process.env.EMAIL_PASS,  // Gmail app password
    },
  });

  const mailOptions = {
    from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,  // safe sender
    to: process.env.EMAIL_TO, // admin receiver
    replyTo: email, // so admin can directly reply to the user
    subject: `📩 New Inquiry for ${course}`,
    text: `
🧑 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
📘 Course Interested: ${course}

📝 Message:
${message}
    `,
  };

  await transporter.sendMail(mailOptions);
};
