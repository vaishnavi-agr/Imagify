const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const sendShareEmail = async (email, imageUrl, sharedBy) => {
  try {
    await resend.emails.send({
      from: "gvaishnavi069@gmail.com",
      to: email,
      subject: "Hey, look at the amazing image!",
      html: `
        <p>Hello,</p>
        <p>${sharedBy} has shared an image with you.</p>
        <p>Click <a href="${imageUrl}" target="_blank" rel="noopener noreferrer">here</a> to view it.</p>
        <p>Thanks,<br/>Imagify Team</p>
      `,
    });
  } catch (error) {
  console.error("Failed to send email", error);


  }
};

module.exports = sendShareEmail;
