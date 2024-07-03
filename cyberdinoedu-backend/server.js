// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const materialRoutes = require('./routes/materialRoutes');
const { authenticateToken, authorizeRole } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://localhost:27017/cyberdinoedu';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes); // Rute untuk otentikasi
app.use('/api/courses', authenticateToken, courseRoutes);
app.use('/api/users', authenticateToken, authorizeRole('admin'), userRoutes);
app.use('/api/modules', authenticateToken, moduleRoutes);
app.use('/api/materials', authenticateToken, materialRoutes);

// MongoDB connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
