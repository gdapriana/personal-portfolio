import mongoose from "mongoose"

const connectToDatabase = async () => {
  try {
    // @ts-ignore
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database...")
  } catch (error) {
    console.log(error)
  }
}

export default connectToDatabase