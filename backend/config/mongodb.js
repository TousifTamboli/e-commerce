import mongoose from "mongoose";

const connectDB = async () => {
    

    console.log("DB is connected")

    await mongoose.connect(`${process.env.MONGODB_URI}/users`)

};

export default connectDB;
