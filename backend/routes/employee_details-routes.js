import express from "express";
import { getEveryEmployeeDetails,addEmployee,updateEmployee,getById,deleteEmployee} from "../controllers/employee_details_controller";
const DetailsRouter = express.Router();
 
DetailsRouter.get("/", getEveryEmployeeDetails);
DetailsRouter.post("/add",addEmployee);
DetailsRouter.put('/update/:id',updateEmployee);
DetailsRouter.get("/:id", getById);
DetailsRouter.delete("/:id",deleteEmployee);

export default DetailsRouter;