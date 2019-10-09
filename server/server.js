const io = require('socket.io')(7890);
const fs = require('fs').promises;

io.on('connection', socket => {

  socket.on('file-read', data => {
    console.log(data);
    socket.broadcast.emit('file-read', data)
  });
  
  socket.on('file-write', data => {
    console.log(data);
    socket.broadcast.emit('file-write', data)
  });
  
  socket.on('file-saved', socket => {
    
  });
  
  socket.on('file-error', socket => {
    
  });


})


