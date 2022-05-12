const mongoose=require("mongoose");

//schema

const CategorySchema=new mongoose.Schema({
   name:{type:String,required:true}
},
{timestamps:true,versionKey:false}
)


module.exports=mongoose.model("Category",CategorySchema)