const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/ai', require('./routes/ai'));

// DB
connectDB();

// Routes
app.use('/api/mood', require('./routes/mood'));
app.use('/api/journal', require('./routes/journal'));
app.use('/api/cbt', require('./routes/cbt'));
app.use('/api/affirmation', require('./routes/affirmation'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
