const express = require("express");

const { registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay } = require("../controllers/userController");
const userAuth = require("../middlewares/auth");

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits',userAuth ,userCredits);
userRouter.post('/pay-razor',userAuth ,paymentRazorpay);
userRouter.post('/verify-razor',verifyRazorpay);

module.exports = userRouter;
