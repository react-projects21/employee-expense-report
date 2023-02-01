import express from "express";
import mongoose from "mongoose";

const app = express();

const url = 'mongodb:27017/localhost/EmployeeExpenseDB'
const app= express();
app.use(express.json());

app.listen(5000);