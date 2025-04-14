import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect(process.env.URL);
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;