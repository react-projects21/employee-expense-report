import express from "express";
import mongoose from "mongoose";
import router from "./routes/login-routes";///login
import maintainenceRouter from "./routes/employee_maintainence-routes";//main
import ExpenseRouter from "./routes/expense_details-routes";//exp
import BusinessRouter from "./routes/business-details-routes";//bus
import DetailsRouter from "./routes/employee_details-routes";//details




const url = 'mongodb:27017/localhost/EmployeeExpenseDB'
const app= express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/employee_main",maintainenceRouter);
app.use("/api/employee_details",DetailsRouter);
app.use ("/api/business_details",BusinessRouter) 
app.use ("/api/expense_details",ExpenseRouter)//http://localhost:5000/api/user/ next move on postman

app.use("/api/login", router) ;
//app.use("/api/employee_maintainence", employeerouter) ;
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