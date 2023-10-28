import mongoose, { Schema } from "mongoose";

const accomplishmentSchema = new Schema(
  {
    title: String,
    organization: Object,
    publicationDate: Date,
    expirationDate: Date,
    credentialId: String,
    credentialUrl: String,
    expertise: Array,
    credentialImage: String,
  },
  {
    timestamps: true,
  },
);

const Accomplishment =
  mongoose.models.Accomplishment ||
  mongoose.model("Accomplishment", accomplishmentSchema);

export default Accomplishment;
