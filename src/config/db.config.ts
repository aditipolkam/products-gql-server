import mongoose from 'mongoose';
import { DB_URL } from './constants';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
};

export default connectToDatabase;
