// Imports
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Config dotenv
dotenv.config();
const URL = process.env.URL;

// Connect to database
export async function connectDB() {
  try {
    await mongoose.connect(URL);
    console.log('Connected to database');
  } catch (error) {
    console.error('Could not connect to database', error.message);
    process.exit(1);
  }
}