// import React, { useState, useContext } from 'react'
// import { assets } from '../assets/assets'
// import {motion} from 'framer-motion'
// import { AppContext } from "../context/AppContext"

// const Result = () => {
//   const [image,setImage]=useState(assets.sample_img_1)
//   const [isImageLoaded,setIsImageLoaded] =useState(false)
//   const [loading,setLoading]=useState(false)
//   const [input,setInput]=useState('')
//   const onSubmitHandler=async(e)=>{
//     e.preventDefault();
//     setLoading(true)

//     if(input)
//     {
//       const image=await generateImage(input)
//       if(image)
//       {
//         setIsImageLoaded(true)
//         setImage(image)
//       }
//     }
//     setLoading(false)
//   }

//   const {generateImage}=useContext(AppContext)

//   return (
//     <motion.form
//     initial={{ opacity: 0.2, y: 100 }}
//       transition={{ duration: 1 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//     onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'>
//     <div>
//       <div className='relative'>
//           <img src={image} className='max-w-sm rounded my-13' alt="" />
//           <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading? 'w-full transition-all duration-[10s]':'w-0'}`}/>

//       </div>

//       <p className={`-translate-y-6 text-center ${!loading ? 'hidden' : ''}`}>Loading.....</p>

//     </div>
//     {!isImageLoaded &&
//     <div className='flex w-full placeholder-color max-w-xl bg-neutral-500 text-white text-sm p-0.5 rounded-full'>
//         <input onChange={e=>setInput(e.target.value)} value={input}type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20'/>
//         <button type="submit" className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>Generate</button>
//       </div>
// }
// {isImageLoaded&&
//       <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
//         <p onClick={()=>{setIsImageLoaded(false)}} className='bg-transparent border border-zinc-900
// text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
//         <a href={image} download="generated-image.png" className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
//       </div>
// }
//         </motion.form>
//   )
// }

// export default Result

// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";

// const Result = () => {
//   const [image, setImage] = useState(assets.sample_img_1);
//   const [isImageLoaded, setIsImageLoaded] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [input, setInput] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [overlayText, setOverlayText] = useState("");
//   const [fontFamily, setFontFamily] = useState("sans-serif");
//   const [fontSize, setFontSize] = useState(16);
//   const [fontColor, setFontColor] = useState("#ffffff");
//   const [bgColor, setBgColor] = useState("transparent");

//   const { generateImage } = useContext(AppContext);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     if (input) {
//       const generated = await generateImage(input);
//       if (generated) {
//         setIsImageLoaded(true);
//         setImage(generated);
//       }
//     }
//     setLoading(false);
//   };

//   return (
//     <motion.form
//       initial={{ opacity: 0.2, y: 100 }}
//       transition={{ duration: 1 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       onSubmit={onSubmitHandler}
//       className="flex flex-col min-h-[90vh] justify-center items-center"
//     >
//       <div>
//         <div className="relative">
//           <img src={image} className="max-w-sm rounded my-13" alt="Generated" />
//           {loading && (
//             <span className="absolute bottom-0 left-0 h-1 bg-blue-500 animate-[loadingBar_10s_linear]" />
//           )}

//           {editMode && (
//             <p
//               className="absolute bottom-4 w-full text-center break-words px-2"
//               style={{
//                 fontFamily,
//                 fontSize: `${fontSize}px`,
//                 color: fontColor,
//                 backgroundColor: bgColor,
//               }}
//             >
//               {overlayText}
//             </p>
//           )}
//         </div>

//         {loading && (
//           <p className={`-translate-y-6 text-center ${!loading ? "hidden" : ""}`}>
//             Loading.....
//           </p>
//         )}
//       </div>

//       {!isImageLoaded && (
//         <div className="flex w-full placeholder-color max-w-xl bg-neutral-500 text-white text-sm p-0.5 rounded-full mt-4">
//           <input
//             onChange={(e) => setInput(e.target.value)}
//             value={input}
//             type="text"
//             placeholder="Describe what you want to generate"
//             className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
//           />
//           <button
//             type="submit"
//             className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
//           >
//             Generate
//           </button>
//         </div>
//       )}

//       {isImageLoaded && (
//         <>
//           <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
//             <p
//               onClick={() => setIsImageLoaded(false)}
//               className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
//             >
//               Generate Another
//             </p>
//             <a
//               href={image}
//               download="generated-image.png"
//               className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
//             >
//               Download
//             </a>
//             <button
//               type="button"
//               onClick={() => setEditMode(true)}
//               className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
//             >
//               Edit
//             </button>
//           </div>

