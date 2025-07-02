const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// ✅ Smart CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',              // For local development
    'https://mindease--app.vercel.app'    // ✅ Correct Vercel frontend URL (2 hyphens)
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/ai', require('./routes/ai'));
app.use('/api/mood', require('./routes/mood'));
app.use('/api/journal', require('./routes/journal'));
app.use('/api/cbt', require('./routes/cbt'));
app.use('/api/affirmation', require('./routes/affirmation'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
