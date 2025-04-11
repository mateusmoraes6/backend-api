import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api', taskRoutes);

export default app;