//           {/* Share buttons */}
//           <div className="flex gap-2 flex-wrap justify-center mt-4">
//             <button
//               type="button"
//               className="bg-green-500 px-6 py-2 rounded-full text-white"
//               onClick={() => {
//                 const url = `https://wa.me/?text=${encodeURIComponent(
//                   "Check out this image: " + image
//                 )}`;
//                 window.open(url, "_blank");
//               }}
//             >
//               Share on WhatsApp
//             </button>

//             <button
//               type="button"
//               className="bg-pink-600 px-6 py-2 rounded-full text-white"
//               onClick={() => {
//                 alert(
//                   "Instagram doesn't support direct web sharing. Please download the image and share it manually on Instagram."
//                 );
//               }}
//             >
//               Share on Instagram
//             </button>
//           </div>
//         </>
//       )}

//       {editMode && (
//         <div className="flex flex-col gap-4 mt-6 text-sm text-black bg-white p-4 rounded-xl">
//           <input
//             type="text"
//             placeholder="Enter overlay text"
//             value={overlayText}
//             onChange={(e) => setOverlayText(e.target.value)}
//             className="border px-2 py-1 rounded"
//           />
//           <select
//             value={fontFamily}
//             onChange={(e) => setFontFamily(e.target.value)}
//             className="border px-2 py-1 rounded"
//           >
//             <option value="sans-serif">Sans Serif</option>
//             <option value="serif">Serif</option>
//             <option value="monospace">Monospace</option>
//             <option value="cursive">Cursive</option>
//           </select>
//           <input
//             type="number"
//             min="10"
//             max="100"
//             value={fontSize}
//             onChange={(e) => setFontSize(Number(e.target.value))}
//             className="border px-2 py-1 rounded"
//           />
//           <div className="flex gap-4 items-center">
//             <label>Text Color:</label>
//             <input
//               type="color"
//               value={fontColor}
//               onChange={(e) => setFontColor(e.target.value)}
//             />
//             <label>Background:</label>
//             <input
//               type="color"
//               value={bgColor}
//               onChange={(e) => setBgColor(e.target.value)}
//             />
//           </div>
//           <button
//             type="button"
//             onClick={() => setEditMode(false)}
//             className="bg-zinc-900 text-white px-4 py-2 rounded-full"
//           >
//             Done
//           </button>
//         </div>
//       )}
//     </motion.form>
//   );
// };

// export default Result;



// 
// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// // const backendUrl = "https://your-backend-url.com"; // <-- Replace with your real backend URL


// const Result = () => {
//   const [image, setImage] = useState({ url: assets.sample_img_1, id: null });
//   const [isImageLoaded, setIsImageLoaded] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [input, setInput] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [shareMode, setShareMode] = useState(false);
//   const [overlayText, setOverlayText] = useState("");
//   const [fontFamily, setFontFamily] = useState("sans-serif");
//   const [fontSize, setFontSize] = useState(16);
//   const [fontColor, setFontColor] = useState("#ffffff");
//   const [bgColor, setBgColor] = useState("transparent");
//   const [shareEmail, setShareEmail] = useState("");
//   const [sharePermission, setSharePermission] = useState("view");

//   const { generateImage, backendUrl } = useContext(AppContext);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!input.trim()) {
//       toast.error("Please enter a description.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const generated = await generateImage(input); // Expected: { url, id }

//       if (generated?.url) {
//         setImage(generated);
//         setIsImageLoaded(true);
//       } else {
//         toast.error("Failed to generate image.");
//       }
//     } catch (err) {
//       console.error("Error generating image:", err);
//       toast.error("An error occurred while generating the image.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleShare = async () => {
//     const token = localStorage.getItem("token");

//     if (!shareEmail.trim()) {
//       toast.error("Please enter the recipient's email.");
//       return;
//     }

//     if (!image?.id) {
//       toast.error("Image not available to share.");
//       return;
//     }

//     try {
//       const { data } = await axios.post(
//         `${backendUrl}/api/image/share-image`,
//         {
//           imageId: image.id,
//           email: shareEmail,
//           permission: sharePermission,
//         },
//         {
//           headers: { token },
//         }
//       );

//       if (data.success) {
//         toast.success(data.message || "Access link sent successfully!");
//         setShareEmail("");
//         setSharePermission("view");
//         setShareMode(false);
//       } else {
//         toast.error(data.message || "Failed to send access link.");
//       }
//     } catch (err) {
//       console.error("Share error:", err);
//       toast.error(
//         err.response?.data?.message ||
//           "An error occurred while sharing the image."
//       );
//     }
//   };

