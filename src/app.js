import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

export default app;
app.use(cors());
app.use(cookieParser());