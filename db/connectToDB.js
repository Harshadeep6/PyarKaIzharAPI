import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://harshadeepmore:HgIbp78gjpNTZN1B@cluster0.akgpay8.mongodb.net/PyarKaIzhar?retryWrites=true&w=majority");
    console.log("Connected to database!");
  } catch (error) {
    console.log("There was an error connecting to the database." + error);
  }
};

export default connectToDB;
