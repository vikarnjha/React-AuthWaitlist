import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
  name: String,
  email: String,
  
}, { timestamps: true });

const newsletterModel = mongoose.models.newsletter || mongoose.model("newsletter", NewsletterSchema);

export default newsletterModel;