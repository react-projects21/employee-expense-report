import express from 'express';
import { getAlluser, signup } from '../controllers/login-controllers';

const router = express.Router();

router.get("/",getAlluser);
router.post("/signup", signup);
//router.post("/login",login );
export default router;