import mongoose from "mongoose";

const connectDB = async () => {
    
    await mongoose.connect(`mongodb+srv://tousiftamboli3:7666839558@cluster0.n1nrh.mongodb.net/mydb`)

    console.log("DB is connected")

};

export default connectDB;
