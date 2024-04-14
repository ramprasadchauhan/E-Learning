import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB Connection Successfull");
      });
  } catch (error) {
    console.log("DB Connection failed");
    console.error(error);
    process.exit(1);
  }
};
