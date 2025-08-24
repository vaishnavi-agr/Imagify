# Imagify – AI Image Generator with Credit-Based Access

Imagify is a full-stack AI image generation platform built using the MERN stack. It allows users to generate images using the ClipDrop API, manage usage with a credit-based system, and securely share images via OTP-protected email verification.

---

## 🚀 Features

- 🎨 AI-powered image generation using the ClipDrop API
- 🔐 User authentication with JWT
- 🔄 OTP-based email verification for image access via Resend API
- 💳 Razorpay integration for credit purchases
- 🧮 Credit-based system to limit and manage image generation
- 🖍️ Image text annotation with customizable font, size, and color
- ✉️ Role-based sharing with email access control

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Context API

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for authentication
- Resend API (for OTP)
- Razorpay API (for payments)

---

## ⚙️ Setup Instructions

# 1. Clone the repository
git clone https://github.com/vaishnavi-agr/Imagify.git
cd Imagify

# 2. Install frontend dependencies
cd client/vite-project
npm install

# 3. Install backend dependencies
cd ../../server
npm install

# 4. Create your .env file in the server folder
New-Item -Path . -Name ".env" -ItemType "File"
notepad .env  # Add your environment variables in Notepad

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RESEND_API_KEY=your_resend_api_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret


# ▶️ Running the App
In two separate PowerShell windows:

# PowerShell Window 1: Start Backend
cd D:\Imagify\server
npm start 

# PowerShell Window 2: Start Frontend
cd D:\Imagify\client\vite-project
npm run dev

# ✨ Future Enhancements
Add user image history and download logs
Multi-language support
Admin dashboard for analytics
