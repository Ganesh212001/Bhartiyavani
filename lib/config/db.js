import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://Ganesh2106:Ganesh2106@cluster0.t8shq.mongodb.net/bhartiyavani')
    console.log("Database Connected")
}