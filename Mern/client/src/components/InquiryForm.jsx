import React, { useState } from "react";
import axios from "axios";
import "./InquiryForm.css"
const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", eventType: "", eventDate: "",
        venueLocation: "", estimatedHeadcount: "", residence: "",
        budget: "", howDidYouHear: "", additionalInfo: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("dtahgvfdcfvhgbj")
            await axios.post("http://localhost:5004/api/inquiry", formData);
            alert("Inquiry submitted successfully!");
            setFormData({
                name: "", email: "", phone: "", eventType: "", eventDate: "",
                venueLocation: "", estimatedHeadcount: "", residence: "",
                budget: "", howDidYouHear: "", additionalInfo: "",
            });
        } catch (error) {
            alert("Error submitting inquiry");
        }
    };
   

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required onChange={handleChange} value={formData.name} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
            <input type="text" name="phone" placeholder="Phone" required onChange={handleChange} value={formData.phone} />
            <input type="text" name="eventType" placeholder="Event Type" required onChange={handleChange} value={formData.eventType} />
            <input type="date" name="eventDate" required onChange={handleChange} value={formData.eventDate} />
            <input type="text" name="venueLocation" placeholder="Venue Location" required onChange={handleChange} value={formData.venueLocation} />
            <input type="number" name="estimatedHeadcount" placeholder="Estimated Headcount" required onChange={handleChange} value={formData.estimatedHeadcount} />
            <input type="text" name="residence" placeholder="Where do you reside?" required onChange={handleChange} value={formData.residence} />
            <input type="text" name="budget" placeholder="Have a budget in mind?" onChange={handleChange} value={formData.budget} />
            <input type="text" name="howDidYouHear" placeholder="How did you hear about us?" onChange={handleChange} value={formData.howDidYouHear} />
            <textarea name="additionalInfo" placeholder="Share any information or inspiration" onChange={handleChange} value={formData.additionalInfo}></textarea>
            <button type="submit">Submit Inquiry</button>
        </form>
    );
};

export default InquiryForm;
