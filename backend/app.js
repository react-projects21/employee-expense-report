import express from "express";
import mongoose from "mongoose";
import router from "./routes/login-routes";


const url = 'mongodb:27017/localhost/EmployeeExpenseDB'
const app= express();
app.use(express.json());
app.use("/api/user",router); //http://localhost:5000/api/user/ next move on postman

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/EmployeeExpenseDB')
.then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });
    app.listen(5000, ()=>{console.log("server start")})

// app.use("/api",(req,res,next)=>{
//     res.send("hello rakesh")
// })

// app.listen(5000);