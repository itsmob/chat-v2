import { config } from 'dotenv';
config();

export const ORIGIN = process.env.ORIGIN || 'http://localhost:5173';

export const PORT = process.env.PORT || 3000;
