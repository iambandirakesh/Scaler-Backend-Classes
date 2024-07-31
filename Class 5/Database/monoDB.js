import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://iambandirakesh:Salaar2024@cluster0.zhmwgkx.mongodb.net/BookMyShow?retryWrites=true&w=majority";

  try {
    const { connection } = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log(`Connected to DB ${connection.host}`);
    }
  } catch (err) {
    console.log("Failed to connect to MongoDB:", err);
  }
};

export default connectToDB;
