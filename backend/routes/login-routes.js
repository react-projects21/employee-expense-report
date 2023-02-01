import express from 'express';
import { getAlluser, login,signup } from '../controllers/login-controllers';

export const router = express.Router();

router.get("/",getAlluser);
router.post("/signup", signup);
router.post("/employeelogin", employeelogin );
export default router;  