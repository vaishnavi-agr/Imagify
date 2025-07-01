const express = require("express");
const { registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay } = require("../controllers/userController");
const userAuth = require("../middlewares/auth");
const { sendOtp, verifyOtp } = require("../controllers/otpController");
const { otpRateLimiter } = require("../middlewares/rateLimiter");
const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits',userAuth ,userCredits);
userRouter.post('/pay-razor',userAuth ,paymentRazorpay);
userRouter.post('/verify-razor',verifyRazorpay);
userRouter.post("/send-otp", otpRateLimiter, sendOtp);
userRouter.post("/verify-otp", verifyOtp);


module.exports = userRouter;
