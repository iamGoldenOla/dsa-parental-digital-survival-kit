import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  const { name, email, subject, message } = data;

  // Email content
  const mailOptions = {
    from: `"DSA Parent Kit" <${process.env.SMTP_FROM}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `Contact Form: ${subject}`,
    text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `,
    html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  // Send confirmation email to the user
  const confirmationMailOptions = {
    from: `"DSA Parent Kit" <${process.env.SMTP_FROM}>`,
    to: email,
    subject: "Thank you for contacting DSA Parent Kit",
    text: `
Dear ${name},

Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.

Your message details:
Subject: ${subject}
Message: ${message}

Best regards,
DSA Parent Kit Team
    `,
    html: `
<h2>Thank You for Contacting Us</h2>
<p>Dear ${name},</p>
<p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
<h3>Your Message Details:</h3>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
<p>Best regards,<br>DSA Parent Kit Team</p>
    `,
  };

  try {
    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationMailOptions),
    ]);
    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error: "Failed to send email" };
  }
}
