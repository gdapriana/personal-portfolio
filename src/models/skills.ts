import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema({
  title: String,
  image: String,
  link: String,
});

const Skill = mongoose.models.Skill || mongoose.model("Skill", skillSchema);
export default Skill;
