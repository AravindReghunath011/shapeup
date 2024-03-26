import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server as SocketIOServer } from 'socket.io';
import dependencies from './config/dependencies';
// import { routes } from './routes';
import { saveMessage } from './libs/utils/reuseFunctions/saveMessage';

let userId = ''
const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: 'http://localhost:5173'
  }
});

io.on('connection', (socket) => {
  console.log('client connected: ', socket.id);

  
  socket.on('joinRoom', (roomName:string) => {
    socket.join(roomName);
    userId = roomName
    console.log(`Client ${socket.id} joined room: ${roomName}`);
  });
  socket.on('personal', (id:string) => {
    socket.join(id);
    console.log(`Client ${socket.id} joined room: ${id}`);
  });

  socket.on('sentMsg', (data:any) => {
    console.log(data,'sentmgsss')
    data = {...data,to:data.roomName,from:userId}
    saveMessage(dependencies,data)
    // Here you can emit the message to all clients in the room or perform any other logic
    io.to(data.roomName).emit('message', { sender: socket.id, message: data.message });
  });
  socket.on('createRoom', (roomName:string) => {
    console.log(roomName,'create')
    socket.join(roomName);
  });

  socket.on('disconnect', (reason:any) => {
    console.log(reason);
  });
});

setInterval(() => {
  io.to('clock-room').emit('time', new Date());
}, 1000);
app.use(cors());
app.use(express.json());






// app.use('/api',routes(dependencies))

export {server}