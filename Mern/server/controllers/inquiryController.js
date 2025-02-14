import Inquiry from "../model/Inquiry.js";

// Submit an inquiry
export const createInquiry = async (req, res) => {
    try {
        const newInquiry = new Inquiry(req.body);
        const savedInquiry = await newInquiry.save();
        res.status(201).json(savedInquiry);
    } catch (error) {
        res.status(500).json({ message: "Error submitting inquiry", error });
    }
};

// Get all inquiries
export const getInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find();
        res.status(200).json(inquiries);
    } catch (error) {
        res.status(500).json({ message: "Error fetching inquiries", error });
    }
};
