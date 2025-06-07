// const { default: axios } = require("axios");
// const userModel = require("../models/userModel");
// const FormData = require("form-data");

// const generateImage = async (req, res) => {
//   try {
//     // const { userId, prompt } = req.body;
//     const { prompt } = req.body;
//     const userId = req.userId;
//     const user = await userModel.findById(userId);

//     if (!user || !prompt) {
//       return res.json({ success: false, message: "Missing Details" });
//     }

//     if (user.creditBalance === 0 || userModel.creditBalance < 0) {
//       return res.json({
//         success: false,
//         message: "No Credit Balance",
//         creditBalance: user.creditBalance,
//       });
//     }

//     const formData = new FormData();
//     formData.append("prompt", prompt);

//     const {data}=await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
//       headers: {
//         "x-api-key": process.env.CLIPDROP_API,
//       },
//       responseType:'arraybuffer'
//     });

//     const base64Image=Buffer.from(data,'binary').toString('base64')
//     const resultImage=`data:image/png;base64,${base64Image}`
//     await userModel.findByIdAndUpdate(user._id,{creditBalance:user.creditBalance-1})

//     res.json({success:true,message:"Image Generated",creditBalance:user.creditBalance-1,resultImage})

//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// }; 

// module.exports = { generateImage };


const { default: axios } = require("axios");
const userModel = require("../models/userModel");
const SharedAccess = require("../models/sharedAccessModel");
const FormData = require("form-data");

// Image Generation Controller
const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.userId;
    const user = await userModel.findById(userId);

    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
      headers: {
        "x-api-key": process.env.CLIPDROP_API,
      },
      responseType: 'arraybuffer'
    });

    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage
    });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Share Image Access Controller
const sendShareEmail = require('../utils/sendEmail');

const shareImageAccess = async (req, res) => {
  try {
    const { imageUrl, email, permission } = req.body;
    const sharedBy = req.userId; // you might want to fetch the user name or email to use in the email content

    if (!imageUrl || !email || !permission) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const alreadyShared = await SharedAccess.findOne({ imageUrl, email });
    if (alreadyShared) {
      return res.json({ success: false, message: "Already shared with this user" });
    }

    const newShare = new SharedAccess({ imageUrl, email, permission, sharedBy });
    await newShare.save();

    // Fetch user details (optional) for better email content
    const user = await userModel.findById(sharedBy);

    // Send email notification
    await sendShareEmail(email, imageUrl, user ? user.name || user.email : "Someone");

    res.json({ success: true, message: "Access shared successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// const shareImageAccess = async (req, res) => {
//   try {
//     console.log("Headers:", req.headers);
//     console.log("Body:", req.body);

//     res.json({ success: true, message: "Received data", body: req.body });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };


module.exports = {
  generateImage,
  shareImageAccess
};