//   return (
//     <motion.form
//       initial={{ opacity: 0.2, y: 100 }}
//       transition={{ duration: 1 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       onSubmit={onSubmitHandler}
//       className="flex flex-col min-h-[90vh] justify-center items-center"
//     >
//       <div>
//         <div className="relative">
//           <img
//             src={image.url}
//             className="max-w-sm rounded my-13"
//             alt="Generated"
//           />
//           {loading && (
//             <span className="absolute bottom-0 left-0 h-1 bg-blue-500 animate-[loadingBar_10s_linear]" />
//           )}
//           {editMode && (
//             <p
//               className="absolute bottom-4 w-full text-center break-words px-2"
//               style={{
//                 fontFamily,
//                 fontSize: `${fontSize}px`,
//                 color: fontColor,
//                 backgroundColor: bgColor,
//               }}
//             >
//               {overlayText}
//             </p>
//           )}
//         </div>

//         {loading && (
//           <p className="-translate-y-6 text-center">Loading.....</p>
//         )}
//       </div>

//       {!isImageLoaded && (
//         <div className="flex w-full placeholder-color max-w-xl bg-neutral-500 text-white text-sm p-0.5 rounded-full mt-4">
//           <input
//             onChange={(e) => setInput(e.target.value)}
//             value={input}
//             type="text"
//             placeholder="Describe what you want to generate"
//             className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
//           />
//           <button
//             type="submit"
//             className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
//           >
//             Generate
//           </button>
//         </div>
//       )}

//       {isImageLoaded && (
//         <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
//           <p
//             onClick={() => {
//               setIsImageLoaded(false);
//               setEditMode(false);
//               setShareMode(false);
//               setOverlayText("");
//             }}
//             className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
//           >
//             Generate Another
//           </p>
//           <a
//             href={image.url}
//             download="generated-image.png"
//             className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
//           >
//             Download
//           </a>
//           <button
//             type="button"
//             onClick={() => {
//               setEditMode(true);
//               setShareMode(false);
//             }}
//             className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
//           >
//             Edit
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               setShareMode(true);
//               setEditMode(false);
//             }}
//             className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
//           >
//             Share
//           </button>
//         </div>
//       )}

//       {/* Edit Panel */}
//       {editMode && (
//         <div className="flex flex-col gap-4 mt-6 text-sm text-black bg-white p-4 rounded-xl">
//           <input
//             type="text"
//             placeholder="Enter overlay text"
//             value={overlayText}
//             onChange={(e) => setOverlayText(e.target.value)}
//             className="border px-2 py-1 rounded"
//           />
//           <select
//             value={fontFamily}
//             onChange={(e) => setFontFamily(e.target.value)}
//             className="border px-2 py-1 rounded"
//           >
//             <option value="sans-serif">Sans Serif</option>
//             <option value="serif">Serif</option>
//             <option value="monospace">Monospace</option>
//             <option value="cursive">Cursive</option>
//           </select>
//           <input
//             type="number"
//             min="10"
//             max="100"
//             value={fontSize}
//             onChange={(e) => setFontSize(Number(e.target.value))}
//             className="border px-2 py-1 rounded"
//           />
//           <div className="flex gap-4 items-center">
//             <label>Text Color:</label>
//             <input
//               type="color"
//               value={fontColor}
//               onChange={(e) => setFontColor(e.target.value)}
//             />
//             <label>Background:</label>
//             <input
//               type="color"
//               value={bgColor}
//               onChange={(e) => setBgColor(e.target.value)}
//             />
//           </div>
//           <button
//             type="button"
//             onClick={() => setEditMode(false)}
//             className="bg-zinc-900 text-white px-4 py-2 rounded-full"
//           >
//             Done
//           </button>
//         </div>
//       )}

//       {/* Share Panel */}
//       {shareMode && (
//         <div className="flex flex-col gap-4 mt-6 text-sm text-black bg-white p-4 rounded-xl">
//           <input
//             type="email"
//             placeholder="Enter recipient's email"
//             value={shareEmail}
//             onChange={(e) => setShareEmail(e.target.value)}
//             className="border px-2 py-1 rounded"
//           />
//           <select
//             value={sharePermission}
//             onChange={(e) => setSharePermission(e.target.value)}
//             className="border px-2 py-1 rounded"
//           >
//             <option value="view">View Only</option>
//             <option value="edit">Can Edit</option>
//           </select>
//           <button
//             type="button"
//             onClick={handleShare}
//             className="bg-zinc-900 text-white px-4 py-2 rounded-full"
//           >
//             Send Access Link
//           </button>
//         </div>
//       )}
//     </motion.form>
//   );
// };

// export default Result;






// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";

// const Result = () => {
//   const [image, setImage] = useState(assets.sample_img_1);
//   const [isImageLoaded, setIsImageLoaded] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [input, setInput] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [shareMode, setShareMode] = useState(false);
//   const [overlayText, setOverlayText] = useState("");
//   const [fontFamily, setFontFamily] = useState("sans-serif");
//   const [fontSize, setFontSize] = useState(16);
//   const [fontColor, setFontColor] = useState("#ffffff");
//   const [bgColor, setBgColor] = useState("transparent");

//   const { generateImage } = useContext(AppContext);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     if (input) {
//       const generated = await generateImage(input);
//       if (generated) {
//         setIsImageLoaded(true);
//         setImage(generated);
//       }
//     }
//     setLoading(false);
//   };

//   return (
//     <motion.form
//       initial={{ opacity: 0.2, y: 100 }}
//       transition={{ duration: 1 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       onSubmit={onSubmitHandler}
//       className="flex flex-col min-h-[90vh] justify-center items-center"
//     >
//       <div>
//         <div className="relative">
//           <img src={image} className="max-w-sm rounded my-13" alt="Generated" />
//           {loading && (
//             <span className="absolute bottom-0 left-0 h-1 bg-blue-500 animate-[loadingBar_10s_linear]" />
//           )}

//           {editMode && (
//             <p
//               className="absolute bottom-4 w-full text-center break-words px-2"
//               style={{
//                 fontFamily,
//                 fontSize: `${fontSize}px`,
//                 color: fontColor,
//                 backgroundColor: bgColor,
//               }}
//             >
//               {overlayText}
//             </p>
//           )}
//         </div>

//         {loading && (
//           <p className={`-translate-y-6 text-center ${!loading ? "hidden" : ""}`}>
//             Loading.....
//           </p>
//         )}
//       </div>

//       {!isImageLoaded && (
//         <div className="flex w-full placeholder-color max-w-xl bg-neutral-500 text-white text-sm p-0.5 rounded-full mt-4">
//           <input
//             onChange={(e) => setInput(e.target.value)}
//             value={input}
//             type="text"
//             placeholder="Describe what you want to generate"
//             className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
//           />
//           <button
//             type="submit"
//             className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
//           >
//             Generate
//           </button>
//         </div>
//       )}

//       {isImageLoaded && (
//         <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
//           <p
//             onClick={() => {
//               setIsImageLoaded(false);
//               setEditMode(false);
//               setShareMode(false);
//             }}
//             className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
//           >
//             Generate Another
//           </p>
//           <a
//             href={image}
//             download="generated-image.png"
//             className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
//           >
//             Download
//           </a>
//           <button
//             type="button"
//             onClick={() => {
//               setEditMode(true);
//               setShareMode(false);
//             }}
//             className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
//           >
//             Edit
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               setShareMode(true);
//               setEditMode(false);
//             }}
//             className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
//           >
//             Share
//           </button>
//         </div>
//       )}

//       {/* Edit Panel */}
//       {editMode && (
//         <div className="flex flex-col gap-4 mt-6 text-sm text-black bg-white p-4 rounded-xl">
//           <input
//             type="text"
//             placeholder="Enter overlay text"
//             value={overlayText}
//             onChange={(e) => setOverlayText(e.target.value)}
//             className="border px-2 py-1 rounded"
//           />
//           <select
//             value={fontFamily}
//             onChange={(e) => setFontFamily(e.target.value)}
//             className="border px-2 py-1 rounded"
//           >
//             <option value="sans-serif">Sans Serif</option>
//             <option value="serif">Serif</option>
//             <option value="monospace">Monospace</option>
//             <option value="cursive">Cursive</option>
//           </select>
//           <input
//             type="number"
//             min="10"
//             max="100"
//             value={fontSize}
//             onChange={(e) => setFontSize(Number(e.target.value))}
//             className="border px-2 py-1 rounded"
//           />
//           <div className="flex gap-4 items-center">
//             <label>Text Color:</label>
//             <input
//               type="color"
//               value={fontColor}
//               onChange={(e) => setFontColor(e.target.value)}
//             />
//             <label>Background:</label>
//             <input
//               type="color"
//               value={bgColor}
//               onChange={(e) => setBgColor(e.target.value)}
//             />
//           </div>
//           <button
//             type="button"
//             onClick={() => setEditMode(false)}
//             className="bg-zinc-900 text-white px-4 py-2 rounded-full"
//           >
//             Done
//           </button>
//         </div>
//       )}

