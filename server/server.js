const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('../server/config/mongodb');
const userRouter = require('./routes/userRoutes');
const imageRouter = require('./routes/imageRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// ✅ Set payload size limit BEFORE routers
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

app.use(cors());

connectDB();

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // quick test script
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  try {
   await resend.emails.send({
  from: "onboarding@resend.dev", // allowed in test mode
  to: "gvaishnavi069@gmail.com", // must match your Resend account email
  subject: "Test Email",
  html: "<p>This is a test email</p>",
});


    console.log("Test email sent");
  } catch (error) {
    console.error("Test email failed", error);
  }
}

testEmail();

});
