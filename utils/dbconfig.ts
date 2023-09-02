import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to DB!!");
    });
    connection.on("error", (error) => {
      console.log("Error connecting to DB: ", error);
    });
  } catch (error) {
    console.log("Error connecting to DB: ", error);
  }
};

export default connectToDB;
