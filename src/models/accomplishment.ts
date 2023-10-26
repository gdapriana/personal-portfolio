import mongoose, { Schema } from "mongoose";

const accomplishmentSchema = new Schema(
  {
    title: String,
    organization: String,
    publicationDate: Date,
    expirationDate: Date,
    credentialId: String,
    credentialUrl: String,
    expertise: Array,
    cover: String,
  },
  {
    timestamps: true,
  },
);

const Accomplishment =
  mongoose.models.Accomplishment ||
  mongoose.model("Accomplishment", accomplishmentSchema);

export default Accomplishment;
