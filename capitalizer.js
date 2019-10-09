const io = require('socket.io-client')('http://localhost:7890');
const fs = require('fs').promises;

io.on('file-read', contents => {
  const upperCase = contents.toUpperCase();
  io.emit('file-write', upperCase);
});
