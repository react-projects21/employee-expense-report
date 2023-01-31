import express from "express";
import { addEmployee , updateEmployee , getById , deleteEmployee, getAllEmployee} from "../controllers/student-controller.js";
const employeeRouter = express.Router();
 
employeeRouter.get("/", getAllEmployee);
employeeRouter.post("/add",addEmployee);
employeeRouter.put('/update/:id',updateEmployee);
employeeRouter.get("/:id", getById);
employeeRouter.delete("/:id",deleteEmployee);

export default employeeRouter;