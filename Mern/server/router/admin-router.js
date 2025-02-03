import express from  "express"
import {Router} from "express"
import {getAllUsers} from "../controllers/admin-controller.js"
const router=express.Router();
router.route("/users").get(getAllUsers)
export const admin_router=router;