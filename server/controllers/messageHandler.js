// Dummy data for chat history, replace with database in real app
let chatHistory = {
  supplier1: [],
  supplier2: [],
};

export const messageHandler = (socket, message, io) => {
  // Save the message in chat history (replace with DB logic)
  chatHistory[message.supplierId].push(message);

  // Broadcast the message to all clients (or specific clients)
  io.emit('receive_message', message);
};
