import express from "express";
import { addEmployee , updateEmployee , getById , deleteEmployee, getAllEmployes} from "../controllers/employee_maintainence-controller";
const maintainenceRouter = express.Router();
 
maintainenceRouter.get("/", getAllEmployes);
maintainenceRouter.post("/add",addEmployee);
maintainenceRouter.put('/update/:id',updateEmployee);
maintainenceRouter.get("/:id", getById);
maintainenceRouter.delete("/:id",deleteEmployee);

export default maintainenceRouter;