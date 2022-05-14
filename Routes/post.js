//useexpress frame

const router =require("express").Router();

const User=require("../Modules/User");

const Post=require("../Modules/Post");

//register it takes some time 

// create new post

router.post("/",async(req,res)=>{
    const newPost= new Post(req.body);
    try {
        const savePost =await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error)
    }
});


//update post

router.put("/:id",async(req,res)=>{
   try{
        const post=await Post.findById(req.params.id)
        if(post.username===req.body.username){
            try {
                const updatePost=await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body,
                },{new:true})
                res.status(200).json(updatePost)
            } 
            catch (error) {
                res.status(500).json(err)
            }
        }

        else{
          res.status(401).json("You can update only your post")
        }
     
   }
   catch(err){
        res.status(500).json(err)
   }
});

//DELETE post

router.delete("/:id",async(req,res)=>{
    try{
         const post=await Post.findById(req.params.id)
         if(post.username===req.body.username){
             try {
                 await post.delete()
                 res.status(200).json("Post has been delete")
             } 
             catch (error) {
                 res.status(500).json(err)
             }
         }
 
         else{
           res.status(401).json("You can Delete only your post")
         }
      
    }
    catch(err){
         res.status(500).json(err)
    }
 });

//GET POST

router.get("/:id",async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id)
        res.status(200).json(post);
    } catch (error) {
        console.log(error)
    }
})


//GET ALL POSTS

router.get("/",async(req,res)=>{
    const username=req.query.user;
    const catName=req.query.cat;
    try {
      let posts;
      if(username){
          posts=await Post.find({username})
      }
     else if(catName){
          posts=await Post.find({categories:{
              $in:{catName}
          }})
      }
      else{
          posts=await Post.find();
      }

      res.status(200).json(posts)
    } catch (error) {
        console.log(error)
    }
})

module.exports=router