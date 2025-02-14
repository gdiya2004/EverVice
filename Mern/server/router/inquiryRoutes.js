import express from "express";
import { createInquiry, getInquiries } from "../controllers/inquiryController.js";

const router = express.Router();

router.post("/inquiry", createInquiry);
router.get("/inquiries", getInquiries);

export default router;
