import express from 'express';
import { Server as SocketServer } from 'socket.io';
import http from 'http';
import { ORIGIN, PORT } from './config.js';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: ORIGIN,
  },
});

io.on('connection', (socket) => {
  console.log('Client connected', socket.id);

  socket.on('client:send-message', (payload) => {
    socket.broadcast.emit('server:send-message', payload);
  });
});
server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
