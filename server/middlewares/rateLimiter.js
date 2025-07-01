const rateLimit = require("express-rate-limit");

const otpRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 1,
  keyGenerator: (req) => req.body.email,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: "Please wait 1 minute before requesting another OTP.",
    });
  },
});

module.exports = {
  otpRateLimiter,
};
