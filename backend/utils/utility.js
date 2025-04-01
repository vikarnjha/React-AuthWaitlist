import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, name) => {
  try {
    const emailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
          .container { max-width: 600px; background: #fff; padding: 20px; border-radius: 10px; text-align: center; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
          .header { background-color: #007bff; color: white; padding: 15px; font-size: 24px; font-weight: bold; border-radius: 10px 10px 0 0; }
          .content { padding: 20px; font-size: 18px; color: #333; }
          .footer { margin-top: 20px; font-size: 14px; color: #777; }
          .button { background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
          .button:hover { background: #0056b3; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">Welcome to Our Newsletter!</div>
          <div class="content">
            <p>Hello <strong>${name}</strong>,</p>
            <p>Thank you for joining our newsletter! We are excited to have you on board.</p>
            <p>Stay tuned for updates, special offers, and insightful content delivered right to your inbox.</p>
            <a href="#" class="button">Explore More</a>
          </div>
          <div class="footer">&copy; 2025 Your Company. All rights reserved.</div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: "Thank you for joining our newsletter!",
      html: emailTemplate,
    };
    
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export { sendEmail };