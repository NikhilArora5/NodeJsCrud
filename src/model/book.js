const mongoose=require("mongoose")
const Schema=mongoose.Schema
const User=mongoose.Schema({

    
        authorId:{
            type: Schema.Types.ObjectId,
            ref: "user",
            required:true
        },
        title:{

            type:String,
            required:true,
          
        },
        summary:{
            type:String,
            required:true
        },
        isDeleted:{
            type:Boolean,
            default:false
        },

},{
    timestamps:true
})


module.exports=mongoose.model("book",User)