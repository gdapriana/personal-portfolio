import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: String,
    description: String,
    language: String,
    technology: Array,
    github: String,
  },
  {
    timestamps: true,
  },
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
