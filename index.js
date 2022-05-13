const express=require("express");
const mongoose=require("mongoose");
const app=express();
const authRoute=require("./Routes/auth")
const userRoute=require("./Routes/users")
app.use(express.json())

const connection=()=>{
    try{
        console.log("I am connected");
        return mongoose.connect("mongodb+srv://Blog:Blog@cluster0.vwq2c.mongodb.net/Blog?retryWrites=true&w=majority")
        
    }
    catch(err){
     console.loh("error")
    }
}

app.use("/auth",authRoute)

app.use("/users",userRoute)

app.listen(5000,async()=>{
    try{
        await connection()
        console.log("Listining Port 5000");
    }
    catch(err){
        console.log("error");
    }
})