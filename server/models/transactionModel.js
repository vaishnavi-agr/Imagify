const mongoose=require("mongoose");

const transactionSchema=new mongoose.Schema({
   userId:{
    type:String,
    required:true
    },
    plan:{
    type:String,
    required:true
    },
    amount:{
    type:Number,
    required:true
    },
    credits:{
    type:Number,
    required:true
    },
    payment:{
    type:Boolean,
    default:false
    },
    date:{
    type:Number,
    required:true
    }
})

const transactionModel= mongoose.models.transaction || mongoose.model("transaction",transactionSchema)

module.exports=transactionModel;