//useexpress frame

const router =require("express").Router();

const User=require("../Modules/User")

const bcrypt=require('bcrypt'); // for hashing password...

//register it takes some time 

router.post("/register",async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10)
        const hashPass=await bcrypt.hash(req.body.password,salt)  //syncfunction 
      const newUser=new User({
          username:req.body.username,
          email:req.body.email,
          password:hashPass
      })
      const  user = await newUser.save();
      res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Login

router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Wrong credentials")
       //pasword compare with hashed paasword
        const validate=await bcrypt.compare(req.body.password,user.password)
         !validate && res.status(400).json("Wrong credentials")
   
          res.status(500).json(user);

        } catch (error) {
        res.status(500).json("err");
    }
})


module.exports=router