//       {/* Share Panel */}
//       {shareMode && (
//         <div className="flex flex-col gap-4 mt-6 text-sm text-black bg-white p-4 rounded-xl">
//           <input
//             type="email"
//             placeholder="Enter recipient's email"
//             className="border px-2 py-1 rounded"
//           />
//           <select className="border px-2 py-1 rounded">
//             <option value="view">View Only</option>
//             <option value="edit">Can Edit</option>
//           </select>
//           <button
//             type="button"
//             className="bg-zinc-900 text-white px-4 py-2 rounded-full"
//           >
//             Send Access Link
//           </button>
//         </div>
//       )}
//     </motion.form>
//   );
// };

// export default Result;

import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [shareMode, setShareMode] = useState(false);
  const [overlayText, setOverlayText] = useState("");
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("transparent");

  const [shareEmail, setShareEmail] = useState("");
  const [sharePermission, setSharePermission] = useState("view");

  const { generateImage, backendURL } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input.trim()) {
      const generated = await generateImage(input.trim());
      if (generated) {
        setImage(generated); // Assuming it's a URL string
        setIsImageLoaded(true);
      } else {
        toast.error("Failed to generate image.");
      }
    }
    setLoading(false);
  };

  const handleShare = async () => {
    const token = localStorage.getItem("token");

    if (!shareEmail.trim()) {
      toast.error("Please enter the recipient's email.");
      return;
    }

    try {
      const { data } = await axios.post(
        backendURL+"/api/image/share-image",
        {
          imageUrl: image, // using URL instead of ID
          email: shareEmail,
          permission: sharePermission,
        },
        {
          headers: { token },
        }
      );
      console.log("Sharing image", { imageUrl: image, email: shareEmail, permission: sharePermission });

      if (data.success) {
        toast.success(data.message || "Access link sent successfully!");
        setShareEmail("");
        setSharePermission("view");
        setShareMode(false);
      } else {
        toast.error(data.message || "Failed to send access link.");
      }
    } catch (err) {
      console.error("Share error:", err);
      toast.error(
        err.response?.data?.message ||
          "An error occurred while sharing the image."
      );
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img src={image} className="max-w-sm rounded my-13" alt="Generated" />
          {loading && (
            <span className="absolute bottom-0 left-0 h-1 bg-blue-500 animate-[loadingBar_10s_linear]" />
          )}
          {editMode && (
            <p
              className="absolute bottom-4 w-full text-center break-words px-2"
              style={{
                fontFamily,
                fontSize: `${fontSize}px`,
                color: fontColor,
                backgroundColor: bgColor,
              }}
            >
              {overlayText}
            </p>
          )}
        </div>

        {loading && (
          <p className="-translate-y-6 text-center">Loading.....</p>
        )}
      </div>

      {!isImageLoaded && (
        <div className="flex w-full placeholder-color max-w-xl bg-neutral-500 text-white text-sm p-0.5 rounded-full mt-4">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => {
              setIsImageLoaded(false);
              setEditMode(false);
              setShareMode(false);
            }}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            href={image}
            download="generated-image.png"
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
          <button
            type="button"
            onClick={() => {
              setEditMode(true);
              setShareMode(false);
            }}
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => {
              setShareMode(true);
              setEditMode(false);
            }}
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Share
          </button>
        </div>
      )}

      {/* Edit Panel */}
      {editMode && (
        <div className="flex flex-col gap-4 mt-6 text-sm text-black bg-white p-4 rounded-xl">
          <input
            type="text"
            placeholder="Enter overlay text"
            value={overlayText}
            onChange={(e) => setOverlayText(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="sans-serif">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
            <option value="cursive">Cursive</option>
          </select>
          <input
            type="number"
            min="10"
            max="100"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="border px-2 py-1 rounded"
          />
          <div className="flex gap-4 items-center">
            <label>Text Color:</label>
            <input
              type="color"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
            />
            <label>Background:</label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => setEditMode(false)}
            className="bg-zinc-900 text-white px-4 py-2 rounded-full"
          >
            Done
          </button>
        </div>
      )}

      {/* Share Panel */}
      {shareMode && (
        <div className="flex flex-col gap-4 mt-6 text-sm text-black bg-white p-4 rounded-xl">
          <input
            type="email"
            placeholder="Enter recipient's email"
            value={shareEmail}
            onChange={(e) => setShareEmail(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <select
            value={sharePermission}
            onChange={(e) => setSharePermission(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="view">View Only</option>
            <option value="edit">Can Edit</option>
          </select>
          <button
            type="button"
            onClick={handleShare}
            className="bg-zinc-900 text-white px-4 py-2 rounded-full"
          >
            Send Access Link
          </button>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
