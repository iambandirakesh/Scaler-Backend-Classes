import mongoose from "mongoose";

const connectToDB = async () => {
  const uri =
    "mongodb+srv://iambandirakesh:Salaar2024@cluster0.zhmwgkx.mongodb.net/learnwithScaler?retryWrites=true&w=majority";

  try {
    const { connection } = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log(`Connected to DB ${connection.host}`);
    }
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
};

export default connectToDB;
