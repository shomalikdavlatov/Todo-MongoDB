import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import { Routes } from './routes/routes.js';

const app = express();
const port = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected!"))
    .catch((error) => console.log(`MongoDB error: ${error}`));

app.use(cors());
app.use(express.json());
app.use('/api', Routes());

app.listen(port, () => {
    console.log("Server is running on port", port); 
});