const Chat = require('../models/Chat'); // Import the Chat model

// Add a new message to the chat
const addMessage = async (req, res) => {
    try {
        const { sender_id, receiver_id, message } = req.body;

        const chatMessage = new Chat({ 
            sender_id, receiver_id, message, timestamp: new Date() 
        });

        await chatMessage.save();
        res.status(201).json({ message: 'Message sent successfully', chatMessage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get chat messages between two users
const getChatMessages = async (req, res) => {
    try {
        const { sender_id, receiver_id } = req.params;
        const chatMessages = await Chat.find({ 
            $or: [
                { sender_id, receiver_id },
                { sender_id: receiver_id, receiver_id: sender_id }
            ]
        }).sort({ timestamp: 1 }); // Sorting by timestamp to get messages in order

        res.json(chatMessages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all chats for a specific user
const getUserChats = async (req, res) => {
    try {
        const { user_id } = req.params;
        const chats = await Chat.find({
            $or: [{ sender_id: user_id }, { receiver_id: user_id }]
        }).populate('sender_id', 'username name').populate('receiver_id', 'username name').sort({ timestamp: 1 });

        res.json(chats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addMessage, getChatMessages, getUserChats };
