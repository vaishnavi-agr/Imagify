const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const sendOtpEmail = async (toEmail, otp) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      //still my domain is n't verified for sample  "Imagify <noreply@yourdomain.com>"
      to: toEmail,
      subject: "Your Imagify OTP",
      html: `<p>Your OTP code is: <strong>${otp}</strong></p>`,
    });
  } catch (error) {
    console.error("Failed to send OTP email", error);
    throw error;
  }
};

module.exports = sendOtpEmail;
