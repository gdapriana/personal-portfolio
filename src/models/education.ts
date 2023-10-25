import mongoose, { Schema } from "mongoose";

const educationSchema = new Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
  categories: Array,
});

const Education =
  mongoose.models.Education || mongoose.model("Education", educationSchema);

export default Education;
