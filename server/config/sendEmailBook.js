import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const sendDemoEmail = async ({
  firstName,
  lastName,
  email,
  phone,
  designation,
  city,
  schoolName,
  preferredDate,
  preferredTime,
  requirement
}) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Book Demo Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,           // Email goes to admin
    replyTo: email,                     // Allows admin to reply to the user
    subject: `📝 New Demo Booking from ${firstName} ${lastName}`,
    text: `
🔔 A new demo has been booked via the website:

👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📱 Phone: ${phone}
🎓 Designation: ${designation}
🏫 School Name: ${schoolName}
🏙️ City: ${city}
📅 Preferred Date: ${preferredDate}
⏰ Preferred Time: ${preferredTime}

📝 Requirement:
${requirement}

🔗 Please follow up with the user via their email or phone.
    `,
  };

  await transporter.sendMail(mailOptions);
};
