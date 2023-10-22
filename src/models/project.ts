import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  title: String,
  description: String,
  technology: Array
}, {
  timestamps: true
})

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema)
export default Project