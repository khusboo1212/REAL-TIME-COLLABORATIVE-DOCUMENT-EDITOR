// backend/server.js
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const Document = require('./models/Document');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

mongoose.connect('mongodb://localhost:27017/collab-editor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const path = require('path');
app.use(express.static(path.join(__dirname, '/../frontend')));

io.on('connection', socket => {
  socket.on('get-document', async documentId => {
    const document = await findOrCreateDocument(documentId);
    socket.join(documentId);
    socket.emit('load-document', document.data);

    socket.on('send-changes', delta => {
      socket.broadcast.to(documentId).emit('receive-changes', delta);
    });

    socket.on('save-document', async data => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

async function findOrCreateDocument(id) {
  if (id == null) return;
  const doc = await Document.findById(id);
  if (doc) return doc;
  return await Document.create({ _id: id, data: '' });
}
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

