const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// ✅ Smart CORS config to support both local & Vercel frontend
app.use(cors({
  origin: [
    'http://localhost:3000',               // Local development
    'https://mindease-app.vercel.app'      // Deployed frontend (update to exact URL)
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// DB Connection
connectDB();

// AI and Feature Routes
app.use('/api/ai', require('./routes/ai'));
app.use('/api/mood', require('./routes/mood'));
app.use('/api/journal', require('./routes/journal'));
app.use('/api/cbt', require('./routes/cbt'));
app.use('/api/affirmation', require('./routes/affirmation'));

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
