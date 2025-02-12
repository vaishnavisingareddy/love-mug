const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors());         // Enable CORS

// Import Routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const chatRoutes = require('./routes/chatRoutes');
const followRoutes = require('./routes/followRoutes');
const callHistoryRoutes = require('./routes/callHistoryRoutes');
const payoutRoutes = require('./routes/payoutRoutes');
const talktimeRoutes = require('./routes/talktimeRoutes');
const rechargeRoutes = require('./routes/rechargeRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const ticketChatRoutes = require('./routes/ticketChatRoutes');
const blockedUserRoutes = require('./routes/blockedUserRoutes');
const callRateRoutes = require('./routes/callRateRoutes');
const callCommissionRoutes = require('./routes/callCommissionRoutes');
const userBankAccountRoutes = require('./routes/userBankAccountRoutes');

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/followings', followRoutes);
app.use('/api/call-history', callHistoryRoutes);
app.use('/api/payouts', payoutRoutes);
app.use('/api/talktime', talktimeRoutes);
app.use('/api/recharges', rechargeRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/ticket-chats', ticketChatRoutes);
app.use('/api/blocked-users', blockedUserRoutes);
app.use('/api/call-rates', callRateRoutes);
app.use('/api/call-commissions', callCommissionRoutes);
app.use('/api/bank-accounts', userBankAccountRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('🚀 Welcome to Lovemug API!');
});

// Define Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
