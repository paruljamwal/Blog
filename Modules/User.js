const mongoose=require("mongoose");

//schema

const UserSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    profilePic:{type:String,default:""}
},
{timestamps:true,versionKey:false}
)


module.exports=mongoose.model("User",UserSchema)