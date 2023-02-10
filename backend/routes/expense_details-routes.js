import express from "express";
import { getAllExpense , addExpense,  updateExpense, getById, deleteExpense, } from "../controllers/expense_details_controllers";
const ExpenseRouter = express.Router();
 
ExpenseRouter.get("/", getAllExpense);
ExpenseRouter.post("/add",addExpense);
ExpenseRouter.put('/update/:id',updateExpense);
ExpenseRouter.get("/:id", getById);
ExpenseRouter.delete("/:id",deleteExpense);

export default ExpenseRouter;