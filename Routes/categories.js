
const router =require("express").Router();
const Category = require("../Modules/Category");
  
router.post("/",async(req,res)=>{
    const newCat=  new Category(req.body)
       try {
          const saveCat = await newCat.save() 
           res.status(200).json(saveCat);
       } catch (error) {
           res.status(500).json(error)
       }
})



//get

router.get("/",async(req,res)=>{
    const newCat=  new Category(req.body)
       try {
          const cats = await Category.find() 
           res.status(200).json(cats);
       } catch (error) {
           res.status(500).json(error)
       }



})