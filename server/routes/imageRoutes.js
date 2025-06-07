const express=require("express")
const{generateImage, shareImageAccess}=require("../controllers/imageController")
const userAuth = require("../middlewares/auth")

const imageRouter=express.Router()

imageRouter.post('/generate-image',userAuth,generateImage)

imageRouter.post('/share-image',userAuth,shareImageAccess)

module.exports=imageRouter;