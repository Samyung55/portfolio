const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "yungdml31@gmail.com",
    pass: "Success5584", 
  },
});

app.post("/send-notification", (req, res) => {
  const { email } = req.body;

  // Email content
  const mailOptions = {
    from: `${email}`,
    to: "yungdml31@gmail.com", // Your email address
    subject: "New Newsletter Subscription",
    text: `A new user subscribed with the email address: ${email}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Email not sent" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ success: true, message: "Email sent" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
