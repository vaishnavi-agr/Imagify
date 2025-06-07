const mongoose=require("mongoose");

const imageSchema=new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    fileName:{
        type:String,

    },
    fileType:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }

})

const imageModel=mongoose.models.Image||mongoose.Model("Image",imageSchema)

module.exports=imageModel;