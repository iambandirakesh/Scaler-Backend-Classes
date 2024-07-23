import mongoose from "mongoose";
const connectToDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://iambandirakesh:Salaar2024@cluster0.zhmwgkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    if (connection) {
      console.log(`Connected to DB ${connection.host}`);
    }
  } catch (err) {
    console.log(err);
  }
};
export default connectToDB;
