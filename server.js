import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import handler from './api/send-email.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Proxy the serverless function handler
app.post('/api/send-email', async (req, res) => {
  await handler(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Local Backend Server running on http://localhost:${PORT}`);
});
