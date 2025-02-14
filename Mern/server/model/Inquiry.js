import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    eventType: { type: String, required: true },
    eventDate: { type: Date, required: true },
    venueLocation: { type: String, required: true },
    estimatedHeadcount: { type: Number, required: true },
    residence: { type: String, required: true },
    budget: { type: String },
    howDidYouHear: { type: String },
    additionalInfo: { type: String },
}, { timestamps: true });

export default mongoose.model("Inquiry", InquirySchema);
