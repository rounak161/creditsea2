require('dotenv').config()
import mongoose from 'mongoose';

const dbUrl: string = process.env.DB_CONN_STRING as string;

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb+srv://rounakkamble161:iMVjedwNhSRem9Zv@cluster0.n21pmot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to the db");
    } catch (err) {
        console.error("Failed to connect to the db", err);
    }
};

export default connectToDatabase;
