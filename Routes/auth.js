//useexpress frame

const router =require("express").Router();

const User=require("../Modules/User")

const bcrypt=require('bcrypt');

//register it takes some time 

router.post("/register",async(req,res)=>{
    try{
      const newUser=new User({
          username:req.body.username,
          email:req.body.email,
          password:req.body.password
      })
      const  user = await newUser.save();
      res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
})

//Login

module.exports=router