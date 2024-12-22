import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb+srv://202302040002:Sushant%4018@e-comm.5pgsh.mongodb.net/?retryWrites=true&w=majority&appName=E-Comm';
    console.log('Connecting to:', uri);

    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected successfully on host: ${connection.connection.host}, database: ${connection.connection.name}`
    );
    return connection;
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
