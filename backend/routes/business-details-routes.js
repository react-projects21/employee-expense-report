import express from "express";
import { addBusinessExp  , updatebusinessExp , getById , deletebusinessExp, getEveryEmployeeDetails} from "../controllers/business_details_controller";
const BusinessRouter = express.Router();
 
BusinessRouter.get("/", getEveryEmployeeDetails);
BusinessRouter.post("/add",addBusinessExp );
BusinessRouter.put('/update/:id',updatebusinessExp);
BusinessRouter.get("/:id", getById);
BusinessRouter.delete("/:id",deletebusinessExp);

export default BusinessRouter;  