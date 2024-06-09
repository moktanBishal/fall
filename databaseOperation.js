require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, {
  connectTimeoutMS: 30000,
});
const db = mongoose.connection;

// Define schema for chat rooms
const roomSchema = new mongoose.Schema({name: String});
const Room = mongoose.model('Room', roomSchema);

// Define schema for chat messages
const messageSchema = new mongoose.Schema({
  roomName: String,
  nickname: String,
  text: String,
  timestamp: String,
});
const Message = mongoose.model('Message', messageSchema);

// Export the models and any necessary database functions
module.exports = { Room, Message };
