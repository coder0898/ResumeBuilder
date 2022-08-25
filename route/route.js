import express from "express";
import { getSignupDetails, validateLoginDetails, getuserDetails} from "../controller/control.js";
const router = express.Router();

router.post("/signup",getSignupDetails);

router.post("/login", validateLoginDetails);

router.get("/data",getuserDetails);

export default router;